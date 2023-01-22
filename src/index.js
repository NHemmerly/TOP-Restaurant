import './style.css';
// Import our custom CSS
import './scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import { domElement } from './factoryDOM';
import backgroundImage from './images/pizza-home.jpg';


//domElement takes the tag, object containing the attributes of an 
//object, and the objects nested beneath the tag. 
const navbar = domElement(
        'nav',
        { class: 'navbar navbar-expand-lg navbar-light p-4',
        style: 'background-color: #dc2626',
        id: 'navigation'},
    domElement(
        'a', 
        {class: 'navbar-brand'}, 'Go Grubbie'),
     );

const navbarList = 
    domElement(
        'ul',
        {class: 'navbar-nav mr-auto'},
        domElement(
            'li',
            {class: 'nav-item active'},
            domElement('a', {class: 'nav-link'}, 'Home')
        ),
        domElement(
            'li',
            {class: 'nav-item active'},
            domElement('a', {class: 'nav-link'}, 'Menu')
        ),
        domElement(
            'li',
            {class: 'nav-item active'},
            domElement('a', {class: 'nav-link'}, 'Contact')
        )
        );
        
const pizzaImage = new Image();
pizzaImage.src = backgroundImage;
        
const main = domElement('div', { class: 'container-fluid main'},
    domElement(
        'img',
        {class: 'img-fluid background',
        src: backgroundImage}));
            
            
navbar.appendChild(navbarList);
document.body.appendChild(navbar);
document.body.appendChild(main);


console.log('hello!');