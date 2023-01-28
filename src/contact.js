//Module for rendering the contactTab
import { domElement } from "./factoryDOM";

export function renderContact() {
    const contact = domElement('div', {class: 'd-flex flex-column container-fluid main p-0 m-0', id: 'tab'},
        domElement('div', {class: 'd-flex flex-column contact-background'},
        domElement('div', {class: 'contact-holder align-self-center p-5 pt-4 m-3'}, 
            domElement('div', {class: 'contact-title h3 text-light text-center'}, 'Contact Us'),
        domElement('div', {class: 'phone-address'},
            domElement('div', {class: 'p address text-light mb-3'}, 'Address: 4249 Bingo Boingo Lane, PizzaTowne, DC, 35609'),
            domElement('div', {class: 'p phone text-light mb-3'}, 'Phone: 555-555-5555')),
        domElement('form', {class: 'contact-form'},
        domElement('ul', {}, 
        domElement('li', {class: 'name'},
            domElement('label', {class: 'form-label text-light mt-2', for: 'Name'}, 'Name: '),
            domElement('input', {type: 'text',class: 'form-control', id: 'Name', name: 'Name', placeholder: 'Enter name here'})),
        domElement('li', {class: 'subject'},
            domElement('label', {class: 'form-label text-light mt-2', for: 'Subject'}, 'Subject: '),
            domElement('input', {type: 'text', class: 'form-control', id: 'Subject', name: 'Subject', placeholder: 'Enter message subject here'})),
        domElement('li', {class: 'message'},
            domElement('label', {class: 'form-label text-light mt-2', for: 'Message'}, 'Message: '),
            domElement('textarea', {id: 'Message', name: 'Message', rows: '4', cols: '50', class: 'form-control', placeholder: 'Type your message here'})),
        domElement('li', {class: 'submit-button'},
            domElement('button', {class: 'btn btn-light mt-3', type: 'submit', id: 'contact-form'}, 'Submit Message')
            )
            )
            ))))
    return contact;
}

