document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("contact-btn");
    const estimateBtn = document.getElementById("estimate-btn");
    const popupForm = document.getElementById("popup-form");
    const popupForm1 = document.getElementById("popup-form-1");
    const closePopup = document.getElementById("close-popup");
    const closePopup1 = document.getElementById("close-popup-1");
    const contactForm = document.getElementById("contact-form");

    contactBtn.addEventListener("click", function () {
        popupForm.classList.remove("hidden");
    });

    estimateBtn.addEventListener("click", function () {
        popupForm1.classList.remove("hidden");
    });

    closePopup.addEventListener("click", function () {
        popupForm.classList.add("hidden");
    });

    closePopup1.addEventListener("click", function () {
        popupForm1.classList.add("hidden");
    });

    popupForm.addEventListener("click", function (event) {
        if (event.target === popupForm) {
            popupForm.classList.add("hidden");
            popupForm1.classList.add("hidden");
        }
    });

    popupForm1.addEventListener("click", function (event) {
        if (event.target === popupForm1) {
            popupForm1.classList.add("hidden");
        }
    });

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const agreement = document.getElementById("agreement").checked;

        if (!agreement) {
            alert("You need to agree to the processing of personal data!");
            return;
        }

        if (!email && !phone) {
            alert("Enter your email or phone number, please!");
            return;
        }

        alert("Thanks. Your request was sent");
        popupForm.classList.add("hidden");
        popupForm1.classList.add("hidden");
    });
});