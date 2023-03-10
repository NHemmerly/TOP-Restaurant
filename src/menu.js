//Module for rendering the menu tab
import { domElement } from "./factoryDOM";
import { generateMenu } from "./menuGenerator";

export function renderMenu() {
    const main = domElement('div', {class: 'd-flex flex-column container-fluid main p-0 m-0', id: 'tab'}, 
    domElement('div', {class: 'd-flex flex-column menu-background'},
    generateMenu()))

    return main
}
