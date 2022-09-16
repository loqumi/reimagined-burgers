const wrapper = document.querySelector('.wrapper-body');
const dot_items = document.querySelectorAll('.dot_item');

export function wrapper_translate(num){
    wrapper.style.transform = `translateY(${-100 * num}vh)`;
    set_active(num)
}
export function set_active(num){
    dot_items.forEach((elem) => elem.classList.remove('active'))
        
    dot_items[num].classList.add('active')
}