window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    if (document.querySelector(".vip")) {

        let overlay = document.querySelector(".vip__overlay"),
            close = document.querySelector(".vip__close");

        let showModal = function showModal(btnClass) {
            let btn = document.querySelectorAll(btnClass);

            btn.forEach((item) => {
                item.addEventListener("click", function () {
                    overlay.style.display = "block";
                });
            });
        };

        showModal(".vip__btn");

        let closeModal = function closeModal() {
            close.addEventListener("click", function () {
                overlay.style.display = "none";
            });
        };

        closeModal();

        let closeByOverclick = function closeByOverclick() {
            overlay.addEventListener("click", function (e) {
                let curentModal = e.target.closest(".modal");

                if (!curentModal) {
                    overlay.style.display = "none";
                }
            });
        };

        closeByOverclick();

    }
});