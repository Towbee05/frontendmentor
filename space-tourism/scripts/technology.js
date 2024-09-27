import './openNav.js'
import getElement from './getElements.js'
import { addClass,removeClass,replaceClass } from './modifyClasslists.js'

const btns = getElement('.btn-tech');
const techSection = getElement('#text-section');
const imageSection = getElement('#image-container');

const path = '../scripts/data.json';

const fetchData = async (url) => {
    const response = await fetch(url);
    let data = await response.json();
    data = data['technology'];

    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btns.forEach((single) => removeClass(single, 'selected-number'));
            addClass(btn, 'selected-number');

            const { name, images, description:desc} = data[index];
            techSection.innerHTML = 
            `
                <h1 class="uppercase font-family2 space-y-4">
                    <span class="opacity-50 text-lg laptop:text-[32px]">The terminology...</span>
                    <span class="block text-2xl laptop:text-[56px]">
                        ${name}
                    </span>
                </h1>
                <p class="leading-[180%] text-blue-300 opacity-75 tablet:max-w-[520px] laptop:max-w-[350px]">
                    ${desc}
                </p>
            `
            imageSection.innerHTML = 
            `
                <img src="${images.portrait}" alt="A launching space shuttle" class="tablet:hidden laptop:hidden">
                <img src="${images.landscape}" alt="A launching space shuttle" class="hidden tablet:block laptop:block h-full"> 
            `
        });
    });
};

fetchData(path);