let slides = document.querySelectorAll('.slider .item');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let intervalId = setInterval(nextSlide, 6000);

let countLen = slides.length;
let activeSlide = 0;

function nextSlide() {
    activeSlide += 1;
    if (activeSlide >= countLen) {
        activeSlide = 0;
    }
    slideShow();
}

function prevSlide() {
    activeSlide -= 1;
    if (activeSlide < 0) {
        activeSlide = countLen - 1;
    }
    slideShow();
}

function slideShow() {
    for (let i = 0; i < countLen; i++) {
        slides[i].classList.remove('active');
        thumbnails[i].classList.remove('active');
    }
    slides[activeSlide].classList.add('active');
    thumbnails[activeSlide].classList.add('active');
}

next.onclick = function() {
    clearInterval(intervalId);
    nextSlide();
    intervalId = setInterval(nextSlide, 6000); // restart interval
};

prev.onclick = function() {
    clearInterval(intervalId);
    prevSlide();
    intervalId = setInterval(nextSlide, 6000); // restart interval
};
