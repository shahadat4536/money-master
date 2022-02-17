document.getElementById('expenses-calculate').addEventListener('click', function () {
    const foodExpenses = document.getElementById('food-expenses').value;
    const rentExpenses = document.getElementById('rent-expenses').value;
    const clothesExpenses = document.getElementById('clothes-expenses').value;
    const totalExpensesValue = parseFloat(foodExpenses) + parseFloat(rentExpenses) + parseFloat(clothesExpenses);
    const totalExpensesText = document.getElementById('total-expenses');
    const totalExpenses = totalExpensesText.innerText;
    totalExpensesText.innerText = totalExpensesValue;
    //update balance
    const incomeValue = document.getElementById('income').value;
    const balanceValue = document.getElementById('balance');
    const balanceCalculate = parseFloat(incomeValue) - parseFloat(totalExpensesValue);
    balanceValue.innerText = balanceCalculate;


})

function savingCalculate(incomeValue, savingInput) {
    const savingResult = (incomeValue * savingInput) / 100;
    return savingResult
};


document.getElementById('saving-button').addEventListener('click', function () {
    const foodExpenses = document.getElementById('food-expenses').value;
    const rentExpenses = document.getElementById('rent-expenses').value;
    const clothesExpenses = document.getElementById('clothes-expenses').value;
    const totalExpensesValue = parseFloat(foodExpenses) + parseFloat(rentExpenses) + parseFloat(clothesExpenses);
    const totalExpensesText = document.getElementById('total-expenses');
    const totalExpenses = totalExpensesText.innerText;
    totalExpensesText.innerText = totalExpensesValue;
    //update balance
    const incomeValue = document.getElementById('income').value;
    const balanceValue = document.getElementById('balance');
    const balanceCalculate = parseFloat(incomeValue) - parseFloat(totalExpensesValue);
    balanceValue.innerText = balanceCalculate;

    const savingInput = document.getElementById('saving-input').value;
    // const savingInputCalculate = savingCalculate(incomeValue, savingInput);
    const savingAmountText = document.getElementById('saving-amount');
    const savingAmount = savingAmountText.innerText;

    savingAmountText.innerText = savingCalculate(incomeValue, savingInput);



    const remainingBalanceText = document.getElementById('remaining-balance');
    const remainingBalanceValue = remainingBalanceText.innerText;

    const remainingBalance = balanceValue.innerText - savingAmountText.innerText;

    remainingBalanceText.innerText = remainingBalance;





})



