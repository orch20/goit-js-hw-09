import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  button: document.querySelector('[data-start]'),
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let currentTime = new Date();
let userData = null;

refs.button.toggleAttribute('disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userData = Number(...selectedDates);
    dataCompare();
  },
};

flatpickr('#datetime-picker', options);

function dataCompare() {
  console.log('selectedDatesByUser', userData);
  if (userData < currentTime) {
    // alert('Please choose a date in the future');
    Notify.failure('Please choose a date in the future');
  }
  refs.button.toggleAttribute('disabled');
}

refs.button.addEventListener('click', startCountdown);
// let countdown;

console.log();

function startCountdown() {
  const timerId = setInterval(() => {
    let delta = userData - Date.now();
    console.log(delta);
    const countdown = convertMs(delta);
    upgradeRes(countdown);
    if (delta === 0) {
      clearInterval(timerId);
      return;
    }
  }, 1000);
}

function upgradeRes({ days, hours, minutes, seconds }) {
  refs.seconds.textContent = seconds;
  refs.minutes.textContent = minutes;
  refs.hours.textContent = hours;
  refs.days.textContent = days;
  console.log(`${minutes},${seconds}`);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addingZero(value) {
  return String(value).padStart(2, '0');
}
