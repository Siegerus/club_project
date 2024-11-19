window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    if (document.body.querySelector(".events")) {

        let overlay = document.querySelector(".action__overlay"),
            close = document.querySelector(".action__close"),
            btn = document.querySelectorAll(".events__btn");



        let showModal = function showModal() {
            btn.forEach((item) => {
                item.addEventListener("click", function () {
                    overlay.style.display = "block";
                });
            });

        };

        showModal();

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

        let setTabs = function setTabs(tabClass, contentClass) {
            let tabs = Array.from(document.querySelectorAll(tabClass)),
                tabsContent = Array.from(document.querySelectorAll(contentClass));

            function hideContent(a) {
                for (let b = a; b < tabsContent.length; b++) {
                    tabsContent[b].classList.remove("show");
                    tabsContent[b].classList.add("hide");
                }
            }

            hideContent(1);

            function showContent(c) {
                if (tabsContent[c].classList.contains("hide")) {
                    tabsContent[c].classList.remove("hide");
                    tabsContent[c].classList.add("show");
                }
            }

            tabs.forEach((item) => {
                item.addEventListener("click", function (e) {
                    for (let i = 0; i < tabs.length; i++) {
                        if (tabs[i].classList.contains("action__tabs")) {

                            tabs[i].classList.remove("action__tabs_active");
                            this.classList.add("action__tabs_active");
                        }

                        if (e.target == tabs[i]) {
                            hideContent(0);
                            showContent(i);
                        }
                    }
                });
            });
        };

        setTabs(".action-modal__label", ".action-modal__content");

    }
});