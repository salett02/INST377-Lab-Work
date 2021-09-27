let slidePosition = 0;
const slides = document.querySelectorAll('photo-grid-item');

const totalSlides = slides.length;

console.log(slides)

document.querySelector('carousel-button-next')
    .addEventListener('click', function() {
        moveToNextSlide();
    })

    document.querySelector('carousel-button-prev')
    .addEventListener('click', function() {
        moveToPrevSlide();
    })

function updateSlidePosition() {
    for(let slide of slides) {
        slide.classList.remove('photo-grid-item--visible')
        slide.classList.add('photo-grid-item--hidden')
    }

    slides[slidePosition].classList.add('photo-grid-item--visible')
}

function moveToNextSlide() {
    if (slidePosition == totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition == 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}
