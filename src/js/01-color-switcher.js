const refs = {
  buttonStart: document.querySelector('[data-start]'),
  buttonStop: document.querySelector('[data-stop]'),
};

refs.buttonStart.addEventListener('click', startChangingColor);
refs.buttonStop.addEventListener('click', stopChangingColor);
refs.buttonStop.toggleAttribute('disabled');

let timerId = null;
const INTERVAL = 1000;

function setColor() {
  color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}

function startChangingColor() {
  timerId = setInterval(setColor, INTERVAL);
  refs.buttonStart.toggleAttribute('disabled');
  refs.buttonStop.toggleAttribute('disabled');
}

function stopChangingColor() {
  clearInterval(timerId);
  refs.buttonStop.toggleAttribute('disabled');
  refs.buttonStart.toggleAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
