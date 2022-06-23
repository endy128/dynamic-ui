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

const movePicsRight = () => {
  let id = null;
  const elem = document.querySelector('.pics');
  if (elem.style.left === '') elem.style.left = '0px';
  const currPosition = getPosition();
  if (isAtStart() === true) return;
  let pos = currPosition;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos === (currPosition + 600)) {
      clearInterval(id);
    } else {
      pos += 10;
      elem.style.left = `${pos}px`;
    }
  }
};

const movePicsLeft = () => {
  let id = null;
  const elem = document.querySelector('.pics');
  if (elem.style.left === '') elem.style.left = '0px';
  const currPosition = getPosition();
  if (isAtEnd() === true) return;
  let pos = currPosition;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos === (currPosition - 600)) {
      clearInterval(id);
    } else {
      pos -= 10;
      elem.style.left = `${pos}px`;
    }
  }
};

const getPosition = () => {
  const div = document.querySelector('.pics');
  let position = div.style.left;
  position = position.substr(0, position.length - 2);
  console.log(`Position: ${position}`);
  return (parseInt(position));
};

// const moveLeft = () => {
//   const div = document.querySelector('.pics');
//   const numOfPics = document.getElementById('ul').getElementsByTagName('li').length;
//   const picsLength = 600 * numOfPics;
//   if (div.style.left === '') div.style.left = '0px';
//   const currPosition = getPosition();
//   console.log(currPosition);
//   div.style.left = (`${currPosition - 600}px`);
// };

// const moveRight = () => {
//   const div = document.querySelector('.pics');
//   const numOfPics = document.getElementById('ul').getElementsByTagName('li').length;
//   const picsLength = 600 * numOfPics;
//   if (div.style.left === '') div.style.left = '0px';
//   const currPosition = getPosition();
//   console.log(currPosition);
//   div.style.left = (`${currPosition + 600}px`);
// };

const addCarouselEventListeners = () => {
  const buttonLeft = document.querySelector('.button-left');
  const buttonRight = document.querySelector('.button-right');
  buttonLeft.addEventListener('click', () => {
    movePicsLeft();
  });
  buttonRight.addEventListener('click', () => {
    movePicsRight();
  });
};

export { addCarouselEventListeners };
