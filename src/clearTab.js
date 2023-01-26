//Module for clearing previous tab to make room 
//for rendering new one

export function clearTab(){
    const prevTab = document.getElementById('tab');
    prevTab.remove();
}