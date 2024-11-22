import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

// Function to calculate the average footprint score
function calculateAverageFootprintScore(data) {
    if (data.length === 0) return 0; // Prevent division by zero
    const total = data.reduce((sum, item) => sum + item.cfpTotal, 0);
    return (total / data.length).toFixed(2); // Round to 2 decimal places
}

// Function to render the table with the average
function renderTableWithAverage(data) {
    // Call existing renderTbl function
    renderTbl(data);

    // Calculate the average
    const average = calculateAverageFootprintScore(data);

    // Add the average to the table
    const table = document.getElementById("output-table"); // Ensure your table has this ID
    const row = table.insertRow(-1); // Add a new row at the end

    // Create the cells
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.colSpan = 2; // Merge the first two cells
    cell1.textContent = "Average Footprint Score:";
    cell2.textContent = average;
    cell3.textContent = ""; // Leave the last cell empty for better formatting
}

// Updated start function to include dynamic table updates
const start = (firstname, lastname, householdMembers, houseSize) => {
    const houseHoldPTS = determineHouseHoldPts(householdMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;

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

    // Re-render the table with the average
    renderTableWithAverage(cfpData);
};

// Event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

// Initial rendering from localStorage data (if available)
window.addEventListener("load", () => {
    renderTableWithAverage(cfpData); // Use the updated function
});

// Async example (unchanged)
async function fetchMockData() {
    console.log("Fetching mock data...");
    try {
        const response = await new Promise((resolve) =>
            setTimeout(() => resolve({ data: "Mock data from API" }), 2000)
        );
        console.log("Data fetched:", response.data);
        displayAsyncData(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayAsyncData(data) {
    const resultsDiv = document.getElementById("results");
    const paragraph = document.createElement("p");
    paragraph.textContent = `Fetched Data: ${data}`;
    resultsDiv.appendChild(paragraph);
}

fetchMockData();
