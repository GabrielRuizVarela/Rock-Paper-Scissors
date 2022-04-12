function computerPlay(){
    let n = Math.round(Math.random()*2);
    if (n===0) {return 'rock';}
    else if(n===1){return 'paper'}
    else if (n===2){return 'scissors'}
}
// console.log(computerSelection());
function firstLetterUpperCase(str){
    return str.slice(0,1).toUpperCase() + str.slice(1)
}

function playRound(playerSelection, computerSelection){
    let outcome, player = playerSelection.toLowerCase();
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
    let player, p = 0, c = 0, outcome;
    // for(let i=0; i<5; i++){
    while(c<3 && p<3){
        player = prompt(`Best of Five!\nRock, paper, scissors, shoot! Score: You ${p}, Me ${c}`).toLocaleLowerCase();
        if (player!=="rock" && player!=="paper" && player!=="scissors"){
            console.log("Invalid input, please try again")
            continue
        }
        outcome = playRound(player,computerPlay());
        p += outcome[1];
        c += outcome[2];
        alert(`${outcome[0]} Score: You ${p}, Me ${c}`);
        console.log(`${outcome[0]} Score: You ${p}, Me ${c}`);
    }
}
game()