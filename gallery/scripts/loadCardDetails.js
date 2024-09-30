import getElement from "./getElements.js";
import { addClass, removeClass } from "./modifyClass.js";

const carddetails = getElement('.card-details');
const imageSection = getElement('#view-image');

const loadCardDetails = (name, artist, images, year, desc, source) => {
    carddetails.innerHTML = `
        <div class="relative tablet:grid tablet:grid-cols-custom-column laptop:grid laptop:grid-cols-custom-column2">
            <div class="relative laptop:pb-16">
                <button class='absolute uppercase mobile:top-4 left-4 tablet:bottom-4 laptop:bottom-20 bg-black flex text-white gap-3 items-center px-4 py-[14px] group hover:bg-white group' id='view-btn'>
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" class="fill-white group-hover:fill-black"><g fill="" fill-rule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g></svg>
                    <p class='text-[10px] group-hover:text-black mb-0'> View image </p>
                </button> 
                <img src = '.${images.hero.small}' class="tablet:hidden laptop:hidden"/>
                <img src = '.${images.hero.large}' class="mobile:hidden h-full"/>
                <div class="absolute mobile:left-0 mobile:-bottom-5 tablet:top-0 tablet:max-w-[440px] tablet:-right-[20%] laptop:-right-20 laptop:top-0 bg-white p-6 laptop:max-w-[400px]">
                    <h1 class="font-bold text-2xl tablet:text-[56px] tablet:leading-[64px]"> ${name} </h1>
                    <p class="text-sm tablet:text-base text-grey"> ${artist.name} </p>
                </div>
            </div>
            <div class="mobile:pt-10 tablet:place-self-center laptop:place-self-end tablet:mt-4">
                <img src="${artist.image}" alt= "${artist.name} image" />  
            </div>
        </div>
        <div class="relative px-6 space-y-10 tablet:grid laptop:grid tablet:max-w-[600px]">
            <div class="absolute mobile:right-6 top-0 tablet:left-0 -z-10 laptop:right-0">
                <p class="mobile:text-[100px] mobile:leading-[100px] text-[200px] leading-[150px] text-year-grey font-bold">
                    ${year}
                </p>
            </div>
            <div class="pt-16 text-grey font-bold text-[14px] leading-[28px] tablet:max-w-[400px] place-self-end laptop:place-self-center space-y-10 laptop:max-w-[350px]">
                <p>
                    ${desc}
                </p>
                <button class='text-[9px] tracking-[1.93px] uppercase text-grey font-bold'>
                    <a href = '${source}' class="hover:underline hover:text-black">    
                        go to source
                    </a>
                </button>
            </div>
        </div>
    `;
    const viewBtn = getElement('#view-btn');
    viewBtn.addEventListener('click', () => {
        removeClass(imageSection, 'hidden');
        imageSection.innerHTML = `
            <div class="flex flex-col gap-8 text-white">
                <button class='text-right text-[14px] tracking-[2px] font-bold uppercase close-btn hover:opacity-50'> close </button>
                <img src="${images.hero.small}" alt="${name} image thumbnail" class=""/>
            </div>
        `;

        const closeImage = getElement('.close-btn');
        closeImage.addEventListener('click', () => addClass(imageSection, 'hidden'));
    });
};

export default loadCardDetails;