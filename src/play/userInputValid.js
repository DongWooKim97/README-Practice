function correctWord(userInputNumbers){
  if(userInputNumbers.length !== 3) {
    return false;
  }
  if(!Number.isInteger(+userInputNumbers)) {
    return false;
  }
  if(userInputNumbers.length !== [...new Set(userInputNumbers)].length) {
    return false;
  }
  return true
}

export default function userInputValid(userInputNumbers) {
  return correctWord(userInputNumbers)

}
