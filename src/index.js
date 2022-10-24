import getComputerInput from "./input/getComputerInput.js";
// import handler from "./play/handler.js";
import checkUserInput from "./play/checkUserInput.js";

export default function BaseballGame() {
  const computerInputNumbers = getComputerInput();
  const submit = document.getElementById('submit')

  console.log(computerInputNumbers);
  // for score
  checkUserInput(computerInputNumbers)

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };    

}

new BaseballGame();
