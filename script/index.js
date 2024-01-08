const deleteBtn = "<button class='delete-btn'>Delete</button>";
const nameInput = document.getElementById('name');
const dateInput = document.getElementById('date');
const amountInput = document.getElementById('amount');
const addExpenseButton = document.getElementById('add-expense');
const table = document.getElementById('table');

const addExpense = () => {
    if(!nameInput.value || !dateInput.value || !amountInput.value) {
        alert('Please fill in all fields');
        return;
    } else {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdDate = document.createElement('td');
        let tdAmount = document.createElement('td');
        let tdDelete = document.createElement('td');
        table.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdDate);
        tr.appendChild(tdAmount);
        tr.appendChild(tdDelete);
        tdName.innerHTML = nameInput.value;
        tdDate.innerHTML = dateInput.value;
        tdAmount.innerHTML = amountInput.value;
        tdDelete.innerHTML = deleteBtn;
        nameInput.value = '';
        dateInput.value = '';
        amountInput.value = '';
    }
};

const deleteExpense = (e) => {
    if(e.target.classList.contains('delete-btn')) {
        e.target.parentElement.parentElement.remove();
    }
};

table.addEventListener('click', deleteExpense);
addExpenseButton.addEventListener('click', addExpense);
