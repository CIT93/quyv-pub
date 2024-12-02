import { renderTbl } from "./render.js";
import { saveLS, cfpData } from "./storage.js";

// Parse water usage into points
const parseWaterConsumption = (value) => {
  switch (value) {
    case "0": return 0; // No usage
    case "1": return 1; // 1-3 times/week
    case "2": return 2; // 4-9 times/week
    case "3": return 3; // More than 9 times/week
    default: return 0;
  }
};

// Calculate points for purchases
const calculatePurchasePoints = (purchases) => {
  switch (purchases) {
    case "0-10": return 1;
    case "11-50": return 2;
    case "51-100": return 3;
    case "101+": return 4;
    default: return 0;
  }
};

// Start function
const start = (firstname, lastname, householdMembers, houseSize, dishwasher, washingMachine, householdPurchases) => {
  const waterPoints = (parseWaterConsumption(dishwasher) + parseWaterConsumption(washingMachine)) * 2;
  const purchasePoints = calculatePurchasePoints(householdPurchases);
  const totalPoints = waterPoints + purchasePoints;

  const entry = {
    firstname,
    lastname,
    houseMembers: householdMembers,
    houseSize,
    dishwasherUsage: dishwasher,
    washingMachineUsage: washingMachine,
    waterPoints,
    householdPurchases,
    purchasePoints,
    totalPoints,
  };

  cfpData.push(entry);
  saveLS(cfpData);
  renderTbl(cfpData);
};

// Event Listener
document.getElementById("carbon-footprint-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = e.target.firstname.value;
  const lastname = e.target.lastname.value;
  const householdMembers = e.target.housem.value;
  const houseSize = e.target.house.value;
  const dishwasher = e.target.dishwasher.value;
  const washingMachine = e.target.washingMachine.value;
  const householdPurchases = e.target.householdPurchases.value;

  if (firstname && lastname && householdMembers && houseSize && householdPurchases) {
    start(firstname, lastname, householdMembers, houseSize, dishwasher, washingMachine, householdPurchases);
    e.target.reset();
  } else {
    alert("Please fill out all fields.");
  }
});
