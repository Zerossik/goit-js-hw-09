import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
let selectDate = null;
const currentData = new Date().getTime();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectDate = selectedDates[0].getTime();
    checkValidDate();
    startTimer();
  },
};
const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
};
flatpickr('#datetime-picker', options);

function checkValidDate() {
  if (selectDate > currentData) {
    refs.startBtn.disabled = false;
  } else {
    refs.startBtn.disabled = true;
    alert('Please choose a date in the future');
  }
}
function startTimer() {
  setInterval(() => {
    selectDate -= 1000;
    console.log(selectDate);
  }, 1000);
}
