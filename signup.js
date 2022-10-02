// ******************* pop box function ************************


function pop(){
    document.querySelector("#blur-js").classList.toggle("blur");
    let popBox = document.querySelector("#pop-box-js")   
        popBox.classList.toggle('active');
}
function unpop(){
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
function signup(){
    location.href = "/signup.html";
}


// **************************  signup data  ***************************

let sub = document.querySelector("form"); 
sub.addEventListener("submit", signUpFun);


function signUpFun(event){
    event.preventDefault();
    let obj = {
        firstName: sub.firstName.value,
        lastName: sub.lastName.value,
        email: sub.email.value,
        emailRe: sub.emailre.value,
        pass: sub.password.value,
        username: sub.usernameBox.value,
        DOB: sub.dateofbirth.value,
        counrey: sub.country.value,
        state: sub.state.value,
        photo: sub.photo.value,
    }
    console.log(obj)
}