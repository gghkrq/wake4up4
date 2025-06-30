document.addEventListener('DOMContentLoaded', function() {
    const sliderData = [
        {
            image: 'img/photo.svg',
            text: 'атриум, 2 этаж'
        },
        {
            image: 'img/photo2.svg',
            text: 'колл-центр, 1 этаж'
        },
        {
            image: 'img/photo3.svg',
            text: 'ресепшен, 1 этаж'
        }
    ];

    const photosDiv = document.getElementById('photos');
    const textDiv = document.getElementById('text20');
    let currentSlide = 0;

    function initSlider() {
        photosDiv.style.backgroundImage = `url('${sliderData[0].image}')`;
        textDiv.textContent = sliderData[0].text;
        photosDiv.style.filter = 'blur(0)';
        photosDiv.style.transition = 'filter 0.8s ease';
    }

    function changeSlide() {
        photosDiv.style.filter = 'blur(5px)';
        textDiv.style.opacity = '0';
        textDiv.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            currentSlide = (currentSlide + 1) % sliderData.length;
            photosDiv.style.backgroundImage = `url('${sliderData[currentSlide].image}')`;
            textDiv.textContent = sliderData[currentSlide].text;

            setTimeout(() => {
                photosDiv.style.filter = 'blur(0)';
                textDiv.style.opacity = '1';
            }, 50);
        }, 500); 
    }

    initSlider();
    setInterval(changeSlide, 7000);

    sliderData.forEach(slide => {
        const img = new Image();
        img.src = slide.image;
    });
});