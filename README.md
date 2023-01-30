# TOP-Restaurant
A restaurant homepage for The Odin Project

Link to the live page: NHemmerly.github.io/TOP-Restaurant

The restaurant project taught me how to use a bundler when working on a web development project.

The bundler I used for this project was Webpack. The project also makes use of bootstrap 5, 
and it includes several free stock photos, whose authors are credited in comments in my code. 

The primary thing I learned through the use of Webpack was how a bundler helps developers create
modular object-oriented projects. Working with multiple javascript files makes code much more readable 
and it makes code easier to debug, so long as each file doesn't depend too much on other files. 

Each tab I created had one to two files that were responsible for rendering the entire tab. Text information, 
such as the text that makes up the restaurant's menu was stored in an array of objects so that it could 
be easily updated to include more sections and menu items. The generate menu function iterates through the menu array
and calls the domElement function to populate the menu with text.

I created the domElement factory function to easily
create new dom elements and decide the relationship between those dom elements. 
I personally find the DOMFactory approach
much more readable than creating each dom element 'by hand'.
