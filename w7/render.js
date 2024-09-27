// Assuming TBL is the container where the table is being rendered
const TBL = document.getElementById("tab-data");

// Function to create table header (renamed to avoid confusion)
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
  return table; // Return the table element with header created
}

// Function to render the table with data
function renderTbl(data) {
  const table = renderTblHeading(); // Use the table header function
  const tbody = document.createElement("tbody");

  // Assuming data is an array of arrays, where each array is a row
  data.forEach((row) => {
    const tr = document.createElement("tr");

    // Create cells for each item in the row array
    row.forEach((cellText) => {
      const td = document.createElement("td");
      td.textContent = cellText;
      tr.appendChild(td);
    });

    // Create the Action cell with Edit and Delete buttons
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    tr.appendChild(td);

    tbody.appendChild(tr); // Append the row to tbody
  });

  table.appendChild(tbody);
  TBL.appendChild(table); // Append the table to the TBL container
}

// Correctly exporting functions after they have been declared
export { renderTbl, renderTblHeading };
