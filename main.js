const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector('.primary-nav');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.setAttribute("aria-expanded", !primaryNav.hasAttribute("data-visible"));
        primaryNav.classList.toggle('is-open');
    });
}