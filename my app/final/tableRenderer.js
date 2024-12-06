import { petData } from './global.js';

export function renderTable(data = petData) {
    const tableBody = document.getElementById('dataTable').querySelector('tbody');
    const tableHead = document.getElementById('tableHead');

    tableBody.innerHTML = '';

    if (data.length === 0) {
        tableHead.style.display = 'none';
        return;
    }

    tableHead.style.display = '';

    data.forEach((pet, index) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = pet.petName;
        row.appendChild(nameCell);

        const intervalCell = document.createElement('td');
        intervalCell.textContent = `${pet.feedingInterval} hours`;
        row.appendChild(intervalCell);

        const timeCell = document.createElement('td');
        timeCell.textContent = pet.nextFeedingTime;
        row.appendChild(timeCell);

        const decisionCell = document.createElement('td');
        decisionCell.textContent = pet.decision;
        row.appendChild(decisionCell);

        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editEntry(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteEntry(index));

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });
}

export function saveToLocalStorage(data) {
    localStorage.setItem('petData', JSON.stringify(data));
}

function editEntry(index) {
    const pet = petData[index];
    petForm.elements['petName'].value = pet.petName;
    petForm.elements['feedingInterval'].value = pet.feedingInterval;

    petData.splice(index, 1);
    saveToLocalStorage(petData);
    renderTable();
}

function deleteEntry(index) {
    petData.splice(index, 1);
    saveToLocalStorage(petData);
    renderTable();
}
