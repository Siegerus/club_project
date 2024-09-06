window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    
    function getValue() {
        let radio = Array.from(document.querySelectorAll("input[type='radio'][name=couple]")),
            btn = document.querySelector(".action-modal__btn");

        radio.forEach(function (item) {
            item.addEventListener("click", () => {

                for (let i = 0; i < radio.length; i++) {
                    if (radio[i].checked) {
                        let val = radio[i].value;
                        btn.textContent = "Оплатить " + val;
                    }
                }
            });
        });
    }

    getValue();

    function tabsSet(tabClass, contentClass) {
        let tabs = Array.from(document.querySelectorAll(tabClass)),
            tabsContent = Array.from(document.querySelectorAll(contentClass));

        /* console.log(tabs); */

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
                    
                    if(e.target == tabs[i]) {
                        hideContent(0);
                        showContent(i);
                    }
                }
            });
        });
    }

    tabsSet(".action__tabs", ".action__content");
    tabsSet(".action-modal__label", ".action-modal__content");
    
    
});