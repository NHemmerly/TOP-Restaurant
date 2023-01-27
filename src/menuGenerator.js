import { domElement } from './factoryDOM';
import { menu } from './menu-text';

export function generateMenu() {
    const menuList = domElement('div', {class: 'list-holder align-self-end p-3 pt-4 m-3'});
    for (let i = 0; i < menu.length; i++) {
        menuList.appendChild(domElement('div', {class: 'section-title h3 text-light'}, menu[i].title));
        for (let j = 0; j < menu[i].items.length; j++) {
            menuList.appendChild(domElement('div', {class: 'dish-name h5 ps-2 text-light'}, menu[i].items[j].dish));
            menuList.appendChild(domElement('div', {class: 'dish-desc p ps-3 text-light'}, `${menu[i].items[j].desc} ${menu[i].items[j].price}`));
        }
    }
    return menuList;
}