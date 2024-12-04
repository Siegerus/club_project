window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    if (document.body.querySelector(".action")) {

        let btn = document.querySelector(".action__btn"),
            modalWindow = document.querySelector(".action-modal"),
            close = document.querySelector(".action__close"),
            overlay = document.querySelector(".action__overlay");

        let showModal = function showModal() {
            btn.addEventListener("click", function () {
                overlay.style.display = "block";
                close.classList.add("animation__type__fade");
                modalWindow.classList.add("animation__type__fade_modal");
                overlay.classList.remove("animation__type__fadeOut_modal");
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

        let launchTimer = function launchTimer() {

            function getTime() {
                let deadline = "2025-01-1",
                    t = Date.parse(deadline) - Date.parse(new Date()),
                    seconds = Math.floor((t / 1000) % 60),
                    minutes = Math.floor((t / 1000 / 60) % 60),
                    hours = Math.floor((t / 1000 / 60 / 60) % 24),
                    days = Math.floor(t / 1000 / 60 / 60 / 24);

                return {
                    "total": t,
                    "seconds": seconds,
                    "minutes": minutes,
                    "hours": hours,
                    "days": days
                };
            }

            function setTime() {
                let days = Array.from(document.querySelectorAll(".action__days")),
                    hours = Array.from(document.querySelectorAll(".action__hours")),
                    minutes = Array.from(document.querySelectorAll(".action__minutes")),
                    seconds = Array.from(document.querySelectorAll(".action__seconds"));

                function updateTime() {
                    let get = getTime();

                    function setValue(timeItem, timeValue) {
                        for (let i = 0; i < timeItem.length; i++) {
                            timeItem[i].textContent = timeValue;
                            if (timeValue < 10) {
                                timeItem[i].textContent = "0" + timeValue;
                            } else {
                                timeItem[i].textContent = timeValue;
                            }

                            if (get.total <= 0) {
                                clearInterval(int);
                                timeItem[i].textContent = "00";
                            }
                        }
                    }

                    setValue(days, get.days);
                    setValue(hours, get.hours);
                    setValue(minutes, get.minutes);
                    setValue(seconds, get.seconds);
                }

                let int = setInterval(updateTime, 1000);
            }

            setTime();
        };

        launchTimer();

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

        setTabs(".action__tabs", ".action__content");
        setTabs(".action-modal__label", ".action-modal__content");
    }
});