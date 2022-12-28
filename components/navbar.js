const navbar = ()=>{
    return `<div id="nav-top">
    <a href="/index.html"><img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt=""></a>
    <div>
        <div>
            <img src="https://www.kindmeal.my/images/follow_blog_grey.png" alt="">
            <img src="https://www.kindmeal.my/images/follow_facebook_grey.png" alt="">
            <img src="https://www.kindmeal.my/images/follow_twitter_grey.png" alt="">
        </div>
    </div>
    <div>
        <div id="loginbuttons">
            <p class="poplogin">Login</p>
            <p class="poplogin">Facebook</p>
            <p class="poplogin">Email</p>
            <p id="pop">Sign Up</p>
        </div>
    </div>
</div>
<div id="nav-bottom">
    <div>
        <p>Home</p>
        <p>Meal Deals</p>
        <p>KindMoments</p>
        <p>Hot Picks</p>
        <p>Recipes</p>
        <p>Directory</p>
        <p>Articles</p>
        <p>Help</p>
    </div>
</div>`
};

export { navbar }