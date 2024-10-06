import { getSingleElement, getMultipleElements } from "./getElements.js";
import { addClass, removeClass, replaceClass } from "./modifyElements.js";

// ! Get all elements
const settingContainer = getSingleElement('.settings-container');
const openSettings = getSingleElement('#open-settings');
const closeSettings = getSingleElement('#close-settings');
const input = getMultipleElements('input[type="number"]');
const arrowUpBtns = getMultipleElements('.increase-btn');
const arrowDownBtns = getMultipleElements('.decrease-btn');
const typeBtn = getMultipleElements('.type-btn');
const fonts = getMultipleElements('.fonts');
const fontsParagraph = getMultipleElements('.fonts-paragraph');
const colors = getMultipleElements('.color');
const timerText = getSingleElement('.timer');
const applyBtn = getSingleElement('.submit-btn');
const startBtn = getSingleElement('#start-btn');
const progress = getSingleElement('circle.big');
let isRunning = false;
let countdown;
const getRemainigTime = (currentType) => {
    const element = getSingleElement(`#${currentType}`);
    const current = element.value;
    const fixedMinute = current * 60;
    const totalTime = fixedMinute;
    const remainingTime = totalTime;
    return {remainingTime, totalTime};
};
let current = getSingleElement('.selected-type').dataset.type;
let timeData = getRemainigTime(current);
let remainingTime = timeData.remainingTime;
let totalTime = timeData.totalTime;
const fontDict = {
    'kumbh' : '"Kumbh Sans", sans-serif',
    'roboto' : '"Roboto Slab", serif',
    'space' : '"Space Mono", monospace'
};
const colorsDict = {
    'red' : '#F87070',
    'blue' : '#70F3F8',
    'purple' : '#D881F8'
};
// ! Activate the current type picked by the user
typeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        typeBtn.forEach((button) => {
            button.style.backgroundColor = '';    
            removeClass(button, 'selected-type')
        });
        addClass(btn, 'selected-type');
        progress.setAttribute('stroke-dasharray', `100,100`);
        const selectedColor = getSingleElement('.selected-color').dataset.color;
        getSingleElement('.selected-type').style.backgroundColor = colorsDict[selectedColor];
        clearInterval(countdown);
        const btnType = btn.dataset.type;
        const inputType = getSingleElement(`#${btnType}`);
        const inputTypeValue = inputType.value < 10 ? `0${inputType.value}` : inputType.value;
        timerText.innerHTML = `${inputTypeValue}:00`;
        startBtn.innerHTML = 'start';
        timerText.innerHTML = `${inputTypeValue}:00`;
        current = getSingleElement('.selected-type').dataset.type;
        timeData = getRemainigTime(current);
        remainingTime = timeData.remainingTime;
        totalTime = timeData.totalTime;
    });
});
// ! Toggle settings
openSettings.addEventListener('click', () => removeClass(settingContainer, 'hidden')); 
closeSettings.addEventListener('click', () => addClass(settingContainer, 'hidden')); 
// ! Increase and decrease number based on arrow click
input.forEach((tag) => {
    tag.addEventListener('keyup', () => {
        if (Number(tag.value) < 0) {
            tag.value = Math.abs(Number(tag.value));
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
        colors.forEach((col) => removeClass(col, 'selected-color'));
        addClass(btn, 'selected-color');
    });
});
//! Apply all changes
applyBtn.addEventListener('click', () => {
    // ! Modify the value of the selected type
    const currentTimerText = getSingleElement('.timer');
    const currentType = getSingleElement('.selected-type').dataset.type;
    const currentTypeInputValue = getSingleElement(`#${currentType}`).value;
    currentTimerText.innerHTML = currentTypeInputValue < 10 ? `0${currentTypeInputValue}:00` : `${currentTypeInputValue}:00`;
    //!Modify the font to match the selected-font
    const selectedFont = getSingleElement('.selected-font').parentElement.dataset.font;
    document.body.style.fontFamily = fontDict[selectedFont];
    // ! modify the colors to match the selected color
    // ! 1. The heading
    const selectedColor = getSingleElement('.selected-color').dataset.color;
    getSingleElement('.selected-type').style.backgroundColor = colorsDict[selectedColor];
    //! 2. The circular spinner
    getSingleElement('.circular-progress .big').style.stroke = colorsDict[selectedColor];
    //! 3. Apply button
    applyBtn.firstElementChild.style.backgroundColor = colorsDict[selectedColor]; 
    addClass(settingContainer, 'hidden');
    clearInterval(countdown);
    current = getSingleElement('.selected-type').dataset.type;
    timeData = getRemainigTime(current);
    remainingTime = timeData.remainingTime;
    totalTime = timeData.totalTime;
    startBtn.innerHTML = 'start';
    progress.setAttribute('stroke-dasharray', `100,100`);
    
});    
//! Add selected color to the start button
startBtn.addEventListener('mouseenter', () => {
    startBtn.style.color = colorsDict[getSingleElement('.selected-color').dataset.color];
}); 
startBtn.addEventListener('mouseleave', () => {
    startBtn.style.color = '';  
}); 
startBtn.addEventListener('click', () => start());
// ! start count down
const start = () => {
    if ((startBtn.innerHTML === "start")){
        startCountdown();    
        isRunning = true;
    } else if (startBtn.innerHTML === "pause"){
        clearInterval(countdown);
        isRunning = false;
        startBtn.innerHTML = 'start';
    } else{
        const currentType = getSingleElement('.selected-type').dataset.type;
        let currentTypeValue = Number(getSingleElement(`#${currentType}`).value);
        currentTypeValue = currentTypeValue < 10 ? `0${currentTypeValue}` : currentTypeValue;
        timerText.innerHTML = `${currentTypeValue}:00`;
        remainingTime = totalTime;
        startCountdown();
    };
};
// !Countdown functionality
const startCountdown = () => {
    countdown = setInterval(() => {
        let [minute, seconds] = timerText.innerText.split(':');     
        minute = Number(minute);
        seconds = Number(seconds)
        // console.log(minute * seconds);
        remainingTime--;
        if (seconds <= 0) {
            minute --;
            seconds = 59;
        } else {
            seconds --
        }
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        minute = minute < 10 ? `0${minute}` : minute;
        timerText.innerText = `${minute}:${seconds}`;
        // ! Modify the progress bar)
        progress.setAttribute('stroke-dasharray', `${(remainingTime / totalTime) * 100},100`);
        if (timerText.innerText === "00:00") {
            clearInterval(countdown);
            startBtn.innerHTML = "restart";
            isRunning = true;
        };
        if (startBtn.innerHTML === "start") clearInterval(countdown);
    }, 1000);
    startBtn.innerHTML = 'pause';
}