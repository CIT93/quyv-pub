// Renders a row in the table with edit and delete buttons
export function renderTableRow({ petName, feedingInterval, nextFeedingTime, decision }) {
    const tableBody = document.getElementById('dataTable').querySelector('tbody');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${petName}</td>
        <td>${feedingInterval} hours</td>
        <td>${nextFeedingTime}</td>
        <td>${decision}</td>
        <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    // Add event listeners for edit and delete buttons
    row.querySelector('.edit-btn').addEventListener('click', () => editRow(row));
    row.querySelector('.delete-btn').addEventListener('click', () => deleteRow(row));

    tableBody.appendChild(row);
}

// Placeholder function for editing a row
function editRow(row) {
    console.log("Edit functionality will be implemented here.");
}

// Function to delete a row from the table
function deleteRow(row) {
    row.remove();
}
