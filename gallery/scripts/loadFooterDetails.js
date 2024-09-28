import getElement from "./getElements.js";
const footerText = getElement('.footer-text');

const loadFooterDetails = (name, artist) => {
    return footerText.innerHTML = `
    <p class="font-bold text-[14px] tablet:text-[18px] laptop:text-[18px]">
        ${name}
    </p>
    <p class='text-[10px] tablet:text-[14px] laptot:text-[14px]'>
        ${artist.name}
    </p>
`;
};

export default loadFooterDetails;