import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

// Store data array (load from localStorage if it exists, otherwise initialize as an empty array)
let exampleData = JSON.parse(localStorage.getItem('exampleData')) || [];

// Function to render the table dynamically
function renderTbl(data) {
  TBL.innerHTML = ""; // Clear previous content

  if (data.length === 0) {
    TBL.innerHTML = "<p>No data available</p>";
    return;
  }

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  // Define the header text array
  const headers = ["First Name", "Last Name", "Household Members", "House Size", "Action"];
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  data.forEach((row, index) => {
    const tr = document.createElement("tr");

    // Create table cells dynamically based on input data
    Object.values(row).forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });

    // Create action buttons for Edit and Delete
    const tdAction = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");

    btnEdit.textContent = "Edit";
    btnDel.textContent = "Delete";
    btnEdit.classList.add("edit-btn");
    btnDel.classList.add("delete-btn");

    // Event listeners for Edit and Delete
    btnEdit.addEventListener("click", () => editRow(row, index));
    btnDel.addEventListener("click", () => deleteRow(index));
        data.splice(index, 1);
        saveLS(data);
        renderTbl(data);
    tdAction.appendChild(btnEdit);
    tdAction.appendChild(btnDel);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  TBL.appendChild(table);
}

// Handle form submission
FORM.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Capture form input values
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const housem = document.getElementById("housem").value;
  const house = document.getElementById("house").value;

  // Add the data to exampleData array
  const formData = {
    firstname,
    lastname,
    housem,
    house,
  };

  // If editing, update the existing row, otherwise add a new one
  if (FORM.dataset.editIndex !== undefined) {
    const index = FORM.dataset.editIndex;
    exampleData[index] = formData;
    FORM.removeAttribute('data-edit-index'); // Clear edit state after submission
  } else {
    exampleData.push(formData); // Add the form data to the array
  }

  // Store the updated data array in localStorage
  localStorage.setItem('exampleData', JSON.stringify(exampleData));

  // Re-render the table with updated data
  renderTbl(exampleData);

  // Reset the form after submission
  FORM.reset();
});

// Function to handle editing a row
function editRow(data, index) {
  // Populate the form with the data from the selected row
  document.getElementById("firstname").value = data.firstname;
  document.getElementById("lastname").value = data.lastname;
  document.getElementById("housem").value = data.housem;
  document.getElementById("house").value = data.house;

  // Set the form's data attribute to track the index of the row being edited
  FORM.setAttribute('data-edit-index', index);
}

// Function to handle deleting a row
function deleteRow(index) {
  exampleData.splice(index, 1); // Remove the item from the example data array

  // Update localStorage after deleting a row
  localStorage.setItem('exampleData', JSON.stringify(exampleData));

  // Re-render the table with updated data
  renderTbl(exampleData);
}

// Initial rendering from localStorage data (if available)
window.addEventListener('load', () => {
  renderTbl(exampleData); // Render the table on page load
});

// Export the renderTbl function for external use (only if you're using modules)
export { renderTbl };
