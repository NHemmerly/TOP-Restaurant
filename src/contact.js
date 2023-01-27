//Module for rendering the contactTab
import { domElement } from "./factoryDOM";
import { clearTab } from "./clearTab";

export function renderContact() {
    const contact = domElement('div', {class: 'd-flex flex-column container-fluid main p-0 m-0', id: 'tab'},
        domElement('div', {class: 'contact-holder align-self-end p-3 pt-4 m-3'}, 
            domElement('div', {class: 'contact-title h3 text-light text-center'}, 'Contact Us'),
        domElement('div', {class: 'phone-address'},
            domElement('div', {class: 'p'})),
        domElement('form', {class: 'contact-form'},
        domElement('ul', {}, 
        domElement('li', {class: 'name'})))))
    return contact;
}

