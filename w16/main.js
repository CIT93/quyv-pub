import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

// Function to parse water consumption inputs
const parseWaterConsumption = (value) => {
  switch (value) {
    case "0":
      return 0; // Don't have one
    case "1":
      return 1; // 1-3 times/week
    case "2":
      return 2; // 4-9 times/week
    case "3":
      return 3; // More than 9 times/week
    default:
      return 0;
  }
};

// Update the start function to include water consumption
const start = (firstname, lastname, householdMembers, houseSize, dishwasher, washingMachine) => {
  const dishwasherPoints = parseWaterConsumption(dishwasher);
  const washingMachinePoints = parseWaterConsumption(washingMachine);

  const total = dishwasherPoints + washingMachinePoints;

  cfpData.push({
    firstname,
    lastname,
    houseMembers: householdMembers,
    houseSize: houseSize,
    dishwasherUsage: dishwasher,
    dishwasherPoints: dishwasherPoints,
    washingMachineUsage: washingMachine,
    washingMachinePoints: washingMachinePoints,
    totalPoints: total,
  });

  saveLS(cfpData);
  renderTbl(cfpData);
};

// Attach event listeners
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = FNAME.value;
  const lastname = LNAME.value;
  const householdMembers = parseInt(FORM.housem.value, 10);
  const houseSize = FORM.house.value;
  const dishwasher = FORM.dishwasher.value;
  const washingMachine = FORM.washingMachine.value;

  if (firstname && lastname && householdMembers && houseSize) {
    start(firstname, lastname, householdMembers, houseSize, dishwasher, washingMachine);
    FORM.reset();
  } else {
    SUBMIT.textContent = "All fields must be filled.";
  }
});

// Initial rendering from localStorage data (if available)
window.addEventListener("load", () => {
  renderTbl(cfpData);
});
