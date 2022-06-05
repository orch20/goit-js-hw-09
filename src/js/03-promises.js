const form = document.querySelector('form');
const { delay, step, amount } = form;

form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(e) {
  e.preventDefault();
  if (!+delay.value || !+step.value || !+amount.value) {
    alert('hha-ha');
  }

  for (i = 0; i <= amount.value; i += 1) {
    delayValue = Number(delay.value + step.value * i);
    createPromise(1 + i, delayValue)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
