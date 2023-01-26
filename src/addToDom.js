//Function for adding new Tabs to DOM

export function addToDOM(tab) {
    const content = document.getElementById('content');
    content.appendChild(tab())
}