import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  button: document.querySelector('[data-start]'),
};

// let userData;

let currentTime = new Date();
console.log('currentTime', currentTime);

refs.button.toggleAttribute('disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // userData = +selectedDates;
    dataCompare(Number(...selectedDates));
  },
};

flatpickr('#datetime-picker', options);

function dataCompare(selectedDatesByUser) {
  console.log('selectedDatesByUser', selectedDatesByUser);
  if (selectedDatesByUser < currentTime) {
    alert('Please choose a date in the future');
  }
  startCountdown(selectedDatesByUser);
}

function startCountdown(selectedDatesByUser) {
  refs.button.toggleAttribute('disabled');
  console.log(selectedDatesByUser - currentTime);
  startTimer(selectedDatesByUser - currentTime);
}

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // display.textContent = minutes + ':' + seconds;
    console.log(minutes + ':' + seconds);

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
