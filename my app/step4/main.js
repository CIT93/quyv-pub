const petForm = document.getElementById('petForm');

// Custom validation function for feeding interval
const validateFeedingInterval = (interval) => {
    if (interval <= 0 || interval > 24) {
        alert("Feeding interval must be between 1 and 24 hours.");
        return false;
    }
    return true;
};

// Function to calculate next feeding time
const calculateNextFeedingTime = (interval) => {
    const now = new Date();
    now.setHours(now.getHours() + interval);
    return now.toLocaleString();
};

// Function to determine if it's time to feed the pet
const checkFeedingDecision = (feedingInterval) => {
    return feedingInterval < 4 ? "Feed Soon" : "No feeding needed yet";
};

// Function to display data
const displayFormData = (petName, feedingInterval, nextFeedingTime, decision) => {
    const outputDiv = document.getElementById('formDataOutput');
    outputDiv.innerHTML = `
        <strong>Pet Name:</strong> ${petName} <br>
        <strong>Feeding Interval:</strong> ${feedingInterval} hours <br>
        <strong>Next Feeding Time:</strong> ${nextFeedingTime} <br>
        <strong>Decision:</strong> ${decision}
    `;
    
    // Append data to the table
    const tableBody = document.getElementById('dataTable').querySelector('tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${petName}</td>
        <td>${feedingInterval}</td>
        <td>${nextFeedingTime}</td>
        <td>${decision}</td>
    `;
    tableBody.appendChild(row);
};

// Event listener for form submission
petForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Access form values
    const petName = petForm.elements['petName'].value;
    const feedingInterval = Number(petForm.elements['feedingInterval'].value);

    // Custom validation
    if (!validateFeedingInterval(feedingInterval)) return;

    // Calculate next feeding time
    const nextFeedingTime = calculateNextFeedingTime(feedingInterval);

    // Determine feeding decision
    const decision = checkFeedingDecision(feedingInterval);

    // Display data
    displayFormData(petName, feedingInterval, nextFeedingTime, decision);

    // Reset form after successful submission
    petForm.reset();
});
