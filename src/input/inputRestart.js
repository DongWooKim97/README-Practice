export default function inputRestart(resultDomain, resultString) {
  if(resultString === '정답') {
    printCorrectAnswer(resultDomain);
    return true;
  }
  printInCorrectAnswer(resultDomain, resultString);
  return false;
}

function printCorrectAnswer(resultDomain) {
  resultDomain.innerHTML = `<div>
                              <strong>🎉정답입니다🎉</strong>
                              <button id="game-restart-button">게임 재시작</button>
                            </div>`

}
function printInCorrectAnswer(resultDomain, resultString) {
  resultDomain.innerHTML = resultString

}