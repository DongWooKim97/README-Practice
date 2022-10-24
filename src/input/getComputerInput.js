

export default function getComputerInput(){
  const minNum = 1;
  const maxNum = 9;

  const computerNumberArray = new Set();
  while([...computerNumberArray].length < 3) {
    computerNumberArray.add(MissionUtils.Random.pickNumberInRange(minNum,maxNum));
  }
  console.log([...computerNumberArray]);
  return Number([...computerNumberArray].join(''))

}