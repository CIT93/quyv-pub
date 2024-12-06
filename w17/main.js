import { renderTbl } from "./render.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

// Utility functions
const parseWasteProduction = (value) => {
  switch (value) {
    case "none": return 0;
    case "minimal": return 5;
    case "average": return 10;
    case "high": return 15;
    default: return 0;
  }
};

const calculateRecyclingPoints = (selectedTypes) => {
  const basePoints = 24;
  const deductionPerType = 4;
  return basePoints - selectedTypes.length * deductionPerType;
};

const calculateTransportPoints = (personal, publicTrans, flights) => {
  const transportValues = {
    personal: { high: 50, medium: 30, low: 10, none: 0 },
    public: { high: 20, medium: 10, low: 5, none: 0 },
    flights: { frequent: 100, occasional: 50, rare: 20, none: 0 },
  };

  return (
    transportValues.personal[personal] +
    transportValues.public[publicTrans] +
    transportValues.flights[flights]
  );
};

// Start function
const start = (wasteLevel, recyclingTypes, personal, publicTrans, flights) => {
  const wastePoints = parseWasteProduction(wasteLevel);
  const recyclingPoints = calculateRecyclingPoints(recyclingTypes);
  const transportPoints = calculateTransportPoints(personal, publicTrans, flights);
  const totalPoints = wastePoints + recyclingPoints + transportPoints;

  cfpData.push({
    wasteLevel,
    recyclingTypes,
    personal,
    publicTrans,
    flights,
    wastePoints,
    recyclingPoints,
    transportPoints,
    totalPoints,
  });

  saveLS(cfpData);
  renderTbl(cfpData);
};

// Event listener for form submission
FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  const wasteLevel = FORM.waste.value;
  const recyclingInputs = document.querySelectorAll('input[name="recycling"]:checked');
  const recyclingTypes = Array.from(recyclingInputs).map((input) => input.value);
  const personal = FORM.personal.value;
  const publicTrans = FORM.public.value;
  const flights = FORM.flights.value;

  if (wasteLevel && personal && publicTrans && flights) {
    start(wasteLevel, recyclingTypes, personal, publicTrans, flights);
    FORM.reset();
  } else {
    alert("Please fill out all required fields.");
  }
});

// Initial rendering
window.addEventListener("load", () => {
  renderTbl(cfpData);
});
