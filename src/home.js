//Dom manipulation for home page
import { domElement } from "./factoryDOM";
import backgroundImage from './images/pizza-home.jpg';

export function renderHome() {
    //domElement takes the tag, object containing the attributes of an 
    //object, and the objects nested beneath the tag. 
    const mainContainer = domElement('div', {class: 'holder'})
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
        
    const pizzaImage = new Image();
    pizzaImage.src = backgroundImage;
        
    const main = domElement('div', {class: 'container-fluid p-0 main'}, 
    domElement('div', { class: 'row two-panes m-0 h-100'},
    domElement('div', {class: 'col background p-0'}),
    domElement('div', {class: 'col content d-flex align-items-center p-0'},
        domElement('div', {class: 'col tagline p-1 m-1'},
            domElement('div', {class: 'row display-1 text-center text-light athena w-100 m-0'}, 'The Best Pizza Comes From The Brick Oven.'),
            domElement('div', {class: 'row display-4 text-center text-light mt-5 athena w-100 m-0'}, 'Nobody does rustic aesthetic with modern flavor quite like The Brick Oven.')))));
            
            
    navbar.appendChild(navbarList);
    document.body.appendChild(mainContainer)
    mainContainer.appendChild(navbar);
    mainContainer.appendChild(main);
}

