//----------------
// CPS Calculator
//----------------

//----------
// Variables
//----------

const startButton = document.getElementById('startButton');
const clickButton = document.getElementById('clickButton');
const cpsDisplay = document.getElementById('cpsDisplay');
const timerDisplay = document.getElementById('timerDisplay');

let clicks = 0;
let isStarted = false;
let timerId = null;
let timeLeft = 5;
const totalTime = 5;

//-----------
// Event Listeners
//-----------

startButton.addEventListener('click', start);
clickButton.addEventListener('click', increaseCps);

//----------
// Functions
//----------

function start() {
    if (isStarted) return; // prevent double start

    // reset state
    clicks = 0;
    updateText(cpsDisplay, clicks);
    startButton.disabled = true;
    clickButton.disabled = true; // disable until "Go!"

    // Show Ready/Set/Go
    const readySetGo = ["Ready", "Set", "Go!"];
    let step = 0;

    const rsgInterval = setInterval(() => {
        updateText(timerDisplay, readySetGo[step]);
        step++;

        if (step >= readySetGo.length) {
            clearInterval(rsgInterval);
            // Start actual timer after "Go!"
            beginCountdown();
        }
    }, 1000);
}

// Actual countdown function
function beginCountdown() {
    isStarted = true;
    timeLeft = totalTime;
    clickButton.disabled = false;
    updateText(timerDisplay, timeLeft);

    timerId = setInterval(() => {
        timeLeft--;
        updateText(timerDisplay, timeLeft);

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timerId);
    isStarted = false;
    startButton.disabled = false;
    clickButton.disabled = true;

    const cps = (clicks / totalTime).toFixed(2);
    updateText(cpsDisplay, cps);
}

function increaseCps() {
    if (!isStarted) return;
    clicks++;
    updateText(cpsDisplay, clicks); // show raw clicks while playing
}

function updateText(element, text) {
    element.innerText = text;
}
