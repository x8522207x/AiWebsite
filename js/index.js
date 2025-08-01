document.addEventListener("DOMContentLoaded", () => {
    let lang = localStorage.getItem('lang');
    let page = localStorage.getItem('page');
    const pageName = ['ai', 'floor', 'transportation', 'store', 'media'];
    pageName.forEach(p => {
        document.querySelectorAll(`.${p}_page`).forEach(item => {
            item.addEventListener('click', () => {
                modifyClass(p);
                localStorage.setItem('page', p);
                page = p;
            });
        });
    });

    if (!lang) {
        lang = 'zh-TW';
        localStorage.setItem('lang', lang);
    }

    if (!page) {
        page = 'ai';
        localStorage.setItem('page', page);
    }
    modifyClass(page);

    checkBtnClass(lang);
    document.querySelectorAll('.zh-TW').forEach(item => {
        item.addEventListener('click', () => {
            lang = 'zh-TW';
            localStorage.setItem('lang', lang);
            checkBtnClass(lang);
        });
    });

    document.querySelectorAll('.english').forEach(item => {
        item.addEventListener('click', () => {
            lang = 'en';
            localStorage.setItem('lang', lang);
            checkBtnClass(lang);
        });
    });

    // floor

    let pcSwiperPage;
    const pcSwiper = () => {
        pcSwiperPage = new Swiper('.swiper-container', {
            direction: 'vertical',
            touchReleaseOnEdges: true,
            mousewheel: {
                releaseOnEdges: true,
            },
            loop: false,
            freeMode: {
                enabled: true,
                sticky: false,
                momentumBounce: false,
            },
            noSwiping: true,
            noSwipingSelector: 'button',
            autoHeight: true,
            speed: 1000,
            slidesPerView: "auto",
            spaceBetween: 0,
            watchSlidesProgress: true,
            allowTouchMove: true,
            on: {
                slideChange: (swiper) => {
                    document.querySelectorAll(`.nav-side>ol>li>button`).forEach(el => {
                        el.classList.remove('active');
                    });
                    document.querySelector(`.page_p${swiper.realIndex + 1}`).classList.add('active');
                },
            }
        });

        pcSwiperPage.slideTo(0);
        document.querySelector(`.page_p1`).classList.add('active');

        for (let i = 0; i < 4; i++) {
            addPageClick(i, pcSwiperPage);
        }
    };
    pcSwiper();

    document.querySelectorAll('.swiper-slide>.twof_map>div').forEach((el, idx) => {
        el.addEventListener('click', () => {
            let isRemove = false;
            document.querySelectorAll('.swiper-slide>.twof_map>span').forEach((span, idx2) => {
                if (span.classList.contains('active')) {
                    if (idx2 === idx) {
                        isRemove = true;
                    } else {
                        span.classList.remove('active');
                    }
                }
            });
            if (!isRemove) {
                document.querySelectorAll('.swiper-slide>.twof_map>span')[idx].classList.add('active');
            } else {
                document.querySelectorAll('.swiper-slide>.twof_map>span')[idx].classList.remove('active');
            }
        });
    });

    // media
    document.querySelector('.media_main>.menu_list>.video_btn').addEventListener('click', () => {
        document.querySelectorAll('.media>.subcontent').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector('.media>.subcontent.media_video').classList.add('active');
    });

    document.querySelector('.media_main>.menu_list>.picture_btn').addEventListener('click', () => {
        document.querySelectorAll('.media>.subcontent').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector('.media>.subcontent.media_picture').classList.add('active');
    });

    document.querySelector('.media_main>.menu_list>.cast_btn').addEventListener('click', () => {
        document.querySelectorAll('.media>.subcontent').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector('.media>.subcontent.media_cast').classList.add('active');
    });

    document.querySelector('.subcontent>.submit_btn').classList.add('disabled');
    const rate_areas = [
        '.subcontent>.rate_area>.rate_ai_area>.grade>div',
        '.subcontent>.rate_area>.rate_media_area>.grade>div'
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

    document.querySelector('.subcontent>.submit_btn').addEventListener('click', () => {
        if (!document.querySelector('.subcontent>.submit_btn').classList.contains('disabled')) {
            submitRating();
        }
    });

    // transportation
    document.querySelectorAll('.transportation .tab_list button')[0].classList.add('active');
    document.querySelectorAll('.transportation .content_body>div')[0].classList.add('display');
    document.querySelectorAll('.transportation .tab_list button').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.transportation .content_body > div').forEach(el => {
                el.classList.remove('display');
            });
            document.querySelectorAll('.transportation .tab_list button').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelectorAll('.transportation .content_body>div')[idx].classList.add('display');
            document.querySelectorAll('.transportation .tab_list button')[idx].classList.add('active');
        });
    });

    // store
    document.querySelectorAll('.store .tab_list button')[0].classList.add('active');
    document.querySelectorAll('.store .content_body>div')[0].classList.add('display');
    document.querySelectorAll('.store .tab_list button').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.store .content_body > div').forEach(el => {
                el.classList.remove('display');
            });
            document.querySelectorAll('.store .tab_list button').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelectorAll('.store .content_body>div')[idx].classList.add('display');
            document.querySelectorAll('.store .tab_list button')[idx].classList.add('active');
        });
    });
});

const addPageClick = (index, swiper) => {
    document.querySelectorAll(`.page_p${index + 1}`).forEach(el => {
        el.addEventListener('click', () => {
            el.classList.add('active');
            swiper.slideTo(index);
        });
    });
};

function checkBtnClass(lang) {
    if (lang === 'zh-TW') {
        document.querySelector('body').classList.remove('enBody');
        document.querySelectorAll('.zh-TW').forEach(item => {
            item.classList.add('active');
        });
        document.querySelectorAll('.english').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector('.ai .subcontent').children[0].remove();
        document.querySelector('.ai .subcontent').innerHTML = `
        <iframe
          src="https://one.ubitus.ai/one/b264ed30-ff19-4138-998b-c02a96712761/"
          allow="microphone"
          width="1080"
          height="1400"
          frameborder="0"
        ></iframe>
        `;
    } else {
        document.querySelector('body').classList.add('enBody');
        document.querySelectorAll('.zh-TW').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.english').forEach(item => {
            item.classList.add('active');
        });
        document.querySelector('.ai .subcontent').children[0].remove();
        document.querySelector('.ai .subcontent').innerHTML = `
        <iframe
          src="https://one.ubitus.ai/one/339f4dd4-a0b7-4ae4-81da-13d075c57b99/"
          allow="microphone"
          width="1080"
          height="1400"
          frameborder="0"
        ></iframe>
        `;
    }
}

function checkStarCount() {
    let isScored = false;
    document.querySelectorAll('.subcontent>.rate_area>div>.grade>div').forEach(el => {
        if (el.classList.contains('active')) {
            isScored = true;
        }
    });
    if (isScored) {
        document.querySelector('.subcontent>.submit_btn').classList.remove('disabled');
    } else {
        document.querySelector('.subcontent>.submit_btn').classList.add('disabled');
    }
}

function modifyClass(page) {
    const title = document.querySelector('.title');
    if (title.classList[1]) {
        title.classList.remove(title.classList[1]);
    }
    title.classList.add(`${page}_title`);

    const pageList = document.querySelectorAll('.page_list>div');
    pageList.forEach(pageItem => {
        if (pageItem.classList.contains('active')) {
            pageItem.classList.remove('active');
        }
    });

    const activePage = document.querySelector(`.${page} .${page}_page`);
    activePage.classList.add('active');

    const contentList = document.querySelectorAll('.content');
    contentList.forEach(contentItem => {
        if (contentItem.classList.contains('active')) {
            contentItem.classList.remove('active');
        }
    });

    const activeContent = document.querySelector(`.${page}`);
    activeContent.classList.add('active');

    if (page === 'media') {
        document.querySelector('.media_main').classList.add('active');
        document.querySelector('.media_cast').classList.remove('active');
        document.querySelector('.media_picture').classList.remove('active');
        document.querySelector('.media_video').classList.remove('active');
    } else if (page === 'ai') {
        document.querySelector('.ai .subcontent').children[0].remove();
        if (localStorage.getItem('lang') === 'zh-TW') {
            document.querySelector('.ai .subcontent').innerHTML = `
                <iframe
                src="https://one.ubitus.ai/one/b264ed30-ff19-4138-998b-c02a96712761/"
                allow="microphone"
                width="1080"
                height="1400"
                frameborder="0"
                ></iframe>
            `;
        } else {
            document.querySelector('.ai .subcontent').innerHTML = `
                <iframe
                src="https://one.ubitus.ai/one/339f4dd4-a0b7-4ae4-81da-13d075c57b99/"
                allow="microphone"
                width="1080"
                height="1400"
                frameborder="0"
                ></iframe>
            `;
        }
    }
}

function submitRating() {
    document.querySelector('.subcontent>.submit_btn').classList.add('disabled');
    const taiwanTime = new Date().toLocaleString("zh-TW", {
        timeZone: "Asia/Taipei"
    });
    const ratings = {
        aiAudio: Array.from(document.querySelectorAll('.rate_ai_area .grade .active')).length,
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
        document.querySelector('.subcontent>.submit_btn').classList.remove('disabled');
        document.querySelector('.mask').classList.remove('hidden');
        setTimeout(() => {
            document.querySelector('.mask').classList.add('hidden');
            modifyClass('media');
        }, 3000);
        // 清理回調函數
        delete window[callback];
        // 移除 script 標籤
        script.remove();
    };

    // 設定錯誤處理
    script.onerror = () => {
        document.querySelector('.subcontent>.submit_btn').classList.remove('disabled');
        alert('送出失敗');
        delete window[callback];
        script.remove();
    };

    // 發送請求
    script.src = `https://script.google.com/macros/s/AKfycbwNS7trf8CBe6ruzQcYiJpUhZErvswwjMp63hxKhSLKq0EywUoRoKjI_Ld1XRLsDr9Y/exec?${params}`;
    document.body.appendChild(script);
}