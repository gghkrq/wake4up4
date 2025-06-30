document.addEventListener('DOMContentLoaded', function() {

        const submitBtn = document.querySelector('.done');
        const inputFields = document.querySelectorAll('.input-field');
        
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        modalOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        modalContent.style.cssText = `
            background-color: #fff;
            padding: 40px;
            border-radius: 50px;
            text-align: center;
            max-width: 500px;
        `;
        
        const modalTitle = document.createElement('div');
        modalTitle.className = 'modal-title';
        modalTitle.style.cssText = `
            font-family: 'font-regular', sans-serif;
            font-size: 32px;
            color: #000;
            margin-bottom: 20px;
        `;
        modalTitle.textContent = 'Спасибо за обращение!';
        
        const modalText = document.createElement('div');
        modalText.className = 'modal-text';
        modalText.style.cssText = `
            font-family: 'font-light', sans-serif;
            font-size: 24px;
            color: #000;
            margin-bottom: 30px;
        `;
        modalText.textContent = 'Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.';
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close';
        closeBtn.style.cssText = `
            font-family: 'font-light', sans-serif;
            font-size: 20px;
            height: 60px;
            width: 200px ;
            color: rgba(0, 0, 0, 0.7);
            background-color:rgb(255, 255, 255);
            border: 3px solid #fefefe
            padding: 10px 30px;
            border-radius: 50px;
            cursor: pointer;
        `;
        closeBtn.textContent = 'Закрыть';
        
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalText);
        modalContent.appendChild(closeBtn);
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);
        
        submitBtn.addEventListener('click', function() {
            inputFields.forEach(field => {
                field.value = '';
            });
            
            modalOverlay.style.display = 'flex';
        });

        closeBtn.addEventListener('click', function() {
            modalOverlay.style.display = 'none';
        });
    });