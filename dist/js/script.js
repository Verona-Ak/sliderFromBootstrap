'use strict';
window.addEventListener('DOMContentLoaded', ()=> {
    $('.carousel').carousel({
        ride: false,
        touch: true,
        keyboard: true,
        wrap: true,
        interval: false

    });

    let arrowL = document.querySelector('.carousel-control-prev-icon'),
        arrowR = document.querySelector('.carousel-control-next-icon'),
        width = '60px',
        height = '60px';

    function styleForArrows(l, r, w = width, h = height) {
        l.style.cssText = `background-image: url(icons/left_arrow.png); width: ${w}; height: ${h};`;
        r.style.cssText = `background-image: url(icons/right_arrow.png); width: ${w}; height: ${h};`;
    }
    styleForArrows(arrowL, arrowR);

    if(window.matchMedia('(max-width: 460px)').matches){
        document.querySelector('.carousel-control-next').style.width = '24%';
        document.querySelector('.carousel-control-prev').style.width = '24%';
    }


    
});