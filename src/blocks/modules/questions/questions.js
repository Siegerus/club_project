window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    if (document.querySelector(".questions")) {

        let questionBox = document.querySelectorAll(".questions__box"),
            content = document.querySelectorAll(".questions__content"),
            plus = document.querySelectorAll(".questions__plus"),
            screenWidth = document.documentElement.clientWidth;

        let showContent = function (a) {
            if(questionBox[a].classList.contains("questions__box_active")) {
                content[a].classList.add("questions__content_active");
                plus[a].classList.add("questions__plus_active");
            } else {
                content[a].classList.remove("questions__content_active");
                plus[a].classList.remove("questions__plus_active");
            }
            

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
            clickItem.forEach((item) => {
                item.addEventListener("click", function () {
                    for(let i = 0; i < clickItem.length; i++) {
                        clickItem[i].classList.remove("questions__box_active");
                        this.classList.add("questions__box_active");                
                        showContent(i);
                    }
                });
            });
        };
        
        toClickItem(questionBox);

    }
});


