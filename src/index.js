import './style.css';
// Import our custom CSS
import './scss/styles.scss';

import { renderHome } from './home';
import { renderMenu } from './menu';
import { renderContact } from './contact';
import { renderNav } from './nav';
import { domElement } from './factoryDOM';


const mainContainer = domElement('div', {class: 'holder'});
const navbar = renderNav();
const main = renderHome();

document.body.appendChild(mainContainer)
mainContainer.appendChild(navbar);
mainContainer.appendChild(main);

const contactTab = document.getElementById('contact');
contactTab.addEventListener('click', renderContact);

const menuTab = document.getElementById('menu');
menuTab.addEventListener('click', renderMenu);

console.log('hello!');