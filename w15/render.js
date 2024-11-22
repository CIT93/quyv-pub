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
    FORM[5].value = obj.foodChoice; // Added food choice for editing
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
  const headers = ["First Name", "Last Name", "Household Members", "House Size", "Food Choice", "Total Points", "Action"];
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

    // Display each property, including the new food choice and total points
    const keys = ["first", "last", "houseMembers", "houseSize", "foodChoice", "totalPoints"];
    keys.forEach(key => {
      const td = document.createElement("td");
      td.textContent = row[key];
      tr.appendChild(td);
    });

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
    const foodChoice = FORM[5].value; // Get food choice from dropdown

    // Validate that all required fields are filled
    if (firstname && lastname && houseM && houseS && foodChoice) {
      data[index] = {
        first: firstname,
        last: lastname,
        houseMembers: houseM,
        houseSize: houseS,
        foodChoice: foodChoice,
        totalPoints: new FP(firstname, lastname, houseM, houseS, foodChoice).calculateTotalFootprint()
      };

      saveLS(data);
      renderTbl(data);
      FORM.reset();

      FORM.removeEventListener("submit", updateFormHandler);
    } else {
      alert("All fields must be filled out to update the entry.");
    }
  };

  if (!FORM.dataset.updateAttached) {
    FORM.addEventListener("submit", updateFormHandler);
    FORM.dataset.updateAttached = "true";
  }
}

export { renderTbl };
