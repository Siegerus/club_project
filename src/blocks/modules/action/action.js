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


    function TabsSet() {
        let tabsParent = document.querySelector(".action__tabs-wrap"),
            tabs = Array.from(document.querySelectorAll(".action__tabs")),
            tabsContent = Array.from(document.querySelectorAll(".action__content"));

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
                    tabs[i].classList.remove("action__tabs_active");
                    this.classList.add("action__tabs_active");

                    if(e.target == tabs[i]) {
                        hideContent(0);
                        showContent(i);
                    }
                }
            });
        });

    }

    TabsSet();




    function modalTabsSet() {
        let tabs = Array.from(document.querySelectorAll(".action-modal__label")),
            content = Array.from(document.querySelectorAll(".action-modal__content"));

        function hideModalContent(b) {
            for (let a = b; a < content.length; a++) {
                content[a].classList.remove("show");
                content[a].classList.add("hide");
            }
        }

        hideModalContent(1);

        function showModalContent(c) {
            if (content[c].classList.contains("hide")) {
                content[c].classList.remove("hide");
                content[c].classList.add("show");
            }
        }

        tabs.forEach((item) => {
            item.addEventListener("click", function(e) {
                for (let i = 0; i < tabs.length; i++) {
                    if (e.target == tabs[i]) {
                        hideModalContent(0);
                        showModalContent(i);
                    }
                }
            });
        });  
    }

    modalTabsSet();

    
});