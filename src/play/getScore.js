export default function getScore(computerInputNumbers, userInputNumbers) {
  const computerNumArr = String(computerInputNumbers).split('').map(x => +x);
  const userNumArr = String(userInputNumbers).split('').map(x => +x);

  const strikeCount = getStrikeCount(computerNumArr, userNumArr);
  const ballCount = getBallCount(computerNumArr, userNumArr);

  return `${ballCount}볼 ${strikeCount}스트라이크`

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
    if (computerNumArr[index] !== currentValue
       && computerNumArr.includes(currentValue)) {
      return acc + 1;
    }
    return acc
  }, 0)

};