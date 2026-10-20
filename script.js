const hamburger = document.querySelector(".hamburger")
let navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", function () { 
    navLinks.classList.toggle("open");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        navLinks.classList.remove("open");
    });
});