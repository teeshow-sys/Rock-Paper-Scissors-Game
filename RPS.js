console.log("hello world!");

function getComputerChoice (){
    const randomValue = Math.random(); 

    if (randomValue < 0.37){
        return "rock";
    }else if (randomValue < 0.67){
        return "paper";
    }else {
        return "scissors";
    }
}
console.log(getComputerChoice());

function getHumanChoice(){
    let input = prompt("Enter rock, paper or scissors :");
    return input? input.toLowerCase() : null;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if ((humanChoice==="rock" && computerChoice==="paper") ||
        (humanChoice==="scissors" && computerChoice==="rock")||
        (humanChoice==="paper" && computerChoice==="scissors")) {
        computerScore++;    
        return `You lose! ${computerChoice} beats ${humanChoice}`; 
    }else if ((humanChoice==="paper" && computerChoice==="rock")||
             (humanChoice==="rock" && computerChoice==="scissors")||
             (humanChoice==="scissors" && computerChoice==="paper")){
                humanScore++;
             return `You win! ${humanChoice} beats ${computerChoice}`;
     }else {
        return "It's a tie!"
     }
}
function playGame(){
    for (let i=0; i < 5; i++){
        console.log(`Round ${i + 1}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const roundResult = playRound(humanSelection, computerSelection);
        console.log(roundResult);
        console.log(`Current Score - you: ${humanScore} | computer: ${computerScore}`);
    }
    if (humanScore===computerScore){
        return "It's a tie";
    } else if (humanScore > computerScore){
        return "You win!";
    } else {
        return "You lose!";
    }
}
playGame();
getHumanChoice();