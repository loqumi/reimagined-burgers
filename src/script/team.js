const accordions = document.querySelectorAll('.accordion');

accordions.forEach((elem)=>{
    elem.addEventListener("click", () => {

        if(!elem.classList.contains('active')){
            accordions.forEach((elem) => elem.classList.remove('active'))
        }

        elem.classList.toggle('active')

    }); 
});