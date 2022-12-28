import {poplogin} from './navbar.js'

document.getElementById("newFun").addEventListener("click", newFun)

function newFun(){
    let statuslogin = localStorage.getItem("logged");
    if(statuslogin != "Yes" || statuslogin == null){
        poplogin();
    }else{
        popdeal();
    }
}

function popdeal(){
    let alfa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let coupon = randomInt(1, 10) + randomInt(1, 10) + alfa[randomInt()] + alfa[randomInt()] + alfa[randomInt()] + randomInt(1, 10) + randomInt(1, 10) + alfa[randomInt()] + alfa[randomInt()] + alfa[randomInt()] + randomInt(1, 10) + alfa[randomInt()] + alfa[randomInt()] + randomInt(1, 10) + alfa[randomInt()] + alfa[randomInt()];
    document.getElementById("couponcode").innerText = coupon
    document.querySelector("#blur-js").classList.toggle("blur");
    let dealPop = document.querySelector("#deal-pop-js")   
    dealPop.classList.toggle('activedeal');
}

function randomInt(min = 0, max = 25) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

document.getElementById("unpopdeal").addEventListener("click", unpopdeal)
function unpopdeal(){
    document.querySelector("#blur-js").classList.toggle("blur");
    let dealPop = document.querySelector("#deal-pop-js")   
    dealPop.classList.toggle('activedeal');
}