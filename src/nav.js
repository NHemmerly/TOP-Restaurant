//DOM manipulation for NavBar
import { domElement } from "./factoryDOM";

export function renderNav() {

    const navbar = domElement(
        'nav',
        { class: 'navbar navbar-expand-lg navbar-dark p-4 justify-content-between',
        style: 'background-color: #dc2626',
        id: 'navigation'},
    domElement(
        'a', 
        {class: 'navbar-brand h1 athena'}, 'The Brick Oven'),
    );

    const navbarList = 
    domElement(
        'ul',
        {class: 'navbar-nav mr-auto'},
        domElement(
            'li',
            {class: 'nav-item active'},
            domElement('button', {class: 'btn btn-outline-light', id: 'home'}, 'Home')
        ),
        domElement(
            'li',
            {class: 'nav-item active'},
            domElement('button', {class: 'btn btn-outline-light', id: 'menu'}, 'Menu')
        ),
        domElement(
            'li',
            {class: 'nav-item active'},
            domElement('button', {class: 'btn btn-outline-light', id: 'contact'}, 'Contact')
        )
        );

        navbar.appendChild(navbarList);

        return navbar;

}