let burgerBar = document.getElementById("burgerbar");

burgerBar.addEventListener("click", openBar);

function openBar() {

    document.getElementById("burgerbar").classList.toggle("change")
    document.getElementById("nav").classList.toggle("change")
    document.getElementById("back").classList.toggle("change")
}

//Slide STARTTTTT


let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")
let slider = document.querySelector(".slides")
let sectionIndex = 0;

nextBtn.addEventListener("click", next)

function next() {
    sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 :  0;
    slider.style.transform = 'translate(' + (sectionIndex) * -20 +'%)';
}

prevBtn.addEventListener("click", prev)

function prev() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 :  4;
    slider.style.transform = 'translate(' + (sectionIndex) * -20 +'%)';
}

//Modal START

let modalStart = document.getElementById("modalstart")

let modalEnd = document.querySelector(".modal-close")

modalStart.addEventListener("click", Func)

modalEnd.addEventListener("click", Func)


function Func() {
    document.getElementById("modal-bg").classList.toggle("modal-active")
}

