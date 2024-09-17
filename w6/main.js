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

// Function to display the output for all objects in cfpData array
function displayOutput() {
  for (let obj of cfpData) {
    console.log(obj); // Log the object for debugging

    // Create and append the H2 element for total score
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint Total: ${obj.cfpTotal}`;

    // Create and append the H3 element for additional information
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on household size and home size`;

    // Create and append the P element for names and details
    const newP = document.createElement("p");
    newP.textContent = `This footprint is calculated for ${obj.firstname} ${obj.lastname}, `;
    newP.textContent += `who lives in a household with ${obj.houseM} members (score: ${obj.houseMPTS}), `;
    newP.textContent += `and a ${obj.houseS} size of home (score: ${obj.houseSPTS}).`;

    // Append the elements to the output div
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
  }
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

  // Call the start function with the correct parameters
  start(householdMembers, houseSize);

  // Clear the output area before displaying the updated results
  OUTPUT.innerHTML = "";

  // Display the output
  displayOutput();

  // Reset the form
  FORM.reset();
});
