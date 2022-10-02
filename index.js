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

// ****************** login **************************************
let signupdetails = JSON.parse(localStorage.getItem("signupData")) || [];
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

//  ************** buy button *****************
function newFun(){
    let statuslogin = localStorage.getItem("logged");
    if(statuslogin != "Yes" || statuslogin == null){
        poplogin()
    }else{
        popdeal();
    }
}

function popdeal(){
    document.querySelector("#blur-js").classList.toggle("blur");
    let dealPop = document.querySelector("#deal-pop-js")   
    dealPop.classList.toggle('activedeal');
}
function unpopdeal(){
    document.querySelector("#blur-js").classList.toggle("blur");
    let dealPop = document.querySelector("#deal-pop-js")   
    dealPop.classList.toggle('activedeal');
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