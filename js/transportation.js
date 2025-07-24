document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.tab_list button')[0].classList.add('active');
    document.querySelectorAll('.content_body>div')[0].classList.add('display');
    document.querySelectorAll('.tab_list button').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.content_body > div').forEach(el => {
                el.classList.remove('display');
            });
            document.querySelectorAll('.tab_list button').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelectorAll('.content_body>div')[idx].classList.add('display');
            document.querySelectorAll('.tab_list button')[idx].classList.add('active');
        });
    });
});