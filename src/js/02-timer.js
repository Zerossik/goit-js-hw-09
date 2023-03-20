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
    const time = convertMs(selectDate - currentData);
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

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
