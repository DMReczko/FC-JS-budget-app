const incomeSumContainer = document.querySelector("#income-sum");
const expenseSumContainer = document.querySelector("#expense-sum");

export const budgetTally = () => {
    const tallyCont = document.querySelector("#budget-tally");
    const incomeSum = parseFloat(incomeSumContainer.innerText).toFixed(2);
    const expenseSum = parseFloat(expenseSumContainer.innerText).toFixed(2);
    const tally = parseFloat(incomeSum - expenseSum).toFixed(2);
    if (tally > 0) {
        tallyCont.innerHTML = `<span class="tally-ok">Możesz jeszcze wydać ${tally} zł.</span>`;
    } else if (tally < 0) {
        tallyCont.innerHTML = `<span class="tally-red">Bilans jest ujemny. Jesteś na minusie ${
            tally * -1
        } zł.</span>`;
    } else if (tally == 0) {
        tallyCont.innerHTML = `<span class="tally">Bilans wynosi zero.</span>`;
    }
};
