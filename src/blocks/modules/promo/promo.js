window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    if(document.querySelector(".promo")) {

        let overlay = document.querySelector(".join-modal__overlay"),
            close = document.querySelector(".join-modal__close"),
            modalWindow = document.querySelector(".join-modal");
        
        let showModal = function showModal(btnClass) {
            let btn = document.querySelectorAll(btnClass);

            btn.forEach((item) => {
                item.addEventListener("click", function () {
                    overlay.style.display = "block";
                    modalWindow.classList.add("animation__type__fade_modal");
                    close.classList.add("animation__type__fade");
                    overlay.classList.remove("animation__type__fadeOut_modal");
                    close.classList.remove("animation__type__fadeOut_modal");
                });
            });
        };

        showModal(".promo__btn");
        showModal(".join__btn");

        /* let closeModal = function closeModal(fadeItem) {
            close.addEventListener("click", function () {
                fadeItem.classList.remove("animation__type__fade_modal");
                fadeItem.classList.add("animation__type__fadeOut_modal");
                fadeItem.addEventListener("animationend", (e) => {
                    if(e.target.classList.contains("animation__type__fadeOut_modal")) {
                        overlay.style.display = "none";
                    }
                });
                
            });
        };

        closeModal(close);
        closeModal(overlay); */

        let closeByOverclick = function closeByOverclick(fadeItem) {
            overlay.addEventListener("click", function (e) {
                let curentModal = e.target.closest(".modal");

                if (!curentModal) {
                    fadeItem.classList.remove("animation__type__fade_modal");
                    close.classList.remove("animation__type__fade");
                    fadeItem.classList.add("animation__type__fadeOut_modal");
                    fadeItem.addEventListener("animationend", (e) => {
                        if(e.target.classList.contains("animation__type__fadeOut_modal")) {
                            overlay.style.display = "none";
                        }
                    });
                }
            });
        };

        closeByOverclick(overlay);
        /* closeByOverclick(close); */
    }
});