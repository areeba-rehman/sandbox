const colors = ["red", "pink", "green", "yellow"];
const colorBox = document.getElementById("color-box");
let currentIndex = 0;

colorBox.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % colors.length;
    colorBox.style.backgroundColor = colors[currentIndex];
    colorBox.textContent = colors[currentIndex].toUpperCase();
});

