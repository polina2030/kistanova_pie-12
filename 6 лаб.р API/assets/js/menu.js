
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hamburger-menu").addEventListener("click", () => {
        let navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("show-menu");
    });
});



