import { getSingleElement, getMultipleElements } from "./getElements.js";
import { addClass, removeClass, replaceClass } from "./modifyElements.js";

const settingContainer = getSingleElement('.settings-container');
const openSettings = getSingleElement('#open-settings');
const closeSettings = getSingleElement('#close-settings');
const submitBtn = getSingleElement('.submit-btn');
const inputContainer = getMultipleElements('.input-container');
const arrowUpBtns = getMultipleElements('.increase-btn');
const arrowDownBtns = getMultipleElements('.decrease-btn');
const typeBtn = getMultipleElements('.type-btn');

// ! Activate the current type picked by the user 
typeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        typeBtn.forEach((button) => removeClass(button, 'selected-type'));
        addClass(btn, 'selected-type');
    });
});

// ! Toggle settings
openSettings.addEventListener('click', () => removeClass(settingContainer, 'hidden')); 
closeSettings.addEventListener('click', () => addClass(settingContainer, 'hidden')); 

// ! Increase and decrease number based on arrow click
arrowUpBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const inputTag = e.currentTarget.parentElement.previousElementSibling;
        inputTag.value = Number(inputTag.value) + 1;
    });
});

arrowDownBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const inputTag = e.currentTarget.parentElement.previousElementSibling; 
        if (inputTag.value < 1) inputTag.value = 0;
        else inputTag.value = Number(inputTag.value) - 1;
    });
});
