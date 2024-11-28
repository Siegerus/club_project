window.addEventListener("DOMContentLoaded", function () {
    "use striсt";

    if (document.querySelector(".header")) {

        let hamburger = document.querySelectorAll(".header__hamburger"),
            nav = document.querySelector(".header__nav_m-visible"),
            navHamburger = nav.querySelector(".header__hamburger");

        let navShow = function () {
            hamburger.forEach(function(item) {
                item.addEventListener("click", function () {
                    navHamburger.classList.toggle("header__hamburger_active");
                    nav.classList.toggle("header__nav_active");
                    document.body.classList.toggle("body_noscroll");
    
                    if (nav.classList.contains("header__nav_active")) {
                        document.body.classList.remove("body_eclipse");
                    } else if (document.body.querySelector(".action") || (document.body.querySelector(".connect"))) {
                        document.body.classList.add("body_eclipse");
                    }
                });
            });
        };

        navShow();
    }
});