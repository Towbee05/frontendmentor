import cpuFunctions from "./cpu-functions.js";
import shuffle from "./shuffleNumber.js";
import { xHTML, oHTML } from "./xAndoHTML.js";
import { gameDone } from "./done-game.js";
import getElement from "./getElement.js";

const markBtns = [...document.querySelectorAll('.mark-btn')];
const gameBtns = [...document.querySelectorAll('.game-btn')];
const cards = [...document.querySelectorAll('.card')];
const welcomeSection = getElement(".welcome-section");
const gameSection = getElement(".game-section");
const p1Mark = getElement(".p1-mark");
const p2Mark = getElement(".p2-mark");
const turns = getElement(".player-turn");
const gameWin = getElement(".game-win-and-lost");
const gameWinSection = getElement(".game-win-section");
const quitBtn = document.querySelectorAll('.quit');
const nextRoundBtn = [...document.querySelectorAll(".next-round")];

const drawSection = getElement('.draw-round');
const restartSection = getElement('.restart-section');
let gameIsDone = false;
// const p1Mark = getElement("p1-mark");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const p1ScoreDOM = getElement(".p1-score");
const tieScoreDOM = getElement(".ties-score");
const p2ScoreDOM = getElement(".p2-score");

const gameDetails = {};
const player1Details = {};
const player2Details = {};

let player1Move = [];
let player2Move = [];

// const currentPlayer = ["x", "o"];
let currentPlayer = "x";
let x_turn;
let p1score = 0;
let p2score = 0;
let tiescore = 0;
const sturdyArr = [];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let counter = 0;
let shuffledNumber = shuffle(numbers);

gameBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const playingAgainst = btn.dataset.against;
        if (!gameDetails["playerMark"]) alert("select a mark");
        else{
            gameDetails["playingAgainst"] = playingAgainst;
            localStorage.setItem("game details", JSON.stringify(gameDetails));
            welcomeSection.classList.add('hidden');
            gameSection.classList.remove("hidden");
            start()
            const gameData = JSON.parse(localStorage.getItem("game details"));
          if (gameData.playingAgainst === "cpu"){
                player2Details["player"] = "cpu";
            }
            else{
                player2Details["player"] = "p2";
            };
            player1Details["player"] = "p1"
            player1Details["score"] = p1score;
            player2Details["score"] = p2score;
            localStorage.setItem("player 1-details", JSON.stringify(player1Details));
            localStorage.setItem("player 2-details", JSON.stringify(player2Details)); 
            showp1Marks(gameData);
            showp2Marks(JSON.parse(localStorage.getItem("player 2-details"))); 
        };
    });
});    

markBtns.forEach((btn,index) => {
    btn.addEventListener("click", () => {
        const abstract = Math.abs(index - 1);
        const mark = btn.dataset.mark;
        const nexbBtnMark = markBtns[abstract].dataset.mark;
        gameDetails["playerMark"] = mark;
        player1Details["playerMark"] = mark;
        player2Details["playerMark"] = nexbBtnMark;
        removeAddHoverEffect(btn, index);
    });
});

const start = () => {
    if (!gameIsDone){
        if (gameDetails["playingAgainst"] === "cpu"){
            if (gameDetails["playerMark"] === "x") {
                console.log("Player starts first!!!");
            } else{
                const cpuFirstCard = cards[shuffledNumber[counter]];
                cpuFirstCard.setAttribute('data-player', 'x');
                cpuFirstCard.classList.add('clicked');
                xHTML(cpuFirstCard);
                currentPlayer = 'o '
                counter++;
            };
        };
        changeTurn(currentPlayer);
        cards.forEach((card) => {
            card.addEventListener("click", () => {
                sturdyArr.push(card)
                playCard(card);
            }, 
            {
                once : true,
            });
        });
    };
};


nextRoundBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        cards.forEach((card) => {
            if (card.classList.contains("clicked")) {
                card.removeChild(document.querySelector(".to-be-removed"));
                card.classList.remove("clicked");
                card.removeAttribute("data-player");    
                card.removeEventListener("click", ()=>{
                    playCard(card);
                });
            };
        });
        gameWinSection.classList.add("hidden");
        drawSection.classList.add("hidden");
        gameIsDone = false;
        player1Move = [];
        player2Move = [];
        currentPlayer = "x";
        start();
    });
});


const changeTurn = (player) => {
    if (player === "x"){
        turns.innerHTML = `
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="fill-custom-silver">
                <path d="M3.751 0.573 8 4.536 12.249 0.573a0.75 0.75 0 0 1 1.061 0l2.403 2.403a0.75 0.75 0 0 1 0 1.061L11.464 8l4.536 4.536a0.75 0.75 0 0 1 0 1.061l-2.403 2.403a0.75 0.75 0 0 1-1.061 0L8 11.464 3.751 15.715a0.75 0.75 0 0 1-1.061 0L0.573 13.03a0.75 0.75 0 0 1 0-1.061L4.536 8 0.573 3.751a0.75 0.75 0 0 1 0-1.061l2.403-2.403a0.75 0.75 0 0 1 1.061 0Z" fill-rule="evenodd"/>
            </svg>

            <span>turn</span>
            `
        }
    else turns.innerHTML = `
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="fill-custom-silver">
            <path d="M8 0c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8S0 12.418 0 8C0 3.582 3.582 0 8 0Zm0 4.741c-1.8 0-3.259 1.459-3.259 3.259 0 1.8 1.459 3.259 3.259 3.259 1.8 0 3.259-1.459 3.259-3.259 0-1.8-1.459-3.259-3.259-3.259Z"/>
        </svg>
        <span>turn</span>
    `;
};


// Check if user is playing against another player or CPU 

// Get user's mark

const showp1Marks = (data) => {
    return p1Mark.textContent = `${data.playerMark}  (YOU)`;
};
const showp2Marks = (data) => {
    return p2Mark.textContent = `${data.playerMark}  (${data.player})`;
};



// What to do
// Check for user mark

const playCard = (card) => {
    const game = JSON.parse(localStorage.getItem("game details"));
    const opponent = game["playingAgainst"]
    const cardID = card.dataset.id;

    if (opponent === "player"){
        card.setAttribute("data-player", currentPlayer);
        card.classList.add("clicked");
        if (!gameIsDone){
            for (let i = 0; i < winConditions.length; i++){
                const [a, b, c] = winConditions[i];
                if (cards[a].dataset.player === currentPlayer && cards[b].dataset.player === currentPlayer && cards[c].dataset.player === currentPlayer){
                    const player = currentPlayer === "x" ? "player 1" : "player 2";
                    gameWinSection.classList.remove("hidden");
                    gameWin.innerHTML = `
                            <p class="uppercase text-sm text-custom-silver tracking-sm w-full text-center">
                                ${player} wins!!
                            </p>
                            <p class="mt-4 uppercase text-2xl tablet:text-[40px] laptop:text-[40px] tablet:tracking-xl laptop:tracking-xl text-custom-light-blue tracking-lg w-full flex items-center justify-center gap-4 font-bold">
                                <span>
                                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="#F2B137" viewBox="0 0 64 64" class="hidden tablet:hidden laptop:hidden o-wins">
                                        <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"/>
                                    </svg>    
                                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="#31C3BD" viewBox="0 0 64 64" class="hidden tablet:hidden laptop:hidden x-wins">
                                        <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"/>
                                    </svg>
                                    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" fill="#F2B137" class="hidden tablet:hidden laptop:hidden big-o-wins"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"/></svg>

                                    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" class="hidden tablet:hidden laptop:hidden big-x-wins"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>
                                </span>
                                takes the round
                            </p>
                    `
                    const xWins = getElement('.x-wins');
                    const oWins = getElement('.o-wins');
                    const bigxWins = getElement('.big-x-wins');
                    const bigoWins = getElement('.big-o-wins');
                    const takesTheRound = [...document.querySelectorAll('.game-win-and-lost p')][1];
                    
                    if (player === "player 1"){
                        xWins.classList.remove('hidden');
                        bigxWins.classList.replace("tablet:hidden", "tablet:block");
                        bigxWins.classList.replace("laptop:hidden", "laptop:block");
                    }
                    else{
                        oWins.classList.remove('hidden');
                        bigoWins.classList.replace("tablet:hidden", "tablet:block");    
                        bigoWins.classList.replace("laptop:hidden", "laptop:block");
                        takesTheRound.classList.replace("text-custom-light-blue", "text-custom-light-yellow");
                    };
                
                    gameIsDone = true;
                    currentPlayer === "x" ? p1score++ : p2score++;
                    p1ScoreDOM.innerHTML = p1score;
                    p2ScoreDOM.innerHTML = p2score;
                };
            }
        }
        console.log(currentPlayer);
        if (currentPlayer === "x") {
            !player1Move.includes(cardID) ? player1Move.push(cardID) : console.log("");
            xHTML(card);
            currentPlayer = "o"
        }
        else {
            !player2Move.includes(cardID) ? player2Move.push(cardID) : console.log("");
            oHTML(card);
            currentPlayer = "x";
        };

        player1Details["moves"] = player1Move;
        player2Details["moves"] = player2Move;
        changeTurn(currentPlayer);

        const data1 = JSON.parse(localStorage.getItem("player 1-details"));
        data1.moves = player1Move;
        localStorage.setItem("player 1-details", JSON.stringify(data1));
        
        const data2 = JSON.parse(localStorage.getItem("player 2-details"));
        data2.moves = player2Move;
        localStorage.setItem("player 2-details", JSON.stringify(data2));
        const toBeSet = cards.every(el => el.classList.contains('clicked'));
        if (toBeSet && !gameIsDone){
            drawSection.classList.remove('hidden');
            tiescore++;
            tieScoreDOM.innerHTML = tiescore;
            gameIsDone = true;
        }
    }else{
        if (gameDetails['playerMark'] === 'o'){
            cpuFunctions('o', card, cards);
            gameDone(gameIsDone, cards, card, opponent, currentPlayer);
        } else{
            // card.removeEventListener('click', () => playCard()); 
            currentPlayer = 'x'
            // cpuFunctions('x', card, cards);
            gameDone(gameIsDone);
        }
    }
};

const getRandomNumber = () => Math.floor(Math.random() * cards.length);


const removeAddHoverEffect = (btn, index) => { 
    markBtns.forEach((btn) => btn.classList.remove('selected-mark'));
    btn.classList.add('selected-mark');
    btn.classList.remove('hover:bg-custom-silver');
    btn.classList.remove('hover:bg-opacity-20');

    const nextbtn = Math.abs(index - 1);
    if (markBtns[nextbtn].classList.contains("selected-mark")){
        markBtns[nextbtn].classList.remove('hover:bg-custom-silver');
        markBtns[nextbtn].classList.remove('hover:bg-opacity-20');
    }else{
        markBtns[nextbtn].classList.add('hover:bg-custom-silver');
        markBtns[nextbtn].classList.add('hover:bg-opacity-20');
    };
};

addEventListener("DOMContentLoaded", () => {
    try{
        const data = JSON.parse(localStorage.getItem("game details"));
        const p1Data = JSON.parse (localStorage.getItem("player 1-details"));
        const p2Data = JSON.parse (localStorage.getItem("player 2-details"));

        if (data){
            welcomeSection.classList.add("hidden");
            gameSection.classList.remove("hidden");
        }
        else{
            welcomeSection.classList.remove("hidden");
            gameSection.classList.add("hidden");
        };
        showp1Marks(data);
        showp2Marks(p2Data); 
        
        const {moves:move1} = p1Data;
        const {moves:move2} = p2Data;
            // if (move1){
            //     move1.map((move) => {
            //         const currentCard = cards.filter((card) => card.dataset.id === move)[0];
            //         currentCard.classList.add("clicked");
            //         currentCard.setAttribute("data-player", "x");
            //         xHTML(currentCard);
            //     });
            // }else return;
            // if (move2){
            //     move2.map((move) => {
            //         const currentCard = cards.filter((card) => card.dataset.id === move)[0];
            //         currentCard.classList.add("clicked");
            //         currentCard.setAttribute("data-player", "o");
            //         oHTML(currentCard);                
            //     });
            // }else return;
    } catch (err){
        return;
    };

});


const confirmRestart = getElement('.confirm-restart');
const cancelRestart = getElement('.cancel-restart');
const restartBtn = getElement('.restart-btn');
restartBtn.addEventListener('click', () => {
    restartSection.classList.remove('hidden');
});

cancelRestart.addEventListener("click", () => {
    restartSection.classList.add('hidden');
});

const quitGame = () => {
    localStorage.clear();
    location.reload();
};
confirmRestart.addEventListener('click', quitGame);

quitBtn.forEach((btn) => {
    btn.addEventListener('click', quitGame)
});
