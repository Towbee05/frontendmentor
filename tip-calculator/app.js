const getElement = (selection) => document.querySelector(selection);

const amount = getElement("#amount");
const people = getElement("#people");
const custom = getElement("#custom");
const reset = getElement("#reset");
const singleAmount = getElement("#singleAmount");
const totalAmount = getElement("#totalAmount");
const btns = [...document.querySelectorAll(".btn")];
const zero1 = getElement(".zero-1");
const zero2 = getElement(".zero-2");

// amount.addEventListener("keyup", () => {
//     singleAmount.innerHTML = amount.value
// });

btns.map((btn) => {
    btn.addEventListener("click", (e) => {
        const tipValue = parseInt(e.target.innerHTML);
        if (!people.value){
            addClasses(people, "danger");
            removeClass(zero2, "hidden");
            setToDefault("$0.00", "$0.00");
        }
        else if (!amount.value){
            addClasses(amount, "danger");
            removeClass(zero1, "hidden");
            setToDefault("$0.00", "$0.00");
        }
        else{
            removeClass(people,"danger");
            addClasses(zero2, "hidden");   
            removeClass(amount, "danger");
            addClasses(zero1, "hidden");
            const totalTip = (amount.value * (tipValue / 100)) 
            
            singleNumber = (singleAmount.innerHTML).replace("$", "");
            
            let total = parseFloat(amount.value) + parseFloat(totalTip);
            total = (total / people.value).toFixed(2);
    
    
            setToDefault((totalTip/ people.value).toFixed(2), total);
        }
        custom.value = ""
        // singleAmount.innerHTML = `$${(totalTip/ people.value).toFixed(2)}`;
        // totalAmount.innerHTML = `$${total}`
    })
});

custom.addEventListener("keyup", () => {
    const tipValue = parseFloat(custom.value);
    const totalTip = (amount.value * (tipValue / 100)); 
    singleAmount.innerHTML = `$${(totalTip/ people.value).toFixed(2)}`;
    
    singleNumber = (singleAmount.innerHTML).replace("$", "");

    let total = parseFloat(amount.value) + parseFloat(totalTip);
    total = (total / people.value).toFixed(2);
    totalAmount.innerHTML = `$${total}`;

    if (!tipValue) setToDefault("$0.00", "$0.00");
    if (!people.value) setToDefault("$0.00", "$0.00");
});

reset.addEventListener("click", () => {
    amount.value = "";
    people.value = "";
    setToDefault("$0.00", "$0.00");
});

const setToDefault = (singlevalue, totalValue) => {
    singleAmount.innerHTML = singlevalue;
    totalAmount.innerHTML = totalValue;
}

people.addEventListener("keyup", () => {
    if (!people.value) return;
    if (!custom.value) return;
    tipValue = custom.value;
    const totalTip = (amount.value * (tipValue / 100)); 
    singleAmount.innerHTML = `$${(totalTip/ people.value).toFixed(2)}`;

    singleNumber = (singleAmount.innerHTML).replace("$", "");

    let total = parseFloat(amount.value) + parseFloat(totalTip);
    total = (total / people.value).toFixed(2);
    totalAmount.innerHTML = `$${total}`
});

const addClasses = (container, className) => {
    container.classList.add(className);
}

const removeClass = (container, className) => {
    container.classList.remove(className);
};

const calculateValue = () => {

}