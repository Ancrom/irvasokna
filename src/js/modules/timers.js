const timer = () => {
  function bindTimer({ timerId, expDate }) {
    const timer = document.getElementById(timerId);
    if (!timer) return;

    const targetDate = new Date(expDate).getTime();

    const daysEl = timer.querySelector(".days");
    const hoursEl = timer.querySelector(".hours");
    const minutesEl = timer.querySelector(".minutes");
    const secondsEl = timer.querySelector(".seconds");

    function updateTimer() {
      const now = new Date().getTime();

      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timerInterval);
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      daysEl.textContent = days.toString().padStart(2, "0");
      hoursEl.textContent = hours.toString().padStart(2, "0");
      minutesEl.textContent = minutes.toString().padStart(2, "0");
      secondsEl.textContent = seconds.toString().padStart(2, "0");
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
  }

  bindTimer({
    timerId: "timer",
    expDate: "2025-08-31:14:14",
  });
};

export default timer;
