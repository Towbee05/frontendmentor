import getElement from "./getElement.js";
const gameWinSection = getElement(".game-win-section");
const gameWin = getElement(".game-win-and-lost");
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


let player1Move = [];
let player2Move = [];

export const gameDone = (gameIsDone, cards, card, opponent, currentPlayer) => {
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
                `;
                const xWins = getElement('.x-wins');
                const oWins = getElement('.o-wins');
                const bigxWins = getElement('.big-x-wins');
                const bigoWins = getElement('.big-o-wins');
                const takesTheRound = [...document.querySelectorAll('.game-win-and-lost p')][1];
                if (opponent === "player"){
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
                } else{
                    if (player === "player 2"){
                        oWins.classList.remove('hidden');
                        bigoWins.classList.replace("tablet:hidden", "tablet:block");    
                        bigoWins.classList.replace("laptop:hidden", "laptop:block");
                        takesTheRound.classList.replace("text-custom-light-blue", "text-custom-light-yellow");
                    };
                };
            
                currentPlayer === "x" ? p1score++ : p2score++;
                p1ScoreDOM.innerHTML = p1score;
                p2ScoreDOM.innerHTML = p2score;
                gameIsDone = true;
            };
        };
        const toBeSet = cards.every(el => el.classList.contains('clicked'));
        console.log(toBeSet);
        if (toBeSet && !gameIsDone){
            drawSection.classList.remove('hidden');
            tiescore++;
            tieScoreDOM.innerHTML = tiescore;
            gameIsDone = true;
        };
    };
};