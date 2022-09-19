const dot_items = document.querySelectorAll('.dot_item');

export function set_active(num){
    dot_items.forEach((elem) => elem.classList.remove('active'))
        
    dot_items[num].classList.add('active')
}