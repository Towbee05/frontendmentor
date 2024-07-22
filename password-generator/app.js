const getElement = (selection) => document.querySelector(selection);
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = uppercase.toLowerCase();
const numbers = "0123456789";
const special_numbers = "!@#$%^&*()_+-={}[];<>:"
const characterLength = getElement("#character-length");

// Styling the range slider with JS
const slider = getElement(".slider");
slider.addEventListener("input", (e) => {
    const currentValue = e.target.value;
    const maxValue = e.target.max;
    const progress =  (currentValue / maxValue) * 100;
    slider.style.background = `linear-gradient(to right, #A4FFAF ${progress}%, #18171f ${progress}%)`;
    characterLength.innerHTML = `${slider.value}`
});

// Getting the remainging elements
const password = getElement("#password");
const copied = getElement("#copy-btn");
const checkboxes = [...document.querySelectorAll("input[type='checkbox']")];
const strength = getElement("#strength");
const generateBtn = getElement(".customise");
const copiedText = getElement("#copiedText");

generateBtn.addEventListener("click", () => {
    let alreadyChecked = [];
    let unchecked = [];
    let generatedPassword = "";
    checkboxes.map((checkbox) => {
        const elementID = checkbox.getAttribute("id");
        if (slider.value != 0){
            if (checkbox.checked){
                !(alreadyChecked.includes(checkbox)) ? alreadyChecked.push(checkbox) : ""
                if (elementID === "uppercase"){
                    const newUpper = generatedPassword += uppercase;
                    getPassword(newUpper);
                }
                
                else if (elementID === "lowercase"){
                    const newLower = generatedPassword += lowercase;
                    getPassword(newLower);
                }
    
                else if (elementID === "numbers"){
                    const newNumber = generatedPassword += numbers;
                    getPassword(newNumber);
                }
                else if (elementID === "symbols"){
                    const newSymbol = generatedPassword += special_numbers;
                    getPassword(newSymbol);
                }
            }
            else{
                unchecked.includes(checkbox) ? "" : unchecked.push(checkbox);
            }
            
            let strengthWord = "";
            switch (alreadyChecked.length){
                case 0:
                    strengthWord = "";
                    strength.innerHTML = `<p class="uppercase"> ${strengthWord} </p>
                    <article class="space-x-2 flex">
                        <div class="w-2.5 h-7 border-2 border-custom-letters">  </div>
                        <div class="w-2.5 h-7 border-2 border-custom-letters">  </div>
                        <div class="w-2.5 h-7 border-2 border-custom-letters">  </div>
                        <div class="w-2.5 h-7 border-2 border-custom-letters">  </div>
                    </article>`
                    break;
                case 1: 
                    strengthWord = "Too weak";
                    strength.innerHTML = `<p class="uppercase"> ${strengthWord} </p>
                    <article class="space-x-2 flex">
                        <div class="w-2.5 h-7 bg-custom-weak">  </div>
                        <div class="w-2.5 h-7 border-2 border-custom-letters">  </div>
                        <div class="w-2.5 h-7 border-2 border-custom-letters">  </div>
                        <div class="w-2.5 h-7 border-2 border-custom-letters">  </div>
                    </article>`
                    break;
                case 2: 
                    strengthWord = "weak";
                    strength.innerHTML = `<p class="uppercase"> ${strengthWord} </p>
                    <article class="space-x-2 flex">
                        <div class="w-2.5 h-7 bg-custom-orange">  </div>
                        <div class="w-2.5 h-7 bg-custom-orange">  </div>
                        <div class="w-2.5 h-7 border-2 border-custom-letters">  </div>
                        <div class="w-2.5 h-7 border-2 border-custom-letters">  </div>
                    </article>`
                    break;
                case 3:
                    strengthWord = "medium";
                    strength.innerHTML = `<p class="uppercase"> ${strengthWord} </p>
                    <article class="space-x-2 flex">
                        <div class="w-2.5 h-7 bg-custom-yellow">  </div>
                        <div class="w-2.5 h-7 bg-custom-yellow">  </div>
                        <div class="w-2.5 h-7 bg-custom-yellow">  </div>
                        <div class="w-2.5 h-7 border-2 border-custom-letters">  </div>
                    </article>`
                    break;
                case 4: 
                    strengthWord = "Strong"; 
                    strength.innerHTML = `<p class="uppercase"> ${strengthWord} </p>
                    <article class="space-x-2 flex">
                        <div class="w-2.5 h-7 bg-custom-neon-green">  </div>
                        <div class="w-2.5 h-7 bg-custom-neon-green">  </div>
                        <div class="w-2.5 h-7 bg-custom-neon-green">  </div>
                        <div class="w-2.5 h-7 bg-custom-neon-green">  </div>
                    </article>`
            };
    
        
        }
        else{
            generateBtn.classList.add("alert-danger");
            setTimeout(() => {
                generateBtn.classList.remove("alert-danger");
            }, 1000);
        }
    });
});

const getRandomNumber = (value) => Math.ceil(Math.random() * value) - 1;
const insertPassword = (word) => {
    password.innerHTML = word;
    password.style.opacity = 1;
};

const getPassword = (arr) => {
    let casePassword = "";
    for (let i = 0; i < slider.value; i++ ){
        const randomNumber = getRandomNumber(arr.length);
        casePassword += arr[randomNumber];
        insertPassword(casePassword);
    };
}
copied.addEventListener("click", () => {
    navigator.clipboard.writeText(password.innerHTML);
    copiedText.classList.remove("hidden");

    setTimeout(() => {
        copiedText.classList.add("hidden");
    }, 3000);
})
