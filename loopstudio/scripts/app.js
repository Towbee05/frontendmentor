import getElement from "./getElement.js";

const openSidebar = getElement('.open-sidebar');
const closeSidebar = getElement('.close-sidebar');
const sidebar = getElement('.sidebar');

openSidebar.addEventListener('click', () => {
    sidebar.style.transform = `translateX(${0}%)`;
});

closeSidebar.addEventListener('click', () => {
    sidebar.style.transform = `translateX(${-100}vw)`;
});