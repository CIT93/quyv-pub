import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js"; // Import the FP class

// Function to add data to cfpData array and calculate total points
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
};

// Function to validate individual form fields
const validateField = (event) => {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById("submitError");

    if (field === "") {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add("invalid");
    } else {
        fieldError.textContent = "";
        event.target.classList.remove("invalid");
    }
};

// Function to handle form submission
const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get form values
    const firstname = FNAME.value;
    const lastname = LNAME.value;
    const householdMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.house.value;

    // Ensure both first name and last name are filled
    if (firstname && lastname) {
        // start(firstname, lastname, householdMembers, houseSize);
        const fpObj = new FP(firstname, lastname, householdMembers, houseSize);
        const householdPoints = fpObj.calculateHouseHoldPoints(); // Call the method to calculate points
        console.log(`Household points: ${householdPoints}`); // Log the calculated points
        // fpObj.houseHoldPTS();
        // fpObj.houseSizePoints();
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
        SUBMIT.textContent = "";
    } else {
        SUBMIT.textContent = "Form requires first name and last name.";
    }
};

// Class definition
class Human {
    constructor(name, hairColor, location, sleepScore) {
        this.name = name;
        this.hairColor = hairColor;
        this.location = location;
        this.sleepScore = sleepScore;
    }

    introduce() {
        console.log(`This is ${this.name} with ${this.hairColor} hair. They are in ${this.location} right now and have a sleep score of ${this.sleepScore}.`);
    }
}

// Instances of the Human class
const Quy = new Human("Quy", "black", "office", 95);
const Myles = new Human("Myles", "Brown", "home", 55);

// Calling the introduce method for each instance
Quy.introduce();
Myles.introduce();

// Displaying the information on the webpage
const displayIntroduction = (human) => {
    const resultsDiv = document.getElementById('results');
    const paragraph = document.createElement('p');
    paragraph.textContent = `This is ${human.name} with ${human.hairColor} hair. They are in ${human.location} right now and have a sleep score of ${human.sleepScore}.`;
    resultsDiv.appendChild(paragraph);
};

// Call displayIntroduction for each instance
displayIntroduction(Quy);
displayIntroduction(Myles);

// Attach event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);
FORM.addEventListener("submit", handleFormSubmit);

// Initial rendering from localStorage data (if available)
window.addEventListener("load", () => {
    renderTbl(cfpData);
});
