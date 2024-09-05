const cfpData = [];

function determineHouseSizePts(size) {
  console.log("inside block scope");
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "meduim") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  console.log(`Base on the size ${size} the points would be ${houseSizePTS}.`);
  return houseSizePoints;
}

function determineHouseSizePts(numberInhousehold) {
  console.log("inside the function");
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
 return houseHoldPoints;
}

console.log("global scope");

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseSizePts(houseHoldMembers[0]);
  const houseSizePTS = determineHouseSizePts(houseSize[1]);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}

function displayOutput(){
  
}

start(5, "apt");
start(4, "large");
start(3, "meduim");
start(2, "small");
start(1, "apt");

displayOutput()

console.log("Top of file");

function determineHouseSizePts(size) {
  console.log("Inside block scope");

  const sizePoints = {
    large: 10,
    medium: 7,
    small: 4,
    apt: 2,
  };

  if (sizePoints[size] !== undefined) {
  } else {
    console.log("Invalid size provided");
  }
}


