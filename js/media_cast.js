document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.content>.submit_btn').classList.add('disabled');
    const rate_areas = [
        '.content>.rate_area>.rate_ai_area>.grade>div',
        '.content>.rate_area>.rate_floor_area>.grade>div',
        '.content>.rate_area>.rate_transportation_area>.grade>div',
        '.content>.rate_area>.rate_store_area>.grade>div',
        '.content>.rate_area>.rate_media_area>.grade>div'
    ];
    rate_areas.forEach(area => {
        const stars = Array.from(document.querySelectorAll(area));
        stars.forEach((star, idx) => {
            star.addEventListener('click', () => {
                const isActive = star.classList.contains('active');
                const activeCount = stars.filter(s => s.classList.contains('active')).length;
                if (isActive) {
                    if (activeCount === idx + 1) {
                        // 點擊最後一顆時全部清空
                        stars.forEach(s => s.classList.remove('active'));
                    } else {
                        // 取消多餘的 active
                        for (let i = idx + 1; i < activeCount; i++) {
                            stars[i].classList.remove('active');
                        }
                        // 若有少選則補上
                        for (let i = activeCount; i <= idx; i++) {
                            stars[i].classList.add('active');
                        }
                    }
                } else {
                    // 點亮到目前為止的所有星星
                    for (let i = 0; i <= idx; i++) {
                        stars[i].classList.add('active');
                    }
                }
                checkStarCount();
            });
        });
    });

    document.querySelector('.content>.submit_btn').addEventListener('click', () => {
        if (!document.querySelector('.content>.submit_btn').classList.contains('disabled')) {
            submitRating();
        }
    });
});

function checkStarCount() {
    let isScored = false;
    document.querySelectorAll('.content>.rate_area>div>.grade>div').forEach(el => {
        if (el.classList.contains('active')) {
            isScored = true;
        }
    });
    if (isScored) {
        document.querySelector('.content>.submit_btn').classList.remove('disabled');
    } else {
        document.querySelector('.content>.submit_btn').classList.add('disabled');
    }
}

function submitRating() {
    document.querySelector('.content>.submit_btn').classList.add('disabled');
    const taiwanTime = new Date().toLocaleString("zh-TW", {
        timeZone: "Asia/Taipei"
    });
    const ratings = {
        aiAudio: Array.from(document.querySelectorAll('.rate_ai_area .grade .active')).length,
        floorIntro: Array.from(document.querySelectorAll('.rate_floor_area .grade .active')).length,
        trafficInfo: Array.from(document.querySelectorAll('.rate_transportation_area .grade .active')).length,
        nearbyShops: Array.from(document.querySelectorAll('.rate_store_area .grade .active')).length,
        multimedia: Array.from(document.querySelectorAll('.rate_media_area .grade .active')).length,
        timestamp: taiwanTime,
    };

    // 使用 JSONP 方式避免 CORS 問題
    const script = document.createElement('script');
    const callback = 'callback_' + Math.random().toString(36).substr(2, 9);

    // 將資料轉換為 URL 參數
    const params = new URLSearchParams({
        data: JSON.stringify(ratings),
        callback: callback
    }).toString();

    // 設定回調函數
    window[callback] = () => {
        document.querySelector('.content>.submit_btn').classList.remove('disabled');
        document.querySelector('.mask').classList.remove('hidden');
        setTimeout(() => {
            document.querySelector('.mask').classList.add('hidden');
            window.location.href = window.location.href.replace('media_cast', 'index'); // 替換為實際的重定向 URL
        }, 3000);
        // 清理回調函數
        delete window[callback];
        // 移除 script 標籤
        script.remove();
    };

    // 設定錯誤處理
    script.onerror = () => {
        document.querySelector('.content>.submit_btn').classList.remove('disabled');
        alert('送出失敗');
        delete window[callback];
        script.remove();
    };

    // 發送請求
    script.src = `https://script.google.com/macros/s/AKfycbwAWExudN8gOC-CgwI6mIX3R-Og7Cl01YViNCfjRHWKghSNUTlUwL0Zxc1e6uO0947f/exec?${params}`;
    document.body.appendChild(script);
}