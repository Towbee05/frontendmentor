const getElement = (element) => { 
    element = document.querySelector(element);

    if (!element) throw new Error(`${element} does not exist`);
    return element;
}

const radioBTNS = [...document.querySelectorAll("input[type='radio']")];

const weightKG = getElement('#weight-kg');
const weightST = getElement('#weight-st');
const weightLBS = getElement('#weight-lbs');
const heightCM = getElement('#height-cm');
const heightFT = getElement('#height-ft');
const heightIN = getElement('#height-in');
const bmiContainer = getElement('.bmi');
const bmiWeight = getElement('.weight-class');
        
const imperial = "imperial";
const metric = "metric";
const pounds = 2.205;
const stone = 6.35;
const stoneToPound = 14;
const foot = 0.0328084;
const inch = 0.393701;
const ft_to_inch = 12;
const ft_to_cm = 30.48;
const inches_to_cm = 2.54;


radioBTNS.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const id = btn.getAttribute('id');
        const imperialContainer = e.currentTarget.parentElement.parentElement.nextElementSibling;
        if (id === imperial){
                imperialContainer.classList.add('imperial');
        }
        else{
            imperialContainer.classList.remove('imperial');
        };
    });
});

const heightToFeet = (height) => {
    return Math.floor(height * foot);
};  

// Convert feet and inches back to cm
const feetToCM = (height) => {
    return height * ft_to_cm;
};

const inchesToCM = (height_in_cm) => {
    return height_in_cm * inches_to_cm;
};

const feetInchesToCM = (heightInFT, heightInInches) => {
    return (heightInFT + heightInInches).toFixed(2);
};
// End of feet to inches cm

const heightToInches = (heightInFoot, heightInCM) => {
    let heightInInches = heightInFoot - (heightInCM * foot);
    heightInInches = ft_to_inch * Math.abs(heightInInches);
    
    return heightInInches.toFixed(2);
};

const weightToStone = (weight) => {
    return Math.floor(weight / stone);
};

const weightToPound = (weightInStone, weight) => {
    let weightInPound = Math.abs(weightInStone - (weight / stone));    
    weightInPound = weightInPound * stoneToPound;
    return weightInPound.toFixed(2);
};

// Convert weight back to kg from stone and pounds
const stoneToKG = (weight) => (weight * stone);
const poundsToKG = (weight) => (weight / pounds);
const stoneAndPoundsToKG = (weightInStone, weightInPound) => (stoneToKG(weightInStone) + poundsToKG(weightInPound)).toFixed(2);

heightCM.addEventListener('keyup', () => {
    const user_height_in_cm = heightCM.value;
    if (user_height_in_cm !== null || user_height_in_cm !== "") {    
        heightFT.value = heightToFeet(user_height_in_cm);
        heightIN.value = heightToInches(heightToFeet(user_height_in_cm), user_height_in_cm);
    };
});
heightFT.addEventListener('keyup', () => {
    const user_height_in_ft = heightFT.value;
    const resolved_height_in_cm = feetToCM(user_height_in_ft);
    heightCM.value = resolved_height_in_cm;
});
heightIN.addEventListener('keyup', () => {
    const user_height_in_ft = heightFT.value;
    const user_height_in_inch = heightIN.value;
    const resolved_height_in_cm = feetInchesToCM(feetToCM(user_height_in_ft), inchesToCM(user_height_in_inch));
    heightCM.value = resolved_height_in_cm;
});

weightKG.addEventListener('keyup', () => {
    const user_weight_in_kg = weightKG.value;
    if (user_weight_in_kg !== null){
        weightST.value = weightToStone(user_weight_in_kg);
        weightLBS.value = weightToPound(weightToStone(user_weight_in_kg), user_weight_in_kg);
    };
});
weightST.addEventListener('keyup', () => {
    const user_weight_in_st = weightST.value;
    if (user_weight_in_st !== null){
        weightKG.value = stoneToKG(user_weight_in_st);
    };
});
weightLBS.addEventListener('keyup', () => {
    const user_weight_in_lbs = weightLBS.value;
    const user_weight_in_st = weightST.value;
    if (user_weight_in_lbs !== null){
        weightKG.value = stoneAndPoundsToKG(user_weight_in_st, user_weight_in_lbs);
    };
});

const calculateBMI = (height, weight) => {
    const heightTometer = height / 100;
    const heightSquared = heightTometer ** 2;
    let BMI = (weight / heightSquared).toFixed(2);
    if (!isFinite(BMI)) return "0.00";
    if (isNaN(BMI)) return "0.00";
    return BMI;

};

const checkForWeightclass = (bmi) => {
    let weightClass;
    if (bmi < 18.5){ 
        weightClass = "an underweight person";
    }
    else if ((bmi >= 18.5) && (bmi < 24.9)){
        weightClass = "a healthy person";
    }
    else if ((bmi >= 25) && (bmi < 29.9)){
        weightClass = "an Overweight person";
    }
    else{ 
        weightClass = "You are sufffering from"
    };

    return weightClass;
}

document.querySelector('form').addEventListener("keyup", () => {
    bmiContainer.textContent = calculateBMI(heightCM.value, weightKG.value);
    bmiWeight.textContent = checkForWeightclass(calculateBMI(heightCM.value, weightKG.value));
});
