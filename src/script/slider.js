var click_count = 0;
const left = document.querySelector(".btn__arrow-left");
const right = document.querySelector(".btn__arrow-right");
const items = document.querySelector(".slider__list");
const max_count = items.querySelectorAll("li").length;
const consist__btn = document.querySelectorAll(".consist__btn");

  right.addEventListener("click", function() {

    if ((click_count) < max_count) {
    click_count = ++click_count;
    items.style.transform = `translateX(${-100 * click_count}%)`;
    }

    if ((click_count) == max_count) {
    click_count = 0;
    items.style.transform = `translateX(${-100 * click_count}%)`;
    }
  });

  left.addEventListener("click", function() {

    if ((click_count) > -1) {
    click_count = --click_count;
    items.style.transform = `translateX(${-100 * click_count}%)`;
    }

    if ((click_count) == -1) {
    click_count = max_count -1;
    items.style.transform = `translateX(${-100 * click_count}%)`;
    }
  });

  consist__btn.forEach((elem)=>{
    elem.addEventListener("click", () => {

        if(!elem.classList.contains('active')){
          consist__btn.forEach((elem) => elem.classList.remove('active'))
        }

        elem.classList.toggle('active')

    }); 
});