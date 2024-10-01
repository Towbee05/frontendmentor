import { getSingleElement, getMultipleElements } from "./getElements.js";
import { addClass, removeClass, replaceClass } from "./modifyElements.js";

const settingContainer = getSingleElement('.settings-container');
const openSettings = getSingleElement('#open-settings');
const closeSettings = getSingleElement('#close-settings');
const submitBtn = getSingleElement('.submit-btn');
const input = getMultipleElements('input[type="number"]');
const arrowUpBtns = getMultipleElements('.increase-btn');
const arrowDownBtns = getMultipleElements('.decrease-btn');
const typeBtn = getMultipleElements('.type-btn');
const fonts = getMultipleElements('.fonts');
const fontsParagraph = getMultipleElements('.fonts-paragraph');
const colors = getMultipleElements('.color');
const colorsInner = getMultipleElements('.colors-inner');

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
input.forEach((tag) => {
    tag.addEventListener('keyup', () => {
        if (Number(tag.value) < 0) {
            tag.value = Math.abs(Number(tag.value))
        }
    });
})

arrowUpBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const inputTag = e.currentTarget.parentElement.previousElementSibling;
        inputTag.value = Number(inputTag.value) + 1;
    });
});

arrowDownBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const inputTag = e.currentTarget.parentElement.previousElementSibling; 
        inputTag.value = Number(inputTag.value) - 1;
        if (inputTag.value < 1) inputTag.value = 1;
    });
});

// ! Select font
fonts.forEach((btn) => {
    btn.addEventListener('click', () => {
        fontsParagraph.forEach((para) => removeClass(para, 'selected-font'));
        const paragraph = btn.querySelector('p');
        addClass(paragraph, 'selected-font');    
    }); 
});

// ! select color
colors.forEach((btn) => {
    btn.addEventListener('click', () => {
        colorsInner.forEach((color) => removeClass(color, 'selected-color'));
        const colorsSpan = btn.querySelector('.colors-inner');
        addClass(colorsSpan, 'selected-color');
    });
});