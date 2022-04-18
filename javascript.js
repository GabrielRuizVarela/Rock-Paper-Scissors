function computerPlay(){
    let n = Math.round(Math.random()*2);
    if (n===0) {return 'Rock';}
    else if(n===1){return 'Paper';}
    else if (n===2){return 'Scissors';}
}

function playRound(){
    let computerSelection = computerPlay(), player = this.textContent;
    const outcome = document.querySelector(".outcome"), 
        playerScore = document.querySelector(".score.player"),
        computerScore = document.querySelector(".score.computer")
    if(player===computerSelection){
        outcome.textContent = "Tie, try again!";
    }
    else if((player==="Rock" && computerSelection==='Scissors') || (player==="Paper" && computerSelection==="Rock") ||
            player==="Scissors" && computerSelection==="Paper"){
            outcome.textContent = `You Win! ${player} beats ${computerSelection}`;
            playerScore.textContent = Number(playerScore.textContent)+1;
    }
    else {
        outcome.textContent = `You Lose! ${computerSelection} beats ${player}`;
        computerScore.textContent = Number(computerScore.textContent)+1;
    }
    if(playerScore.textContent==="5"){
        alert(`You Win ${playerScore.textContent} vs ${computerScore.textContent}`);
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    }
    if(computerScore.textContent==="5"){
        alert(`You Loose ${playerScore.textContent} vs ${computerScore.textContent}`);
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click",playRound));