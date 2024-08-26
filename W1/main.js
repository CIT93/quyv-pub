console.log("hello from inside the main.js file")

//let myVar;

const myVar = "Quy";
const myVarType = typeof(myVar);
console.log("myVarType" + myVarType);
console.log(`myVarType ${myVarType}`);



function runNow () {
    if(myVarType=== "number") {
        console.log(`will 1 this one run?`)
    } else {
        console.log(`will 2 this one run?`)
    }
}

runNow() 
runNow()

