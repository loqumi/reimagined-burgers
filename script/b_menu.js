const menu_acc = document.querySelectorAll('.food__item');

menu_acc.forEach((elem)=>{
    elem.addEventListener("click", () => {

        if(!elem.classList.contains('active')){
            menu_acc.forEach((elem) => elem.classList.remove('active'))
        }

        elem.classList.toggle('active')

    }); 
});