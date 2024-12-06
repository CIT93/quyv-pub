// main.js
import { petForm } from './global.js';

// Event listener for form submission
petForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Collect form values
    const petName = petForm.elements['petName'].value;
    const feedingInterval = Number(petForm.elements['feedingInterval'].value);

    // Validate feeding interval
    if (!validateFeedingInterval(feedingInterval)) return;

    // Calculate next feeding time
    const nextFeedingTime = calculateNextFeedingTime(feedingInterval);

    // Determine feeding decision
    const decision = checkFeedingDecision(feedingInterval);

    // Display data in the output div
    displayFormData(petName, feedingInterval, nextFeedingTime, decision);

    // Reset form
    petForm.reset();
});

// Custom validation function for feeding interval
function validateFeedingInterval(interval) {
    if (interval <= 0 || interval > 24) {
        alert("Feeding interval must be between 1 and 24 hours.");
        return false;
    }
    return true;
}

// Function to calculate next feeding time
function calculateNextFeedingTime(interval) {
    const now = new Date();
    now.setHours(now.getHours() + interval);
    return now.toLocaleString();
}

// Function to determine feeding decision
function checkFeedingDecision(interval) {
    return interval < 4 ? "Feed Soon" : "No feeding needed yet";
}

function displayFormData(petName, feedingInterval, nextFeedingTime, decision) {
    const tableBody = document.getElementById('dataTable').querySelector('tbody');

    // Ensure tableBody exists
    if (!tableBody) {
        console.error("Table body element not found");
        return;
    }

    // Create a new table row
    const row = document.createElement('tr');

    // Create cells for each data point and append to the row
    const nameCell = document.createElement('td');
    nameCell.textContent = petName;
    row.appendChild(nameCell);

    const intervalCell = document.createElement('td');
    intervalCell.textContent = `${feedingInterval} hours`;
    row.appendChild(intervalCell);

    const timeCell = document.createElement('td');
    timeCell.textContent = nextFeedingTime;
    row.appendChild(timeCell);

    const decisionCell = document.createElement('td');
    decisionCell.textContent = decision;
    row.appendChild(decisionCell);

    // Append the row to the table body
    tableBody.appendChild(row);
}

