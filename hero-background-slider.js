// Hero Background Slider Animation
// Creates smooth transitions with zoom and blur effects
// Images slowly fade in, zoom closer, and next image blurs during transition

(function() {
    'use strict';
    
    let currentIndex = 0;
    let images = [];
    let isTransitioning = false;
    let sliderInterval = null;
    const TRANSITION_DURATION = 12000; // 12 seconds per image (increased)
    const FADE_IN_DURATION = 6000; // 6 seconds for slow fade in (increased)
    const ZOOM_DURATION = 12000; // 12 seconds for zoom from center to full (increased)
    
    function initBackgroundSlider() {
        const slider = document.querySelector('.hero-background-slider');
        if (!slider) return;
        
        images = Array.from(slider.querySelectorAll('.hero-bg-image'));
        if (images.length === 0) return;
        
        // Set initial state
        images.forEach((img, index) => {
            // Reset all images to base state first
            img.classList.remove('active', 'prev', 'next');
            img.style.transition = '';
            img.style.opacity = '0';
            img.style.transform = 'scale(1.5)';
            img.style.filter = 'blur(20px)';
            img.style.zIndex = '0';
            img.style.transformOrigin = 'center center';
            
            if (index === 0) {
                // Force reflow to ensure styles are applied
                void img.offsetHeight;
                
                img.classList.add('active');
                // Start with centered zoomed in state (showing center) - fully transparent
                img.style.opacity = '0';
                img.style.transform = 'scale(1.5)';
                img.style.filter = 'blur(20px)';
                img.style.transformOrigin = 'center center';
                
                // Very smooth fade in - start immediately
                requestAnimationFrame(() => {
                    img.style.transition = `opacity ${FADE_IN_DURATION}ms ease-in, filter ${FADE_IN_DURATION}ms ease-in`;
                    img.style.opacity = '1';
                    img.style.filter = 'blur(0px)';
                    
                    // Then zoom out from center to full view smoothly
                    setTimeout(() => {
                        img.style.transition = `transform ${ZOOM_DURATION}ms ease-out`;
                        img.style.transform = 'scale(1)';
                    }, FADE_IN_DURATION / 3);
                });
            }
        });
        
        // Start the slider after initial animation
        setTimeout(() => {
            startSlider();
        }, FADE_IN_DURATION + 3000);
    }
    
    function startSlider() {
        if (images.length <= 1) return;
        
        sliderInterval = setInterval(() => {
            if (!isTransitioning) {
                transitionToNext();
            }
        }, TRANSITION_DURATION);
    }
    
    function transitionToNext() {
        if (isTransitioning) return;
        isTransitioning = true;
        
        const currentImage = images[currentIndex];
        const nextIndex = (currentIndex + 1) % images.length;
        const nextImage = images[nextIndex];
        
        // Ensure current image has proper transition state
        if (!currentImage) {
            isTransitioning = false;
            return;
        }
        
        // Clear any existing transitions on next image to prevent glitches
        nextImage.style.transition = '';
        nextImage.style.opacity = '0';
        nextImage.style.transform = 'scale(1.5)';
        nextImage.style.filter = 'blur(20px)';
        nextImage.style.zIndex = '0';
        nextImage.style.transformOrigin = 'center center';
        nextImage.classList.remove('prev', 'next', 'active');
        
        // Force reflow to ensure styles are applied
        void nextImage.offsetHeight;
        
        // Fade out current image smoothly
        currentImage.classList.remove('active');
        currentImage.classList.add('prev');
        currentImage.style.transition = 'opacity 4s ease-in-out, filter 4s ease-in-out, transform 4s ease-in-out';
        currentImage.style.opacity = '0';
        currentImage.style.filter = 'blur(10px)';
        currentImage.style.zIndex = '0';
        
        // Small delay to ensure current image starts fading out
        requestAnimationFrame(() => {
            // Prepare next image state before transition
            nextImage.style.transition = '';
            nextImage.style.opacity = '0';
            nextImage.style.transform = 'scale(1.5)';
            nextImage.style.filter = 'blur(20px)';
            nextImage.style.transformOrigin = 'center center';
            
            // Force reflow again
            void nextImage.offsetHeight;
            
            // Now start the smooth fade in transition - no sudden appearance
            requestAnimationFrame(() => {
                nextImage.classList.remove('prev', 'next');
                nextImage.classList.add('active');
                nextImage.style.zIndex = '1';
                
                // Very smooth fade in with blur removal - gradual appearance
                nextImage.style.transition = `opacity ${FADE_IN_DURATION}ms ease-in, filter ${FADE_IN_DURATION}ms ease-in`;
                nextImage.style.opacity = '1';
                nextImage.style.filter = 'blur(0px)';
                
                // Start zooming out from center to full view smoothly after fade starts
                setTimeout(() => {
                    nextImage.style.transition = `transform ${ZOOM_DURATION}ms ease-out`;
                    nextImage.style.transform = 'scale(1)';
                }, FADE_IN_DURATION / 3);
                
                // Reset previous image after transition completes
                setTimeout(() => {
                    if (currentImage) {
                        currentImage.classList.remove('prev');
                        currentImage.style.opacity = '0';
                        currentImage.style.filter = 'blur(20px)';
                        currentImage.style.transform = 'scale(1.5)';
                        currentImage.style.transition = '';
                    }
                    
                    currentIndex = nextIndex;
                    isTransitioning = false;
                }, FADE_IN_DURATION + 2000);
            });
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBackgroundSlider);
    } else {
        initBackgroundSlider();
    }
    
    // Export for potential external control
    window.heroBackgroundSlider = {
        next: transitionToNext,
        goTo: function(index) {
            if (index >= 0 && index < images.length && !isTransitioning) {
                currentIndex = index;
                images.forEach((img, i) => {
                    if (i === index) {
                        img.classList.add('active');
                        img.style.opacity = '1';
                        img.style.transform = 'scale(1)';
                        img.style.filter = 'blur(0px)';
                    } else {
                        img.classList.remove('active');
                        img.style.opacity = '0';
                    }
                });
            }
        },
        stop: function() {
            if (sliderInterval) {
                clearInterval(sliderInterval);
                sliderInterval = null;
            }
        }
    };
})();

