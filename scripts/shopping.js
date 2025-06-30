document.addEventListener('DOMContentLoaded', function() {
        const cartIcon = document.createElement('div');
        cartIcon.style.cssText = `
            position: fixed;
            bottom: 20px;
            height: 66px;
            width: 240px;
            right: 20px;
            z-index: 1000;
            cursor: url('../img/cursor_point.svg'), pointer;
            border: 3px solid rgb(55, 55, 55); 
            display: flex;
            align-items: center;
            gap: 10px;
            background-color: rgb(255, 255, 255);
            padding: 10px 20px;
            border-radius: 100px;
        `;
        
        const totalText = document.createElement('span');
        totalText.style.cssText = `
            font-family: 'font-regular', sans-serif;
            font-size: 30px;
            color:rgb(72, 72, 72);
            text-align: left;

        `;
        totalText.textContent = 'Итого:';
        
        const cartCounter = document.createElement('div');
        cartCounter.style.cssText = `
            font-family: 'font-light', sans-serif;
            font-size: 30px;
            color:rgb(101, 101, 101);
            text-align: right;
        `;
        cartCounter.textContent = '0₽';
        
        const cartImage = document.createElement('div');
        cartImage.style.cssText = `
            width: 24px;
            height: 24px;
            background-image: url('img/cart-icon.svg');
            background-size: contain;
            background-repeat: no-repeat;
        `;
        
        cartIcon.appendChild(cartImage);
        cartIcon.appendChild(totalText);
        cartIcon.appendChild(cartCounter);
        document.body.appendChild(cartIcon);

        const prices = {
            'buyshopper': 1999,
            'buyeye': 1100,
            'buytapki': 1299
        };

        const buyButtons = document.querySelectorAll('[class^="buy"]');
        
        buyButtons.forEach(button => {
            button.addEventListener('click', function() {

                const buttonClass = Array.from(button.classList).find(cls => cls.startsWith('buy'));
                

                const price = prices[buttonClass];
                
                let currentTotal = parseInt(cartCounter.textContent) || 0;
                currentTotal += price;
                cartCounter.textContent = currentTotal + '₽';
                

                cartIcon.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    cartIcon.style.transform = 'scale(1)';
                }, 300);
            });
        });
    });
