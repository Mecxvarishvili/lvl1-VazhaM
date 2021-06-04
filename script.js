let cardList = document.getElementById("card")
let option = document.getElementById("sel")
let optionFirst = document.getElementById("op1")
let optionSecond = document.getElementById("op2")
let optionThird = document.getElementById("op3")
let button = document.getElementById("button");

option.addEventListener('change', addSlide)

let list = ""
function addSlide() {
    fetch(`https://fakestoreapi.com/products?limit=${option.value}`)
            .then(res=>res.json())
            .then(json=>
                json.forEach(element => {
                    list = `
                    <div class="col-3 mb-4" id="mcolumn"> 
                        <img src="${element.image}" alt="" class="col-11">
                        <div class="rating">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-secondary"></i>
                        </div>
                        <div>${element.title}</div>
                        <div>${element.price}</div>
                    </div>
                    `
                    cardList.innerHTML += list
                    console.log(json)
                })
                
            )
            json = "";
            cardList.innerHTML = json
}



let coll2 = document.getElementById("coll2")

coll2.addEventListener("click", colTwo)

function colTwo() {
    document.getElementById("mcolumn").classList.toggle("col-6")
}



let coll3 = document.getElementById("coll3")

coll3.addEventListener("click", colThree)

function colThree() {
    document.getElementById("mcolumn").classList.toggle("col-4")
}



let coll4 = document.getElementById("coll4")

coll4.addEventListener("click", colFour)

function colFour() {
    document.getElementById("mcolumn").classList.toggle("col-3")
}



let coll6 = document.getElementById("coll6")

coll6.addEventListener("click", colSix)

function colSix() {
    document.getElementById("mcolumn").classList.toggle("col-2")
}


/* barr function */

let brandBar = document.getElementById("brandbar")

brandBar.addEventListener("click", brandBarDel)

function brandBarDel() {
    document.getElementById("brandbardel").classList.toggle("d-none")
}

let colorBar = document.getElementById("colorbar")

colorBar.addEventListener("click", colorBarDel)

function colorBarDel() {
    document.getElementById("colorbardel").classList.toggle("d-none")
}



let sizeBar = document.getElementById("sizebar")

sizeBar.addEventListener("click", sizeBarDel)

function sizeBarDel() {
    document.getElementById("sizebardel").classList.toggle("d-none")
}






