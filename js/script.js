// get each section
const start = document.getElementById('start');
const wrongAnswer = document.getElementById('wrongAnswer');
const anniversaryCard = document.getElementById('anniversaryCard');
const countdown = document.getElementById('countdown');

// get each button
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const cardBtn = document.getElementById('cardBtn');
const backBtn = document.getElementById('backBtn');

// get counter elements
const daysTimer = document.getElementById('daysNumber');
const hoursTimer = document.getElementById('hoursNumber');
const minutesTimer = document.getElementById('minutesNumber');
const secondsTimer = document.getElementById('secondsNumber');

const anniversaryDate = new Date('2023-08-22T00:00:00');


// show a specific state
function showState(state) {
  start.style.display = 'none';
  wrongAnswer.style.display = 'none';
  anniversaryCard.style.display = 'none';
  countdown.style.display = 'none';

  state.style.display = 'block';
}

// show the start state initially
showState(start);

// event listeners for buttons

yesBtn.addEventListener('click', () => {
  showState(anniversaryCard);
});

noBtn.addEventListener('click', () => {
  showState(wrongAnswer);
});

tryAgainBtn.addEventListener('click', () => {
  showState(start);
});

cardBtn.addEventListener('click', () => {
  showState(countdown);
});

backBtn.addEventListener('click', () => {
  showState(anniversaryCard);
});

// counter timer
function updateCounter() {
    const now = new Date();

    const difference = now - anniversaryDate;

    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    daysTimer.textContent = String(days).padStart(4, '0');
    hoursTimer.textContent = String(hours).padStart(2, '0');
    minutesTimer.textContent = String(minutes).padStart(2, '0');
    secondsTimer.textContent = String(seconds).padStart(2, '0');
}

updateCounter();

setInterval(updateCounter, 1000);


