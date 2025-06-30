 document.addEventListener('DOMContentLoaded', function() {

        const zapisButtons = document.querySelectorAll('.zapis');
        
        const modalOverlay = document.createElement('div');
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
        modalContent.style.cssText = `
            background-color: #fff;
            padding: 40px;
            border-radius: 60px;
            text-align: center;
            max-width: 500px;
            color: #171717;
        `;
        
        const modalTitle = document.createElement('div');
        modalTitle.style.cssText = `
            font-family: 'font-regular', sans-serif;
            font-size: 32px;
            margin-bottom: 20px;
        `;
        modalTitle.textContent = 'Вы записаны!';
        
        const modalText = document.createElement('div');
        modalText.style.cssText = `
            font-family: 'font-light', sans-serif;
            font-size: 24px;
            margin-bottom: 30px;
        `;
        modalText.textContent = 'Мы отправили вам подтверждение на email. До встречи на мероприятии!';
        
        const closeBtn = document.createElement('button');
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
            cursor: url('../img/cursor_point.svg'), pointer;
        `;
        closeBtn.textContent = 'Закрыть';

        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalText);
        modalContent.appendChild(closeBtn);
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);

        zapisButtons.forEach(button => {
            button.addEventListener('click', function() {
                
                modalOverlay.style.display = 'flex';
            });
        });
        
        closeBtn.addEventListener('click', function() {
            modalOverlay.style.display = 'none';
        });
        
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                modalOverlay.style.display = 'none';
            }
        });
    });