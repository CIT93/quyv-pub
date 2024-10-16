// Function to save data to local storage
const saveLS = function(cfpData) {
  const serializedArr = JSON.stringify(cfpData);
  localStorage.setItem("cfp", serializedArr); // Store under key "cfp"
};

// Function to get data from local storage
const getLS = function() {
  const retrievedArr = localStorage.getItem("cfp");
  if (retrievedArr !== null) {
      return JSON.parse(retrievedArr); // Parse stored JSON data back to JavaScript object
  } else {
      return []; // Return an empty array if nothing is found in local storage
  }
};

// Initialize cfpData from local storage or empty array
const cfpData = getLS();

export { cfpData, saveLS, getLS };
