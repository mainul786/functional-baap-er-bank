document.getElementById('btn-withdraw').addEventListener('click', function(){

    const getInputValue = getInputField('Withdraw');
    const getInnerValue = getInnerText('totalWithdraw');
    const total = getInnerValue + getInputValue;
    const getTotalPreviousBlance = getInnerText('total-blance');
    const remaningBlance = getTotalPreviousBlance - getInputValue;
    setDipositValue('totalWithdraw', total);
    setDipositValue('total-blance',remaningBlance);

})