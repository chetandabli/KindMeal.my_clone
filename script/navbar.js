import {footer} from "../components/footer.js";
import {navbar} from "../components/navbar.js";

document.getElementById("bottom-menu").innerHTML = footer()
document.getElementById("navbar").innerHTML = navbar()

// ******************* pop box function ************************
document.getElementById("pop").addEventListener("click", pop);
function pop(){
    // let popbody = document.querySelector("#pop-up-js");
    console.log("helow");
    // popbody.classList.remove("pop-up");
    document.querySelector("#blur-js").classList.toggle("blur");
    let popBox = document.querySelector("#pop-box-js")   
        popBox.classList.toggle('active');
}
document.getElementById("unpop").addEventListener("click", unpop);
function unpop(){
    // let popbody = document.querySelector("#pop-up-js");
    console.log("helow");
    // popbody.classList.remove("pop-up");
    document.querySelector("#blur-js").classList.toggle("blur");
    let popBox = document.querySelector("#pop-box-js")   
        popBox.classList.toggle('active');
}


let signupbutton = document.querySelector(".pop-sign-button");
signupbutton.addEventListener("click", signup)
function signup(){
    location.href = "/signup.html";
}
let signupbutton2 = document.querySelector(".pop-sign-button2");
signupbutton2.addEventListener("click", signup)

// *************************** pop login *********************************
const divs = document.querySelectorAll('.poplogin');

divs.forEach(el => el.addEventListener('click', poplogin));
function poplogin(){
    document.querySelector("#blur-js").classList.toggle("blur");
    let loginPop = document.querySelector("#login-pop-js")   
    loginPop.classList.toggle('activelogin');
};

document.getElementById("unpoplogin").addEventListener("click", unpoplogin)
function unpoplogin(){
    document.querySelector("#blur-js").classList.toggle("blur");
    let loginPop = document.querySelector("#login-pop-js")   
    loginPop.classList.toggle('activelogin');
}

// ****************** login **************************************
let loginDetails = JSON.parse(localStorage.getItem("signupData")) || [];
let login = document.querySelector("#form_login"); 
login.addEventListener("submit", loginFun);

function loginFun(event){
    event.preventDefault();
    if(loginDetails.length == 0){
        alert("please create account first!")
    }
    for(let i = 0; i < loginDetails.length; i++){
        console.log("fuck")
        if(loginDetails[i]["email"] == login.loginEmail.value){
            if(loginDetails[i]["pass"] == login.loginPassword.value){
                alert("Your Are Logged in")
                let temp = loginDetails[i]["firstName"] + " " + loginDetails[i]["lastName"]
                localStorage.setItem("logged", "Yes")
                localStorage.setItem("loggedName", temp)
                location.href = "/index.html";
            }else if(i == (loginDetails.length-1)){
                alert("You Entered Incorrect Password")
            }
        }else if(i == (loginDetails.length-1)){
            alert("You Entered Incorrect Email and Password")
        }
    }
}

function checklogin(){
    let statuslogin = localStorage.getItem("logged");
let nameoflogged = localStorage.getItem("loggedName");
if(statuslogin == "Yes"){
    console.log("true")
    document.getElementById("loginbuttons").innerHTML = "";
    document.getElementById("loginbuttons").innerHTML = `<table>
    <tbody>
        <tr>
            <td id="cartcount">0</td>
            <td id="namelo">
                <p id="pp">${nameoflogged} ▼</p>
            </td>
            <td id="logimg">
                <img src="https://www.kindmeal.my/images/no_photo_header.png" alt="">
            </td>
        </tr>
    </tbody>
</table>`
    // let td1 = document.createElement("td")
    // td1 = 0;

    // let td2 = document.createElement("td")
    // let nameof = document.createElement("p")
    // nameof.innerText = nameoflogged + " ▼"
    // let img = document.createElement("img")
    // img.src = "https://www.kindmeal.my/images/no_photo_header.png"
    // td2.append(nameof , img)

    // let tr = document.createElement("tr")
    // tr.append(td1, td2)
    // let table = document.createElement("table")
    // table.append(tr)
    // loggedtable = table;

}
}
checklogin()
export {poplogin, pop, checklogin}