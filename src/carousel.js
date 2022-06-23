const navigateToPic = (dot) => {
  const { index } = dot.dataset;
  const newPosition = (index * 600) * -1;
  const delay = 1 / (Math.abs((newPosition - getPosition()) / 600));
  animateChange(newPosition, delay);
};

const animateChange = (newPosition, delay) => {
  const myDelay = delay;
  const elem = document.querySelector('.pics');
  let id = null;
  let pos = getPosition();
  let direction = 'right';
  if (pos < newPosition) direction = 'left';
  clearInterval(id);
  function frameRight() {
    if (pos === newPosition) {
      clearInterval(id);
    } else {
      pos -= 10;
      elem.style.left = `${pos}px`;
    }
  }
  function frameLeft() {
    if (pos === newPosition) {
      clearInterval(id);
    } else {
      pos += 10;
      elem.style.left = `${pos}px`;
    }
  }
  if (direction === 'right') id = setInterval(frameRight, myDelay);
  if (direction === 'left') id = setInterval(frameLeft, myDelay);
};

const drawDots = () => {
  const numOfPics = document.getElementById('ul').getElementsByTagName('li').length;
  const dots = document.querySelector('.dots');
  for (let i = 0; i < numOfPics; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.dataset.index = i;
    dots.appendChild(dot);
  }
};

const getPosition = () => {
  const div = document.querySelector('.pics');
  if (div.style.left === '') div.style.left = '0px';
  let position = div.style.left;
  position = position.substr(0, position.length - 2);
  return (parseInt(position, 10));
};

const isAtStart = () => {
  const currPosition = getPosition();
  if ((currPosition >= 0)) {
    return true;
  }
  return false;
};

const isAtEnd = () => {
  const numOfPics = document.getElementById('ul').getElementsByTagName('li').length - 1;
  const currPosition = getPosition();
  const maxPosition = ((numOfPics * 600) * -1);
  if ((currPosition <= maxPosition)) {
    return true;
  }
  return false;
};

const movePicsLeft = () => {
  let id = null;
  const elem = document.querySelector('.pics');
  // if (elem.style.left === '') elem.style.left = '0px';
  const currPosition = getPosition();
  if (isAtStart() === true) return;
  let pos = currPosition;
  clearInterval(id);
  function frame() {
    if (pos === (currPosition + 600)) {
      clearInterval(id);
    } else {
      pos += 10;
      elem.style.left = `${pos}px`;
    }
  }
  id = setInterval(frame, 1);
};

const movePicsRight = () => {
  let id = null;
  const elem = document.querySelector('.pics');
  // if (elem.style.left === '') elem.style.left = '0px';
  const currPosition = getPosition();
  if (isAtEnd() === true) return;
  let pos = currPosition;
  clearInterval(id);
  function frame() {
    if (pos === (currPosition - 600)) {
      clearInterval(id);
    } else {
      pos -= 10;
      elem.style.left = `${pos}px`;
    }
  }
  id = setInterval(frame, 1);
};

const addCarouselEventListeners = () => {
  const buttonLeft = document.querySelector('.button-left');
  const buttonRight = document.querySelector('.button-right');
  const dots = Array.from(document.querySelectorAll('.dot'));
  buttonLeft.addEventListener('click', () => {
    movePicsLeft();
  });
  buttonRight.addEventListener('click', () => {
    movePicsRight();
  });
  dots.forEach((dot) => dot.addEventListener('click', (e) => {
    navigateToPic(e.target);
  }));
};

export { addCarouselEventListeners, drawDots };
