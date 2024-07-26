const getSelection = (selection) => document.querySelector(selection);
const fetchURL = "/data.json";

// Selecting all DOM elements
const switchBtn = getSelection(".switch");
const welcome = getSelection("#welcome");
const optionsLabel = ["A", "B", "C", "D"];
const messageDanger = getSelection("#message-danger");
const main = getSelection("main");
const header = getSelection("#header");
const container = getSelection("#container");

let score = 0;

const fetchData = async () => {
    const response = await fetch(fetchURL);
    const data = await response.json();
    const quizzes = data["quizzes"];
    return quizzes;
}


const changeHeader = (data) => {
    const {title, icon} = data; 
    return `
    <span class="bg-custom-Accessibility w-14 h-14 mobile:w-10 mobile:h-10 grid place-items-center rounded-lg">
    <img src="${icon}" alt="${icon} header icon" />
    </span>
    <p class="font-medium">${title}</p>
    `
}


switchBtn.addEventListener("click", () => switchLightDarkMode(switchBtn));


const switchLightDarkMode = (btn) => {
    if (!btn.classList.contains("switched")){
        btn.classList.add("switched");
        btn.style.setProperty('--switched', 'translateX(100%)');
        main.classList.remove("tablet:bg-tablet-light");
        main.classList.remove("laptop:bg-desktop-light");
        main.classList.add("tablet:bg-tablet-dark")
        main.classList.add("laptop:bg-desktop-dark");
        main.classList.add("dark-mode");
        // progress.style.background = `linear-gradient(to right, #a729f5 ${progressPercentage}%, #fff ${progressPercentage}%`;
    }
    else{
        btn.classList.remove("switched");
        btn.style.setProperty('--switched', 'translateX(0%)');
        main.classList.add("tablet:bg-tablet-light");
        main.classList.add("laptop:bg-desktop-light");
        main.classList.remove("tablet:bg-tablet-dark")
        main.classList.remove("laptop:bg-desktop-dark");
        main.classList.remove("dark-mode");
        // progress.style.background = `linear-gradient(to right, #a729f5 ${progressPercentage}%, #313e51 ${progressPercentage}%`;
    }
}

const showQuestion = (data, counter) => {
    const {questions} = data
    const eachQuestions = questions[counter];
    const {question, options, answer} = eachQuestions; 
    container.innerHTML = `
    <div class="space-y-6 tablet:space-y-10 laptop:max-w-[452px] laptop:space-y-40" id="questions">
        <article class="space-y-3 tablet:space-y-7">
            <p class="italic text-sm text-custom-grey-navy inner-welcome"> Question ${counter +1 } of ${questions.length} </p>
            <p class="font-medium text-xl laptop:text-4xl"> 
                ${convertTextToHTML(question)}
            </p>
        </article>
        <article>
            <div class="bg-white p-1 w-auto relative h-4 rounded-[999px] progress-container">
                <div class="bg-custom-purple absolute inline h-2 rounded-[999px]" id="progress"></div>
            </div>
        </article>
    </div>
    <div class="space-y-4 pt-10 tablet:space-y-8 tablet:pt-16 laptop:pt-0">
        <div class="space-y-4 tablet:space-y-8  laptop:pt-0" id="answers">
            ${
                options.map((option, index) => {
                    return `
                    <article data-text ="${option}" class="rounded-xl flex justify-between items-center bg-white cursor-pointer" id="answer">
                        <div class="flex gap-4 laptop:gap-8 laptop:p-5 p-3 items-center">
                            <span class="w-10 h-10 bg-custom-grey rounded-md laptop:w-14 laptop:h-14 flex justify-center items-center font-medium text-custom-grey-navy laptop:text-[28px]" id="label">
                                ${optionsLabel[index]}
                            </span>
                            <p class="font-medium">
                                ${convertTextToHTML(option)}
                            </p>
                        </div>
                        <div class ="pr-4">
                            <img src="./assets/images/icon-incorrect.svg" alt="wrong answer icon" id="incorrect-img"/>
                            <img src="./assets/images/icon-correct.svg" alt="correct answer icon" id="correct-img"/>
                        </div>
                    </article>
                    `
                }).join("")
            }    
        </div>
        <button class="bg-custom-purple p-5 text-white w-full text-center rounded-xl" id="submit-btn">
            Submit Answer
        </button>
        <button class="bg-custom-purple p-5 text-white w-full text-center rounded-xl hidden" id="next-btn">
            Next Question
        </button>
        <p class="text-custom-red flex items-center gap-2 w-full justify-center hidden" id="message-danger">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"/></svg>
            </span> 
            <span>
                Please select an answer
            </span>
        </p>
    </div>
    `
    const progress = getSelection("#progress");
    switchProgressBar(progress, counter, data.questions);
    switchBtn.addEventListener("click", () => {
        switchProgressBar(progress, counter, data.questions);
    })
    const optionAnswer = [...document.querySelectorAll("#answer")];
    const submitBTN = container.querySelector("#submit-btn");
    const nextBTN = container.querySelector("#next-btn");
    const alertDanger = container.querySelector("#message-danger");
    let selectedAnswer = "";

    optionAnswer.forEach((answer) => {
        answer.addEventListener("click", () => {
            optionAnswer.forEach((answer) => answer.classList.remove("selected"));
            selectedAnswer = answer.dataset.text;
            answer.classList.add("selected");
        });
    });
    
    submitBTN.addEventListener("click", () => {
        if (!selectedAnswer) alertDanger.classList.remove("hidden");
        markScore(eachQuestions, selectedAnswer, optionAnswer);
        nextBTN.classList.remove("hidden");
        submitBTN.classList.add("hidden");
    });
    nextBTN.addEventListener("click", () => {
        generateNextQuestion(counter, data)
    });
    alertMessage(alertDanger, "hidden");

}

const markScore = (data, answer, optionsToCheck) => {
    try{
        const answerDOM = optionsToCheck.filter((option) => answer === option.dataset.text)[0];
        const {options, answer:correctAnswer} = data;
        
        const correctAnswerDOM = optionsToCheck.filter((option) => correctAnswer === option.dataset.text)[0];
        if (correctAnswer === answer) {
            score++;
            answerDOM.classList.add("correct")
        }
        else{
            answerDOM.classList.add("incorrect");
            correctAnswerDOM.classList.add("correct");
        }
    }
    catch{
        return
    }
}

const generateNextQuestion = (counter, data) => {
    counter++;
    if(counter > data.questions.length - 1){
        showScores(data, score);
        counter = 0
    }
    else showQuestion(data, counter);

}

const alertMessage = (container, classToRemove) => {
    setTimeout(() => {
        container.classList.add(classToRemove);
    }, 4000);
}

const convertTextToHTML = (text) => {
    let newText = text.replaceAll("<", "&lt");
    newText = newText.replaceAll(">", "&gt");
    return newText;
};

const showScores = (data, score) => {
    const {title, icon, questions}  = data;
    container.innerHTML = `
            <article class="text-[40px] tablet:text-[64px] laptop:text-[64px] ">
                <p class="font-light"> Quiz Completed </p>
                <p class="font-medium"> You scored ... </p>
            </article>
            <article class="w-full">
                <div class="w-full space-y-4 p-8 tablet:p-12 laptop:p-12 laptop:space-y-10 bg-white grid place-items-center rounded-xl" id="display-score" >
                    <article class="flex items-center gap-4 laptop:gap-6">
                        <span class="bg-custom-Accessibility p-2 grid place-items-center rounded-lg">
                            <img src="${icon}" alt = "${title} quiz icon"/>
                        </span>
    
                        <p class="font-medium score-title">${title}</p>
                    </article>
                    <article class="space-y-4">
                        <p class="text-[88px] font-medium w-full text-center score-title"> ${score} </p>
                        <p class="text-custom-grey-navy w-full text-center"> out of ${questions.length} </p>
                    </article>
                </div>
                <button class="bg-custom-purple text-white rounded-xl mt-3 tablet:mt-8 laptop:mt-8 p-3 tablet:p-8 laptop:p-8 w-full hidden" id="play-again">
                    Play Again
                </button>
            </article>
    `
    
    const playAgain = getSelection("#play-again");
    playAgain.addEventListener("click", () => startQuiz());
    playAgain.classList.remove("hidden");
};


const startQuiz = () => {
    container.innerHTML = `<article class="space-y-4">
    <h1 class="text-[40px] font-light leading-[100%] mobile:max-w-[330px] tablet:max-w-[465px] laptop:max-w-[470px] tablet:text-[64px] laptop:text-[64px]">
        Welcome to the 
        <span class="font-medium">
            Frontend Quiz!
        </span>
    </h1>
    <p class="text-sm leading-[150%] font-light italic text-custom-grey-navy tablet:text-xl laptop:text-xl inner-welcome"> Pick a subject to get started. </p>
</article>
<!-- Select quiz -->
<article class="space-y-3 tablet:space-y-6 laptop:space-y-6">
    <button data-course="HTML" class="bg-white p-3 rounded-xl flex w-full items-center gap-4" id="btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40" class="bg-custom-HTML rounded-md p-1"><path fill="#FF7E35" d="M24.508 7.607a1.25 1.25 0 0 1 .634 1.65l-10 22.5a1.25 1.25 0 1 1-2.284-1.015l10-22.5a1.251 1.251 0 0 1 1.65-.635ZM10.832 13.44a1.249 1.249 0 0 1 .1 1.765L6.674 20l4.263 4.795a1.25 1.25 0 1 1-1.87 1.66l-5-5.625a1.25 1.25 0 0 1 0-1.66l5-5.625a1.25 1.25 0 0 1 1.764-.105Zm18.337 0a1.25 1.25 0 0 1 1.765.105l5 5.625a1.25 1.25 0 0 1 0 1.66l-5 5.625a1.25 1.25 0 1 1-1.87-1.66L33.327 20l-4.262-4.795a1.25 1.25 0 0 1 .105-1.765Z"/></svg>
        
        <p> HTML </p>
    </button>

    <button data-course="CSS" class="bg-white p-3 rounded-xl flex w-full items-center gap-4" id="btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40" class="bg-custom-CSS rounded-md p-1"><path fill="#2FD887" d="M10 2.505a1.25 1.25 0 0 0-1.25 1.25V21.25a5 5 0 0 0 5 5H15v6.25a4.999 4.999 0 0 0 9.615 1.913c.25-.607.38-1.257.38-1.913v-6.25h1.255a5 5 0 0 0 5-5V3.755A1.25 1.25 0 0 0 30 2.505H10ZM28.75 17.5h-17.5V5.005h7.5V8.76a1.25 1.25 0 0 0 2.5 0V5.005h2.5v6.24a1.25 1.25 0 0 0 2.5 0v-6.24h2.5V17.5Zm-17.5 3.75V20h17.5v1.25a2.5 2.5 0 0 1-2.5 2.5h-2.505a1.25 1.25 0 0 0-1.25 1.25v7.5a2.497 2.497 0 1 1-4.995 0V25a1.25 1.25 0 0 0-1.25-1.25h-2.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
        
        <p> CSS </p>
    </button>

    <button data-course="JavaScript" class="bg-white p-3 rounded-xl flex w-full items-center gap-4" id="btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40" class="bg-custom-JavaScript p-1 rounded-md"><path fill="#306AFF" d="M21.25 18.75A3.75 3.75 0 0 1 25 15h3.75a1.25 1.25 0 0 1 0 2.5H25a1.25 1.25 0 0 0-1.25 1.25V20A1.25 1.25 0 0 0 25 21.25h1.25A3.75 3.75 0 0 1 30 25v1.25A3.75 3.75 0 0 1 26.25 30H22.5a1.25 1.25 0 0 1 0-2.5h3.75a1.25 1.25 0 0 0 1.25-1.25V25a1.25 1.25 0 0 0-1.25-1.25H25A3.75 3.75 0 0 1 21.25 20v-1.25ZM20 16.25a1.25 1.25 0 0 0-2.5 0v10a1.25 1.25 0 0 1-1.25 1.25h-2.5a1.25 1.25 0 0 0 0 2.5h2.5A3.75 3.75 0 0 0 20 26.25v-10Zm-15-5A6.25 6.25 0 0 1 11.25 5h17.5A6.25 6.25 0 0 1 35 11.25v17.5A6.25 6.25 0 0 1 28.75 35h-17.5A6.25 6.25 0 0 1 5 28.75v-17.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v17.5a3.75 3.75 0 0 0 3.75 3.75h17.5a3.75 3.75 0 0 0 3.75-3.75v-17.5a3.75 3.75 0 0 0-3.75-3.75h-17.5Z"/></svg>
    
    <p> Javascript </p>
    </button>
    
    <button data-course="Accessibility" class="bg-white p-3 rounded-xl flex w-full items-center gap-4" id="btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40" class="bg-custom-Accessibility x p-1 rounded-md"><path fill="#A729F5" d="M16.875 8.125a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0ZM20 2.5a5.625 5.625 0 0 0-5.475 6.915l-4.03-1.625a4 4 0 0 0-5.19 2.18 3.95 3.95 0 0 0 2.175 5.175l5.02 2.027v5.96l-4.532 8.525a3.98 3.98 0 0 0 7.024 3.738L20 25.975l5.01 9.42a3.978 3.978 0 0 0 7.025-3.735L27.5 23.13v-5.957l5.02-2.028a3.95 3.95 0 0 0 2.175-5.175 4 4 0 0 0-5.19-2.183l-4.027 1.628A5.626 5.626 0 0 0 20 2.5ZM7.618 10.922a1.5 1.5 0 0 1 1.94-.817l8.57 3.463a5 5 0 0 0 3.744 0l8.57-3.463a1.5 1.5 0 0 1 1.94.817 1.45 1.45 0 0 1-.8 1.905l-5.02 2.025A2.5 2.5 0 0 0 25 17.175v5.957c0 .41.1.814.293 1.175l4.535 8.528a1.48 1.48 0 0 1-2.61 1.39l-5.01-9.425a2.5 2.5 0 0 0-4.415 0l-5.008 9.418a1.477 1.477 0 1 1-2.61-1.388l4.532-8.525A2.5 2.5 0 0 0 15 23.133v-5.96a2.5 2.5 0 0 0-1.563-2.318l-5.02-2.03a1.45 1.45 0 0 1-.8-1.902Z"/></svg>

        <p> Accessibility </p>
    </button>

</article>`;


const btns = [...document.querySelectorAll("#btn")];
btns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
        try{
            const counter = 0; 
            const data = await fetchData();
            const currentClick = data.filter((datum) => e.target.dataset.course === datum.title)[0];
            header.innerHTML = changeHeader(currentClick);
    
            showQuestion(currentClick, counter);
            const submitBTN = getSelection("#submit-btn");
            const nextBTN = getSelection("#next-btn");
        }
        catch{
            return
        }
    });


});
// playAgain.classList.add("hidden");
}

const loading = getSelection(".loading");
addEventListener("DOMContentLoaded", () => {
    startQuiz();
});

addEventListener("load", () => {
    loading.classList.add("hidden");
    welcome.classList.remove("hidden");
})

const switchProgressBar = (progress, counter, questions) => {
    if (main.classList.contains("dark-mode")) progress.style.background = `linear-gradient(to right, #A729f5 ${((counter + 1) / questions.length) * 100}%, #3b4d66 ${((counter + 1) / questions.length) * 100}%)`;
    else progress.style.background = `linear-gradient(to right, #A729f5 ${((counter + 1) / questions.length) * 100}%, #fff ${((counter + 1) / questions.length) * 100}%)`;
}