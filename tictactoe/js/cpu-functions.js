import shuffle from "./shuffleNumber.js";
import { xHTML, oHTML } from "./xAndoHTML.js";
import getElement from "./getElement.js";

let shuffledNumber;
let gameIsDone = false;
const drawSection = getElement('.draw-round'); 
const tieScoreDOM = getElement(".ties-score");
let tiescore = 0;
const cpuFuctionality = (player, card, cards) => {
    // currentPlayer = player;
    card.setAttribute('data-player', player);
    card.classList.add('clicked');
    const id = card.getAttribute('data-id');
    let checkedCards = cards.filter((card) => !card.classList.contains('clicked'));
    checkedCards = checkedCards.map((card) => Number(card.getAttribute('data-id')) - 1);
    shuffledNumber = shuffle(checkedCards);
    if (player === 'o'){
        oHTML(card);
    } else{
        xHTML(card);
    }

    setTimeout(() => {
        card.removeEventListener('click', () => playCard()); 
        const cpuCard = cards[shuffledNumber[0]];
        cpuCard.setAttribute('data-player', 'x');
        cpuCard.classList.add('clicked');
        if (player === 'o'){
            xHTML(cpuCard);
        } else{
            oHTML(cpuCard);
        };
        const toBeSet = cards.every(el => el.classList.contains('clicked'));
        console.log(toBeSet);
        if (toBeSet){
            drawSection.classList.remove('hidden');
            tiescore++;
            tieScoreDOM.innerHTML = tiescore;
            // gameIsDone = true;
        };   
    }, 1000);
    console.log(gameIsDone);
    
};

export default cpuFuctionality;