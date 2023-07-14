// elements
const word = document.getElementById("word");
const text = document.getElementById("input_area");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endGameEl = document.getElementById("end_game");

const words = [
  "Abjure",
  "Future",
  "Picnic",
  "Agonistic",
  "Garland",
  "Protect",
  "Airline",
  "Gigantic",
  "Publish",
  "Bandit",
  "Goofy",
  "Quadrangle",
  "Banquet",
  "Government",
  "Recount",
  "Binoculars",
  "Grandnieces",
  "Redoubtable",
  "Biologist",
  "Handbook",
  "Reflection",
  "Blackboard",
  "Himself",
  "Reporter",
  "Board",
  "Indulge",
  "Ring",
  "Bookworm",
  "Inflatable",
  "Salesclerk",
  "Butterscotch",
  "Inimical",
  "Snapshot",
  "Camera",
  "Interim",
  "Shellfish",
  "Campus",
  "Invest",
  "Ship",
  "Catfish",
  "Jackpot",
  "Significance",
  "Carsick",
  "Kitchenette",
  "Sometimes",
  "Celebrate",
  "Law",
  "Sublime",
  "Celery",
  "Life",
  "Tabletop",
  "Citizen",
  "Lifeline",
  "Teamwork",
  "Coloring",
  "Love",
  "Tennis",
  "Compact",
  "Magnificent",
  "Timesaving",
  "Dark",
  "Malevolence",
  "Tree",
  "Damage",
  "Man",
  "Termination",
  "Dangerous",
  "Mascot",
  "Underestimate",
  "Decorum",
  "Marshmallow",
  "Vineyard",
  "Endorse",
  "Mine",
  "War",
  "Engender",
  "Moonwalk",
  "Way",
  "Erratic",
  "Near",
  "Wealth",
  "Envelope",
  "Nephogram",
  "Wednesday",
  "Etymology",
  "Newborn",
  "World",
  "Eyewitness",
  "Noisome",
  "Xerox",
  "Eulogy",
  "Owl",
  "You",
  "Fish",
  "Parenthesis",
  "Zestful",
  "Food",
  "Perpetrator",
  "Foreclose",
  "Phone",
];

let randomWord;
let score = 0;
let time = 60;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function addToDom() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord.toLowerCase();
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

function updateTime() {
    time--;
    timeEl.innerHTML = time + "s";

    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

const timeInterval = setInterval(updateTime, 1000);

function gameOver() {
    endGameEl.innerHTML = `
    <h1>Time Over</h1>
    <h3>Your score: ${score}</h3>
    <button onclick="location.reload()">Retry</button>
    `;
    endGameEl.style.display = "flex";
}

addToDom();

text.addEventListener("input", (e) => {
    const typedText = e.target.value;
    if ( typedText === randomWord.toLowerCase() ) {
        updateScore();
        addToDom();
        e.target.value = "";
        updateTime();
    }
});