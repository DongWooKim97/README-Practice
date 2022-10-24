import getComputerInput from "./input/getComputerInput.js";

export default function BaseballGame() {
  const computerInputNumbers = getComputerInput();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };    



}

new BaseballGame();
