let userScore =0 ; 
let compScore=0 ; 
let totalMove = 0 ;
let msg = document.getElementById("msg");
let move = document.getElementById("ms");
let user =document.getElementById("sc");
let comp =document.getElementById("cc");
let reStart=document.getElementById("btn");
let choice = document.getElementsByClassName("choice"); 

  reStart.addEventListener("click",()=>{
    totalMove=0;
    userScore=0;
    compScore=0;
user.innerText=userScore;
comp.innerText =compScore;
move.innerText =totalMove ;
msg.innerText="Your Game is Reset";
msg.style.backgroundColor="yellow";

  })

  
const moves =(totalMove)=>{
move.innerText = totalMove ; 
}
// Showcase
const showWin=(userWin,userChoice,compChoice)=>{
if (userWin){
  userScore++ 
  console.log("You won !");
  msg.innerText=`You Won ! Your ${userChoice} beats ${compChoice}`;
  msg.style.backgroundColor="green"
   user.innerText = userScore 

}
else{
  compScore++
  msg.innerText= `You Lost ! Comps ${compChoice} beats ${userChoice}`
   msg.style.backgroundColor="red"
   comp.innerText = compScore 
}
 
}
// gen comp Score
const cScore=()=>{
  const Score=["rock","paper","scissors"];
  const randnum = Math.floor(Math.random()*3) ;
  const idx= (Score[randnum]);

  const score=console.log(`comp=${idx}`);
return idx;
}

// drawgame

const drawGame=()=>{

  console.log("Draw");
  msg.innerText="DRAW"
   msg.style.backgroundColor="cyan"
}
// Logic
const playGame=(userChoice)=>{

const compChoice=cScore();

//Drawgame 
if(compChoice===userChoice){
drawGame();
}
else {
  let userWin = true ;
  if(userChoice==="rock"){
    //s , p
    userWin=compChoice ==="paper"?false:true ;
  }
  else if(userChoice==="paper"){
    userWin=compChoice==="scissors"?false:true ;
  }
else{
  userWin=compChoice==="rock"?false:true ;
}
showWin(userWin,userChoice,compChoice)
}

}
// tracking choice 

Array.from(choice).forEach((choice)=>{
  choice.addEventListener("click",()=>{
    totalMove++ ; 
    const choiceID=choice.id;
   const userChoice=choiceID;
    console.log(`User=${userChoice}`);
   
playGame(userChoice);
moves(totalMove);
  });
});
