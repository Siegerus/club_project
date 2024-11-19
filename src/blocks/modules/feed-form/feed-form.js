import validate from "validate.js";

window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let message = {
            "error" : "Что то пошло не так :(",
            "loading" : "Отправка данных...",
            "done" : "Спасибо!"
        },
        messageBox = this.document.createElement("div"),
        modal = this.document.querySelectorAll(".modal__overlay"),
        blockVerify = document.querySelector(".autorization__verify"),
        blockPass = document.querySelector(".autorization__pass"),
        armorFirstForm = this.document.getElementById("armor-first-step"),
        reviewsForm = this.document.getElementById("reviews-form"),
        connectForm = this.document.getElementById("connect-form"),
        joinForm = this.document.getElementById("join-modal"),
        autorizationForm = this.document.getElementById("autorization"),
        forgetForm = this.document.getElementById("forget"),
        registrationForm = this.document.getElementById("registration");

    /* console.log(joinInputMail); */
    messageBox.classList.add("feed-form__messageBox");

    let submitForm = function (form, url) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let formData = new FormData(form);

            let request = new XMLHttpRequest();

            request.open("POST", url);
            request.send(formData);

            request.addEventListener("readystatechange", function () {
                if (request.readyState === 4 && request.status == 200) {
                    document.body.appendChild(messageBox);
                    messageBox.innerHTML = message.done;
                } else if (request.readyState < 4) {
                    document.body.appendChild(messageBox);
                    messageBox.innerHTML = message.loading;
                } else {
                    document.body.appendChild(messageBox);
                    messageBox.innerHTML = message.error;
                }
                document.body.addEventListener("click", function () { 
                    if (document.body.querySelector(".feed-form__messageBox")) {
                        document.body.removeChild(messageBox);
                    } 
                });
            });

            if (form.id == ("join-modal")) {
                let joinInputMail = document.getElementById("join-email"),
                    joinInputMailVal = joinInputMail.value; 
            
                console.log(joinInputMailVal);
            
                let userConstraints = {
                    email: { 
                        presence: true, 
                        email: true 
                    }
                };

                let userInput = {
                    email : joinInputMailVal
                }; 
            
                let validationResult = validate(userInput, userConstraints);

                if (validationResult) {
                    console.error("Validation failed:", validationResult);
                } else {
                    console.log("Validation succeeded:", joinInputMailVal);
                }
            }
            /* if (form.id == ("registration")) {
            } */

            if (form.id == ("forget")) {
                request.addEventListener("readystatechange", function () {
                    if (request.readyState === 4 && request.status == 200) {
                        blockPass.style.display = "none";
                        blockVerify.style.display = "block";
                        if (document.body.querySelector(".feed-form__messageBox")) {
                            document.body.removeChild(messageBox);
                        } else if (request.readyState < 4) {
                            document.body.appendChild(messageBox);
                            messageBox.innerHTML = message.loading;
                        } else {
                            document.body.appendChild(messageBox);
                            messageBox.innerHTML = message.error;
                        }
                    } 
                });
            }

            form.reset();
            modal.forEach((item) => {
                item.style.display = "none";

            });
        });
    };








    if (document.querySelector(".modal")) {
        submitForm(joinForm, "/php/telegram/telegram-join.php");
        submitForm(armorFirstForm, "/php/telegram/telegram-armorFirst.php");
    } else {
        alert("Incorrect email");
    }

    if (document.querySelector(".reviews")) {
        submitForm(reviewsForm, "/php/telegram/telegram-reviews.php");
    }
    if (document.querySelector(".connect")) {
        submitForm(connectForm, "/php/telegram/telegram-connect.php");
    }
    if (document.querySelector(".autorization")) {
        submitForm(registrationForm, "/php/telegram/telegram-registration.php");
        submitForm(autorizationForm, "/php/telegram/telegram-autorization.php");
        submitForm(forgetForm, "/php/telegram/telegram-forget.php");
    }

    

    
});