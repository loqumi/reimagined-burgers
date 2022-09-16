import {wrapper_translate} from './utils.js';
const dot_items = document.querySelectorAll('.dot_item');

dot_items.forEach((elem, index) => {
    elem.addEventListener("click", () => {
        wrapper_translate(index)
    });
});