import getElements from "./getElements.js";

const openbtn = getElements('.open-btn');
const closebtn = getElements('.close-nav');
const mobileNav = getElements('.mobile-nav');
const currentNav = getElements('.current-nav');
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

let counter = 1;

nextBtn.map((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('desktop')) {
            changeImage(1, 'desktop');
        } else{
            changeImage(0,  'mobile');
        };
    });
});

prevBtn.map((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('desktop')) {
            changeImageBackward(1, 'desktop');
        } else{
            changeImageBackward(0, 'mobile');
        };
    });
});
const changeImage = (index, screen) => {
    if (counter >= 3) {
        counter = 0;
    };
    counter ++;
    return imgContainer[index].src = `/assets/images/${screen}-image-hero-${counter}.jpg`
};
const changeImageBackward = (index,screen) => {
    counter --;
    if (counter < 1) {
        counter = 3;
    };
    return imgContainer[index].src = `/assets/images/${screen}-image-hero-${counter}.jpg`
};