const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const links = navLinks.querySelectorAll("a");

let lastScrollTop = 0;

// Reload után tetejére ugrás
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Scroll shrink / expand
window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Aktív link beállítása URL alapján
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
