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
  console.log(`Based on the household size ${numberInhousehold}, the points are ${houseHoldPoints}.`);
  return houseHoldPoints;
}

// Function to add data to cfpData array and calculate total points
function start(householdMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(householdMembers); // Get household points
  const houseSizePTS = determineHouseSizePts(houseSize);        // Get house size points
  const total = houseHoldPTS + houseSizePTS;                    // Calculate total points

  // Add an object to cfpData array
  cfpData.push({
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
    const output = document.getElementById("output");
    
    // Create and append the H2 element for total score
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint Total: ${obj.cfpTotal}`;
    
    // Create and append the H3 element for additional information
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on household size and home size`;
    
    // Create and append the P element for details
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house (${obj.houseM} members, score: ${obj.houseMPTS}) `;
    newP.textContent += `and a ${obj.houseS} size of home (score: ${obj.houseSPTS}).`;

    // Append the elements to the output div
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
  }
}

// Start adding data to the array
start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");
start(1, "apt");

// Display the output on the webpage
displayOutput();
