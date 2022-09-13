const dot_item = document.querySelectorAll('.dot_item');
const wrapper = document.querySelector('.wrapper-body');
const dot_list = document.querySelector('.dot_list');

dot_item.forEach((elem, index)=>{
    elem.addEventListener("click", () => {
        var i = index
        wrapper.style.transform = `translateY(${-100 * i}vh)`;
        if(!elem.classList.contains('active')){
            dot_item.forEach((elem) => elem.classList.remove('active'))
        }
        
        elem.classList.toggle('active')

        if(elem.classList.contains('dark')){
            dot_list.classList.add('dark');
        } else {
            dot_list.classList.remove('dark');
        }
    });
});