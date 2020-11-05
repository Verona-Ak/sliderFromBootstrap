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
        width = '40px',
        height = '40px';

    function styleForArrows(l, r, w = width, h = height) {
        l.style.cssText = `background-image: url(icons/arrow_left.png); border-radius: 50%; box-shadow: 0 0 5px 0px black; width: ${w}; height: ${h};`;
        r.style.cssText = `background-image: url(icons/arrow_right.png); border-radius: 50%; box-shadow: 0 0 5px 0px black; width: ${w}; height: ${h};`;

    }
    styleForArrows(arrowL, arrowR);

    if(window.matchMedia('(max-width: 460px)').matches){
        document.querySelector('.carousel-control-next').style.width = '24%';
        document.querySelector('.carousel-control-prev').style.width = '24%';
    }



    let inner = document.querySelector('.carousel-inner');
    let arr;
    let request = new XMLHttpRequest();

    request.open('GET', '/data.json');
    request.setRequestHeader('Content-type', 'appLication/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            arr = JSON.parse(request.response);
            for (let i = 0; i < arr.length; i++) {
                //Создаём carousel-item
                let item = document.createElement('div');
                item.classList.add('carousel-item');
                if (i == 0) {
                    item.classList.add('active');
                }
                inner.appendChild(item);

                // Создаём img
                let img = document.createElement('img');
                img.classList.add("d-block");
                img.classList.add('w-100');
                img.alt = 'pic';
                img.src = `img/${arr[i]}`;
                item.appendChild(img);

                // Создаём carousel-caption
                let caption = document.createElement('div');
                caption.classList.add('carousel-caption');
                caption.classList.add('d-none');
                caption.classList.add('d-block');
                item.appendChild(caption);

                // Тема и текст слайда
                let title = document.createElement('h5');
                title.textContent = 'Тема';
                let descr = document.createElement('p');
                descr.textContent = 'Описание';
                caption.appendChild(title);
                caption.appendChild(descr);
            }
        }    
    });

    
    

});