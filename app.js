let userScore = 0;
let compScore = 0;

const choices =  document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
         const userChoice = choice.getAttribute("id");
         playGame(userChoice);
    });
});
//////////////////
const generateCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
////////////////////
const playGame = (userChoice) => {
    // generate comp choice
    const compChoice = generateCompChoice();
/////////////////
const drawGame = () => {
        msg.innerText = "GAME WAS DRAW. PLAY AGAIN :)";
        msg.style.backgroundColor = "red";
    }    
///////////////////////
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

    ///////////////
    const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText = `YOU WIN YOUR ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        //console.log("you lose");
        msg.innerText = `YOU LOSE ${compChoice} beats YOUR ${userChoice}`; 
        msg.style.backgroundColor = "BLUE";
    }
////////////////
}
    if(userChoice == compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            // scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock,scissors
            compChoice === "scissors" ? false:true;
        }else{
            // rock,paper
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

