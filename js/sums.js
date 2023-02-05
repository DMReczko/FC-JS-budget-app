export const sumupExpense = () => {
    let expenseSum = 0;
    const expenseAmounts = document.querySelectorAll(".expense-amount");
    $(expenseAmounts).each(function () {
        expenseSum += parseFloat($(this).text());
    });
    const expenseSumContainer = document.querySelector("#expense-sum");
    const parsedExpense = parseFloat(expenseSum).toFixed(2);
    expenseSumContainer.innerText = `${parsedExpense}`;
};

export const sumupIncome = () => {
    let incomeSum = 0;
    const incomeAmounts = document.querySelectorAll(".income-amount");
    $(incomeAmounts).each(function () {
        incomeSum += parseFloat($(this).text());
    });
    const incomeSumContainer = document.querySelector("#income-sum");
    const parsedIncome = parseFloat(incomeSum).toFixed(2);
    incomeSumContainer.innerText = `${parsedIncome}`;
};
