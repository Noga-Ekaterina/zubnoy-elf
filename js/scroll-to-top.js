// Функция для проверки прокрутки страницы
function checkScroll() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (scrollToTopButton) {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    }
}

// Слушаем событие прокрутки
window.addEventListener('scroll', checkScroll); 