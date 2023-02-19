const expenseSumContainer = document.querySelector("#expense-sum");
const incomeSumContainer = document.querySelector("#income-sum");

export const sumupExpense = () => {
    let expenseSum = 0;
    const expenseAmounts = document.querySelectorAll(".expense-amount");

    expenseAmounts.forEach((amount) => {
        expenseSum += parseFloat(amount.textContent);
    });

    const parsedExpense = parseFloat(expenseSum.toFixed(2));
    expenseSumContainer.innerText = `${parsedExpense}`;
};

export const sumupIncome = () => {
    let incomeSum = 0;
    const incomeAmounts = document.querySelectorAll(".income-amount");

    incomeAmounts.forEach((amount) => {
        incomeSum += parseFloat(amount.textContent);
    });

    const parsedIncome = parseFloat(incomeSum.toFixed(2));
    incomeSumContainer.innerText = `${parsedIncome}`;
};
