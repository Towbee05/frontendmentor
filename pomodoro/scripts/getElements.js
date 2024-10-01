export const getSingleElement = (element) => {
    const selection = document.querySelector(element);
    if (!selection) throw new Error (`${element} not found`);

    return selection;
};

export const getMultipleElements = (elements) => {
    const selection = [...document.querySelectorAll(elements)];
    if (selection.length < 1) throw new Error(`${elements} not found`);
    
    return selection;
}

