import { sumupIncome } from "./sums.js";
import { budgetTally } from "./tally.js";
import { createBtn } from "./utils.js";

const addIncomeText = document.querySelector("#income-text");
const incomeList = document.querySelector("#income-list");
const incomeValue = document.querySelector("#income-value");

const deleteIncome = (event) => {
  event.preventDefault();

  incomeList.removeChild(event.target.parentNode);

  sumupIncome();
  budgetTally();
};

const editElement = (event) => {
  event.preventDefault();

  const button = event.target;
  const parentNode = button.parentNode;
  const incomeName = parentNode.querySelector(".income-name");
  const incomeValue = parentNode.querySelector(".income-amount");

  if (isEditMode(incomeName, incomeValue)) {
    if (
      isNaN(incomeValue.textContent) |
      (incomeValue.textContent.trim() == "")
    ) {
      return alert("Wprowadź poprawną kwotę");
    } else {
      incomeValue.textContent = parseFloat(incomeValue.textContent).toFixed(2);
      incomeName.contentEditable = "false";
      incomeValue.contentEditable = "false";
      button.innerHTML = "Edytuj";

      incomeName.classList.remove("input-edit");
      incomeValue.classList.remove("input-edit");
    }
  } else {
    incomeName.contentEditable = "true";
    incomeValue.contentEditable = "true";
    button.innerHTML = "Zapisz";
  }

  sumupIncome();
  budgetTally();
};

const isEditMode = (incomeName, incomeValue) => {
  incomeName.classList.add("input-edit");
  incomeValue.classList.add("input-edit");

  return (
    (incomeName.contentEditable == "true") |
    (incomeValue.contentEditable == "true")
  );
};

export const addIncome = () => {
  const incomeName = addIncomeText.value;
  const incomeAmount = parseFloat(incomeValue.value).toFixed(2);

  if (incomeAmount && incomeAmount > 0 && incomeName.trim()) {
    const incomeListElem = document.createElement("li");
    const deleteBtn = createBtn("Usuń", "delete-btn", deleteIncome);
    const editBtn = createBtn("Edytuj", "edit-btn", editElement);

    incomeListElem.id = Math.floor(Math.random() * 10000);
    incomeListElem.innerHTML = `<div class="income-name">${incomeName}</div><div class="income-amount">${incomeAmount}</div>`;
    incomeListElem.appendChild(editBtn);
    incomeListElem.appendChild(deleteBtn);
    incomeListElem.id = Math.floor(Math.random() * 10000);

    incomeList.appendChild(incomeListElem);

    addIncomeText.value = "";
    incomeValue.value = "";
  } else {
    alert("Wpisz poprawne wartości w oba pola");
  }
};
