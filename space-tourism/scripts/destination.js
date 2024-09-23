import './openNav.js'
import getElement from './getElements.js'
import { addClass, removeClass } from './modifyClasslists.js';
const selectBtns = getElement('.select-btn');
const imageSection = getElement('#image-section');
const titleParagraphSection = getElement('#title-paragragh-section');
const distanceTimeSection = getElement('#dis-time-section');

// !Select btn and change context
const counter = 0


const fetchData = async (url) => {
    const response = await fetch(url);
    let data = await response.json();

    data = data['destinations'];
    selectBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            selectBtns.forEach((btns) => removeClass(btns, 'selected-btn'))
            addClass(btn, 'selected-btn');
            const dataID = e.currentTarget.dataset['id'];
            const { name, images, description : desc, distance, travel } = data[index];
            if (dataID === name.toLowerCase()) {
                imageSection.innerHTML = `
                    <img src="${images['webp']}" alt="An image of the moon" class="size-[150px] tablet:size-[300px] laptop:size-[450px]" id="image">
                `;
                titleParagraphSection.innerHTML = `
                    <h1 class="uppercase font-family2 text-[56px] laptop:text-[100px]">
                        ${name}
                    </h1>
                    <p class="text-[15px] tablet:text-base laptop:text-lg">
                        ${desc}
                    </p>    
                `;
                distanceTimeSection.innerHTML = `
                    <p class="flex flex-col uppercase">
                        <span class="text-sm tracking-[2px]">
                            Avg. distance
                        </span>
                        <span class="text-white text-[28px] font-family2">
                            ${distance}
                        </span>
                    </p>
                    <p class="flex flex-col uppercase">
                        <span class="text-sm tracking-[2px]">
                            Est. travel time
                        </span>
                        <span class="text-white text-[28px] font-family2">
                            ${travel}
                        </span>
                    </p>   
                `;
            }
        });
    });
    
};

fetchData('../scripts/data.json');