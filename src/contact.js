//Module for rendering the contactTab
import { domElement } from "./factoryDOM";
import { clearTab } from "./clearTab";

export function renderContact() {
    const contact = domElement('div', {class: 'container-fluid', id: 'tab'})
    return contact;
}

