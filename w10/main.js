import { renderTbl } from './render.js';
import { determineHouseHoldPts, determineHouseSizePts } from './cfp.js';
import { FORM, FNAME, LNAME, SUBMIT } from './global.js';
import { saveLS, cfpData } from './storage.js';

// Function to add data to cfpData array and calculate total points
const start = (firstname, lastname, householdMembers, houseSize) => {
  const houseHoldPTS = determineHouseHoldPts(householdMembers); // Get household points
  const houseSizePTS = determineHouseSizePts(houseSize); // Get house size points
  const total = houseHoldPTS + houseSizePTS; // Calculate total points

  // Add an object to cfpData array
  cfpData.push({
    firstname,
    lastname,
    houseM: householdMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });

  // Save the updated array to local storage
  saveLS(cfpData);
}

// Function to validate individual form fields
const validateField = (event) => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById("submitError");

  if (field === '') {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add('invalid');
  } else {
    fieldError.textContent = '';
    event.target.classList.remove('invalid');
  }
};

// Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();

  // Get form values
  const firstname = FNAME.value;
  const lastname = LNAME.value;
  const householdMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.house.value;

  // Ensure both first name and last name are filled
  if (firstname && lastname) {
    start(firstname, lastname, householdMembers, houseSize);
    renderTbl(cfpData);
    FORM.reset();
    SUBMIT.textContent = '';
  } else {
    SUBMIT.textContent = "Form requires first name and last name.";
  }
};

// Attach event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);
FORM.addEventListener('submit', handleFormSubmit);

// Initial rendering from localStorage data (if available)
window.addEventListener('load', () => {
  renderTbl(cfpData);
});

// Example using arrow function
const add2 = (a) => 2 + a;
const result = add2(100);
console.log(result); // Logs 102

// Example using Immediately Invoked Function Expression (IIFE)
const a = 3;
((a) => {
  console.log(a);
})(a);

(() => {
  console.log("inside the IIFE");
})();
