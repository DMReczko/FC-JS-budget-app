import { addIncome } from "./income.js";
import { addExpense } from "./expense.js";
import { sumupIncome, sumupExpense } from "./sums.js";
import { budgetTally } from "./tally.js";

const incomeForm = document.querySelector("#income-form");
const expenseForm = document.querySelector("#expense-form");

const incomeSubmit = (event) => {
    event.preventDefault();

    addIncome();
    sumupIncome();
    sumupExpense();
    budgetTally();
};

const expenseSubmit = (event) => {
    event.preventDefault();

    addExpense();
    sumupIncome();
    sumupExpense();
    budgetTally();
};

incomeForm.addEventListener("submit", incomeSubmit);
expenseForm.addEventListener("submit", expenseSubmit);
