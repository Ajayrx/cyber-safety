// Glitch Effect for Title
const title = document.getElementById("dynamicTitle");
const originalText = title.innerHTML;
let counter = 0;

// Crazy Title Color Cycle
function crazyTitleEffect() {
    const colors = ["#f1683a", "#ff7850", "#60eb71", "#4ca3ff"];
    title.style.color = colors[counter % colors.length];
    counter++;
}
setInterval(crazyTitleEffect, 500);

// Highlight Service Cards
function highlightService(element) {
    // Reset all service cards
    const services = document.querySelectorAll(".service");
    services.forEach(service => service.style.transform = "scale(1)");

    // Highlight clicked card
    element.style.transform = "scale(1.2)";
}
