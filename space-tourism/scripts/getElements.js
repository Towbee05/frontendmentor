const getElement = (element) => {
    const selection = [...document.querySelectorAll(element)];
    if (!selection) {
        throw new Error(`${selection} not found`);
    };
    if (selection.length === 1) {
        return selection[0];
    };
    return selection;
};

export default getElement;