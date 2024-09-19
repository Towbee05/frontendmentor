const getElements = (element) => {
    const selection = document.querySelector(element);
    if (!element ) throw new Error(`${element} not found`);

    return selection;
};

export default getElements;