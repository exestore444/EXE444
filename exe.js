// ===============================
// Smooth Page Fade In
// ===============================
document.body.style.opacity = 0;
window.addEventListener("load", () => {
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = 1;
});


// ===============================
// Custom Cursor Glow Effect
// ===============================
const cursor = document.createElement("div");
cursor.style.width = "15px";
cursor.style.height = "15px";
cursor.style.borderRadius = "50%";
cursor.style.background = "cyan";
cursor.style.position = "fixed";
cursor.style.pointerEvents = "none";
cursor.style.boxShadow = "0 0 20px cyan";
cursor.style.zIndex = "9999";
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


// ===============================
// Reveal Animation on Scroll
// ===============================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


// ===============================
// Animated Counter
// ===============================
function animateCounter(id, target) {
    let count = 0;
    const element = document.getElementById(id);
    const speed = target / 100;

    const interval = setInterval(() => {
        count += speed;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        element.innerText = Math.floor(count);
    }, 20);
}


// ===============================
// 3D Button Hover Effect
// ===============================
document.querySelectorAll(".btn-3d").forEach(btn => {
    btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        btn.style.transform =
            `rotateX(${-(y - rect.height / 2) / 10}deg)
             rotateY(${(x - rect.width / 2) / 10}deg)`;
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "rotateX(0) rotateY(0)";
    });
});
