class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.foodChoice = foodChoice; // New input for food option
        this.houseHoldPoints();
        this.houseSizePoints();
        this.total();
    }

    // Method to calculate household points based on the number of household members
    calculateHouseHoldPoints() {
        return this.houseMembers * 5; // Simple calculation, adjust as needed
    }

    // Method to calculate household points based on specific conditions
    calculateHouseHoldPointsBasedOnSize() {
        let houseHoldPoints;

        if (this.houseMembers === 1) {
            houseHoldPoints = 14;
        } else if (this.houseMembers === 2) {
            houseHoldPoints = 12;
        } else if (this.houseMembers === 3) {
            houseHoldPoints = 10;
        } else if (this.houseMembers === 4) {
            houseHoldPoints = 8;
        } else if (this.houseMembers === 5) {
            houseHoldPoints = 6;
        } else if (this.houseMembers === 6) {
            houseHoldPoints = 4;
        } else if (this.houseMembers > 6) {
            houseHoldPoints = 2;
        }

        return houseHoldPoints;
    }

    // Method to calculate house size points based on size
    calculateHouseSizePoints() {
        let houseSizePoints;

        if (this.houseSize === "large") {
            houseSizePoints = 10;
        } else if (this.houseSize === "medium") {
            houseSizePoints = 7;
        } else if (this.houseSize === "small") {
            houseSizePoints = 4;
        } else if (this.houseSize === "apt") {
            houseSizePoints = 2;
        } else {
            houseSizePoints = 0; // Defult case if none of the size match
        }

        return houseSizePoints;
    }

    // Method to calculate food choice points based on options
    foodChoicePoints() {
        if (this.foodChoice === "Meat on a daily basis") {
            return 10;
        } else if (this.foodChoice === "Meat a few time per week") {
            return 8;
        } else if (this.foodChoice === "Only locally grown food") {
            return 2;
        } else {
            return 0; 
        }
    }
    
    total() {
        this.total = this.calculateHouseHoldPointsBasedOnSize() + 
                     this.calculateHouseSizePoints() + 
                     this.foodChoicePoints();
    }
}

export { FP };
