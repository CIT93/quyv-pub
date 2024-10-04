import { renderTbl } from './render.js';
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = []; // Array to hold household data objects

// ... your existing code ...

// Assuming you have populated cfpData with data
// Example: cfpData.push({ name: 'John Doe', ... });

// Now you can safely use renderTbl
renderTbl(cfpData); 

// Function to add data to cfpData array and calculate total points
// ...


// Function to add data to cfpData array and calculate total points
function start(firstname, lastname, householdMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(householdMembers); // Get household points
  const houseSizePTS = determineHouseSizePts(houseSize); // Get house size points
  const total = houseHoldPTS + houseSizePTS; // Calculate total points

  // Add an object to cfpData array, including firstname and lastname
  cfpData.push({
    firstname: firstname,
    lastname: lastname,
    houseM: householdMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

// Event listener for form submission
FORM.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the form values
  const firstname = FORM.firstname.value;
  const lastname = FORM.lastname.value;
  const householdMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.house.value;

  // Validate that the values exist
  if (!firstname || !lastname || !householdMembers || !houseSize) {
    console.error("All fields are required.");
    return;
  }

  // Call the start function with the correct parameters, including firstname and lastname
  start(firstname, lastname, householdMembers, houseSize);

  // Clear the output area before displaying the updated results
  OUTPUT.innerHTML = "";

  // Display the output
  // displayOutput();
  renderTbl(cfpData);
  // Reset the form
  FORM.reset();
});

fetch("/w8/render.js")
  .then((response) => response.text())
  .then((data) => {
    // Process the data from render.js
  })
  .catch((error) => {
    console.error("Error loading render.js:", error);
  });

const script = document.createElement("script");
script.src = "render.js";
document.head.appendChild(script);
