// Typing Animation
const words = ["Charles", "Developer", "Designer", "Networker", "Creator"];

function createTypingAnimation(element, words) {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        element.textContent = currentChar;

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(type, 250);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 100);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(type, 3200); // Reverted to original 3200ms
        }
    }

    type();
}

const typingElement1 = document.getElementById("Typing");
const typingElement2 = document.querySelector(".typing_ani");

if (typingElement1) {
    createTypingAnimation(typingElement1, words);
}
if (typingElement2) {
    createTypingAnimation(typingElement2, words);
}

// Header scroll
let lastScrollTop = 0;
const header = document.querySelector('header');
const logo = document.querySelector('.icon');

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll down
        header.style.top = "-100px";
    } else {
        // Scroll up
        header.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling

    if (this.window.scrollY > 20) {
        header.classList.add("scroll_header");
        logo.classList.add("logo_scrolled");
    } else {
        header.classList.remove("scroll_header");
        logo.classList.remove("logo_scrolled");
    }
});

// Buttons
const projectButtons = document.querySelectorAll('.buttons button');
const projectSections = document.querySelectorAll('.card');

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        const targetSection = document.getElementById(targetId);

        // Hide all project sections
        projectSections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the target section
        if (targetSection) {
            targetSection.style.display = 'flex';
        }

        // Update active button
        projectButtons.forEach(btn => {
            btn.classList.remove('active_button');
        });
        button.classList.add('active_button');
    });
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('header nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});