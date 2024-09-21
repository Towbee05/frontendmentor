import getElements from "./getElements.js";
import data from "./data.js";

const openbtn = getElements('.open-btn');
const closebtn = getElements('.close-nav');
const mobileNav = getElements('.mobile-nav');
const currentNav = getElements('.current-nav');
const mobileimgSection = getElements('#mobile-img-section');
const desktopimgSection = getElements('#desktop-img-section');
const heroSection = getElements('#hero-section');
const nextBtn = [...document.querySelectorAll('.next-btn')];
const prevBtn = [...document.querySelectorAll('.prev-btn')];
const imgContainer = [...document.querySelectorAll('.carousel-img')];

console.log(imgContainer);

const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);

openbtn.addEventListener('click', () => {
    addClass(currentNav, 'hidden');
    removeClass(mobileNav, 'hidden');
});

closebtn.addEventListener('click', () => {
    addClass(mobileNav, 'hidden');
    removeClass(currentNav, 'hidden');
});

let counter = 0;

nextBtn.map((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('desktop')) {
            changeImage('desktop');
        } else{
            changeImage('mobile');
        };
    });
});

prevBtn.map((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('desktop')) {
            changeImageBackward('desktop');
        } else{
            changeImageBackward('mobile');
        };
    });
});
const changeImage = (screen) => {
    counter++;
    if (counter >= 3) {
        counter = 0;
    };
    loadDom(counter, screen);
};
const changeImageBackward = (screen) => {
    counter --;
    if (counter < 0) {
        counter = 2;
    };
    loadDom(counter, screen);
};

const loadDom = (counter, screen) => {
    if (screen === 'mobile') {
        const { mobile } = data;

        mobileimgSection.src = mobile[counter].img;
        return heroSection.innerHTML = `
            <h1 class="text-40px font-semibold tracking-001 laptop:text-5xl">
                ${mobile[counter].h1}
            </h1>
            <p class="tracking-002 font-medium opacity-50">
                ${mobile[counter].p}
            </p>`
    } else {
        const { desktop } = data;

        desktopimgSection.src = desktop[counter].img;
        return heroSection.innerHTML = `
            <h1 class="text-40px font-semibold tracking-001 laptop:text-5xl">
                ${desktop[counter].h1}
            </h1>
            <p class="tracking-002 font-medium opacity-50">
                ${desktop[counter].p}
            </p>`
    };
}