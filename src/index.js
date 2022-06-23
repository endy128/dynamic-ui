import { addCarouselEventListeners, drawDots } from './carousel';
import { addNavEventListener } from './dropMenus';
import { addMobileNavEventListener } from './mobileMenus';

console.log('Hello!!');

addNavEventListener();
addMobileNavEventListener();

addCarouselEventListeners();
drawDots();
