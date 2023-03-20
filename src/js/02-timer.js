import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
let timeMs = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeMs = selectedDates[0].getTime();
    console.log(timeMs);
  },
};
const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
};
flatpickr('#datetime-picker', options);
function checkValidDate() {
  const currentData = new Date().getTime();
}
checkValidDate();
