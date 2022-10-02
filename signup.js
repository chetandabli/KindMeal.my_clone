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
// *************************** pop login *********************************

function poplogin(){
    document.querySelector("#blur-js").classList.toggle("blur");
    let loginPop = document.querySelector("#login-pop-js")   
    loginPop.classList.toggle('activelogin');
}
function unpoplogin(){
    document.querySelector("#blur-js").classList.toggle("blur");
    let loginPop = document.querySelector("#login-pop-js")   
    loginPop.classList.toggle('activelogin');
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
        if(sub.usernameBox.value.length != 0){
            for(let i = 0; i < sub.usernameBox.value.length; i++){
                if(sub.usernameBox.value[i] == " "){
                    alert("Username can't have space!")
                }
            }
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
            }else{
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
        

            
    }
    
    
}

// ****************** login **************************************
let login = document.querySelector("#form_login"); 
login.addEventListener("submit", loginFun);

function loginFun(event){
    event.preventDefault();
    for(let i = 0; i < signupdetails.length; i++){
        if(signupdetails[i]["email"] == login.loginEmail.value){
            if(signupdetails[i]["pass"] == login.loginPassword.value){
                alert("Your Are Logged in")
                let temp = signupdetails[i]["firstName"] + " " + signupdetails[i]["lastName"]
                localStorage.setItem("logged", "Yes")
                localStorage.setItem("loggedName", temp)
                location.href = "/index.html";
            }else if(i == (signupdetails.length-1)){
                alert("You Entered Incorrect Password")
            }
        }else if(i == (signupdetails.length-1)){
            alert("You Entered Incorrect Email and Password")
        }
    }
}
let statuslogin = localStorage.getItem("logged");
let nameoflogged = localStorage.getItem("loggedName");
if(statuslogin == "Yes"){
    // document.querySelector("#loginbuttons").innerHTML = "";
    document.querySelector("#loginbuttons").innerHTML = `<table>
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