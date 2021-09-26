let slidePosition = 0;
const slides = document.getElementsByClassName('photo-grid-item');

const totalSlides = slides.length;

console.log(slides)

document.
    getElementById('carousel-button-next')
    .addEventListener('click', function {
        moveToNextSlide();
    })

document.
    getElementById('carousel-button-prev')
    .addEventListener('click', function {
        moveToPrevSlide();
    })

