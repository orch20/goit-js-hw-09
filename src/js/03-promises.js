
 const delay =  document.querySelector('[name="delay"]'),
 const step =  document.querySelector('[name="step"]'),
  const amount =  document.querySelector('[name="amount"]'),


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
    resolve
  } else {
    reject
  }, delay);
});
  }
}

