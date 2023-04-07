var time = 0;
var interval;
var running = false;

function updateTime() {
  time++;
  var hours = Math.floor(time / 3600);
  var minutes = Math.floor((time - hours * 3600) / 60);
  var seconds = time - hours * 3600 - minutes * 60;
  var timeString =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
  document.getElementById("time-display").textContent = timeString;
}

function startStop() {
  if (running) {
    clearInterval(interval);
    running = false;
    document.getElementById("start-stop-btn").textContent = "Start";
  } else {
    interval = setInterval(updateTime, 1000);
    running = true;
    document.getElementById("start-stop-btn").textContent = "Stop";
  }
}

function reset() {
  time = 0;
  clearInterval(interval);
  running = false;
  document.getElementById("time-display").textContent = "00:00:00";
  document.getElementById("start-stop-btn").textContent = "Start";
}

document.getElementById("start-stop-btn").addEventListener("click", startStop);
document.getElementById("reset-btn").addEventListener("click", reset);
