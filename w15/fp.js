class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.foodChoice = foodChoice;
        this.houseHoldPoints = this.calculateHouseHoldPointsBasedOnSize();
        this.houseSizePoints = this.calculateHouseSizePoints();
        this.foodChoicePoints = this.calculateFoodFootprint();
        this.totalPoints = this.calculateTotalFootprint();
    }

    calculateHouseHoldPointsBasedOnSize() {
        if (this.houseMembers === 1) return 14;
        else if (this.houseMembers === 2) return 12;
        else if (this.houseMembers === 3) return 10;
        else if (this.houseMembers === 4) return 8;
        else if (this.houseMembers === 5) return 6;
        else if (this.houseMembers === 6) return 4;
        else return 2; // For more than 6 members
    }

    calculateHouseSizePoints() {
        if (this.houseSize === "large") return 10;
        else if (this.houseSize === "medium") return 7;
        else if (this.houseSize === "small") return 4;
        else if (this.houseSize === "apt") return 2;
        else return 0;
    }

    calculateFoodFootprint() {
        switch (this.foodChoice) {
            case "Domestic meat on a daily basis": return 10;
            case "Domestic meat a few times per week": return 8;
            case "Vegetarian": return 4;
            case "Vegan or only wild meat": return 2;
            case "Mostly prepackaged convenience food": return 12;
            case "A balance of fresh and convenience food": return 6;
            case "Only fresh, locally grown, or hunted food": return 2;
            default: return 0;
        }
    }

    calculateTotalFootprint() {
        return this.houseHoldPoints + this.houseSizePoints + this.foodChoicePoints;
    }
}

export { FP };
