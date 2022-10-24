import inputErrorAlert from "../input/inputErrorAlert.js";

function correctWord(userInputNumbers){
  if(userInputNumbers.length !== 3) {
    return inputErrorAlert('lengthError');
  }
  if(!Number.isInteger(+userInputNumbers)) {
    return inputErrorAlert('inputTypeError');
  }
  if(userInputNumbers.length !== [...new Set(userInputNumbers)].length) {
    return inputErrorAlert('duplicateError');
  }
  return true
}

export default function userInputValid(userInputNumbers) {
  return correctWord(userInputNumbers)

}
