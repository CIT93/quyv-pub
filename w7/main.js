import { renderTbl } from "./render.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = []; // Array to hold household data objects

// Function to determine points based on house size
function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  console.log(`Based on the size ${size}, the points are ${houseSizePoints}.`);
  return houseSizePoints;
}

// Function to determine points based on number of household members
function determineHouseHoldPts(numberInhousehold) {
  let houseHoldPoints = 0;
  if (numberInhousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInhousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInhousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInhousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInhousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInhousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInhousehold > 6) {
    houseHoldPoints = 2;
  }
  console.log(
    `Based on the household size ${numberInhousehold}, the points are ${houseHoldPoints}.`
  );
  return houseHoldPoints;
}

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
FORM.addEventListener('submit', function (e) {
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


fetch('/w7/render.js')
  .then(response => response.text())
  .then(data => {
    // Process the data from render.js
  })
  .catch(error => {
    console.error('Error loading render.js:', error);
  });

  const script = document.createElement('script');
script.src = 'render.js';
document.head.appendChild(script);