import getScore from "./getScore.js"

export default function checkUserInput(computerInputNumbers){
  
  submit.addEventListener('click', () => {
    const userInputNumbers = document.getElementById('user-input').value;

    document.getElementById('result').innerHTML = getScore(computerInputNumbers, userInputNumbers)
  })
}