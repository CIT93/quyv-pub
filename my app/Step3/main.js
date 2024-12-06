// Function to handle form submission
const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Collect values from the form inputs
    const petName = document.getElementById('petName').value;
    const feedingInterval = document.getElementById('feedingInterval').value;

    // Basic validation using JavaScript (HTML validation already in place)
    if (!petName.trim()) {
        alert('Pet name is required.');
        return;
    }
    if (feedingInterval <= 0) {
        alert('Feeding interval must be greater than 0.');
        return;
    }

    // Display the collected data
    displayFormData(petName, feedingInterval);
};

// Function to display the form data on the page
const displayFormData = (petName, feedingInterval) => {
    const outputDiv = document.getElementById('formDataOutput');
    outputDiv.innerHTML = `Pet Name: ${petName}<br>Feeding Interval: ${feedingInterval} hours`;

    // You can also log the data to the console for debugging purposes
    console.log(`Pet Name: ${petName}, Feeding Interval: ${feedingInterval} hours`);
};

// Attach the event listener to the form
const petForm = document.getElementById('petForm');
petForm.addEventListener('submit', handleFormSubmit);
