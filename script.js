document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    boxes.forEach(box => {
        observer.observe(box);
    });
});