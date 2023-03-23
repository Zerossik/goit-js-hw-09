const refs = {
  formEl: document.querySelector('.form'),
};
let delayMs = null;
let step = null; // тут хранятся значения полей формы.
let amount = null;

// Функция, которая создает 1 промис...
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

// Алгоритм
// 1- создать функцию обработчик по submit
// 2- цикл, в котором будет столько итераций, сколько пользователь ввел число в поле Amount.
// 3- внутри цикла, создать сет интервал, с задержской "delay"/ внутри него вызвать createPromise(i, delay)

let intervalId = null;
// Функция, которая обрабатывает отправку форм!
function handlerSubmit(evt) {
  evt.preventDefault();
  delayMs = Number(refs.formEl.delay.value);
  step = Number(refs.formEl.step.value);
  amount = Number(refs.formEl.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    intervalId = setTimeout(() => {
      createPromise(i, delayMs)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, (delayMs += step));
  }
}

refs.formEl.addEventListener('submit', handlerSubmit);
// прппр
