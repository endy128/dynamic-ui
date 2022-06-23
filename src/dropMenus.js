// hides all open drop down menus
const hideAllMenus = () => {
  const menus = Array.from(document.querySelectorAll('.dropdown-content'));
  menus.forEach((menu) => { const myMenu = menu; myMenu.style.display = 'none'; });
};

const dropMenu = (target) => {
  // const target = e.target.dataset.menu;
  const displayStyle = document.querySelector(`.dropdown-content[data-menu="${target}"]`).style.display;
  if (displayStyle === 'block') {
    hideAllMenus();
    // remove focus from the menu bar
    document.activeElement.blur();
  } else {
    hideAllMenus();
    document.querySelector(`.dropdown-content[data-menu="${target}"]`).style.display = 'block';
  }
};

const addNavEventListener = () => {
  const buttons = Array.from(document.querySelectorAll('.dropbtn'));
  buttons.forEach((button) => button.addEventListener('mouseover', (e) => {
    dropMenu(e.target.dataset.menu);
  }));
  const menus = Array.from(document.querySelectorAll('.dropdown-content'));
  menus.forEach((menu) => menu.addEventListener('mouseleave', (e) => {
    dropMenu(e.target.dataset.menu);
  }));
};

export { addNavEventListener, dropMenu };
