window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    
    function launchTimer() {

        function getTime() {
            let deadline = "2024-10-8",
                t = Date.parse(deadline) - Date.parse(new Date()),
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / 1000 / 60 / 60) % 24),
                days = Math.floor(t /1000 / 60 / 60 / 24);
            
            return{
                "total" :  t,
                "seconds" : seconds,
                "minutes" : minutes,
                "hours" : hours,
                "days" : days
            };
        }
    
        function setTime() {
            let days = document.querySelector(".action__days"),
                hours = document.querySelector(".action__hours"),
                minutes = document.querySelector(".action__minutes"),
                seconds = document.querySelector(".action__seconds");
                
            function updateTime() {
                let get = getTime();
                days.textContent = get.days;
                hours.textContent = get.hours;
                minutes.textContent = get.minutes;
                seconds.textContent = get.seconds;
    
                function plusZero(timeItem,value) {
                    if (value < 10) {
                        timeItem.textContent = "0" + value;
                    } else {
                        timeItem.textContent = value;
                    }
                }
    
                plusZero(days, get.days);
                plusZero(hours, get.hours);
                plusZero(minutes, get.minutes);
                plusZero(seconds, get.seconds);
    
                if (get.total <= 0) {
                    clearInterval(int);
                    days.textContent = "00";
                    hours.textContent = "00";
                    minutes.textContent = "00";
                    seconds.textContent = "00"; 
                }
            }  
    
            let int = setInterval(updateTime, 1000);
        }
    
        setTime();
    }

    launchTimer();
    
    
    function getValue() {
        let radio = document.querySelectorAll("input[type='radio'][name=couple]"),
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


    function setTabs(tabClass, contentClass) {
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
                    
                    if(e.target == tabs[i]) {
                        hideContent(0);
                        showContent(i);
                    }
                }
            });
        });
    }

    setTabs(".action__tabs", ".action__content");
    setTabs(".action-modal__label", ".action-modal__content");

});