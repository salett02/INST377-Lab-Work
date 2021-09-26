let slidePosition = 0;
const slides = document.getElementsByClassName('photo-grid-item');

const totalSlides = slides.length;

console.log(slides)

document.
    getElementById('carousel-button-next')
    .addEventListener('click', function() {
        moveToNextSlide();
    })

document.
    getElementById('carousel-button-prev')
    .addEventListener('click', function() {
        moveToPrevSlide();
    })

function updateSlidePosition() {
    for(let slide of slides) {
        console.log(slide)
    }
}

function moveToNextSlide() {
    function updateSlidePosition();

    if (slidePosition == totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++;
    }
}

function moveToPrevSlide() {
    function updateSlidePosition();

    if (slidePosition == 0) {
        slidePosition = 0
    } else {
        slidePosition--;
    }
}