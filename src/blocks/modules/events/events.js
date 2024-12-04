window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    if (document.body.querySelector(".events")) {

        let overlay = document.querySelector(".action-modal__overlay"),
            modalWindow = document.querySelector(".action-modal"),
            close = document.querySelector(".action-modal__close"),
            btn = document.querySelectorAll(".events__btn");

        let showModal = function showModal() {
            btn.forEach((item) => {
                item.addEventListener("click", function () {
                    overlay.style.display = "block";
                    close.classList.add("animation__type__fade");
                    modalWindow.classList.add("animation__type__fade_modal");
                    overlay.classList.remove("animation__type__fadeOut_modal");
                });
            });
        };

        showModal();

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

        let getValue = function getValue() {
            let radio = document.querySelectorAll("input[type='radio'][name=couple]"),
                btn = document.querySelector(".action-modal__btn");

            radio.forEach(function (item, i) {
                item.addEventListener("click", () => {
                    if (radio[i].checked) {
                        let val = radio[i].value;
                        btn.textContent = "Оплатить " + val;
                    }
                });
            });
        };

        getValue();

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