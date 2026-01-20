
const timeEl = document.getElementById("live-time");
const greetingEl = document.getElementById("greeting");
const subTextEl = document.getElementById("sub-text");
const inputEl = document.getElementById("user-input");
const btnEl = document.getElementById("send-btn");

function updateTime() {
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString('en-US', { hour12: false });
  return now.getHours();
}

function getGreeting(hour) {
  if (hour >= 5 && hour < 12) return "Good Morning.";
  if (hour >= 12 && hour < 17) return "Good Afternoon.";
  if (hour >= 17 && hour < 21) return "Good Evening.";
  return "Good Night.";
}

function init() {
  const hour = updateTime();
  greetingEl.textContent = getGreeting(hour);
  setInterval(updateTime, 1000);
}

// Simple interaction
btnEl.addEventListener('click', () => {
  const val = inputEl.value.trim();
  if (val) {
    subTextEl.textContent = `Processing: "${val}"`;
    inputEl.value = "";

    setTimeout(() => {
      subTextEl.textContent = "Command executed.";
    }, 1500);
  }
});

init();
