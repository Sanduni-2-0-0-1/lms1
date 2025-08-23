// Mobile Menu Toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Hero Image Slider
let heroIndex = 0;
const heroSlider = document.querySelector('.hero-slider');
const heroPrevBtn = document.querySelector('.hero-btn.prev');
const heroNextBtn = document.querySelector('.hero-btn.next');
const heroPlayPauseBtn = document.querySelector('.hero-btn.play-pause');
let heroPlaying = true;
let heroInterval;

function goToHeroSlide(index) {
    if (index < 0) index = 1;
    if (index > 1) index = 0;
    heroSlider.style.transform = `translateX(-${index * 100}%)`;
    heroIndex = index;
}

function startHeroAutoSlide() {
    heroInterval = setInterval(() => {
        goToHeroSlide(heroIndex + 1);
    }, 5000);
}

function stopHeroAutoSlide() {
    clearInterval(heroInterval);
}

heroPrevBtn.addEventListener('click', () => {
    goToHeroSlide(heroIndex - 1);
});

heroNextBtn.addEventListener('click', () => {
    goToHeroSlide(heroIndex + 1);
});

heroPlayPauseBtn.addEventListener('click', () => {
    if (heroPlaying) {
        stopHeroAutoSlide();
        heroPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        startHeroAutoSlide();
        heroPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    heroPlaying = !heroPlaying;
});

// Start autoplay on load
startHeroAutoSlide();

// Testimonial Slider (Clients Say Section)
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
const slideWidth = slides[0].clientWidth;

function goToSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
}

prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

// Auto slide every 5 seconds
setInterval(() => {
    goToSlide(currentIndex + 1);
}, 5000);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Scroll Animations
function checkScroll() {
    const elements = document.querySelectorAll('.grid-item, .section-title');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

document.querySelectorAll('.grid-item, .section-title').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);