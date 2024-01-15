const counterElement = document.getElementById('counter');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const increaseButton = document.getElementById('increase');
let counter = 0;

//! svolgimento

counterElement.innerText = counter;


const checkCounterStatus = () => {
    if (counter < 0) {
        counterElement.style.color = 'red';
    } else if (counter > 0) {
        counterElement.style.color = 'green';
    } else {
        counterElement.style.color = 'black';
    }
}





//! event listener

decreaseButton.addEventListener('click', ()=> {
    counterElement.innerText = --counter;
    checkCounterStatus();
});


resetButton.addEventListener('click', ()=> {
    counter = 0;
    counterElement.innerText = counter;
    checkCounterStatus();
});


increaseButton.addEventListener('click', ()=> {
    counterElement.innerText = ++counter;
    checkCounterStatus();
});