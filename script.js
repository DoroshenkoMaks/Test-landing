"use strict";

const timerLabel = document.querySelector(".timer");

let timer;
const outTimer = function () {
  const tick = function () {
    const days = String(Math.trunc(time / (3600 * 24))).padStart(2, 0);
    const hours = String(Math.trunc(time / 3600)).padStart(2, 0);
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    timerLabel.textContent = `${days} : ${
      hours >= 24 ? String(hours % 24).padStart(2, 0) : hours
    } : ${min >= 60 ? String(min % 60).padStart(2, 0) : min} : ${sec}`;
    // Decrease 1 sec
    time--;
  };
  // Set time in sec
  let time = 461475;
  // call timer every sec
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
outTimer();
