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
const progressBar = getElement('.progress-bar');

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
            prevBtn.disabled = true;
            prevBtn.style.opacity = 0.5
            
            //! come back to this::: 
            startSlide.innerHTML = 'stop slideshow';
            progressBar.style.background = `linear-gradient(to right, #000 ${((counter + 1) / cards.length)*100}%, #E5E5E5 ${((counter + 1 )/cards.length) * 100}%)`;
        };
    });
    
    
    nextBtn.addEventListener('click', () => {
        prevBtn.disabled = false;
        prevBtn.style.opacity = 1;
        counter++;
        progressBar.style.background = `linear-gradient(to right, #000 ${((counter + 1) / cards.length)*100}%, #E5E5E5 ${((counter + 1)/cards.length) * 100}%)`;
        let currentCard = data[counter];
        const { images, name, artist, year, description:desc , source} = currentCard;
        loadCardDetails(name, artist, images, year, desc, source);
        loadFooterDetails(name, artist);
    
        if (counter >= (cards.length - 1)) {
            nextBtn.disabled = true;
            nextBtn.style.opacity = 0.5
        } 
    
    });

    prevBtn.addEventListener('click', () => {
        nextBtn.disabled = false;
        nextBtn.style.opacity = 1;
        progressBar.style.background = `linear-gradient(to right, #000 ${(counter / cards.length)*100}%, #E5E5E5 ${(counter/cards.length) * 100}%)`;
        counter--;
        let currentCard = data[counter];
        const { images, name, artist, year, description:desc , source} = currentCard;
        loadCardDetails(name, artist, images, year, desc, source);
        loadFooterDetails(name, artist);
        if (counter < 1) {
            prevBtn.disabled = true;
            prevBtn.style.opacity = 0.5;
        };
        
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
    });
};



fetchData('/scripts/data.json');

