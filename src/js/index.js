import Counter from "./counter";

document.addEventListener('DOMContentLoaded', function () {
    initMenuBurger();
    initParticleSlider();
});

const counter = new Counter({
    startFromElementId: "stats",
    countersSelector: "#stats .stats-item .title span",
    offset: 500
});

document.addEventListener("scroll", () => {
    const header = document.getElementById('header');

    if (window.matchMedia('(max-width: 767.8px)').matches) {

        if (window.pageYOffset > 50) {
            header.classList.add("header-scroll");
        } else {
            header.classList.remove("header-scroll");
        }
    } else {
        header.classList.remove("header-scroll");
    }

    counter.onScroll();
});

function initParticleSlider() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        const ps = new ParticleSlider({
            ptlGap: 0,
            mouseForce: 100,
            monochrome: false,
            ptlSize: 0.5,
        });

        const ptl = new ps.Particle(ps);

        ptl.ttl = 20;
    }
}

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
