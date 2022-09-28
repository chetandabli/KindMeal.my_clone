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
let brandLogo = document.querySelector("#slider-logo>img");
let i = 1, j = 2;
setInterval(() => {
    mainImage.style.backgroundImage = `url(${heroData[i]["heroImage"]})`;
    brandLogo.src = `${heroData[i]["brandLogo"]}`;
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

    
    
},5000)