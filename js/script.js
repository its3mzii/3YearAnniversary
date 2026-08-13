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
