import {set_active} from './utils.js';

document.addEventListener('DOMContentLoaded', FN)
window.addEventListener('popstate', FN)

function get_current_section_index() {
    const href = window.location.hash;
    let elem = document.querySelector(href);

    return Array.from(elem.parentElement.children).indexOf(elem);
}

function FN() {
    set_active(get_current_section_index());
}

const sections = document.querySelectorAll(".section");
var flag = false;


document.addEventListener("wheel",(event) => {
    if (flag) return;
    flag = true
    const current_section_index = get_current_section_index();

    if (event.deltaY > 0) {
        const hash = sections[current_section_index + 1]?.id;
        if (hash) window.location.hash = hash;
    } else {
        const hash = sections[current_section_index - 1]?.id;
        if (hash) window.location.hash = hash;
    }

    setTimeout(() => {
        flag = false;
    }, 1300)
})

let posX = 0;
let posY = 0;
var touchflag = false;

document.addEventListener('touchmove', event => {
    if (touchflag) return;
    touchflag = true
    const { clientX, clientY } = event.touches[0];
    const current_section_index = get_current_section_index();
  
    if (posY < clientY) {
        const hash = sections[current_section_index + 1]?.id;
        if (hash) window.location.hash = hash;
    } else {
        const hash = sections[current_section_index - 1]?.id;
        if (hash) window.location.hash = hash;
    }
  
    posX = clientX;
    posY = clientY;

    setTimeout(() => {
        touchflag = false;
    }, 1300)
})