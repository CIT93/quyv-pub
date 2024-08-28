function determineHouseHoldPoints(numberInhousehold) {
  console.log("Inside the fuction");
  if (numberInhousehold === 1) {
    cardonFootprintPoints = cardonFootprintPoints + 14;
  } else if (numberInhousehold === 2) {
    cardonFootprintPoints = cardonFootprintPoints + 12;
  } else if (numberInhousehold === 3) {
    cardonFootprintPoints = cardonFootprintPoints + 10;
  } else if (numberInhousehold === 4) {
    cardonFootprintPoints = cardonFootprintPoints + 8;
  } else if (numberInhousehold === 5) {
    cardonFootprintPoints = cardonFootprintPoints + 6;
  } else if (numberInhousehold === 6) {
    cardonFootprintPoints = cardonFootprintPoints + 4;
  } else if (numberInhousehold > 6) {
    cardonFootprintPoints = cardonFootprintPoints + 2;
  }

  console.log(
    `Base on the number of member of the household of ${numberInhousehold} the points would be ${cardonFootprintPoints}.`
  );
}

let cardonFootprintPoints = 0;
const numberInhousehold = 3;

determineHouseHoldPoints(3);
determineHouseHoldPoints(4);

let (numberInhousehold = 3);
let carbonFootprintPoints = 0;

if (numberInhousehold === 1) {
    carbonFootprintPoints += 14;
} else if (numberInhousehold === 2) {
    carbonFootprintPoints += 12;
} else if (numberInhousehold === 3) {
    carbonFootprintPoints += 10;
} else if (numberInhousehold === 4) {
    carbonFootprintPoints += 8;
} else if (numberInhousehold === 5) {
    carbonFootprintPoints += 6;
} else if (numberInhousehold === 6) {
    carbonFootprintPoints += 4;
} else if (numberInhousehold > 6) {
    carbonFootprintPoints += 2;
}

console.log("Total Carbon Footprint Points: " + carbonFootprintPoints);


