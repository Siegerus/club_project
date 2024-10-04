window.addEventListener("DOMContentLoaded", function(){
    "use striсt";

    if (document.querySelector(".header")) {

        let hamburger = document.querySelector(".header__hamburger"),
            nav = document.querySelector(".header__nav_m-visible");

        let navShow = function () {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("header__hamburger_active");
                nav.classList.toggle("header__nav_active"); 
                document.body.classList.toggle("body_noscroll");

                if (nav.classList.contains("header__nav_active")) {
                    document.body.classList.remove("body_eclipse");
                } else if (document.body.querySelector(".action") || (document.body.querySelector(".connect"))) {
                    document.body.classList.add("body_eclipse");
                }
            });
        };

        navShow();

    }
});