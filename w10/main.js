import { renderTbl } from './render.js';
import { determineHouseHoldPts, determineHouseSizePts } from './cfp.js';
import { FORM, FNAME, LNAME, SUBMIT } from './global.js';
import { saveLS, cfpData } from './storage.js';

// Render the table with existing data if any
renderTbl(cfpData); // Render data on page load

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

  // Save the updated array to local storage
  saveLS(cfpData);
}

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

// Initial rendering from localStorage data (if available)
window.addEventListener('load', () => {
  renderTbl(cfpData); // Render the table on page load with the saved data
});
