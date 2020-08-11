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

(function textWriter() {
    
})();
