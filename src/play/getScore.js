export default function getScore(computerInputNumbers, userInputNumbers) {
  const computerNumArr = String(computerInputNumbers).split('').map(x => +x);
  const userNumArr = String(userInputNumbers).split('').map(x => +x);

  const strikeCount = getStrikeCount(computerNumArr, userNumArr);
  const ballCount = getBallCount(computerNumArr, userNumArr);

  return scoreCheck(strikeCount, ballCount);

}

function getStrikeCount(computerNumArr, userNumArr) {
  return userNumArr.reduce((acc, currentValue, index) => {
    if (computerNumArr[index] === currentValue) {
      return acc + 1;
    }
    return acc
  }, 0)
};

function getBallCount(computerNumArr, userNumArr) {
  return userNumArr.reduce((acc, currentValue, index) => {
    if (computerNumArr[index] !== currentValue &&
      computerNumArr.includes(currentValue)) {
      return acc + 1;
    }
    return acc
  }, 0)

};

function scoreCheck(strikeCount, ballCount) {
  if (strikeCount === 3) {
    return `정답`
  }
  if (!strikeCount && !ballCount) {
    return '낫싱'
  }
  if (!strikeCount && ballCount) {
    return `${ballCount}볼`
  }
  if (strikeCount && !ballCount) {
    return `${strikeCount}스트라이크`
  }
  if(strikeCount && ballCount) {
    return `${ballCount}볼 ${strikeCount}스트라이크`
  }

}