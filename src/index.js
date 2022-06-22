console.log('Hello!!');

const dropMenu = (e, action) => {
  const target = e.target.dataset.menu;
  if (action === 'show') {
    // console.log(target);
    // console.log(document.querySelector('.dropdown-content[data-menu="1"'));
    document.querySelector(`.dropdown-content[data-menu="${target}"]`).style.display = 'block';
  }
  if (action === 'hide') {
    document.querySelector(`.dropdown-content[data-menu="${target}"]`).style.display = 'none';
    // remove focus from the menu bar
    document.activeElement.blur();
  }
};

const addEventListener = () => {
  const buttons = Array.from(document.querySelectorAll('.dropbtn'));
  buttons.forEach((button) => button.addEventListener('click', (e) => {
    dropMenu(e, 'show');
  }));
  const menus = Array.from(document.querySelectorAll('.dropdown-content'));
  menus.forEach((menu) => menu.addEventListener('mouseleave', (e) => {
    dropMenu(e, 'hide');
  }));
};

addEventListener();
