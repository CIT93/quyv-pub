import { petForm, petData } from './global.js';
import { renderTable, saveToLocalStorage } from './tableRenderer.js';
import DecisionMaker from './decisionMaker.js';

const decisionMaker = new DecisionMaker();

// Render table on page load
renderTable();

// Form submission event listener
petForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const petName = petForm.elements['petName'].value;
    const feedingInterval = Number(petForm.elements['feedingInterval'].value);

    if (!decisionMaker.validateFeedingInterval(feedingInterval)) return;

    const nextFeedingTime = decisionMaker.calculateNextFeedingTime(feedingInterval);
    const decision = decisionMaker.checkFeedingDecision(feedingInterval);

    petData.push({ petName, feedingInterval, nextFeedingTime, decision });
    saveToLocalStorage(petData);
    renderTable();

    petForm.reset();
});

// Filter functionality
document.getElementById('filterButton').addEventListener('click', () => {
    const filterValue = document.getElementById('filterInput').value;
    const filteredData = decisionMaker.filterByDecision(petData, filterValue);
    renderTable(filteredData);
});
