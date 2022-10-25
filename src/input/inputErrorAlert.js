export default function inputErrorAlert(errorMsg){
  if(errorMsg === "lengthError") {
    alert('3자리의 숫자를 입력하세요')
  }
  if(errorMsg === "inputTypeError") {
    alert('숫자만을 입력하세요')
  }
  if(errorMsg === "duplicateError") {
    alert('중복된 숫자가 있습니다.');
  }
  return false;
}