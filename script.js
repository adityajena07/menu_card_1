document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const menuItems = document.querySelectorAll(".menu-item");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons and add it to the clicked button
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            // Get the selected category
            const category = button.getAttribute("data-category");

            // Show or hide menu items based on the selected category
            menuItems.forEach((item) => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block"; // Show the item
                } else {
                    item.style.display = "none"; // Hide the item
                }
            });
        });
    });
});