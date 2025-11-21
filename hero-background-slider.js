/**
 * Simple background slider for hero section
 * Keeps the existing CSS transitions but ensures we always rotate images.
 */
(function () {
    'use strict';

    function ready(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    ready(function initSlider() {
        const slider = document.querySelector('.hero-background-slider');
        if (!slider) return;

        const slides = Array.from(slider.querySelectorAll('.hero-bg-image'));
        if (!slides.length) return;

        let current = 0;
        const interval = 12000; // 12 seconds per image

        function setSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        setSlide(current);

        setInterval(() => {
            current = (current + 1) % slides.length;
            setSlide(current);
        }, interval);
    });
})();
