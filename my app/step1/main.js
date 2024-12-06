// Input Variables 
let feedCount = 2; // Number: Tracks how many times you fed your fur baby today
const petName = "Buddy"; // String: Holds the name of your fur baby
const feedingInterval = 4; // Hours between feedings
const maxFeedsPerDay = 3; // Max feeds allowed per day
const lastFeedingTime = new Date('2024-10-10T08:00:00'); // Last feeding time (example: 8:00 AM)
const currentTime = new Date(); // Current time

// Time difference in hours between current time and last feeding
const timeDifference = (currentTime - lastFeedingTime) / (1000 * 60 * 60); // Convert time to hours

// Decision-making process
// Case 1: It's time to feed
if (timeDifference >= feedingInterval && feedCount < maxFeedsPerDay) {
    feedCount++; // Increment feed count
    console.log(`It's time to feed ${petName}. Feed count: ${feedCount}`);
} 
// Case 2: Feeding limit reached
else if (feedCount >= maxFeedsPerDay) {
    console.log(`Warning: ${petName} has reached the daily feeding limit. No more feedings today.`);
} 
// Case 3: Not time to feed yet
else {
    console.log(`It's not time to feed ${petName} yet. Please wait ${feedingInterval - timeDifference.toFixed(1)} more hours.`);
}
