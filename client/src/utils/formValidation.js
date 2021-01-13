export function minLengthValidation (inputData, minLength) {
  const { value } = inputData;

  removeClassErrorSucess(inputData);

  if (value.length >= minLength) {
    inputData.classList.add("sucess");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

export function emailValidation(inputData) {
  // eslint-disable-next-line no-useless-escape
  const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const { value } = inputData;
  removeClassErrorSucess(inputData);

  const resultValidation = emailValid.test(value);
  if (resultValidation) {
    inputData.classList.add("sucess");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

function removeClassErrorSucess(inputData) {
  inputData.classList.remove("sucess");
  inputData.classList.remove("error");
}
