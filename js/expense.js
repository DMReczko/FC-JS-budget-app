import { sumupExpense } from "./sums.js";
import { budgetTally } from "./tally.js";
import { createBtn } from "./utils.js";

const addExpenseText = document.querySelector("#expense-text");
const expenseList = document.querySelector("#expense-list");
const expenseValue = document.querySelector("#expense-value");

const deleteExpense = (event) => {
    event.preventDefault();

    expenseList.removeChild(event.target.parentNode);

    sumupExpense();
    budgetTally();
};

const editElement = (event) => {
    event.preventDefault();

    const button = event.target;
    const parentNode = button.parentNode;
    const expenseName = parentNode.querySelector(".expense-name");
    const expenseValue = parentNode.querySelector(".expense-amount");

    if (isEditMode(expenseName, expenseValue)) {
        if (isNaN(expenseValue.textContent)) {
            return alert("Wprowadź poprawną kwotę");
        } else {
            expenseValue.textContent = parseFloat(
                expenseValue.textContent
            ).toFixed(2);
            expenseName.contentEditable = "false";
            expenseValue.contentEditable = "false";
            button.innerHTML = "Edytuj";

            expenseName.classList.remove("input-edit");
            expenseValue.classList.remove("input-edit");
        }
    } else {
        expenseName.contentEditable = "true";
        expenseValue.contentEditable = "true";
        button.innerHTML = "Zapisz";
    }

    sumupExpense();
    budgetTally();
};

const isEditMode = (expenseName, expenseValue) => {
    expenseName.classList.add("input-edit");
    expenseValue.classList.add("input-edit");

    return (
        (expenseName.contentEditable == "true") |
        (expenseValue.contentEditable == "true")
    );
};

export const addExpense = () => {
    const expenseName = addExpenseText.value;
    const expenseAmount = parseFloat(expenseValue.value).toFixed(2);

    if (expenseAmount && expenseAmount > 0 && expenseName.trim()) {
        const expenseListElem = document.createElement("li");
        const deleteBtn = createBtn("Usuń", "delete-btn", deleteExpense);
        const editBtn = createBtn("Edytuj", "edit-btn", editElement);

        expenseListElem.id = Math.floor(Math.random() * 10000);
        expenseListElem.innerHTML = `<div class="expense-name">${expenseName}</div><div class="expense-amount">${expenseAmount}</div>`;
        expenseListElem.appendChild(editBtn);
        expenseListElem.appendChild(deleteBtn);
        expenseListElem.id = Math.floor(Math.random() * 10000);

        expenseList.appendChild(expenseListElem);

        addExpenseText.value = "";
        expenseValue.value = "";
    } else {
        alert("Wpisz poprawne wartości w oba pola");
    }
};
