//  balance function
function totalBalanceUpdate() {

    const foodExpenses = document.getElementById('food-expenses').value;
    const rentExpenses = document.getElementById('rent-expenses').value;
    const clothesExpenses = document.getElementById('clothes-expenses').value;


    if (isNaN(foodExpenses) || isNaN(rentExpenses) || isNaN(clothesExpenses)) {

        alert('Please check your expenses input value and use only number.');
        return 00;
    }
    if (foodExpenses < 0 || rentExpenses < 0 || clothesExpenses < 0) {

        alert('Please check your expenses input value and use only positive number.');
        return 00;
    }

    const totalExpensesValueUpdate = parseFloat(foodExpenses) + parseFloat(rentExpenses) + parseFloat(clothesExpenses);
    return totalExpensesValueUpdate;


}

//  expenses function
function totalExpensesUpdate() {

    const totalExpensesValue = totalBalanceUpdate();
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
        totalExpensesText.innerText = '00';
        balanceValue.innerText = incomeValue;
        return alert('Your expenses outweigh your income');

    }


    return totalExpenses;

}
// saving function
function savingCalculate(incomeValue, savingInput) {
    const savingResult = (incomeValue * savingInput) / 100;
    return savingResult;
};

// handle calculate button
document.getElementById('expenses-calculate').addEventListener('click', function () {
    totalExpensesUpdate();
});

// handle saving button
document.getElementById('saving-button').addEventListener('click', function () {

    const incomeValue = document.getElementById('income').value;

    const totalExpensesValue = totalExpensesUpdate();

    const savingInput = document.getElementById('saving-input').value;
    if (savingInput < 0) {
        alert('use positive number in saving input')
        return;
    }

    const savingAmountText = document.getElementById('saving-amount');
    const savingAmount = savingAmountText.innerText;

    savingAmountText.innerText = savingCalculate(incomeValue, savingInput);

    const balanceValue = document.getElementById('balance');

    const balanceCalculate = balanceValue.innerText;

    const remainingBalanceText = document.getElementById('remaining-balance');
    const remainingBalanceValue = remainingBalanceText.innerText;

    const remainingBalance = balanceCalculate - savingAmountText.innerText;
    if (remainingBalance < 0) {
        savingAmountText.innerText = '00'
        remainingBalanceText.innerText = '00'
        return alert('Your saving input greater than your balance');
    }

    if (isNaN(remainingBalance)) {
        savingAmountText.innerText = '00'
        remainingBalanceText.innerText = '00'
        return alert('Please check your input value and use only positive number.');
    }
    remainingBalanceText.innerText = remainingBalance;
})



