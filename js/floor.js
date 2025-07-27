document.addEventListener("DOMContentLoaded", () => {
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

        for (let i = 0; i < 5; i++) {
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
});

const addPageClick = (index, swiper) => {
    document.querySelectorAll(`.page_p${index + 1}`).forEach(el => {
        el.addEventListener('click', () => {
            el.classList.add('active');
            swiper.slideTo(index);
        });
    });
};