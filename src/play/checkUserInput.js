import getScore from "./getScore.js"
import userInputValid from "./userInputValid.js";
import inputRestart from "../input/inputRestart.js";
import getComputerInput from "../input/getComputerInput.js";

function resetScreen(){
  document.querySelector('#result').textContent = "";
  document.querySelector('#user-input').value= "";
}

export default function checkUserInput(computerInputNumbers){
  const $submit = document.getElementById('submit');
  const $result = document.getElementById('result');

  $submit.addEventListener('click', () => {
    const userInputNumbers = document.getElementById('user-input').value;
    const resultDomain = document.getElementById('result')

    if(userInputValid(userInputNumbers)){
      inputRestart(resultDomain,getScore(computerInputNumbers, userInputNumbers))  
    }  else{
      console.log('실패야실패')
    }
  })

  $result.addEventListener('click', ({target}) => {
    if(target.id === 'game-restart-button') {
      resetScreen()
      console.log('1');
      computerInputNumbers = getComputerInput();
      console.log('3',computerInputNumbers);
    }
  })
}

