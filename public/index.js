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

let count = 0; 
let index = 0;

let currentText = ``;
let letter = ``;

(function typeWriter() {
    if (count === descriptionWords.length) {
        count = 0;
    }

    currentText = descriptionWords[count];
    
    letter = currentText.slice(0, ++index);

    textDelete.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(typeWriter, 200);
})();

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
