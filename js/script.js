document.addEventListener("DOMContentLoaded", () => {
    const navigationLinks = document.querySelectorAll(".main-nav a");
    const menuButton = document.querySelector(".primary-button");

    navigationLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    if (menuButton) {
        menuButton.addEventListener("click", () => {
            const menuSection = document.querySelector("#menu");

            if (menuSection) {
                menuSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }

    const menuCards = document.querySelectorAll(".menu-card");

    menuCards.forEach((card) => {
        card.addEventListener("click", () => {
            menuCards.forEach((item) => {
                item.classList.remove("selected");
            });

            card.classList.add("selected");
        });
    });
});
