import getElement from "./getElements.js";
import { addClass, removeClass, replaceClass } from "./modifyClasslists.js";

const btns = getElement('.btn');
const sideNavContainer = getElement('.side-nav-container');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const elementsClass = e.currentTarget.classList.contains('open-btn') ? true : false;
        if (elementsClass) {
            removeClass(sideNavContainer, 'hidden');
        } else {
            addClass(sideNavContainer, 'hidden');
        }
    });
});

