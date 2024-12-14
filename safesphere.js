const title = document.getElementById("dynamicTitle");
const originalText = title.innerHTML;
let counter = 0;

function crazyTitleEffect() {
    const colors = ["#f1683a", "#ff7850", "#60eb71", "#4ca3ff"];
    title.style.color = colors[counter % colors.length];
    counter++;
}
setInterval(crazyTitleEffect, 500);

function highlightService(element) {

    const services = document.querySelectorAll(".service");
    services.forEach(service => service.style.transform = "scale(1)");
    
    element.style.transform = "scale(1.2)";
}
