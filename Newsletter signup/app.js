const getElement = (element) => document.querySelector(element);

const form = getElement(".form");
const userInput = getElement("#email");
const containerOne = getElement(".container-1");
const containerTwo = getElement(".container-2");
const dismissBtn = getElement("#btn");
const spanEmail = getElement("#userEmail");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userValue = userInput.value;
    if (userValue !== ""){
        if (userValue.includes("@")){
            if (userValue.length > 8){
                containerOne.classList.add("hidden");
                containerTwo.classList.remove("hidden");
                spanEmail.innerHTML = `<b>${userValue}</b>`;
                userInput.value = "";
                
                dismissBtn.addEventListener("click", () => {
                    containerOne.classList.remove("hidden");
                    containerTwo.classList.add("hidden");
                })
            }
            else{
                alert("Email too short");
            }
        }
        else{
            alert("Invalid email");
        }
    }
    else{
        alert("Empty email not allowed");
    }
})
