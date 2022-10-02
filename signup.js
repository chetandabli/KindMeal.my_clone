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
let signupdetails = JSON.parse(localStorage.getItem("signupData")) || [];
let sub = document.querySelector("form"); 
sub.addEventListener("submit", signUpFun);


function signUpFun(event){
    event.preventDefault();
    if(sub.firstName.value == "" || sub.lastName.value == "" || sub.email.value == "" || sub.emailre.value == "" || sub.password.value == "" || sub.usernameBox.value == "" || sub.dateofbirth.value == "" || sub.country.value == "" || sub.state.value == ""){
        alert("Please fill all the details!")
    }else{
        if(sub.firstName.value.length < 2){
            alert("fill the correct First Name!")
        }
        if(sub.lastName.value.length < 2){
            alert("fill the correct Last Name!")
        }
        if(sub.email.value != sub.emailre.value){
            alert("please fill correct email in both place!")
        }
        if(sub.password.value.length < 8){
            alert("Password min. Length is 8")
        }
        if(sub.password.value.length > 7){
            let count = 0, num = 0, lowercount = 0, uppercount = 0;
            for(let i = 0; i < sub.password.value.length; i++){
                let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
                let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

                for(let j = 0; j < lower.length; j++){
                    if(lower[j] == sub.password.value[i]){
                        lowercount++
                    }
                    if(upper[j] == sub.password.value[i]){
                        uppercount++
                    }
                }
                if(sub.password.value[i] == "!" || sub.password.value[i] == "@" || sub.password.value[i] == "#" || sub.password.value[i] == "$" || sub.password.value[i] == "%" || sub.password.value[i] == "^" || sub.password.value[i] == "&" || sub.password.value[i] == "*" || sub.password.value[i] == "+"){
                    count++
                }
                if(sub.password.value[i] == "1" || sub.password.value[i] == "2" || sub.password.value[i] == "3" || sub.password.value[i] == 4 || sub.password.value[i] == 5 || sub.password.value[i] == 6 || sub.password.value[i] == 7 || sub.password.value[i] == 8 || sub.password.value[i] == 9 || sub.password.value[i] == 0){
                    num++
                }
            }
            if(count == 0 || num == 0 || lowercount == 0 || uppercount == 0){
                alert("Please enter strong password. combination of lowercase, uppercase, number and spacial character")
            }
        }
        if(sub.usernameBox.value.length != 0){
            for(let i = 0; i < sub.usernameBox.value.length; i++){
                if(sub.usernameBox.value[i] == " "){
                    alert("Username can't have space!")
                }
            }
        }



        if(sub.checkbox.checked == false){
            alert("Please Accept Term and Condition")
        }else{
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
            signupdetails.push(obj)
            localStorage.setItem("signupData", JSON.stringify(signupdetails))
            location.href = "/signup_done.html";
        }
    }
    
    
}