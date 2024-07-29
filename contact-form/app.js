const formHTML = [...document.getElementsByTagName("form")][0];
let container;
let errorMessage;
let successMessage = document.querySelector(".message-success");
let validated = false

formHTML.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = [...formHTML.querySelectorAll("input[type='text'"), formHTML.querySelector("input[type='email'"), formHTML.querySelector("textarea")];
    const checkbox = formHTML.querySelector('input[type="checkbox"]');
    const radio = [...formHTML.querySelectorAll('input[type="radio"]')];
    if (!validated){
        if (!checkbox.checked) {
            container = checkbox.parentElement.parentElement;
            errorMessage = container.querySelector('.error-message');
            errorMessage.style.display = "block";
            timeOutFunction(errorMessage);
        }; 
        
        radio.forEach((radium, index) => {
            container = radium.parentElement.parentElement;
            errorMessage = container.querySelector('.error-message');
            if (radio[0].checked) return;
            else if (radio[1].checked) return;
            else errorMessage.style.display = "block";
            timeOutFunction(errorMessage);
        });
    
        inputs.forEach((input) => {
            container = input.parentElement;
            errorMessage = container.querySelector('.error-message');
            if (input.value == " " || input.value === ""){
                errorMessage.style.display = "block";
                timeOutFunction(errorMessage);
            };
        });

        validated = true;
    }
    else {
        successMessage.style.display = "block";
        scrollTo({
            top: 0
        });
        inputs.forEach((input) => input.value = "");
        radio.forEach((input) => input.checked = false);
        checkbox.checked = false;
        timeOutFunction(successMessage);
        validated = false;
    };

});

const timeOutFunction = (element) => setTimeout(() => {
    element.style.display = "none";
}, 5000);
