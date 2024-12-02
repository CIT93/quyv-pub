import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

// Function to parse water consumption inputs
const parseWaterConsumption = (value) => {
  switch (value) {
    case "none":
      return 0;
    case "1-3":
      return 1;
    case "4-9":
      return 2;
    case "9+":
      return 3;
    default:
      return 0;
  }
};

// Function to calculate purchase points
const determinePurchasePoints = (purchases) => {
  switch (purchases) {
    case "0-10":
      return 1;
    case "11-50":
      return 3;
    case "51-100":
      return 5;
    case "101+":
      return 10;
    default:
      return 0;
  }
};

// Start function to process form inputs
const start = (firstname, lastname, householdMembers, houseSize, dishwasher, washingMachine, householdPurchases) => {
  const dishwasherPoints = parseWaterConsumption(dishwasher);
  const washingMachinePoints = parseWaterConsumption(washingMachine);
  const purchasePoints = determinePurchasePoints(householdPurchases);

  const totalPoints = dishwasherPoints + washingMachinePoints + purchasePoints;

  cfpData.push({
    firstname,
    lastname,
    houseMembers: householdMembers,
    houseSize: houseSize,
    dishwasherUsage: dishwasher,
    dishwasherPoints: dishwasherPoints,
    washingMachineUsage: washingMachine,
    washingMachinePoints: washingMachinePoints,
    householdPurchases: householdPurchases,
    purchasePoints: purchasePoints,
    totalPoints: totalPoints,
  });

  saveLS(cfpData);
  renderTbl(cfpData);
};

// Event listener for form submission
FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = FNAME.value;
  const lastname = LNAME.value;
  const householdMembers = parseInt(FORM.housem.value, 10);
  const houseSize = FORM.house.value;
  const dishwasher = FORM.dishwasher.value;
  const washingMachine = FORM.washingMachine.value;
  const householdPurchases = FORM.householdPurchases.value;

  if (firstname && lastname && householdMembers && houseSize && dishwasher && washingMachine && householdPurchases) {
    start(firstname, lastname, householdMembers, houseSize, dishwasher, washingMachine, householdPurchases);
    FORM.reset();
  } else {
    alert("All fields must be filled out.");
  }
});

// Initial rendering from localStorage data (if available)
window.addEventListener("load", () => {
  renderTbl(cfpData);
});
