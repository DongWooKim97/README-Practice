export default function inputRestart(gameResult) {
  const $result = document.querySelector('#result')
  if(gameResult === 'ė ëĩ') {
    printCorrectAnswer($result);
    return true;
  }
  printInCorrectAnswer($result, gameResult);
  return false;
}

function printCorrectAnswer($result) {
  $result.innerHTML = `<div>
                              <strong>ðė ëĩėëëĪð</strong>
                              <button id="game-restart-button">ęēė ėŽėė</button>
                            </div>`
}
function printInCorrectAnswer($result, gameResult) {
  $result.innerHTML = gameResult;

}