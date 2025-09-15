document.addEventListener('DOMContentLoaded', () => {
    const loaderWrapper = document.getElementById('loader-wrapper');
    const content = document.getElementById('content');


    const hideLoader = () => {
        loaderWrapper.classList.add('hidden'); // Додаємо клас для анімації зникнення

        loaderWrapper.addEventListener('transitionend', () => {
            loaderWrapper.style.display = 'none';
        }, { once: true }); // Видалити слухача після першого спрацьовування

        content.style.display = 'block'; // Показуємо основний контент
    };


    window.addEventListener('load', () => {

        setTimeout(hideLoader, 500); // Затримка 500мс
    });


    if (document.readyState === 'complete') {
        setTimeout(hideLoader, 100); // Дуже коротка затримка
    }
});