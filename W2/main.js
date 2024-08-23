// How to Calulate Your Carb Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1

// 1. Count the members of your household.
const myHouseMembers = 6;
// 2. Consider the size of your home
const myHomeSize = 7;
// 3. Evaluate your food choices
const myFoodathome = 8;
// 4. Examine your water comsumption
const runningWater = 3;
// 5. How many household purchases you make each year.
const newHomeItems =8;
// 6. how much waste do you produce 
const homeWaste = 40;
// 7. amount of waste that you recycle 
const homeRecycle = 18;
// 8. annual transportation score.
const transportation = 28;
// 9. Add all points
const totalPoints = document.querySelector("h2"); // variable to hold total points to output to html 
totalPoints.textContent = myHouseMembers + myHomeSize + myFoodathome + runningWater + newHomeItems + homeWaste + homeRecycle + transportation; // all variables added up and outputed to html

