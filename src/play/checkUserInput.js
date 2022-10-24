export default function checkUserInput(){
  const userInputNumbers = document.getElementById('user-input').value;

  document.getElementById('result').innerHTML = userInputNumbers;
}