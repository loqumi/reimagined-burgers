const humburger__btn = document.querySelector('#humburger__btn');
const menu__list = document.querySelector('#menu__list');

[humburger__btn, menu__list].forEach((elem)=>{elem.addEventListener("click", function(){
    document.body.classList.toggle('lock'); 
    }); 
});