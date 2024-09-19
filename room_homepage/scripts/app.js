import getElements from "./getElements.js";

const openbtn = getElements('.open-btn');
const closebtn = getElements('.close-nav');
const mobileHeader = getElements('.mobile-header-section');
const desktopHeader = getElements('.desktop-header-section');
const mobileNav = getElements('.mobile-nav');
const currentNav = getElements('.current-nav');
const nextBtn = [...document.querySelectorAll('.next-btn')];
const prevBtn = [...document.querySelectorAll('.prev-btn')];

const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const replaceClass = (element, oldClassName, newClassName) => element.classList.replace(oldClassName, newClassName);

openbtn.addEventListener('click', () => {
    addClass(currentNav, 'hidden');
    removeClass(mobileNav, 'hidden');
    document.body.style.zIndex = `-$(100)`;
    document.body.style.backgroundColor = `rgba(0,0,0,0.5)`;
});

closebtn.addEventListener('click', () => {
    addClass(mobileNav, 'hidden');
    removeClass(currentNav, 'hidden');
    document.body.style.backgroundColor = ``;
    document.body.style.zIndex = 100;
});

const mobileImages = ['background-1', 'background-3', 'background-5'];
const desktopImages = ['background-2', 'background-4', 'background-6'];
let counter = 0;

nextBtn.map((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('desktop')) {
            changeImage(desktopImages, desktopHeader);
        } else{
            changeImage(mobileImages, mobileHeader);
        };
    });
});

prevBtn.map((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('desktop')) {
            changeImageBackward(desktopImages, desktopHeader);
        } else{
            changeImageBackward(mobileImages, mobileHeader);
        };
    });
});

const changeImage = (arr, section) => {
    counter++;
    if (counter > arr.length - 1) {
        counter = 0;
        replaceClass(section,`bg-${arr[arr.length - 1]}`, `bg-${arr[counter]}`);  
    };
    replaceClass(section,`bg-${arr[counter-1]}`, `bg-${arr[counter]}`);
};
const changeImageBackward = (arr, section) => {
    counter--;
    if (counter < 0 ) {
        replaceClass(section,`bg-${arr[counter + 1]}`, `bg-${arr[arr.length - 1]}`); 
        counter = arr.length - 1;
    };
    replaceClass(section,`bg-${arr[counter+1]}`, `bg-${arr[counter]}`);
};
    

// setInterval(() => changeImage(mobileImages), 3000);