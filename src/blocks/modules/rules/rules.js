window.addEventListener("DOMContentLoaded", function() {

    "use strict";
    
    if (document.body.querySelector(".rules")) {

        let rulesSection = document.querySelector(".rules"),
            rulesList = rulesSection.querySelector(".rules__list"),
            rulesContinue = rulesSection.querySelector(".rules__continue");
            
        rulesList.style.display = "none";
        
        rulesContinue.addEventListener("click", function() {
            this.style.display = "none";
            rulesList.classList.add("animation__type__fade");
            rulesList.style.display = "block";
        });
    }
});