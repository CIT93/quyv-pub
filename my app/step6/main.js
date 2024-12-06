import { petForm, petData } from './global.js';
import { renderTable, saveToLocalStorage } from './tableRenderer.js';

// Form submission event listener
petForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const petName = petForm.elements['petName'].value;
    const feedingInterval = Number(petForm.elements['feedingInterval'].value);

    // Validate input
    if (!validateFeedingInterval(feedingInterval)) return;

    // Calculate feeding details
    const nextFeedingTime = calculateNextFeedingTime(feedingInterval);
    const decision = checkFeedingDecision(feedingInterval);

    // Add new entry to petData array
    petData.push({ petName, feedingInterval, nextFeedingTime, decision });

    // Save to local storage and re-render the table
    saveToLocalStorage(petData);
    renderTable();

    // Reset form
    petForm.reset();
});

// Validate feeding interval
function validateFeedingInterval(interval) {
    if (interval <= 0 || interval > 24) {
        alert("Feeding interval must be between 1 and 24 hours.");
        return false;
    }
    return true;
}

// Calculate next feeding time
function calculateNextFeedingTime(interval) {
    const now = new Date();
    now.setHours(now.getHours() + interval);
    return now.toLocaleString();
}

// Determine feeding decision
function checkFeedingDecision(interval) {
    return interval < 4 ? "Feed Soon" : "No feeding needed yet";
}
