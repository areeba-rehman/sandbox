
const counterElement = document.getElementById("counter");
const increaseBtn = document.getElementById("btn-increase");
const resetBtn = document.getElementById("btn-reset");
const decreaseBtn = document.getElementById("btn-decrease");


let counter = 0;


function updateCounter() {
    counterElement.textContent = counter;
}


increaseBtn.addEventListener("click", () => {
    counter++;
    updateCounter();
});


resetBtn.addEventListener("click", () => {
    counter = 0;
    updateCounter();
});


decreaseBtn.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
});


updateCounter();