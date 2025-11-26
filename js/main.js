// ----- NAV LINKS -----
const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" }
];

const desktopNav = document.getElementById("desktop-nav");
const mobileNav = document.getElementById("mobile-nav-links");

// Fill links into both nav menus
navLinks.forEach(link => {
    let a1 = document.createElement("a");
    a1.href = `#${link.id}`;
    a1.className = "text-gray-700 hover:text-indigo-600 font-medium";
    a1.textContent = link.name;
    desktopNav.appendChild(a1);

    let a2 = document.createElement("a");
    a2.href = `#${link.id}`;
    a2.className = "text-gray-700 text-lg p-2 rounded hover:bg-gray-200";
    a2.textContent = link.name;
    mobileNav.appendChild(a2);
});


// ----- SCROLL HEADER SHRINK -----
const header = document.getElementById("header-nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
});


// ----- MOBILE MENU -----
const mobileButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

mobileButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");

    menuIcon.classList.toggle("hidden", isOpen);
    closeIcon.classList.toggle("hidden", !isOpen);
});


// ----- THEME TOGGLE -----
const themeToggle = document.getElementById("theme-toggle");
let theme = "ENG";

themeToggle.addEventListener("click", () => {
    theme = theme === "ENG" ? "CS" : "ENG";
    themeToggle.textContent = `Theme: ${theme}`;

    if (theme === "CS") {
        document.body.classList.add("bg-cs-bg", "text-cs-accent");
    } else {
        document.body.classList.remove("bg-cs-bg", "text-cs-accent");
    }
});
