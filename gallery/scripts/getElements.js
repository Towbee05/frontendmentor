const getElement = (selection) => {
    const element = [...document.querySelectorAll(selection)];
    if (element.length < 1) {
        throw new Error(`Couldn't find element ===> ${element}`);
    }
    if (element.length === 1) {
        return element[0];
    } else {
        return element;
    }
}

export default getElement;