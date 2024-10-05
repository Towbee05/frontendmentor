import { getSingleElement, getMultipleElements } from "./getElements.js";
import { addClass, removeClass, replaceClass } from "./modifyElements.js";

const loadHTML = () => {
        // ! Get all elements
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
        const timerText = getSingleElement('.timer');
        const applyBtn = getSingleElement('.submit-btn');
        const startBtn = getSingleElement('#start-btn');
        const progress = getSingleElement('circle.big');

        const current = getSingleElement('#pomodoro').value
        let fixedMinute = current * 60;
        let totalTime = fixedMinute;
        let remainingTime = totalTime;

        
        const fontDict = {
            'kumbh' : '"Kumbh Sans", sans-serif',
            'roboto' : '"Roboto Slab", serif',
            'space' : '"Space Mono", monospace'
        }

        const colorsDict = {
            'red' : '#F87070',
            'blue' : '#70F3F8',
            'purple' : '#D881F8'
        }
        
        // ! Activate the current type picked by the user
        typeBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                typeBtn.forEach((button) => {
                    button.style.backgroundColor = '';    
                    removeClass(button, 'selected-type')
                });

                addClass(btn, 'selected-type');

                const selectedColor = getSingleElement('.selected-color').dataset.color;
                
                getSingleElement('.selected-type').style.backgroundColor = colorsDict[selectedColor];
                
                const btnType = btn.dataset.type;
                const inputType = getSingleElement(`#${btnType}`);

                const inputTypeValue = inputType.value < 10 ? `0${inputType.value}` : inputType.value;
                timerText.innerHTML = `${inputTypeValue}:00`;
                
                startBtn.innerHTML = 'start';
                remainingTime = totalTime;
    
                progress.setAttribute('stroke-dasharray', `100,100`);
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
            const pomodoroValue = getSingleElement('#pomodoro').value;
            const shortValue = getSingleElement('#short').value;
            const longValue = getSingleElement('#long').value;
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

            startBtn.innerHTML = 'start';
            progress.setAttribute('stroke-dasharray', `100,100`);
            remainingTime = totalTime;
        });    

        //! Add selected color to the start button
        startBtn.addEventListener('mouseenter', () => {
            startBtn.style.color = colorsDict[getSingleElement('.selected-color').dataset.color];
        }); 

        startBtn.addEventListener('mouseleave', () => {
            startBtn.style.color = '';  
        }); 

        // ! Start the timer
        startBtn.addEventListener('click', () => start());

        // ! convert the inputs to seconds
        // shortValue = shortValue * 60;
        // longValue = longValue * 60;
        

        const start = () => {
            
            if ((startBtn.innerHTML === "start") || (startBtn.innerHTML === "restart")){
                const myInterval = setInterval(() => {
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
                        clearInterval(myInterval)
                        startBtn.innerHTML = "restart";
                    };
                    if (startBtn.innerHTML === "start") clearInterval(myInterval);
                }, 100);
                startBtn.innerHTML = 'pause';
            } else{
                startBtn.innerHTML = 'start';
            }
        }
        
};
loadHTML();
