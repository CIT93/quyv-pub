// Function to determine points based on house size
const determineHouseSizePts=function(size) {
    
    let houseSizePoints = 0;
    if (size === "large") {
      houseSizePoints = 10;
    } else if (size === "medium") {
      houseSizePoints = 7;
    } else if (size === "small") {
      houseSizePoints = 4;
    } else if (size === "apt") {
      houseSizePoints = 2;
    }
    console.log(`Based on the size ${size}, the points are ${houseSizePoints}.`);
    return houseSizePoints;
  }
  
  // Function to determine points based on number of household members
  const determineHouseHoldPts=function(numberInhousehold) {
    let houseHoldPoints = 0;
    if (numberInhousehold === 1) {
      houseHoldPoints = 14;
    } else if (numberInhousehold === 2) {
      houseHoldPoints = 12;
    } else if (numberInhousehold === 3) {
      houseHoldPoints = 10;
    } else if (numberInhousehold === 4) {
      houseHoldPoints = 8;
    } else if (numberInhousehold === 5) {
      houseHoldPoints = 6;
    } else if (numberInhousehold === 6) {
      houseHoldPoints = 4;
    } else if (numberInhousehold > 6) {
      houseHoldPoints = 2;
    }
    console.log(
      `Based on the household size ${numberInhousehold}, the points are ${houseHoldPoints}.`
    );
    return houseHoldPoints;
  }

  export {determineHouseHoldPts,determineHouseSizePts}