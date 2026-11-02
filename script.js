const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

function pad(n) {
  return n.toString().padStart(2, "0");
}

function update() {
  const now = new Date();

  const h = pad(now.getHours());
  const m = pad(now.getMinutes());
  const s = pad(now.getSeconds());
  timeEl.textContent = `${h}:${m}:${s}`;

  dateEl.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

update();
setInterval(update, 1000);
