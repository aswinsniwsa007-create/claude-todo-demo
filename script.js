const timeEl = document.getElementById("time");
const secsEl = document.getElementById("secs");
const meridiemEl = document.getElementById("meridiem");
const dateEl = document.getElementById("date");
const formatToggle = document.getElementById("formatToggle");
const tabs = document.querySelectorAll(".tab");

let is24Hour = true;

function pad(n) {
  return n.toString().padStart(2, "0");
}

function update() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  if (is24Hour) {
    meridiemEl.textContent = "";
    timeEl.firstChild.textContent = `${pad(hours)}:${minutes}`;
  } else {
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    meridiemEl.textContent = meridiem;
    timeEl.firstChild.textContent = `${hours}:${minutes}`;
  }

  secsEl.textContent = `:${seconds}`;

  dateEl.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

formatToggle.addEventListener("click", () => {
  is24Hour = !is24Hour;
  formatToggle.textContent = is24Hour ? "24H" : "12H";
  update();
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

update();
setInterval(update, 1000);
