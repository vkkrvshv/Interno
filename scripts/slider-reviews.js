document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".reviews__card");
    let visibleCards;
    if (window.innerWidth > 576) {
        visibleCards = 2;
    }
    else if (window.innerWidth < 576) {
        visibleCards = 1;
    }
    let currentPage = 0;

    function updateCards() {
        cards.forEach((card, index) => {
            card.classList.remove("active");
            if (index >= currentPage * visibleCards && index < (currentPage + 1) * visibleCards) {
                card.classList.add("active");
            }
        });
        updateButtons();
    }

    const pagination = document.createElement("div");
    pagination.classList.add("pagination");

    const prevButton = document.createElement("button");
    prevButton.textContent = "Prev";
    prevButton.disabled = true;
    pagination.appendChild(prevButton);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    pagination.appendChild(nextButton);

    document.querySelector(".block__reviews").appendChild(pagination);

    function updateButtons() {
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = (currentPage + 1) * visibleCards >= cards.length;
    }

    prevButton.addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            updateCards();
        }
    });

    nextButton.addEventListener("click", function () {
        if ((currentPage + 1) * visibleCards < cards.length) {
            currentPage++;
            updateCards();
        }
    });

    window.addEventListener("resize", function () {
        const newVisibleCards = window.innerWidth > 576 ? 2 : 1;
        if (newVisibleCards !== visibleCards) {
            visibleCards = newVisibleCards;
            currentPage = 0;
            updateCards();
        }
    });

    updateCards();
});
