// Mobile Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Typing Effect
const text = "Educator & Mentor";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").textContent += text.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
    }
}

typingEffect();

// Contact Message
function showMessage() {
    alert("Thank you for contacting me!");
}