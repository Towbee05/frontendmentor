const getElement = (element) => {
    const htmlElement = [...document.querySelectorAll(element)];
    if (!htmlElement || htmlElement.length < 1) {
        throw new Error (`${element} not found`);
    };
    if (htmlElement.length > 1){
        return htmlElement;
    };
    return htmlElement[0];
};

export default getElement;
