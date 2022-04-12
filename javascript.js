function computerPlay(){
    let n = Math.round(Math.random()*2);
    if (n===0) {return 'rock';}
    else if(n===1){return 'paper'}
    else if (n===2){return 'scissors'}
}

function firstLetterUpperCase(str){
    return str.slice(0,1).toUpperCase() + str.slice(1)
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    if(player===computerSelection){
        return ["Tie, try again!", 0, 0]
    }
    else if((player==="rock" && computerSelection==='scissors') || (player==="paper" && computerSelection==="rock") ||
    player==="scissors" && computerSelection==="paper"){
        return [`You Win! ${firstLetterUpperCase(player)} beats ${firstLetterUpperCase(computerSelection)}`, 1, 0]
    }
    else {
        return [`You Lose! ${firstLetterUpperCase(computerSelection)} beats ${firstLetterUpperCase(player)}`, 0 ,1]
    }
}

function game(){
    let player, playerScore = 0, computerScore = 0, outcome;
    while(computerScore<3 && playerScore<3){
        player = prompt(`Best of Five!\nRock, paper, scissors, shoot!`).toLocaleLowerCase();
        if (player!=="rock" && player!=="paper" && player!=="scissors"){
            console.log("Invalid input, please try again")
            continue
        }
        outcome = playRound(player,computerPlay());
        playerScore += outcome[1];
        computerScore += outcome[2];
        alert(`${outcome[0]} Score: You ${playerScore}, Me ${computerScore}`);
        console.log(`${outcome[0]} Score: You ${playerScore}, Me ${computerScore}`);
    }
}
game()