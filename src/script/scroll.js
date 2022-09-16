import {wrapper_translate} from './utils.js';
const sections = document.querySelectorAll(".section");
const max_count = sections.length;
var wheel_count = 0;
var flag = false;


document.addEventListener("wheel",(event) => {
    if (flag) return;
    flag = true
    if (event.deltaY > 0) {
        if (wheel_count < max_count - 1)
            wheel_count += 1
    } else {
        if (wheel_count > 0)
            wheel_count -= 1
    }
    setTimeout(() => {
        flag = false;
    }, 1300)
    wrapper_translate(wheel_count)
})
