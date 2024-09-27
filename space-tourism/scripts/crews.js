import './openNav.js'
import getElement from './getElements.js'
import { addClass, removeClass, replaceClass } from './modifyClasslists.js'

const btns = getElement('.change-btn');
const path = '../scripts/data.json';
const crewSection = getElement('#crew-section');
const imageSection = getElement('#image-section');


const fetchData = async (url) => {
    const response = await fetch(url);
    let data = await response.json();

    data = data['crew'];
    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btns.forEach((single) => removeClass(single, 'selected-crew'));
            addClass(btn, 'selected-crew');
            const { name, images, role, bio } = data[index];
            crewSection.innerHTML = 
            `
                <p class="uppercase font-family2 text-lg tablet:text-2xl laptop:text-[32px] opacity-50 text-white">
                    ${name}
                </p>
                <p class="uppercase font-family2 text-2xl tablet:text-[40px] laptop:text-[56px] text-white mt-2 tablet:mt-2 laptop:mt-4">
                    ${role}
                </p>
                <p class="text-[15px] tablet:text-lg laptop:text-lg max-w-[250px] leading-[180%] tablet:max-w-[450px] laptop:max-w-[440px] mt-6 tablet:mt-6 laptop:mt-6">
                    ${bio}
               </p>
            `;
            imageSection.innerHTML = 
            `
                <img src="${images.webp}" alt="${name} image" class="w-[150px] tablet:w-[300px] laptop:w-[450px]">
            `
        });
    });
};

fetchData(path);