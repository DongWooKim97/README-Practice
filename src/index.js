import getComputerInput from "./input/getComputerInput.js";
import playGame from "./play/playGame.js"
// import handler from "./play/handler.js";

export default function BaseballGame() {
  const computerInputNumbers = getComputerInput();
  // const submit = document.getElementById('submit')
  console.log(computerInputNumbers);
  // for score
  
  this.play = function (computerInputNumbers, userInputNumbers) {
    return ;
  };    
  
  playGame(computerInputNumbers, this.play)
}

new BaseballGame();
