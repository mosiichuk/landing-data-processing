document.addEventListener('DOMContentLoaded', function () {
    initMenuBurger();
});

document.addEventListener("scroll", () => {
    const header = document.getElementById('header');

    if (window.pageYOffset > 50) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
});

function initMenuBurger() {
    let menuDisplayToggle = document.querySelector("#menuToggle input"),
        menu = document.querySelector(".menu");

    menuDisplayToggle.addEventListener("change", () => {
        if (menuDisplayToggle.checked) {
            menu.classList.add("menu-active");
        } else {
            menu.classList.remove("menu-active");
        }
    })
}
