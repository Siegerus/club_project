window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    if (document.body.querySelector(".autorization")) {

        let tabs = document.querySelectorAll(".autorization__tabs"),
            content = document.querySelectorAll(".autorization__content"),
            forget = document.querySelector(".autorization__forgetPass"),
            block = document.querySelector(".autorization__block"),
            blockPass = document.querySelector(".autorization__pass"),
            select = document.querySelector(".feed-form__select_sign"),
            selectText = document.querySelector(".feed-form__select > span"),
            optionsBlock = document.querySelector(".feed-form__optionsWrap"),
            options = optionsBlock.querySelectorAll(".feed-form__option"),
            optionsRadio = optionsBlock.querySelectorAll(".feed-form__hidden");


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


        let selectSet = function (clickItem) {
            clickItem.addEventListener("click", function (e) {
                if (e.target == (this)) {
                    select.classList.toggle("feed-form__select_sign_active");
                    optionsBlock.classList.toggle("feed-form__optionsWrap_active");
                    optionsBlock.classList.remove("animation__type__fadeOut_select");
                    optionsBlock.classList.add("animation__type__fade_select");
                }

                for (let i = 0; i < options.length; i++) {
                    if (e.target == options[i]) {
                        select.classList.remove("feed-form__select_sign_active");
                        optionsBlock.classList.remove("animation__type__fade_select");
                        optionsBlock.classList.add("animation__type__fadeOut_select");
                        optionsBlock.addEventListener("animationend", (e) => {
                            if(e.target.classList.contains("animation__type__fadeOut_select")) {
                                optionsBlock.classList.remove("feed-form__optionsWrap_active");
                            }
                        });
                    }
                }
            });

            selectText.textContent = optionsRadio[0].value;

            optionsRadio.forEach((item, i) => {
                item.addEventListener("input", () => {
                    if (optionsRadio[i].checked) {
                        let val = optionsRadio[i].value;
                        selectText.textContent = val;
                    }
                });
            });

            document.body.addEventListener("click", (e) => {
                if (e.target !== (select) && e.target !== (selectText)) {
                    select.classList.remove("feed-form__select_sign_active");
                    optionsBlock.classList.remove("animation__type__fade_select");
                    optionsBlock.classList.add("animation__type__fadeOut_select");
                    optionsBlock.addEventListener("animationend", (e) => {
                        if(e.target.classList.contains("animation__type__fadeOut_select")) {
                            optionsBlock.classList.remove("feed-form__optionsWrap_active");
                        }
                    });
                }
            });
        };

        selectSet(select);
        selectSet(selectText);

        
    }
});