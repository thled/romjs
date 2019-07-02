const rocket = document.getElementById('r');
const orbit = document.getElementById('o');
const murphy = document.getElementById('m');
const jarvis = document.getElementById('j');
const shield = document.getElementById('s');

const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const result = document.getElementById('result');

let playerPoints = 0;
let computerPoints = 0;

rocket.addEventListener('click', () => {
    console.log('rocket clicked');
    game('r');
});

orbit.addEventListener('click', () => {
    console.log('orbit clicked');
    game('o');
});

murphy.addEventListener('click', () => {
    console.log('murphy clicked');
    game('m');
});

jarvis.addEventListener('click', () => {
    console.log('jarvis clicked');
    game('j');
});

shield.addEventListener('click', () => {
    console.log('shield clicked');
    game('s');
});

function game(playerChoice) {
    console.log('playerChoice: ' + playerChoice);
    let computerChoice = randomChoice();
    console.log('computerChoice: ' + computerChoice);

    switch (playerChoice + computerChoice) {
        case 'ro':
        case 'rj':
        case 'om':
        case 'os':
        case 'mj':
        case 'mr':
        case 'js':
        case 'jo':
        case 'sr':
        case 'sm':
            win(playerChoice, computerChoice);
            break;
        case 'rm':
        case 'rs':
        case 'oj':
        case 'or':
        case 'ms':
        case 'mo':
        case 'jr':
        case 'jm':
        case 'so':
        case 'sj':
            lose(playerChoice, computerChoice);
            break;
        case 'rr':
        case 'oo':
        case 'mm':
        case 'jj':
        case 'ss':
            draw();
            break;
    }
}

function randomChoice() {
    const choices = ['r', 'o', 'm', 'j', 's'];
    randomNumber = Math.floor(Math.random() * 5);

    return choices[randomNumber];
}

function win(player, computer) {
    console.log('Player wins!');
    playerPoints++;

    playerScore.innerText = playerPoints;
    result.innerText = letterToTeam(player) + ' beats ' + letterToTeam(computer) + '! You win!';
    result.classList.remove('lose');
    result.classList.add('win');
}

function lose(player, computer) {
    console.log('Computer wins!');
    computerPoints++;

    computerScore.innerText = computerPoints;
    result.innerText =
        letterToTeam(player) + ' beaten by ' + letterToTeam(computer) + '! You lose!';
    result.classList.remove('win');
    result.classList.add('lose');
}

function draw() {
    console.log('Drawww..');
    result.innerText = 'Drawww..';
    result.classList.remove('win', 'lose');
}

function letterToTeam(letter) {
    switch (letter) {
        case 'r':
            return 'Rocket';
        case 'o':
            return 'Orbit';
        case 'm':
            return 'Murphy';
        case 'j':
            return 'Jarvis';
        case 's':
            return 'Shield';
    }
}
