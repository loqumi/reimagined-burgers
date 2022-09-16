import {set_active} from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    const elem = document.querySelector(hash)

    const index = Array.from(elem.parentElement.children).indexOf(elem);
    set_active(index);
})