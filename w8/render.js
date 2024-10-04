// Assuming TBL is the container where the table is being rendered
const TBL = document.getElementById("tab-data");

// Function to create table header
function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  // Define the header text array
  const headingTextArr = ["Name", "HouseHold", "House Size", "Carbon Footprint", "Action"];
  headingTextArr.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);
  return table; // Return the table element
}

// Function to create the action buttons and add event listeners
function createActionButtons(data, index) {
  const tdAction = document.createElement("td");

  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");

  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  btnEdit.classList.add("edit-btn");
  btnDel.classList.add("delete-btn");

  // Set up event listeners for Edit and Delete buttons
  btnEdit.addEventListener("click", function(e)  {
    
  });

  btnDel.addEventListener("click", () => {
    deleteRow(index);
  });

  tdAction.appendChild(btnEdit);
  tdAction.appendChild(btnDel);
  return tdAction; // Return the table cell containing action buttons
}

function renderTbl(data) {
  TBL.innerHTML = ""; // Clear previous content

  // Check if the data array is empty
  if (data.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No data available.";
    TBL.appendChild(message); // Show a message when there's no data
    return; // Stop here if there's no data to display
  }

  const table = renderTblHeading(); // Use the table header function
  const tbody = document.createElement("tbody");

  // Iterate through the data array to create rows
  data.forEach((obj, index) => {
    const tr = document.createElement("tr");

    for (const [key, value] of Object.entries(obj)) {
      // Exclude specific keys from being rendered as table cells
      if (key !== "lastname" && key !== "houseMPTS" && key !== "houseSPTS") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }

    // Append the action buttons to the row
    const tdAction = createActionButtons(obj, index);
    tr.appendChild(tdAction);

    tbody.appendChild(tr); // Append the row to tbody
  });

  table.appendChild(tbody);
  TBL.appendChild(table); // Append the new table to the TBL container
}


// Function to handle editing a row
function editRow(data, index) {
  console.log(`Editing row at index: ${index}`, data);
  // Implement your edit logic here, such as populating a form with existing data
}

// Function to handle deleting a row
function deleteRow(index) {
  console.log(`Deleting row at index: ${index}`);
  // Implement your delete logic here, such as removing the row from the data array and re-rendering the table
  exampleData.splice(index, 1); // Remove the item from the example data array
  renderTbl(exampleData); // Re-render the table with updated data
}

// Example data to render the table
const exampleData = [
  { firstname: "Quy", household: "Vu", houseSize: "Medium", cfpTotal: "100" },
  { firstname: "Quy", household: "Vu", houseSize: "Large", cfpTotal: "150" }
];

// Call the render function with example data
renderTbl(exampleData);

// Export the renderTbl function for external use (only if you're using modules)
export { renderTbl }; // Comment this out if not using modules
