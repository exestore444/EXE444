// ===============================
// Typing Effect
// ===============================
const text = "Welcome to EXE Store 🔥";
let index = 0;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;

    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

window.addEventListener("load", typeEffect);


// ===============================
// Click Counter
// ===============================
let count = 0;

function increaseCount() {
    count++;
    const counter = document.getElementById("counter");
    if (counter) {
        counter.innerText = count;
    }
}


// ===============================
// Dark / Light Mode Toggle
// ===============================
function toggleMode() {
    document.body.classList.toggle("light-mode");
}


// ===============================
// Smooth Scroll
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});


// ===============================
// Popup Message
// ===============================
function showPopup() {
    alert("🔥 Welcome to EXE Store!");
}


// ===============================
// Dynamic Card Generator
// ===============================
function createCard() {
    const container = document.getElementById("card-container");
    if (!container) return;

    const card = document.createElement("div");
    card.style.padding = "20px";
    card.style.margin = "10px";
    card.style.background = "#222";
    card.style.color = "white";
    card.style.borderRadius = "10px";
    card.style.boxShadow = "0 0 10px cyan";
    card.innerText = "New Product Added 🚀";

    container.appendChild(card);
}


// ===============================
// Scroll Animation Effect
// ===============================
window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".animate");
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});
