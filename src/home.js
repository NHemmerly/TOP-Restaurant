//Dom manipulation for home page
import { domElement } from "./factoryDOM";
import backgroundImage from './images/pizza-home.jpg';

export function renderHome() {
        //domElement takes the tag, object containing the attributes of an 
    //object, and the objects nested beneath the tag. 
    const navbar = domElement(
        'nav',
        { class: 'navbar navbar-expand-lg navbar-dark p-4 justify-content-between',
        style: 'background-color: #dc2626',
        id: 'navigation'},
    domElement(
        'a', 
        {class: 'navbar-brand h1'}, 'The Brick Oven'),
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
        
    const pizzaImage = new Image();
    pizzaImage.src = backgroundImage;
        
    const main = domElement('div', { class: 'row main'},
    domElement('div', {class: 'col background'}),
    domElement('div', {class: 'col content'},
        domElement('div', {class: 'col'},
            domElement('div', {class: 'row display-1 text-center text-light mt-2'}, 'The Best Pizza Comes From The Brick Oven.'),
            domElement('div', {class: 'row display-3 text-center text-light mt-2'}, 'Nobody does rustic aesthetic with modern flavor quite like The Brick Oven.'))));
            
            
    navbar.appendChild(navbarList);
    document.body.appendChild(navbar);
    document.body.appendChild(main);
}

