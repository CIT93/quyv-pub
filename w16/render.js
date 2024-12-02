import { TBL } from "./global.js";

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
    "Washing Machine Usage",
    "Water Points",
    "Household Purchases",
    "Purchase Points",
    "Total Points",
  ];

  const trHead = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);

  data.forEach((row) => {
    const tr = document.createElement("tr");

    const keys = [
      "firstname",
      "lastname",
      "houseMembers",
      "houseSize",
      "dishwasherUsage",
      "washingMachineUsage",
      "waterPoints",
      "householdPurchases",
      "purchasePoints",
      "totalPoints",
    ];

    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = row[key];
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  TBL.appendChild(table);
};
