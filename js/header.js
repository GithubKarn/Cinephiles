let slides = document.querySelectorAll('.slider .item');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');


let countLen = slides.length;
let activeSlide = 0;

function nextSlide(){
    activeSlide += 1;
    if(activeSlide >= countLen){
        activeSlide=0;
    }
    slideShow();
}

next.onclick = nextSlide;


prev.onclick = function(){
    if(activeSlide <= 0 ){
        activeSlide = countLen;
    }
    activeSlide -= 1;
    slideShow();
}


function slideShow(){
    let oldSlide = document.querySelector('.slider .list .item.active');
    let oldThumb = document.querySelector('.thumbnail .item.active');

    oldSlide.classList.remove('active');
    oldThumb.classList.remove('active');

    slides[activeSlide].classList.add('active');
    thumbnails[activeSlide].classList.add('active');

}

setInterval(nextSlide,6000);