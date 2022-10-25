export default function inputRestart(gameResult) {
  const $result = document.querySelector('#result')
  if(gameResult === '정답') {
    printCorrectAnswer($result);
    return true;
  }
  printInCorrectAnswer($result, gameResult);
  return false;
}

function printCorrectAnswer($result) {
  $result.innerHTML = `<div>
                              <strong>🎉정답입니다🎉</strong>
                              <button id="game-restart-button">게임 재시작</button>
                            </div>`
}
function printInCorrectAnswer($result, gameResult) {
  $result.innerHTML = gameResult;

}