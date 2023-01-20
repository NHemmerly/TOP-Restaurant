import './style.css';
// Import our custom CSS
import './scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import { domElement } from './factoryDOM';


//domElement takes the tag, object containing the attributes of an 
//object, and the objects nested beneath the tag. 
const navbar = domElement(
        'nav',
        { class: 'navbar navbar-expand-lg',
        style: 'background-color: #dc2626',
        id: 'navigation'},
    domElement(
        'h2', 
        {class: 'navbar-brand'}),
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

navbar.appendChild(navbarList);
document.body.appendChild(navbar);

console.log('hello!');