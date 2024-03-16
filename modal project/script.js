const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];


function openModal() {
    modal.style.display = "block";
}


function closeModal() {
    modal.style.display = "none";
}


document.getElementById("open-modal-btn").addEventListener("click", openModal);


closeBtn.addEventListener("click", closeModal);