const getElements = (element) => {
    const arr = [...document.querySelectorAll(element)];
    if (!arr) {
        throw new Error (`${element} was not found in DOM`);
    }

    if (arr.length > 1){
        return arr
    } else {
        return arr[0];
    }
};

export default getElements;