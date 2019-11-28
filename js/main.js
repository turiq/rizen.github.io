window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    

    /* Menu */ 

    let menuBlock = document.querySelector('.nav__menu'),
        menuBtns = document.querySelectorAll('.header__burger, .nav__menu__link');


    menuBtns.forEach(function(item) {
        item.addEventListener('click', function() {
        setTimeout(toggleMenu,100);
        menuBlock.classList.toggle('fadeIn');
        menuBlock.classList.toggle('fadeOut');
        
        function toggleMenu() {
            menuBlock.classList.toggle('open');
            menuBlock.classList.toggle('close');
        }
        });
    });



    
    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelectorAll('form'),
        
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
       

    form.forEach(function(item) {

        let input = item.querySelectorAll('input');
           
        item.addEventListener('submit', function(event) {
            event.preventDefault();
            item.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'form.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            let formData = new FormData(item);
            console.log(formData);
            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            console.log(obj);
            let json = JSON.stringify(obj);

            request.send(json);

            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                   statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }); 
    });



    // SLider

    function arrayOfImageCreator(adress,name,n){
        let arrayImage = [];
        for (let i= 0, j = n; i<j; i++) {
            arrayImage[i] = new Image();
            arrayImage[i].src = adress + name + (i+1) + '.jpg';
        }
        return arrayImage;  
    }

    function imagePusher(array,block,imgClassName) {
        let placeBlock = document.querySelector(block);
        array.forEach((current) => {
            let img = document.createElement('img');
            img.src = current.src;
            img.className = imgClassName;
            img.style.display = 'none';
            
            placeBlock.append(img);
        });
    }

    imagePusher(arrayOfImageCreator('/img/','portfolio_img', 5),'.portfolio__img__block','portfolio__img__block__item');


    let slideIndex = 1,
        slides = document.querySelectorAll('.portfolio__img__block__item'),
        prevBtn = document.querySelector('.prev--btn'),
        nextBtn = document.querySelector('.next--btn'),
        slideCounter = document.querySelector('.portfolio__counter__item');
        
    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n<1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'flex';
        
        slideCounter.innerHTML = slideIndex + '/' + slides.length;
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prevBtn.addEventListener('click', function(){
        plusSlides(-1);
    });

    nextBtn.addEventListener('click', function(){
        plusSlides(1);
    });


});