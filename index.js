// Initialize counter value
let value = 0;

// Button and element references
const button1 = document.getElementById('increaseButton');
const button2 = document.getElementById('decreaseButton');
const button3 = document.getElementById('resetButton');
const counter = document.getElementById('counter');

const cpsButton = document.getElementById('cpsButton');
const cpsDisplay = document.getElementById('cpsDisplay');
const timerDisplay = document.getElementById('timerDisplay');

// CPS (Clicks Per Second) tracking variables
let cpsCounter = 0;
let timeLeft = 5;
let timerId = null;
let timerRunning = false;
let cpsCalculated = 0;

// Increase counter
button1.addEventListener('click', () => {
    value++;
    counter.innerText = value;
});

// Decrease counter
button2.addEventListener('click', () => {
    value--;
    counter.innerText = value;
});

// Reset counter
button3.addEventListener('click', () => {
    value = 0;
    counter.innerText = value;
});

// Handle CPS test
cpsButton.addEventListener('click', () => {
    if (!timerRunning) {
        timerRunning = true;
        cpsCounter = 1;
        timerId = setInterval(() => {
            timeLeft--;
            timerDisplay.innerText = timeLeft;

            if (timeLeft === 0) {
                cpsCalculated = cpsCounter / 5;
                cpsDisplay.innerText = cpsCalculated.toFixed(2);
                timerRunning = false;
                timeLeft = 5;
                timerDisplay.innerText = timeLeft;
                clearInterval(timerId);
                cpsButton.disabled = true;

                // Re-enable CPS button after 3 seconds
                setTimeout(() => {
                    cpsButton.disabled = false;
                }, 3000);
            }
        }, 1000); // Run every second
    } else {
        cpsCounter++; // Count additional clicks during timer
    }
});
