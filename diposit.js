

document.getElementById('btn-diposit').addEventListener('click',function(){
    const inputValue = getInputField('deposit');
    const innerValue = getInnerText('dipositAmount');
    const previousBlance = getInnerText('total-blance')
    const total = inputValue + innerValue;
    const totalBlance = previousBlance + inputValue;
    setDipositValue('dipositAmount', total);
    setDipositValue('total-blance', totalBlance);

})