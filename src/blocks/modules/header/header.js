
let hamburger = document.querySelector(".header__hamburger"),
    nav = document.querySelector(".header__nav_m-visible");

function navShow() {
    hamburger.addEventListener("click", function() {
        this.classList.toggle("header__hamburger_active");
        nav.classList.toggle("header__nav_active"); 
        document.body.classList.toggle("body_noscroll");
    });
}

navShow();
