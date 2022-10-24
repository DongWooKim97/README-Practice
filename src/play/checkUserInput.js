import getScore from "./getScore.js"
import userInputValid from "./userInputValid.js";

export default function checkUserInput(computerInputNumbers){
  
  submit.addEventListener('click', () => {
    const userInputNumbers = document.getElementById('user-input').value;

    if(userInputValid(userInputNumbers)){
      document.getElementById('result').innerHTML = getScore(computerInputNumbers, userInputNumbers)
    }  else{
      console.log('실패야실패')
    }


  })
}