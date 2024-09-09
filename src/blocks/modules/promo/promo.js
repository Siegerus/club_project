window.addEventListener("DOMContentLoaded", function () {

    let overlay = document.querySelector(".join__overlay"),
        close = document.querySelector(".join__close");

    function launchModal(btnClass) {
        let btn = document.querySelectorAll(btnClass);

        function showModal() {
            btn.forEach((item) => {
                item.addEventListener("click", function () {
                    overlay.style.display = "block";
                });
            });
            
        }
    
        showModal();

    }
    launchModal(".promo__btn"); 
    launchModal(".join__btn");

    function closeModal() {
        close.addEventListener("click", function() {
            overlay.style.display = "none";
        });
    }

    closeModal();

    function closeByOverclick() {
        overlay.addEventListener("click", function (e) {
            let curentModal = e.target.closest(".modal");

            if (!curentModal) {
                overlay.style.display = "none";
            }
        });
    }

    closeByOverclick(); 
});