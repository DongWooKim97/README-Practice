import getScore from "./getScore.js"
import userInputValid from "../input/userInputValid.js";
import inputRestart from "../input/inputRestart.js";
import getComputerInput from "../input/getComputerInput.js";

function resetScreen() {
  document.querySelector('#result').textContent = "";
  document.querySelector('#user-input').value = "";
}

export default function playGame(computerInputNumbers, play) {
  const $submit = document.getElementById('submit');
  const $result = document.getElementById('result');

  $submit.addEventListener('click', () => {
    const userInputNumbers = document.getElementById('user-input').value;
    // const resultDomain = document.getElementById('result')

    if (userInputValid(userInputNumbers)) {
      // inputRestart(resultDomain, getScore(computerInputNumbers, userInputNumbers))
      inputRestart(play(computerInputNumbers, userInputNumbers))
    }

  })

  $result.addEventListener('click', ({
    target
  }) => {
    if (target.id === 'game-restart-button') {
      resetScreen()
      console.log('1');
      computerInputNumbers = getComputerInput();
      console.log('3', computerInputNumbers);
    }
  })
}