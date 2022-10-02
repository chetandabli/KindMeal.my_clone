// ******************* pop box function ************************


function pop(){
    // let popbody = document.querySelector("#pop-up-js");
    console.log("helow");
    // popbody.classList.remove("pop-up");
    document.querySelector("#blur-js").classList.toggle("blur");
    let popBox = document.querySelector("#pop-box-js")   
        popBox.classList.toggle('active');
}
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

// ****************** slider function *******************************

heroData = [
    {
        discout: "15%",
        heroImage: "https://www.kindmeal.my/photos/deal/6/670-4180-m.jpg",
        tagLine: "Authentic Vietnamese Experience, 15% Off ",
        tabLineSpan: "— Rasa Viet",
        brandLogo: "https://www.kindmeal.my/photos/shop/5/552-4075-m.jpg",
    },
    {
        discout: "20%",
        heroImage: "https://www.kindmeal.my/photos/deal/6/669-4206-m.jpg",
        tagLine: "Mangga Natural Lifestyle, 20% Off ",
        tabLineSpan: "— Mangga Vegetarian Cafe",
        brandLogo: "https://www.kindmeal.my/photos/shop/5/549-4094-m.jpg",
    },
    {
        discout: "10%",
        heroImage: "https://www.kindmeal.my/photos/deal/7/718-5090-m.jpg",
        tagLine: "Steamboat & Fusion Revolution, 10% Off ",
        tabLineSpan: "— Gekil Vegetarian Restaurant",
        brandLogo: "https://www.kindmeal.my/photos/shop/6/612-4757-m.jpg",
    },
    {
        discout: "15%",
        heroImage: "https://www.kindmeal.my/photos/deal/7/704-4734-m.jpg",
        tagLine: "Vegan Ice-Cream Indulgence, 15% Off ",
        tabLineSpan: "— Negative 12 Degrees",
        brandLogo: "https://www.kindmeal.my/photos/shop/5/598-4450-m.jpg",
    },
    {
        discout: "20%",
        heroImage: "https://www.kindmeal.my/photos/deal/6/614-3355-m.jpg",
        tagLine: "Memorable Vegetarian Delights, 20% Off ",
        tabLineSpan: "— Elyn Vegetarian",
        brandLogo: "https://www.kindmeal.my/photos/shop/4/490-3254-m.jpg",
    },
    {
        discout: "10%",
        heroImage: "https://www.kindmeal.my/photos/deal/7/720-5195-m.jpg",
        tagLine: "Yishensu Groceries @ Ipoh, 10% Off ",
        tabLineSpan: "— Yishensu Groceries Ipoh",
        brandLogo: "https://www.kindmeal.my/photos/shop/6/624-4812-m.jpg",
    },
    {
        discout: "15%",
        heroImage: "https://www.kindmeal.my/photos/deal/6/683-4718-m.jpg",
        tagLine: "Creative Home-Style Dining, 15% Off ",
        tabLineSpan: "— Red House 2",
        brandLogo: "https://www.kindmeal.my/photos/shop/5/567-4252-m.jpg",
    },
]
let mainImage = document.querySelector("#slider");
let brandLogo = document.querySelector("#slider-logo");
let discount = document.querySelector("#discount>:first-child")
let tagline = document.querySelector("#tagline>p")
let taglineSpan = document.querySelector("#spanoftagline")
let i = 1, j = 2;
setInterval(() => {
    mainImage.style.backgroundImage = `url(${heroData[i]["heroImage"]})`;
    brandLogo.style.backgroundImage = `url(${heroData[i]["brandLogo"]})`;
    // console.log(`${heroData[i]["discout"]}`)
    discount.innerText = heroData[i]["discout"];
    tagline.innerHTML = `${heroData[i]["tagLine"]} <span> ${heroData[i]["tabLineSpan"]}</span>`;
    document.querySelector(`#slider-bottom>div:nth-child(${j})>img`).style.opacity = "100%";
    if(i == 0){
        document.querySelector(`#slider-bottom>div:last-child>img`).style.opacity = "70%";
    }
    i++
    j++
    if(i == heroData.length){
        i=0
        document.querySelector(`#slider-bottom>div:nth-child(${j-1})>img`).style.opacity = "100%";
        document.querySelector(`#slider-bottom>div:nth-child(${j-2})>img`).style.opacity = "70%";
        j = 1;

    }else{
        document.querySelector(`#slider-bottom>div:nth-child(${j-2})>img`).style.opacity = "70%";
    }
},3000)

let redirectToDeal = document.querySelector("#hero");
redirectToDeal.addEventListener("click", redirect)

function redirect(){
    location.href = "/deal-1.html";
}