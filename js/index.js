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
    console.log(savingInput)


})



