//landing page dot photo switcher functions
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block'; 
}

function showDot(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active'); 
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    showDot(currentSlideIndex);
}

showSlide(currentSlideIndex);
showDot(currentSlideIndex);






