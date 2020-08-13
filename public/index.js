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

const text = document.querySelector(".text");
const cursor = document.querySelector(".cursor");

const textMsg = ["Web Developer", "Bot Developer"];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let wordIndex = 0;
let letterIndex = 0;

window.onload = () => {
    setTimeout(type, 250);
};

const type = () => {
    if (letterIndex < textMsg[wordIndex].length) {
        if (!cursor.classList.contains("cursor-typing")) {
            cursor.classList.add("cursor-typing");
        }

        text.textContent += textMsg[wordIndex].charAt(letterIndex);
        letterIndex++;

        setTimeout(type, typingDelay);
    } else {
        cursor.classList.remove("cursor-typing");
        setTimeout(deleteText, newTextDelay);
    }
};

const deleteText = () => {
    if (letterIndex > 0) {
        if (!cursor.classList.contains("cursor-typing")) {
            cursor.classList.add("cursor-typing");
        }

        text.textContent = textMsg[wordIndex].slice(0, letterIndex - 1);
        letterIndex--;

        setTimeout(deleteText, erasingDelay);
    } else {
        cursor.classList.remove("cursor-typing");
        wordIndex++;
        if (wordIndex >= textMsg.length) {
            wordIndex = 0;
        }
        if (textMsg.length) {
            setTimeout(type, typingDelay);
        }
    }
};

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
