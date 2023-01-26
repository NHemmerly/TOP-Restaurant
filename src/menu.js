//Module for rendering the menu tab
import { domElement } from "./factoryDOM";
import { generateMenu } from "./menuGenerator";
import { menu } from './menu-text';

export function renderMenu() {
    const main = domElement('div', {class: 'container main', id: 'tab'},
        domElement('div', {class: 'container menu-text', id: 'menu-text'}))
    generateMenu();

    return main
}
