document.addEventListener('DOMContentLoaded', function() {
    const slidersConfig = [
        {
            container: '.slider',
            posterId: 'poster1',
            images: ['img/posters1_1.svg', 'img/posters1_2.svg', 'img/posters1_3.svg']
        },
        {
            container: '.slider2',
            posterId: 'poster2',
            images: ['img/posters2_1.svg', 'img/posters2_2.svg', 'img/posters2_3.svg']
        },
        {
            container: '.slider3',
            posterId: 'poster3',
            images: ['img/posters3_1.svg', 'img/posters3_2.svg', 'img/posters3_3.svg']
        }
    ];

    slidersConfig.forEach(config => {
        const container = document.querySelector(config.container);
        if (!container) return;

        const poster = container.querySelector('.poster, .poster2, .poster3');
        const leftArrow = container.querySelector('.leftarrow');
        const rightArrow = container.querySelector('.rightarrow');
        
        let currentIndex = 0;
        
        poster.style.backgroundImage = `url('${config.images[0]}')`;
        poster.style.transition = 'filter 0.8s ease, background-image 0.8s ease';

        function changeSlide(direction) {
            poster.style.filter = 'blur(5px)';
            
            setTimeout(() => {
                currentIndex = direction === 'next' 
                    ? (currentIndex + 1) % config.images.length
                    : (currentIndex - 1 + config.images.length) % config.images.length;
                
                poster.style.backgroundImage = `url('${config.images[currentIndex]}')`;
                
                setTimeout(() => {
                    poster.style.filter = 'blur(0)';
                }, 50);
            }, 400);
        }

        leftArrow.addEventListener('click', () => changeSlide('prev'));
        rightArrow.addEventListener('click', () => changeSlide('next'));
        
        config.images.forEach(img => new Image().src = img);
    });
});