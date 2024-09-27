// Reference the table container
const TBL = document.getElementById("tab-data");

// Function to create the table header
function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  // Define the header text array
  const headingTextArr = ["Name", "HouseHold", "House Size", "Carbon Footprint", "Action"];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);
  return table; // Return the table element with the header created
}

// Function to render the table with data
function renderTbl(data) {
  // Challenge 2: Clear the table before rendering new content
  TBL.innerHTML = ""; // Clear existing table elements to prevent duplicates

  const table = renderTblHeading(); // Create a new table with a fresh header
  const tbody = document.createElement("tbody");

  // Loop over the data array, which is an array of objects
  data.forEach((obj) => {
    const tr = document.createElement("tr");

    // Loop through each property in the object and conditionally render fields
    for (const key in obj) {
      if (key === "lastname" || key === "houseMPTS" || key === "houseSPTS") continue; // Skip certain properties
      const td = document.createElement("td");
      td.textContent = obj[key]; // Set the content of each cell
      tr.appendChild(td);
    }

    // Create the Action cell with Edit and Delete buttons
    const actionTd = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    actionTd.appendChild(btnEdit);
    actionTd.appendChild(btnDel);
    tr.appendChild(actionTd);

    tbody.appendChild(tr); // Append the row to tbody
  });

  table.appendChild(tbody);
  TBL.appendChild(table); // Append the complete table to the TBL container
}

// Example array of objects to test the renderTbl function
const cfpData = [
  { firstname: "Quy", lastname: "Vu", houseM: 4, houseS: "Large", houseMPTS: 8, houseSPTS: 10, cfpTotal: 18 },
  { firstname: "Quy", lastname: "Vu", houseM: 3, houseS: "Medium", houseMPTS: 10, houseSPTS: 7, cfpTotal: 17 }
];

// Call renderTbl with the sample data to test the output
renderTbl(cfpData);


// Correctly exporting functions after they have been declared
export { renderTbl, renderTblHeading };
