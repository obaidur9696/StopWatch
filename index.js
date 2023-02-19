let hours = 0;
let minutes = 0;
let seconds = 0;
let centiseconds = 0;
let timer;

// Get elements from HTML
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const centisecondsEl = document.getElementById("centiseconds");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const hourBtn = document.getElementById("hourBtn");

// Add event listeners to buttons
startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
hourBtn.addEventListener("click", incrementHours);

// Start the stopwatch
function startStopwatch() {
  timer = setInterval(() => {
    centiseconds++;
    if (centiseconds >= 100) {
      seconds++;
      centiseconds = 0;
    }
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes >= 60) {
      hours++;
      minutes = 0;
    }
    updateStopwatch();
  }, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

// Stop the stopwatch
function stopStopwatch() {
  clearInterval(timer);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// Reset the stopwatch
function resetStopwatch() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  centiseconds = 0;
  updateStopwatch();
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// Increment hours
function incrementHours() {
  hours++;
  updateStopwatch();
}

// Update the stopwatch display
function updateStopwatch() {
  hoursEl.innerHTML = (hours < 10 ? "0" : "") + hours;
  minutesEl.innerHTML = (minutes < 10 ? "0" : "") + minutes;
  secondsEl.innerHTML = (seconds < 10 ? "0" : "") + seconds;
  centisecondsEl.innerHTML = (centiseconds < 10 ? "0" : "") + centiseconds;
}
