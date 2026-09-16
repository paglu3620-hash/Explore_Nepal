<script>

const filterButtons = document.querySelectorAll(".filter-btn");
const destinationCards = document.querySelectorAll(".destination-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        // Get selected category
        const filterValue = button.getAttribute("data-filter");

        // Filter destination cards
        destinationCards.forEach(card => {

            const cardCategory = card.getAttribute("data-category");

            if (filterValue === "all" || cardCategory === filterValue) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }

        });

    });

});

</script>