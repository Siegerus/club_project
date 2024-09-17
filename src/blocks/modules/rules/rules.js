

"use strict";

let rulesList = document.querySelector(".rules__list"),
    rulesContinue = document.querySelector(".rules__continue");


function rulesShow() {
    rulesList.style.display = "none";
    
    rulesContinue.addEventListener("click", () => {
        rulesList.classList.add("animation__fade");
        rulesList.style.display = "block";
    });
}

rulesShow();

