import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

const renderTblBtn = (row, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDelete = document.createElement("button");

  btnEdit.textContent = "Edit";
  btnDelete.textContent = "Delete";

  td.appendChild(btnEdit);
  td.appendChild(btnDelete);

  btnEdit.addEventListener("click", () => {
    FORM.firstname.value = row.firstname;
    FORM.lastname.value = row.lastname;
    FORM.housem.value = row.houseMembers;
    FORM.house.value = row.houseSize;
    FORM.dishwasher.value = row.dishwasherUsage.toString(); // Convert to string for dropdown
    FORM.washingMachine.value = row.washingMachineUsage.toString(); // Convert to string for dropdown

    FORM.addEventListener("submit", function handleEdit(e) {
      e.preventDefault();

      data[index] = {
        firstname: FORM.firstname.value,
        lastname: FORM.lastname.value,
        houseMembers: parseInt(FORM.housem.value, 10),
        houseSize: FORM.house.value,
        dishwasherUsage: FORM.dishwasher.value,
        dishwasherPoints: parseInt(FORM.dishwasher.value, 10),
        washingMachineUsage: FORM.washingMachine.value,
        washingMachinePoints: parseInt(FORM.washingMachine.value, 10),
        totalPoints:
          parseInt(FORM.dishwasher.value, 10) +
          parseInt(FORM.washingMachine.value, 10),
      };

      saveLS(data);
      renderTbl(data);
      FORM.removeEventListener("submit", handleEdit);
      FORM.reset();
    });
  });

  btnDelete.addEventListener("click", () => {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
  });

  return td;
};

export const renderTbl = (data) => {
  TBL.innerHTML = "";

  if (data.length === 0) {
    TBL.innerHTML = "<p>No data available</p>";
    return;
  }

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headers = [
    "First Name",
    "Last Name",
    "Household Members",
    "House Size",
    "Dishwasher Usage",
    "Dishwasher Points",
    "Washing Machine Usage",
    "Washing Machine Points",
    "Total Points",
    "Actions",
  ];

  const trHead = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);

  data.forEach((row, index) => {
    const tr = document.createElement("tr");

    const keys = [
      "firstname",
      "lastname",
      "houseMembers",
      "houseSize",
      "dishwasherUsage",
      "dishwasherPoints",
      "washingMachineUsage",
      "washingMachinePoints",
      "totalPoints",
    ];

    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = row[key];
      tr.appendChild(td);
    });

    const tdActions = renderTblBtn(row, index, data);
    tr.appendChild(tdActions);
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  TBL.appendChild(table);
};
