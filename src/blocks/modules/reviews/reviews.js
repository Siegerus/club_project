window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    if (document.body.querySelector(".reviews")) {

        let sliderSet = function sliderSet() {
            let currentIndex = 1,
                slide = document.querySelectorAll(".reviews__slide"),
                prev = document.querySelector(".reviews__arrowLeft"),
                next = document.querySelector(".reviews__arrowRight");

            function slideShow(n) {

                if (n > slide.length) {
                    currentIndex = 1;
                }

                if (n < 1) {
                    currentIndex = slide.length;
                }

                for(let i = 0; i < slide.length; i++) {
                    slide[i].style.display = "none";
                    slide[currentIndex - 1].style.display = "flex";
                } 
            }

            slideShow(currentIndex);

            function slidePlus(n) {
                slideShow(currentIndex = currentIndex + n );
            }

            function slideMinus(n) {
                slideShow(currentIndex = currentIndex - n );
            }

            next.addEventListener("click", function () {
                slidePlus(1);
            });

            prev.addEventListener("click", function () {
                slideMinus(1);
            });

        };
        
        sliderSet();

    }
    
});