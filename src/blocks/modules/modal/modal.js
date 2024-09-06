window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let btn = this.document.querySelector(".action__btn"),
        overlay = Array.from(this.document.querySelectorAll(".modal__overlay")),
        modal = this.document.querySelector(".action-modal");

    function showModal() {
        btn.addEventListener("click", function () {
            overlay.forEach(function (item) {
                item.style.display = "block";
            });
        });
    }

    showModal();

    function closeModal() {

    }

    function closeByOverclick() {
        overlay.forEach(function (item) {
            item.addEventListener("click", function (e) {
                let curentModal = e.target.closest(".modal");

                if (!curentModal) {
                    item.style.display = "none";
                }
            });
        });
    }

    closeByOverclick(); 

    


    
    
});