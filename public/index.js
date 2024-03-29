// jshint esversion:6

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

// Navbar Hamburger Menu

const hamburgerMenu = document.querySelector(".hamburger");
const navbarLinks = document.querySelector(".navbar-links");

hamburgerMenu.addEventListener("click", () => {
    navbarLinks.classList.toggle("burger-active");
});

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

const switchBox = document.querySelector(".switch-box");
const switchCircle = document.querySelector(".switch-circle");

switchCircle.addEventListener("click", () => {
    switchCircle.classList.add("click-switch-circle");
    switchBoxFill();
    setTimeout(() => {
        switchCircle.classList.remove("click-switch-circle");
        switchCircle.classList.add("switch-circle-smooth-return");
        switchBoxUnfill();
    }, 500);
    switchCircle.classList.remove("switch-circle-smooth-return");
});

const switchBoxFill = () => {
    switchBox.classList.add("switch-bg");
};

const switchBoxUnfill = () => {
    switchBox.classList.remove("switch-bg");
};

// Smooth Scroll

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
});

// Scroll Spy

let spy = new Gumshoe("nav ul li a");

// Contact form :focus functionality

const firstNameForm = document.querySelector(".firstNameField");
const lastNameForm = document.querySelector(".lastNameField");
const emailForm = document.querySelector(".emailField");

// First Name Field

const contactInputFirstNameFocus = () => {
    firstNameForm.removeAttribute("placeholder");
};

const contactInputFirstNameBlur = () => {
    firstNameForm.setAttribute("placeholder", "First Name");
};

// Last Name Field

const contactInputLastNameFocus = () => {
    lastNameForm.removeAttribute("placeholder");
};

const contactInputLastNameBlur = () => {
    lastNameForm.setAttribute("placeholder", "Last Name");
};

// Email Field

const contactInputEmailFocus = () => {
    emailForm.removeAttribute("placeholder");
};

const contactInputEmailBlur = () => {
    emailForm.setAttribute("placeholder", "Email");
};

// Copyright Year

const copyrightYear = document.querySelector(".copyrightYear");
const year = new Date().getFullYear();

copyrightYear.textContent = year;