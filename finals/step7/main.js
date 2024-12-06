import { petForm, petData } from './global.js';
import { renderTable, saveToLocalStorage } from './tableRenderer.js';
import DecisionMaker from './decisionMaker.js';

const decisionMaker = new DecisionMaker();

petForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const petName = petForm.elements['petName'].value;
    const feedingInterval = Number(petForm.elements['feedingInterval'].value);

    // Use DecisionMaker class methods for logic
    if (!decisionMaker.validateFeedingInterval(feedingInterval)) return;

    const nextFeedingTime = decisionMaker.calculateNextFeedingTime(feedingInterval);
    const decision = decisionMaker.checkFeedingDecision(feedingInterval);

    petData.push({ petName, feedingInterval, nextFeedingTime, decision });

    saveToLocalStorage(petData);
    renderTable();

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
