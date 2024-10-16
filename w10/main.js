import { renderTbl } from './render.js';
import { determineHouseHoldPts, determineHouseSizePts } from './cfp.js';
import { FORM, FNAME, LNAME, SUBMIT } from './global.js';
import { saveLS, cfpData } from './storage.js';

// Render the table with existing data if any
renderTbl(cfpData);

// Function to add data to cfpData array and calculate total points
const start = function (firstname, lastname, householdMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(householdMembers); // Get household points
  const houseSizePTS = determineHouseSizePts(houseSize); // Get house size points
  const total = houseHoldPTS + houseSizePTS; // Calculate total points

  // Add an object to cfpData array
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

// Function to validate form fields
const validateField = function(event) {
  const field = event.target.value;
  const fieldId = event.target.id;

  if (field === '') {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add('invalid');
  } else {
    fieldError.textContent = '';
    event.target.classList.remove('invalid');
  }
}

// Attach blur event listeners for field validation
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

// Event listener for form submission
FORM.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the form values
  const firstname = FNAME.value;
  const lastname = LNAME.value;
  const householdMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.house.value;

  // Ensure both first name and last name are filled
  if (firstname !== '' && lastname !== '') {
    // Call the start function with the form data
    start(firstname, lastname, householdMembers, houseSize);

    // Save updated data to local storage
    saveLS(cfpData);

    // Re-render the table with the new data
    renderTbl(cfpData);

    // Reset the form and clear any error messages
    FORM.reset();
    SUBMIT.textContent = '';
  } else {
    // Provide feedback if form is incomplete
    SUBMIT.textContent = "Form requires first name and last name.";
  }
});

// Function using the spread argument
const add2 = function(...a) {
  return 2 + a[3]; // Access the 4th element in the array passed as an argument
}

const result = add2(1, 2, 3, 4); // Example usage of add2 function
console.log(result); // Logs 6, as it adds 2 to the 4th argument (4)

// Immediately Invoked Function Expression (IIFE)
const a = 3;

(function(a) {
  console.log("inside IIFE");
  console.log(a);
})(a); // This will log "inside IIFE" and 3
