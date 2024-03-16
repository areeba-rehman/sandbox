const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];



document.getElementById("open-modal-btn").addEventListener("click", () => {
    modal.style.display = "block";
});


closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});