let userScore = 0;
let compScore = 0;
let final_result = document.getElementById('result')
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function convertWord(letter) {
    if (letter == 'r') return 'Rock';
    if (letter == 'p') return 'Paper';
    return 'Scissors';
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    result_p.innerHTML = 'You picked ' + convertWord(userChoice) + ' and Computer picked ' + convertWord(compChoice) + '. You WIN!!!'
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow'), 3000})
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    result_p.innerHTML = 'You picked ' + convertWord(userChoice) + ' and Computer picked ' + convertWord(compChoice) + '. You LOOSE:('
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow'), 3000})
}


function draw(userChoice, compChoice) {
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    result_p.innerHTML = 'Its a DRAW'
    document.getElementById(userChoice).classList.add('gray-glow')
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow'), 3000})
} 


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber]
}


function game(userChoice) {
    const compChoice = getComputerChoice()
    switch (userChoice + compChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, compChoice);
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose(userChoice, compChoice);
            break;
        case 'ss':
        case 'rr':
        case 'pp':
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })

    paper_div.addEventListener('click', function() {
        game('p');
    })

    scissors_div.addEventListener('click', function() {
        game('s');
    })
}

main()
