const sideBar = document.querySelector(".side-bar");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

const sideBarWidth = sideBar.getBoundingClientRect().width;

openBtn.addEventListener("click", () => {
    sideBar.style.transform = `translateX(-${1}%)`;
});

closeBtn.addEventListener("click", () => {
    sideBar.style.transform = `translateX(${100}%)`;
});