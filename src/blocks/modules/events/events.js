

let overlay = document.querySelector(".events__overlay"),
    close = document.querySelector(".events__close"),
    btn = document.querySelectorAll(".events__btn");



function showModal() {
    btn.forEach((item) => {
        item.addEventListener("click", function () {
            overlay.style.display = "block";
        });
    });

}

showModal();

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
