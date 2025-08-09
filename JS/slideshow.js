// Hero Slideshow Functionality
class HeroSlideshow {
    constructor() {
        console.log('Initializing HeroSlideshow...');
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.currentSlide = 0;
        this.slideInterval = null;
        
        console.log('Found slides:', this.slides.length);
        console.log('Found dots:', this.dots.length);
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) {
            console.error('No slides found! Make sure .slide elements exist.');
            return;
        }
        
        // Ensure first slide is active
        this.slides[0].classList.add('active');
        if (this.dots.length > 0) {
            this.dots[0].classList.add('active');
        }
        
        // Add click event listeners to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                console.log('Dot clicked:', index);
                this.goToSlide(index);
            });
        });
        
        // Start automatic slideshow
        this.startAutoSlide();
        console.log('Slideshow started with', this.slides.length, 'slides');
        
        // Pause on hover
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (slideshowContainer) {
            slideshowContainer.addEventListener('mouseenter', () => {
                this.stopAutoSlide();
            });
            
            slideshowContainer.addEventListener('mouseleave', () => {
                this.startAutoSlide();
            });
        }
    }
    
    goToSlide(slideIndex) {
        console.log('Going to slide:', slideIndex, 'from slide:', this.currentSlide);
        
        // Remove active class from current slide and dot
        if (this.slides[this.currentSlide]) {
            this.slides[this.currentSlide].classList.remove('active');
        }
        if (this.dots[this.currentSlide]) {
            this.dots[this.currentSlide].classList.remove('active');
        }
        
        // Update current slide index
        this.currentSlide = slideIndex;
        
        // Add active class to new slide and dot
        if (this.slides[this.currentSlide]) {
            this.slides[this.currentSlide].classList.add('active');
        }
        if (this.dots[this.currentSlide]) {
            this.dots[this.currentSlide].classList.add('active');
        }
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    startAutoSlide() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 2500); // Change slide every 2.5 seconds
    }
    
    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlideshow();
});

// Add smooth scroll animation for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to slideshow on page load
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.style.opacity = '0';
        slideshowContainer.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            slideshowContainer.style.transition = 'opacity 1s ease, transform 1s ease';
            slideshowContainer.style.opacity = '1';
            slideshowContainer.style.transform = 'translateY(0)';
        }, 500);
    }
});