// Navbar scroll color change

const navbar = document.querySelector("nav");

window.onscroll = () => {
    let topDistance = window.scrollY;
    if (topDistance >= 80) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
};

// Description text writer effect

const textDelete = document.querySelector(".text-delete");
const descriptionWords = ["Web Developer", "Bot Developer"];

(function textWriter() {})();

// Switch

const switchCircle = document.querySelector(".switch-circle");

switchCircle.addEventListener("click", () => {
    switchCircle.classList.add("click-switch-circle");
    setTimeout(() => {
        switchCircle.classList.remove("click-switch-circle");
        switchCircle.classList.add("switch-circle-smooth-return");
    }, 500);
    switchCircle.classList.remove("switch-circle-smooth-return");
});
