import { domElement } from './factoryDOM';
import { menu } from './menu-text';

export function generateMenu() {
    const menuList = document.getElementById('menu-text');
        menu.forEach(section => console.log(section.title), section => menuList.appendChild(domElement('h3', {class: 'section-title'}, section.title, 
        section.items.forEach(item => menuList.appendChild(domElement('h4', {class: 'dish-name'}))))));

    return menuList;
}