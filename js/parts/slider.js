function slider() {
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

    imagePusher(arrayOfImageCreator('./img/portfolio/','portfolio_img', 5),'.portfolio__img__block','portfolio__img__block__item');


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
}

module.exports = slider;


