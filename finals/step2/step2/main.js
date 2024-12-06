// Function to calculate the time difference in hours between current time and last feeding
const calculateTimeDifference = (lastFeedingTime) => {
    const currentTime = new Date(); // Capture the current time
    return (currentTime - lastFeedingTime) / (1000 * 60 * 60); // Convert milliseconds to hours
};

// Function to check if it's time to feed based on pet data and feeding settings
const checkFeedingTime = (pet) => {
    const timeDifference = calculateTimeDifference(pet.lastFeedingTime);

    if (timeDifference >= pet.feedingInterval && pet.feedCount < pet.maxFeedsPerDay) {
        pet.feedCount++; // Increment feed count
        return `It's time to feed ${pet.petName}. Feed count: ${pet.feedCount}`;
    } else if (pet.feedCount >= pet.maxFeedsPerDay) {
        return `Warning: ${pet.petName} has reached the daily feeding limit. No more feedings today.`;
    } else {
        const timeLeft = pet.feedingInterval - timeDifference;
        return `It's not time to feed ${pet.petName} yet. Please wait ${timeLeft.toFixed(1)} more hours.`;
    }
};

// Function to display the result on the page
const displayDecision = (message) => {
    const resultDiv = document.getElementById('results'); // Ensure this element exists in your HTML
    const p = document.createElement('p');
    p.textContent = message;
    resultDiv.appendChild(p);
};

// Test the functions with different inputs
const petData1 = {
    petName: "Buddy",
    feedCount: 1,
    feedingInterval: 4,
    maxFeedsPerDay: 3,
    lastFeedingTime: new Date('2024-10-16T08:00:00')
};

const petData2 = {
    petName: "Max",
    feedCount: 3,
    feedingInterval: 5,
    maxFeedsPerDay: 3,
    lastFeedingTime: new Date('2024-10-16T06:00:00')
};

const petData3 = {
    petName: "Bella",
    feedCount: 0,
    feedingInterval: 6,
    maxFeedsPerDay: 2,
    lastFeedingTime: new Date('2024-10-16T07:00:00')
};

// Call the function with different inputs and display the results
displayDecision(checkFeedingTime(petData1));
displayDecision(checkFeedingTime(petData2));
displayDecision(checkFeedingTime(petData3));
