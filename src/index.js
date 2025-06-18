import loadHome from "./home/home"
import loadMenu from "./menu/menu"
import loadContact from "./contact/contact"
console.log("hi");
function clearContent(){
    const content = document.getElementById('content');
    content.innerHTML = '';
}
loadHome();
const home = document.getElementById('home-tab');
const menu = document.getElementById('menu-tab');
const contact = document.getElementById('contact-tab');
document.addEventListener('DOMContentLoaded', () => {
    home.addEventListener('click', ()=> {
        clearContent();
        loadHome();
    });
    menu.addEventListener('click', ()=> {
        clearContent();
        loadMenu();
    });
    contact.addEventListener('click', ()=> {
        clearContent();
        loadContact();
    })
});




