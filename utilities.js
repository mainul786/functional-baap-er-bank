function getInputField(inputId){
    const inputFiled = document.getElementById(inputId);
    const inputFieldValue = inputFiled.value;
    const inputFieldValueAmount = parseFloat(inputFieldValue);
    inputFiled.value = '';
    return inputFieldValueAmount;
}

function getInnerText(innerId){
    const DepositInnerText = document.getElementById(innerId);
    const innerTextValue = DepositInnerText.innerText;
    const value = parseFloat(innerTextValue);
    return value
}

function setDipositValue(setId, newValue){
    const textElement = document.getElementById(setId);
   textElement.innerText = newValue;
    
}