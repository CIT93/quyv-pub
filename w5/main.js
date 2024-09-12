// const cfpData = [];

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


function displayOutObj(obj){
  console.log(obj);
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent= `Cardon Footprint ${obj.cfpTotal}`
 // output.appendChild(newH2);
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseSizePts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total
  });

}

const householdData = {
  houseHoldMembers: 4,    // Value for number of household members
  houseSize: "medium",    // Value for size of the house (small, medium, large)
  houseHoldPTS: 10,       //  Value for household points
  houseSizePTS: 7         //  Value for house size points
};
console.log(householdData.houseHoldMembers); // Outputs: 4
householdData.houseHoldPTS = 12; // Updates the houseHoldPTS to 12



 function displayOutput(){
   for (obj of cfpData){
    console.log(obj)
   const output = document.getElementById("output");
   const newH2 = document.createElement("h2");
   newH2.textContent = `Cardon Footprint ${obj.cfpTotal}`;
  //  const newH3 = document.createElement("h3");
  //  newH3.textContent = `Based on number in size of home`
  //  const newP = document.createElement("p");
  //  newP.textContent = `This number is based on the number of people `
  //  newP.textContent += ` and a ${arr[1]} size of home (score:${arr[2]})`
    output.appendChild(newH2);
  //  output.appendChild(newH3);
  //  output.appendChild(newP);
     }
}

start(5, "apt");
start(4, "large");
start(3, "meduim");
start(2, "small");
start(1, "apt");

displayOutput()



