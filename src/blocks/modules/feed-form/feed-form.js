import validate from "validate.js";

window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    
    let message = {
            "error": "Что то пошло не так :(",
            "loading": "Отправка данных...",
            "done": "Спасибо!"
        },
        messageBox = this.document.createElement("div"),
        modal = this.document.querySelectorAll(".modal__overlay"),
        verifyForm = document.getElementById("verify"),
        armorFirstForm = this.document.getElementById("armor-first-step"),
        reviewsForm = this.document.getElementById("reviews-form"),
        connectForm = this.document.getElementById("connect-form"),
        joinForm = this.document.getElementById("join-modal"),
        autorizationForm = this.document.getElementById("autorization"),
        forgetForm = this.document.getElementById("forget"),
        registrationForm = this.document.getElementById("registration");

    messageBox.classList.add("feed-form__messageBox");
    messageBox.classList.add("animation__type__fade");

    validate.validators.email.options = { message: "^Введите корректный Email" };
    validate.validators.presence.options = { message: "^Обязательно к заполнению" };
    validate.validators.equality.options = { message: "^Пароли не совпадают" };
    validate.options = { format: "grouped" };

    let submitForm = function (form, url) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let formData = new FormData(form);
            let request = new XMLHttpRequest();

            let sendRequest = function () {
                request.open("POST", url);
                request.send(formData);

                request.addEventListener("readystatechange", function () {
                    if (request.readyState === 4 && request.status == 200) {
                        document.body.appendChild(messageBox);
                        messageBox.innerHTML = message.done;
                        form.reset();
                        modal.forEach((item) => item.style.display = "none");
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
            };

            let toReplace = function() {
                location.replace("/index.html");  
            };

            if (form.id == ("join-modal")) {
                let mailVal = document.getElementById("join-email").value,
                    rulesVal = document.getElementById("join-modal-checkbox").checked,
                    mailErrorBox = document.querySelector(".feed-form__errorBox_join-email"),
                    rulesErrorBox = document.querySelector(".feed-form__errorBox_join-modal-checkbox"),
                    ErrorBox = joinForm.querySelectorAll(".feed-form__errorBox"),
                    inputs = {
                        email: mailVal,
                        rules: rulesVal,
                    },
                    constraints = {
                        email: {
                            presence: true,
                            email: true,
                        },
                        rules: {
                            presence: true,
                            type: {
                                type: function (checked) {
                                    return checked == true;
                                },
                                message: "^Ознакомьтесь с правилами клуба"
                            }
                        },
                    },
                    validationResult = validate(inputs, constraints);

                if (validationResult) {
                    joinForm.querySelectorAll("input").forEach((item) => item.style.border = "solid 2px #ff5656");
                    ErrorBox.forEach((item) => item.style.display = "block");
                    mailErrorBox.textContent = validationResult.email;
                    rulesErrorBox.textContent = validationResult.rules;

                } else {
                    joinForm.querySelectorAll("input").forEach((item) => item.style.border = "none");
                    ErrorBox.forEach((item) => item.style.display = "none");
                    ErrorBox.forEach((item) => item.textContent = "");
                    sendRequest();
                }
            }

            if (form.id == ("armor-first-step")) {
                let userVal = validate.collectFormValues(armorFirstForm).name,
                    ageVal = validate.collectFormValues(armorFirstForm).age,
                    costVal = validate.collectFormValues(armorFirstForm).couple,
                    coupleVal = validate.collectFormValues(armorFirstForm).sex,
                    userErrorBox = document.querySelector(".feed-form__errorBox_armor-name"),
                    coupleErrorBox = document.querySelector(".feed-form__errorBox_armor-couple"),
                    ageErrorBox = document.querySelector(".feed-form__errorBox_armor-age"),
                    costErrorBox = document.querySelector(".feed-form__errorBox_armor-price"),
                    ErrorBox = armorFirstForm.querySelectorAll(".feed-form__errorBox"),
                    inputs = {
                        couple: coupleVal,
                        username: userVal,
                        age: ageVal,
                        cost: costVal,
                    },
                    constraints = {
                        couple: {
                            presence: {
                                allowEmpty: false,
                                message: "^Выберите пол"
                            },
                        },
                        username: {
                            presence: true,
                            length: {
                                minimum: 3,
                                maximum: 40,
                                message: "^Введите от 3 до 40 символов"
                            }
                        },
                        age: {
                            presence: true,
                            length: {
                                minimum: 2,
                                maximum: 2,
                                message: "^Укажите корректный возраст"
                            },
                            numericality: {
                                onlyInteger: true,
                                greaterThan: 17,
                                message: "^Вам должно быть не меньше 18ти"
                            },
                        },
                        cost: {
                            presence: {
                                allowEmpty: false,
                                message: "^Выберите тип билета"
                            }
                        }
                    },
                    validationResult = validate(inputs, constraints);

                if (validationResult) {
                    armorFirstForm.querySelectorAll("input").forEach((item) => item.style.borderColor = "#ff5656");
                    ErrorBox.forEach((item) => item.style.display = "block");
                    coupleErrorBox.textContent = validationResult.couple;
                    userErrorBox.textContent = validationResult.username;
                    ageErrorBox.textContent = validationResult.age;
                    costErrorBox.textContent = validationResult.cost;
                } else {
                    armorFirstForm.querySelectorAll("input").forEach((item) => item.style.borderColor = "#915c46");
                    ErrorBox.forEach((item) => item.style.display = "none");
                    ErrorBox.forEach((item) => item.textContent = "");
                    sendRequest();
                }
            }

            if (form.id == ("reviews-form")) {
                let eventVal = validate.collectFormValues(reviewsForm).event,
                    userVal = validate.collectFormValues(reviewsForm).user,
                    messageVal = validate.collectFormValues(reviewsForm).message,
                    rateVal = validate.collectFormValues(reviewsForm).rate,
                    eventErrorBox = document.querySelector(".feed-form__errorBox_reviews-event"),
                    userErrorBox = document.querySelector(".feed-form__errorBox_reviews-user"),
                    messageErrorBox = document.querySelector(".feed-form__errorBox_reviews-message"),
                    rateErrorBox = document.querySelector(".feed-form__errorBox_reviews-rate"),
                    ErrorBox = reviewsForm.querySelectorAll(".feed-form__errorBox"),
                    inputs = {
                        event: eventVal,
                        user: userVal,
                        message: messageVal,
                        rate: rateVal
                    },
                    constraints = {
                        event: {
                            presence: true
                        },
                        user: {
                            presence: true,
                            length: {
                                minimum: 3,
                                maximum: 40,
                                message: "^Введите от 3 до 40 символов"
                            }
                        },
                        message: {
                            presence: true,
                            length: {
                                minimum: 10,
                                maximum: 500,
                                message: "^Введите от 10 до 500 символов"
                            }
                        },
                        rate: {
                            presence: true
                        }
                    },
                    validationResult = validate(inputs, constraints);

                if (validationResult) {
                    reviewsForm.querySelectorAll("input").forEach((item) => item.style.borderColor = "#ff5656");
                    reviewsForm.querySelector("textarea").style.borderColor = "#ff5656";
                    reviewsForm.querySelector("select").style.borderColor = "#ff5656";
                    ErrorBox.forEach((item) => item.style.display = "block");
                    eventErrorBox.textContent = validationResult.event;
                    userErrorBox.textContent = validationResult.user;
                    messageErrorBox.textContent = validationResult.message;
                    rateErrorBox.textContent = validationResult.rate;
                } else {
                    reviewsForm.querySelectorAll("input").forEach((item) => item.style.borderColor = "#915c46");
                    reviewsForm.querySelector("textarea").style.borderColor = "#915c46";
                    reviewsForm.querySelector("select").style.borderColor = "#915c46";
                    ErrorBox.forEach((item) => item.style.display = "none");
                    ErrorBox.forEach((item) => item.textContent = "");
                    sendRequest();
                }
            }

            if (form.id == ("registration")) {
                let checkboxVal = document.getElementById("sign-checkbox").checked,
                    emailVal = validate.collectFormValues(registrationForm).email,
                    selectVal = validate.collectFormValues(registrationForm).select,
                    passwordVal = validate.collectFormValues(registrationForm).password,
                    passwordConfVal = validate.collectFormValues(registrationForm).password_conf,
                    userVal = validate.collectFormValues(registrationForm).user,
                    checkboxErrorBox = document.querySelector(".feed-form__errorBox_sign-checkbox"),
                    emailErrorBox = document.querySelector(".feed-form__errorBox_sign-email"),
                    selectErrorBox = document.querySelector(".feed-form__errorBox_sign-select"),
                    passwordErrorBox = document.querySelector(".feed-form__errorBox_sign-password"),
                    passwordConfErrorBox = document.querySelector(".feed-form__errorBox_sign-password_conf"),
                    userErrorBox = document.querySelector(".feed-form__errorBox_sign-user"),
                    ErrorBox = registrationForm.querySelectorAll(".feed-form__errorBox"),
                    inputs = {
                        checkbox: checkboxVal,
                        select: selectVal,
                        password: passwordVal,
                        passwordConf: passwordConfVal,
                        user: userVal,
                        email: emailVal
                    },
                    constraints = {
                        checkbox: {
                            presence: true,
                            type: {
                                type: function (checked) {
                                    return checked == true;
                                },
                                message: "^Ознакомьтесь с политикой конфиденциальности"
                            }
                        },
                        select: {
                            presence: true
                        },
                        user: {
                            presence: true,
                            length: {
                                minimum: 3,
                                maximum: 40,
                                message: "^Введите от 3 до 40 символов"
                            }
                        },
                        email: {
                            presence: true,
                            email: true,
                        },
                        password: {
                            presence: true,
                            length: {
                                minimum: 6,
                                message: "^Пароль должен содержать не меньше 6 символов"
                            }
                        },
                        passwordConf: {
                            presence: true,
                            equality: "password"
                        }
                    },
                    validationResult = validate(inputs, constraints);

                if (validationResult) {
                    registrationForm.querySelectorAll("input").forEach((item) => item.style.borderColor = "#ff5656");
                    ErrorBox.forEach((item) => item.style.display = "block");
                    checkboxErrorBox.textContent = validationResult.checkbox;
                    emailErrorBox.textContent = validationResult.email;
                    passwordErrorBox.textContent = validationResult.password;
                    passwordConfErrorBox.textContent = validationResult.passwordConf;
                    userErrorBox.textContent = validationResult.user;
                    selectErrorBox.textContent = validationResult.select;
                } else {
                    registrationForm.querySelectorAll("input").forEach((item) => item.style.borderColor = "#915c46");
                    ErrorBox.forEach((item) => item.style.display = "none");
                    ErrorBox.forEach((item) => item.textContent = "");
                    sendRequest();
                }
            }

            if (form.id == ("autorization")) {
                let emailVal = validate.collectFormValues(autorizationForm).email,
                    passwordVal = validate.collectFormValues(autorizationForm).password,
                    checkboxVal = document.getElementById("autorization-checkbox").checked,
                    emailErrorBox = document.querySelector(".feed-form__errorBox_autorization-email"),
                    passwordErrorBox = document.querySelector(".feed-form__errorBox_autorization-password"),
                    checkboxErrorBox = document.querySelector(".feed-form__errorBox_autorization-checkbox"),
                    ErrorBox = autorizationForm.querySelectorAll(".feed-form__errorBox"),
                    inputs = {
                        email: emailVal,
                        password: passwordVal,
                        checkbox: checkboxVal
                    },
                    constraints = {
                        email: {
                            email: true,
                            presence: true
                        },
                        password: {
                            presence: true,
                            length: {
                                minimum: 6,
                                message: "^Пароль должен содержать не меньше 6 символов"
                            }
                        },
                        checkbox: {
                            presence: true,
                            type: {
                                type: function (checked) {
                                    return checked == true;
                                },
                                message: "^Ознакомьтесь с политикой конфиденциальности"
                            }
                        },
                    },
                    validationResult = validate(inputs, constraints);

                if (validationResult) {
                    autorizationForm.querySelectorAll("input").forEach((item) => item.style.borderColor = "#ff5656");
                    ErrorBox.forEach((item) => item.style.display = "block");
                    emailErrorBox.textContent = validationResult.email;
                    passwordErrorBox.textContent = validationResult.password;
                    checkboxErrorBox.textContent = validationResult.checkbox;
                } else {
                    autorizationForm.querySelectorAll("input").forEach((item) => item.style.borderColor = "#915c46");
                    ErrorBox.forEach((item) => item.style.display = "none");
                    ErrorBox.forEach((item) => item.textContent = "");
                    sendRequest();
                }
            }

            if (form.id == ("forget")) {
                let blockPass = document.querySelector(".autorization__pass"),
                    blockVerify = document.querySelector(".autorization__verify"),
                    emailVal = validate.collectFormValues(forgetForm).email,
                    emailErrorBox = document.querySelector(".feed-form__errorBox_forget-email"),
                    ErrorBox = forgetForm.querySelector(".feed-form__errorBox"),
                    inputs = { email: emailVal },
                    constraints = { email: { email: true, presence: true } },
                    validationResult = validate(inputs, constraints);

                if (validationResult) {
                    forgetForm.querySelector("input").style.borderColor = "#ff5656";
                    ErrorBox.style.display = "block";
                    emailErrorBox.textContent = validationResult.email;
                } else {                    
                    forgetForm.querySelector("input").style.borderColor = "#915c46";
                    ErrorBox.style.display = "none";
                    ErrorBox.textContent = "";

                    request.open("POST", url);
                    request.send(formData);

                    request.addEventListener("readystatechange", function () {
                        if (request.readyState === 4 && request.status == 200) {
                            blockPass.style.display = "none";
                            blockVerify.style.display = "block";
                            if (document.body.querySelector(".feed-form__messageBox")) {
                                document.body.removeChild(messageBox);
                            } else if (request.readyState < 4) {
                                document.body.appendChild(messageBox);
                                messageBox.innerHTML = message.loading;
                            }
                            document.body.addEventListener("click", function () {
                                if (document.body.querySelector(".feed-form__messageBox")) {
                                    document.body.removeChild(messageBox);
                                }
                            });
                        }
                    });
                }
            }

            if (form.id == ("verify")) {
                validate.options = { format: "flat" };
                let numberVal1 = validate.collectFormValues(verifyForm).code1,
                    numberVal2 = validate.collectFormValues(verifyForm).code2,
                    numberVal3 = validate.collectFormValues(verifyForm).code3,
                    numberVal4 = validate.collectFormValues(verifyForm).code4,
                    ErrorBox = verifyForm.querySelector(".feed-form__errorBox"),
                    inputs = {
                        number1: numberVal1,
                        number2: numberVal2,
                        number3: numberVal3,
                        number4: numberVal4,
                    },
                    constraints = {
                        number1: {
                            presence: true,
                        },
                        number2: {
                            presence: true,
                        },
                        number3: {
                            presence: true,
                        },
                        number4: {
                            presence: true,
                        },
                    },
                    validationResult = validate(inputs, constraints);
                if (validationResult) {
                    verifyForm.querySelectorAll("input").forEach((item) => item.style.outlineColor = "#ff5656");
                    ErrorBox.style.display = "block";
                    ErrorBox.textContent = validationResult;
                } else {
                    verifyForm.querySelectorAll("input").forEach((item) => item.style.outlineColor = "#915c46");
                    ErrorBox.style.display = "none";
                    ErrorBox.textContent = "";
                    sendRequest();
                    setTimeout(toReplace, 4000);
                }
            }

            if (form.id == ("connect-form")) {
                
                let userVal = validate.collectFormValues(connectForm).user,
                    emailVal = validate.collectFormValues(connectForm).email,
                    messageVal = validate.collectFormValues(connectForm).message,
                    userErrorBox = connectForm.querySelector(".feed-form__errorBox_connect-user"),
                    emailErrorBox = connectForm.querySelector(".feed-form__errorBox_connect-email"),
                    messageErrorBox = connectForm.querySelector(".feed-form__errorBox_connect-message"),
                    ErrorBox = connectForm.querySelectorAll(".feed-form__errorBox"),
                    inputs = {
                        user: userVal,
                        email: emailVal,
                        message: messageVal
                    },
                    constraints = {
                        user: {
                            presence: true,
                            length: {
                                minimum: 3,
                                maximum: 40,
                                message: "^Введите от 3 до 40 символов"
                            }
                        },
                        email: {
                            email: true,
                            presence: true
                        },
                        message: {
                            presence: true,
                            length: {
                                minimum: 10,
                                maximum: 500,
                                message: "^Введите от 10 до 500 символов"
                            }
                        }
                    },
                    validationResult = validate(inputs, constraints);

                if (validationResult) {
                    connectForm.querySelectorAll("input").forEach((item) => item.style.borderColor = "#ff5656");
                    connectForm.querySelector("textarea").style.borderColor = "#ff5656";
                    ErrorBox.forEach((item) => item.style.display = "block");
                    userErrorBox.textContent = validationResult.user;
                    emailErrorBox.textContent = validationResult.email;
                    messageErrorBox.textContent = validationResult.message;
                } else {
                    connectForm.querySelectorAll("input").forEach((item) => item.style.borderColor = "#915c46");
                    connectForm.querySelector("textarea").style.borderColor = "#915c46";
                    ErrorBox.forEach((item) => item.style.display = "none");
                    ErrorBox.forEach((item) => item.textContent = "");           
                }
            }
        });
    };

    if (document.querySelector(".modal")) {
        submitForm(joinForm, "/php/telegram/telegram-join.php");
        submitForm(armorFirstForm, "/php/telegram/telegram-armorFirst.php");

        let ageInputReplaced = armorFirstForm.querySelector("input[name=age]");
        ageInputReplaced.addEventListener("input", function () {
            this.value = this.value.replace(/[^0-9]/g, "");
        });
    }
    if (document.querySelector(".reviews")) {
        submitForm(reviewsForm, "/php/telegram/telegram-reviews.php");
    }
    if (document.querySelector(".connect")) {
        submitForm(connectForm, "/php/telegram/telegram-connect.php",);
    }
    if (document.querySelector(".autorization")) {
        submitForm(registrationForm, "/php/telegram/telegram-registration.php");
        submitForm(autorizationForm, "/php/telegram/telegram-autorization.php");
        submitForm(forgetForm, "/php/telegram/telegram-forget.php");
        submitForm(verifyForm, "/php/telegram/telegram-verify.php");

        let codeInputReplaced = verifyForm.querySelectorAll(".feed-form__input_number");
        codeInputReplaced.forEach((item) => {
            item.addEventListener("input", () => {
                item.value = item.value.replace(/[^0-9]/g, "");
            });
        });
    }
});