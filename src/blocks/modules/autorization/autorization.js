window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let tabs = document.querySelectorAll(".autorization__tabs"),
        content = document.querySelectorAll(".autorization__content"),
        forget = document.querySelector(".autorization__forgetPass"),
        block = document.querySelector(".autorization__block"),
        blockPass = document.querySelector(".autorization__pass");

    if (document.body.querySelector(".autorization")) {
        let contentHide = function (b) {
            for (let a = b; a < content.length; a++) {
                content[a].classList.remove("show");
                content[a].classList.add("hide");
            }
        };

        contentHide(1);

        let contentShow = function (c) {
            if (content[c].classList.contains("hide")) {
                content[c].classList.remove("hide");
                content[c].classList.add("show");
            }
        };

        tabs.forEach((item) => {
            item.addEventListener("click", function (e) {
                for (let i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove("autorization__tabs_active");
                    this.classList.add("autorization__tabs_active");

                    if (e.target == tabs[i]) {
                        contentHide(0);
                        contentShow(i);
                    }
                }
            });
        });

        let blockShow = function (itemClick, itemHide, itemShow) {
            itemClick.addEventListener("click", () => {
                itemHide.style.display = "none";
                itemShow.style.display = "block";

            });
        };

        blockShow(forget, block, blockPass);
    }






});