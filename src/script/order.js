const orderform = document.querySelector('.order__form');
const btn = document.querySelector('.order__btn');
const answ_window = document.querySelector('.response__order');
const response_btn = document.querySelector('.response_btn');
const response_answer = document.querySelector('.response-answer');

    btn.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (validateForm(orderform)) {
            const data = {
                firstName:orderform.elements.firstName.value,
                telephone:orderform.elements.telephone.value,
                comment:orderform.elements.comment.value
            };

            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://6316ed1182797be77fee4469.mockapi.io/order/burger');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener('load', () => {
                if(xhr.response.success) {
                    answ_window.classList.toggle('active');
                    answ_window.classList.toggle('true');
                    response_answer.innerHTML = "Ваш заказ успешно оформлен";
                } else {
                    answ_window.classList.toggle('active');
                    answ_window.classList.toggle('false');
                    response_answer.innerHTML = "Произошла ошибка";
                }
            });
        }
    });

    function validateForm(form){
        let valid = true;

        if (!validateField(form.elements.firstName)) {
            valid = false;
        }

        if (!validateField(form.elements.telephone)) {
            valid = false;
        }

        if (!validateField(form.elements.comment)) {
            valid = false;
        }

        return valid;
    }

    const VALID_MESSAGE = {
        "Please fill out this field.": "Ошибка"
    }

    function validateField(field) {
        if (!field.checkValidity()) {
            field.nextElementSibling.textContent = VALID_MESSAGE[field.validationMessage] || field.validationMessage;
            return false;
        } else {
            field.nextElementSibling.textContent = "";
            return true;
        }
    }

    response_btn.addEventListener("click", () => {
        answ_window.classList.toggle('active');
        if(answ_window.classList.contains('true')) {
            answ_window.classList.toggle('true');
        } else {
            answ_window.classList.toggle('false');
        }
    })