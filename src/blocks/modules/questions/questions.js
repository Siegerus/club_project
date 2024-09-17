
"use strict";

let question = document.querySelectorAll(".questions__headline"),
    content = document.querySelectorAll(".questions__content"),
    /* contentBox = document.querySelectorAll(".questions__box"), */
    plus = document.querySelectorAll(".questions__plus");

function showContent(a) {
    content[a].classList.toggle("questions__content_active");  
    plus[a].classList.toggle("questions__plus_active");
    /* contentBox[a].classList.toggle("questions__box_active"); */
}

function toClickItem(clickItem) {
    clickItem.forEach((item) => {
        item.addEventListener("click", function (e) {

            for( let i = 0; i < clickItem.length; i++) {

                if (e.target == clickItem[i]) {
                    showContent(i);
                }
            }
        });
    });
}

toClickItem(plus);
toClickItem(question);
    
    

    

    
    




