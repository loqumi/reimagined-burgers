const orderform = document.querySelector('.order__form');
const btn = document.querySelector('.order__btn');
const answ_window = document.querySelector('.response__order');
const response_btn = document.querySelector('.response_btn');
const phone = document.querySelector('#phone');
const response_answer = document.querySelector('.response-answer');

    phone.addEventListener('keydown', function(event){
        let isDigit = false;
        let isDash = false;
        let isControl = false;

        if (event.key >=0 || event.key <=9) {
            isDigit = true;
        }
        
        if (event.key == '-'){
            isDash = true;
        }

        if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace'){
            isControl = true;
        }

        if (!isDigit && !isDash && !isControl){
            event.preventDefault();
        }
    })

    btn.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (validateForm(orderform)) {
            const data = {
                firstName:orderform.elements.name.value,
                telephone:orderform.elements.phone.value,
                comment:orderform.elements.comment.value
            };

            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://6316ed1182797be77fee4469.mockapi.io/order/burger');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener('load', () => {
                answ_window.classList.toggle('active');
                response_answer.innerHTML = (xhr.response.success) ? "Ваш заказ успешно оформлен" : "Произошла ошибка";
            });
        }
    });

    function validateForm(form){
        return [form.elements.name, form.elements.phone, form.elements.comment].every(elem => (validateField(elem)))
    }

    const VALID_MESSAGE = {
        "Please fill out this field.": "Ошибка"
    }

    function validateField(field) {
        if (!field.checkValidity()) {
            field.nextElementSibling.textContent = VALID_MESSAGE[field.validationMessage] || field.validationMessage;
            field.focus();
            return false;
        } else {
            field.nextElementSibling.textContent = "";
            return true;
        }
    }

    response_btn.addEventListener("click", () => {
        answ_window.classList.toggle('active');
    })