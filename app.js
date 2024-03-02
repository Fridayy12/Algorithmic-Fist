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
    console.log("User choice =",userChoice);
    // generate comp choice
    const compChoice = generateCompChoice();
    console.log("comp choice =",compChoice);
/////////////////
const drawGame = () => {
        console.log("DRAW")
        msg.innerText = "GAME WAS DRAW. PLAY AGAIN :)";
    }    
///////////////
    const showWinner = (userWin) => {
    if(userWin){
        console.log("you win");
        msg.innerText = "YOU WIN";
    } else {
        console.log("you lose");
        msg.innerText = "YOU LOSE😔"; 
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
        showWinner(userWin);
    }
}

