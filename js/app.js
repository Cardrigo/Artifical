const menu = document.querySelector(".header__navbar");
const menuBtb = document.querySelector(".nav-icon");
const navBg = document.querySelector(".nav-bg")

const body = document.body;
function openMenu() {
    menu.classList.toggle("active");
    menuBtb.classList.toggle("_active");
    body.classList.toggle("_lock");
    navBg.classList.toggle("active");
}
window.addEventListener("click", function (e) {
    if (e.target.closest(".nav-icon") || e.target.classList.contains(".nav-icon") || e.target.closest(".nav-bg") || e.target.closest(".header-link")) {
        openMenu()
    }
})

var swiper = new Swiper('.swiper', {
    mouseboard: true,
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1500: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 25,

        },
        1750: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 25,

        },
        1028: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 25,

        },
        768: {
            slidesPerGroup: 1,
            slidesPerView: 2,
            spaceBetween: 25,

        },
        664: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 25,

        },
    },
});

let accor = document.querySelectorAll(".btn");

accor.forEach(btn => {
    btn.addEventListener("click", function () {
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            document.querySelectorAll(".contentBx").forEach(el => { el.style.maxHeight = null })
        } else {
            document.querySelectorAll(".contentBx").forEach(el => { el.style.maxHeight = null })
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
})