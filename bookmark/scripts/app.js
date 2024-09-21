import getElements from "./getElements.js";
import { addClass, removeClass, toggleClass } from "./removeAddClass.js";
import data from "./data.js";

// Get elements for navigation
const openNav = getElements('#open-nav');
const closeNav = getElements('#close-nav');
const navigationMenu = getElements('#aside-nav');

openNav.addEventListener('click', () => removeClass(navigationMenu, "hidden"));

closeNav.addEventListener('click', () => addClass(navigationMenu, "hidden"));

// Get all elements for the tabs
const tabHeaders = getElements('.tab-head');
const tabBody = getElements('#tab-body');

tabHeaders.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabHeaders.forEach((head) => removeClass(head, "clicked"));
        addClass(tab, "clicked");

        const { img, h1, p } = data[index];
        tabBody.innerHTML = `
            <section class="relative ">
                <div class="w-full p-8 ">
                    <img src=${img} alt="tab section ${index + 1} image">
                </div>
                <div class="absolute w-[200%] h-[77%] bg-custom-soft-blue -bottom-0 right-9 laptop:right-[40%] rounded-[999px] -z-10">
                </div>
            </section>
            <section class="mt-8 text-center space-y-4 laptop:place-self-center tablet:text-left laptop:text-left laptop:max-w-[450px]">
                <div>
                    <h1 class="text-24px font-medium -tracking-[0.08px] laptop:text-32px">
                        ${h1}
                    </h1>
                    <p class="text-15px opacity-50 laptop:text-lg">
                        ${p}
                    </p>
                </div>
                <button class="bg-custom-soft-blue py-10px px-6 capitalize rounded-md text-white">
                    more info
                </button>
            </section>
        `;
    });
});

// Get all elements for the drop down FAQ
const faqContainer = getElements('.dropdown-container');

faqContainer.forEach((faq) => faq.addEventListener('click', () => toggleClass(faq, 'hide-tab')));

// Get form elements
const email = getElements('#email');
const form = getElements('form');
const inputContainer = getElements('.form-input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = email.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (email.value.match(regex)){
        return;
    } else {
        addClass(inputContainer, 'error');
        setTimeout(() => removeClass(inputContainer, 'error'), 4000)
    }
    // if  ()
});
