const addMobileNavEventListener = () => {
  const button = document.querySelector('.open-menu');
  button.addEventListener('click', () => {
    const myMenu = document.querySelector('.menu-content');
    myMenu.classList.toggle('visible');
  });
};

export { addMobileNavEventListener };
