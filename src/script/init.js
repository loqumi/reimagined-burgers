import {set_active} from './utils.js';
import "./swipe.js";

document.addEventListener('DOMContentLoaded', FN)
window.addEventListener('popstate', FN)
const sections = document.querySelectorAll(".section");

function get_current_section_index() {
    const href = window.location.hash;
    const elem = href ? document.querySelector(href) : sections[0];

    return Array.from(elem.parentElement.children).indexOf(elem);
}

function FN() {
    set_active(get_current_section_index());
}

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


$(window).onSwipe(function(results){

    let hash = null;
    
    const current_section_index = get_current_section_index();
    
    if(results.up == true) 
        hash = sections[current_section_index + 1]?.id;
    

    if(results.down == true) 
        hash = sections[current_section_index - 1]?.id;
        
    if (hash) window.location.hash = hash;
  });