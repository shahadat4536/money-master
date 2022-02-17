function savingCalculate(incomeValue, savingInput) {
    const savingResult = (incomeValue * savingInput) / 100;
    return savingResult
};

const total = savingCalculate(10000, 20)
console.log(total)
