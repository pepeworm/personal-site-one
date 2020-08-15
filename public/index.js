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
    scrollbarThumbBorderRadius();
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

var spy = new Gumshoe("#navbar ul li a");

// Contact form :focus functionality

const nameForm = document.querySelector(".nameField");
const emailForm = document.querySelector(".emailField");

const contactInputNameFocus = () => {
    nameForm.removeAttribute("placeholder");
};

const contactInputNameBlur = () => {
    nameForm.setAttribute("placeholder", "Name");
};

const contactInputEmailFocus = () => {
    emailForm.removeAttribute("placeholder");
};

const contactInputEmailBlur = () => {
    emailForm.setAttribute("placeholder", "Email");
};

// Media Query

const blobRemoveSmall = (screenWidth, width) => {
    const blobs = document.querySelectorAll(".blob");
    if (screen.width < width) {
        for (let i = 0; i < blobs.length; i++) {
            blobs[i].remove();
        }
    }
};

const blobRemoveSmallWidth = window.matchMedia("(max-width: 890px)");
blobRemoveSmall(blobRemoveSmallWidth, 890);
blobRemoveSmallWidth.addListener(blobRemoveSmall);

const blobRemoveLarge = (
    screenWidthMin,
    screenWidthMax,
    widthMin,
    widthMax
) => {
    if (screen.width >= widthMin) {
        document.querySelector(".contact-blob-one").remove();
    }

    if (screen.width >= widthMax) {
        document.querySelector(".about-blob-one").remove();
        document.querySelector(".about-blob-two").remove();
    }
};

const blobRemoveLgMinWidth = window.matchMedia("(min-width: 1700px)");
const blobRemoveLgMaxWidth = window.matchMedia("(min-width: 2500px)");
blobRemoveLarge(blobRemoveLgMinWidth, blobRemoveLgMaxWidth, 1700, 2500);
blobRemoveLgMinWidth.addListener(blobRemoveLarge);
blobRemoveLgMaxWidth.addListener(blobRemoveLarge);