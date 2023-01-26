import './style.css';
// Import our custom CSS
import './scss/styles.scss';

import { renderHome } from './home';
import { renderMenu } from './menu';
import { renderContact } from './contact';
import { clearTab } from './clearTab';
import { domElement } from './factoryDOM';
import { renderNav } from './nav';

const mainContainer = domElement('div', {class: 'holder', id: 'content'});

const navbar = renderNav();

mainContainer.appendChild(navbar);
mainContainer.appendChild(renderHome());
document.body.appendChild(mainContainer);

const contactTab = document.getElementById('contact');
contactTab.addEventListener('click', () => {clearTab(), mainContainer.appendChild(renderContact())});

const menuTab = document.getElementById('menu');
menuTab.addEventListener('click', () => {clearTab(), mainContainer.appendChild(renderMenu())});

const homeTab = document.getElementById('home');
homeTab.addEventListener('click', () => {clearTab(), mainContainer.appendChild(renderHome())});

console.log('hello!');