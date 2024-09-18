window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    if (document.querySelector(".questions")) {

        let question = document.querySelectorAll(".questions__headline"),
            content = document.querySelectorAll(".questions__content"),
            plus = document.querySelectorAll(".questions__plus");

        let showContent = function showContent(a) {
            content[a].classList.toggle("questions__content_active");
            plus[a].classList.toggle("questions__plus_active");
        };

        let toClickItem = function toClickItem(clickItem) {
            clickItem.forEach((item) => {
                item.addEventListener("click", function (e) {

                    for (let i = 0; i < clickItem.length; i++) {
                        if (e.target == clickItem[i]) {
                            showContent(i);
                        }
                    }
                });
            });
        };

        toClickItem(plus);
        toClickItem(question);

    }
});


