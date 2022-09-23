const menu_acc = document.querySelectorAll('.food__item');
const exit__btn = document.querySelectorAll('.exit__btn');

menu_acc.forEach((elem)=>{
    elem.addEventListener("click", () => {

        if(!elem.classList.contains('active')){
            menu_acc.forEach((elem) => elem.classList.remove('active'))
        }

        elem.classList.toggle('active')

        exit__btn.forEach((exit=>{
            exit.addEventListener("click", () => {
        
                elem.classList.remove('active')
            });
        }));

    }); 
});
