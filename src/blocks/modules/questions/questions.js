window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    if (document.querySelector(".questions")) {

        let question = document.querySelectorAll(".questions__headline"),
            questionBox = document.querySelectorAll(".questions__box"),
            content = document.querySelectorAll(".questions__content"),
            plus = document.querySelectorAll(".questions__plus"),
            screenWidth = document.documentElement.clientWidth;

        let showContent = function (a) {
            content[a].classList.toggle("questions__content_active");
            plus[a].classList.toggle("questions__plus_active");
            questionBox[a].classList.toggle("questions__box_active");

            if(screenWidth > 1200) {
                if(questionBox[a].classList.contains("questions__box_active")) {
                    questionBox[a].style.maxHeight = (content[a].clientHeight + 103) + "px";
                } else {   
                    questionBox[a].style.maxHeight = 103 + "px";  
                }
            }
            if(screenWidth < 1201) {
                if(questionBox[a].classList.contains("questions__box_active")) {
                    questionBox[a].style.maxHeight = (content[a].clientHeight + 97) + "px";
                } else {   
                    questionBox[a].style.maxHeight = 97 + "px";  
                }
            }
            if(screenWidth < 993) {
                if(questionBox[a].classList.contains("questions__box_active")) {
                    questionBox[a].style.maxHeight = (content[a].clientHeight + 92) + "px";
                } else {   
                    questionBox[a].style.maxHeight = 92 + "px";  
                }
            }
            if(screenWidth < 577) {
                if(questionBox[a].classList.contains("questions__box_active")) {
                    questionBox[a].style.maxHeight = (content[a].clientHeight + 74) + "px";
                } else {   
                    questionBox[a].style.maxHeight = 74 + "px";  
                }
            }
        };

        let toClickItem = function (clickItem) {
            clickItem.forEach((item, i) => {
                item.addEventListener("click", function () {
                    showContent(i);
                });
            });
        };

        toClickItem(plus);
        toClickItem(question);
    }
});


