import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

// Store data array (load from localStorage if it exists, otherwise initialize as an empty array)
let exampleData = JSON.parse(localStorage.getItem('exampleData')) || [];

// Function to render the action buttons (Edit/Delete) for each row
const renderTblBtn = function(obj, index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");

  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";

  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  // Event listener for the Edit button
  btnEdit.addEventListener("click", function() {
    FORM[0].value = obj.firstName;
    FORM[1].value = obj.lastName;
    FORM[3].value = obj.houseM;
    FORM[4].value = obj.houseS;
    document.getElementById('food').value = obj.food;
    onUpdate(index, data);
  });

  // Event listener for the Delete button
  btnDel.addEventListener("click", function() {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
  });

  return td;
}

// Function to render the table dynamically
const renderTbl = function(data) {
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

    // Access and display each property, ensuring first name is included
    const tdFirstName = document.createElement("td");
    tdFirstName.textContent = row.firstName;
    tr.appendChild(tdFirstName);

    const tdLastName = document.createElement("td");
    tdLastName.textContent = row.lastName;
    tr.appendChild(tdLastName);

    const tdHouseM = document.createElement("td");
    tdHouseM.textContent = row.houseM;
    tr.appendChild(tdHouseM);

    const tdHouseS = document.createElement("td");
    tdHouseS.textContent = row.houseS;
    tr.appendChild(tdHouseS);

    // Append Edit/Delete buttons
    const tdAction = renderTblBtn(row, index, data);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  TBL.appendChild(table);
}

// Function to handle updating a row
const onUpdate = function(index, data) {
  const updateFormHandler = function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Capture form input values
    const firstname = FORM[0].value;
    const lastname = FORM[1].value;
    const houseM = FORM[3].value;
    const houseS = FORM[4].value;

    // Validate that all required fields are filled
    if (firstname && lastname && houseM && houseS) {
      // Update the existing row data
      data[index] = {
        firstName: firstname,
        lastName: lastname,
        houseM: houseM,
        houseS: houseS,
      };

      saveLS(data); // Save the updated data to localStorage
      renderTbl(data); // Re-render the table with updated data
      FORM.reset(); // Reset the form

      // Remove the event listener after updating to prevent multiple attachments
      FORM.removeEventListener("submit", updateFormHandler);
    } else {
      alert("All fields must be filled out to update the entry.");
    }
  };

  // Attach the update handler only if it's not already attached
  if (!FORM.dataset.updateAttached) {
    FORM.addEventListener("submit", updateFormHandler);
    FORM.dataset.updateAttached = "true"; // Mark the handler as attached
  }
}

// Handle form submission (add new entry)
FORM.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Capture form input values
  const firstname = FORM[0].value;
  const lastname = FORM[1].value;
  const houseM = FORM[3].value;
  const houseS = FORM[4].value;

  // Add new data to exampleData array
  const formData = {
    firstName: firstname,
    lastName: lastname,
    houseM: houseM,
    houseS: houseS,
  };

  exampleData.push(formData); // Add the form data to the array
  saveLS(exampleData); // Save the updated data to localStorage
  renderTbl(exampleData); // Re-render the table with the new data
  FORM.reset(); // Reset the form after submission
});

// Initial rendering from localStorage data (if available)
window.addEventListener('load', () => {
  renderTbl(exampleData); // Render the table on page load
});

// Export the renderTbl function for external use (if using modules)
export { renderTbl };
