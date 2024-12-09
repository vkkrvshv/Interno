document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.querySelector("#burger-checkbox");
    const navbar = document.querySelector(".navbar");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            navbar.classList.add("active");
        } else {
            navbar.classList.remove("active");
        }
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".burger-menu") && !event.target.closest(".navbar")) {
            checkbox.checked = false;
            navbar.classList.remove("active");
        }
    });
});