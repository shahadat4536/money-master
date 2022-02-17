
function totalBalanceUpdate() {

    const foodExpenses = document.getElementById('food-expenses').value;
    const rentExpenses = document.getElementById('rent-expenses').value;
    const clothesExpenses = document.getElementById('clothes-expenses').value;


    if (isNaN(foodExpenses) || isNaN(rentExpenses) || isNaN(clothesExpenses) || foodExpenses < 0 || rentExpenses < 0 || clothesExpenses < 0) {

        alert('Please Enter a Positive Number')
        return 0;
    }



    const totalExpensesValueUpdate = parseFloat(foodExpenses) + parseFloat(rentExpenses) + parseFloat(clothesExpenses);
    return totalExpensesValueUpdate;


}



function totalExpensesUpdate() {

    const totalExpensesValue = totalBalanceUpdate()
    // console.log(totalExpensesValue, llll)
    const totalExpensesText = document.getElementById('total-expenses');
    const totalExpenses = totalExpensesText.innerText;
    totalExpensesText.innerText = totalExpensesValue;
    //update balance
    const incomeValueText = document.getElementById('income');
    const incomeValue = incomeValueText.value;
    const balanceValue = document.getElementById('balance');
    const balanceCalculate = parseFloat(incomeValue) - totalExpensesValue;
    balanceValue.innerText = balanceCalculate;
    if (incomeValue < totalExpensesValue) {

        balanceValue.innerText = ''
        return alert('Please input valid amount of money in number format');

    }


    return totalExpenses;

}

console.log(totalBalanceUpdate(), 5555)


function savingCalculate(incomeValue, savingInput) {
    const savingResult = (incomeValue * savingInput) / 100;
    return savingResult
};

document.getElementById('expenses-calculate').addEventListener('click', function () {

    totalExpensesUpdate()



})

document.getElementById('saving-button').addEventListener('click', function () {

    const incomeValue = document.getElementById('income').value;

    const totalExpensesValue = totalExpensesUpdate()

    const savingInput = document.getElementById('saving-input').value;

    const savingAmountText = document.getElementById('saving-amount');
    const savingAmount = savingAmountText.innerText;

    savingAmountText.innerText = savingCalculate(incomeValue, savingInput);

    const balanceValue = document.getElementById('balance');

    const balanceCalculate = balanceValue.innerText;

    const remainingBalanceText = document.getElementById('remaining-balance');
    const remainingBalanceValue = remainingBalanceText.innerText;

    const remainingBalance = balanceCalculate - savingAmountText.innerText;
    if (remainingBalance < 0) {

        remainingBalanceText.innerText = ''
        return alert('Please input valid amount of money in number format 007');

    }
    remainingBalanceText.innerText = remainingBalance;





})



