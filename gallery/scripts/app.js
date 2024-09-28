import getElement from './getElements.js';
import { addClass, removeClass, replaceClass } from './modifyClass.js';
import loadCardDetails from './loadCardDetails.js';
import loadFooterDetails from './loadFooterDetails.js';

const loader = getElement('.loader');
const cards = getElement('.card');
const carddetails = getElement('.card-details');

const cardSection = getElement('.card-section');
const footerSection = getElement('#footer-section');
const startSlide = getElement('#start-slide');
const prevBtn = getElement('#prev-slide');
const nextBtn = getElement('#next-slide');


let counter = 0;

const fetchData = async (url) => {
    const response = await fetch(url);
    let data = await response.json();
    addClass(loader, 'hidden');

    startSlide.addEventListener('click', () => {
        if (startSlide.innerHTML === 'stop slideshow'){
            removeClass(cardSection, 'hidden');
            addClass(carddetails, 'hidden');
            addClass(footerSection, 'hidden');
            startSlide.innerHTML = 'start slideshow';
            counter = 0;
        } else{
            addClass(cardSection, 'hidden');
            removeClass(carddetails, 'hidden');
            removeClass(footerSection, 'hidden');
            
            let currentCard = data[counter];
            const { images, name, artist, year, description:desc , source} = currentCard;
            loadCardDetails(name, artist, images, year, desc, source);
            loadFooterDetails(name, artist);
            //! come back to this::: 
            startSlide.innerHTML = 'stop slideshow';
        };
    });
    
    
    nextBtn.addEventListener('click', () => {
        if (counter >= (cards.length - 1)) {
            nextBtn.disabled = true;
            nextBtn.style.opacity = 0.5
        } else{
            counter++;
            let currentCard = data[counter];
            const { images, name, artist, year, description:desc , source} = currentCard;
            loadCardDetails(name, artist, images, year, desc, source);
            loadFooterDetails(name, artist);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (counter < 0) {
            prevBtn.disabled = true;
            prevBtn.style.opacity = 0.5
        } else{
            counter--;
            let currentCard = data[counter];
            const { images, name, artist, year, description:desc , source} = currentCard;
            loadCardDetails(name, artist, images, year, desc, source);
            loadFooterDetails(name, artist);
        }
    });

    cards.forEach((card, index) => {
        let currentCard = data[index];
        const { images, name, artist, year, description:desc , source} = currentCard;
        const { gallery } = images;

        // !cards setup
        card.innerHTML = `
            <img src= ".${gallery}" alt="${name} image"/>
            <div class='capitalize absolute text-white bottom-0 left-0 right-0 text-left px-8 pb-8 pt-14 space-y-2'>
                <p class='text-2xl font-bold'> ${name} </p>
                <p class='text-sm opacity-75' > ${artist.name} </p>
            </div>
        `;
        // card.addEventListener('click', () => {
        //     addClass(cardSection, 'hidden');
        //     removeClass(carddetails, 'hidden');
        //     // !card detail page
        //     loadCardDetails(name, artist, images, year, desc, source);
        //     // ! footer page
        //     loadFooterDetails(name, artist);
        //     const viewBtn = getElement('#view-btn');
        //     viewBtn.addEventListener('click', () => {
        //         removeClass(imageSection, 'hidden');
        //         imageSection.innerHTML = `
        //             <div class="flex flex-col gap-8 text-white">
        //                 <button class='text-right text-[14px] tracking-[2px] font-bold uppercase close-btn'> close </button>
        //                 <img src="${images.thumbnail}" alt="${name} image thumbnail" />
        //             </div>
        //         `;

        //         const closeImage = getElement('.close-btn');
        //         closeImage.addEventListener('click', () => addClass(imageSection, 'hidden'));
        //     });
        // });
    });
};

console.log(loader);


fetchData('/scripts/data.json');

