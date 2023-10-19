"use strict";
//pseudo code
// 1)generate a random number for player 1 between 1 and 6 
// and assign the corresponding image of the dice using dom. 
// 2)generate a random number for player 2 between 1 and 6 
// and assign the corresponding image of the dice using dom. 
// 3)compare both the random values according too that change h1 element
// using DOM to celebrate the player who wins.

function RollTheDice(){
  const randomNum =  Math.floor(Math.random()*6+1);
  console.log(randomNum);
  return randomNum;
}
function SetDiceImg(tag, playerNum){
  document.querySelector(tag).setAttribute("src",`./images/dice${playerNum}.png`);
}
function WhoWins(){
  const H1Tag = document.querySelector("h1");
  if(PLAYER_1_NUM > PLAYER_2_NUM){
    H1Tag.textContent = "PLAYER 1 WINS";
  }else if(PLAYER_1_NUM === PLAYER_2_NUM){
    H1Tag.textContent = "ITS A DRAW";
  }else{
    H1Tag.textContent = "PLAYER 2 WINS";
  }
}

const PLAYER_1_NUM = RollTheDice();
const PLAYER_2_NUM = RollTheDice();
SetDiceImg(".img1",PLAYER_1_NUM);
SetDiceImg(".img2",PLAYER_2_NUM);
WhoWins();



