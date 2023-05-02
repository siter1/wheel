const wheel = document.querySelector('#roulette-wheel');
const spinButton = document.querySelector('#spin-button');
const arrow = document.querySelector('.arrow');

const getRandomDegrees = () => {
  const randomDegrees = Math.floor(Math.random() * 360);
  return randomDegrees + 360 * 5;
};

spinButton.addEventListener('click', () => {
  const degrees = getRandomDegrees();
  wheel.style.transform = `rotate(${degrees}deg)`;
});

wheel.addEventListener('transitionend', () => {
  arrow.style.transform = 'rotate(-45deg)';
});

wheel.addEventListener('transitionstart', () => {
  arrow.style.transform = 'rotate(135deg)';
});
