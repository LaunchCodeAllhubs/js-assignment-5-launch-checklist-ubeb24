// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}
// STEP #1: Valid information for the fields means that the user submits a value that is easily converted to the correct data type for our 
//fellow engineers. The pilot and co-pilot names should be strings and the fuel level and cargo mass should be numbers. 
//To do this, complete the helper function in your scriptHelper.js called validateInput(). 
//validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate. 
//In scriptHelper.js, you will use validateInput() to complete the formSubmission() function. 
function validateInput(testInput) {
    let testInput = Number(testInput)
    if (testInput === Number) {
        return("Is a Number")
    } else if (isNaN(testInput)) {
        return("Not a Number")
    } else if (testInput === '') {
        return("Empty")
    }
}
// formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass.
// Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements as described below. 
//Make sure to call your formSubmission() function at the appropriate time in your script.js file!

//document parameter is the form. we will be putting in the form in which was coded in the index where we ask the user to input info
//the values will come from the form submission.
// I am confused on the role of this function, is it just supposed to pass the values in? Or somehow turn on the faulty items list?

//FORM SUBMISSION DRAFTS
        //  if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput === "" || cargoMassInput === "") {
        //     alert("All fields are required!");   
        //     ((!String(pilotNameInput))||(!String(copilotNameInput))(!Number(fuelLevelInput))||(!Number(cargoMassInput))) {
        //         alert("Please submit a proper input!");

// The point of using form submission function is to validate options and changing faulty items and the css code so that it relfects to the user they made mistakes in their inputs
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log(pilot)
}
    // let statusCheck = document.getElementById("launchStatus")
        // if PILOT name is empty or it's number THEN {do this}. Otherwise it's correct and {you do this}
    // if (validateInput(pilotNameInput) === "Is a Number" || validateInput(pilotNameInput) === "Empty") {
    //     alert("Please submit a proper input! All fields are required!");
    // } else { = document.querySelector("data-testid=pilotStatus")

    // }
    //   // if copilot name is empty or it's number THEN {do this}. Otherwise it's correct and {you do this}
    // if (validateInput(copilotNameInput) === "Is a Number" || validateInput(copilotNameInput) === "Empty") {
    //     alert("Please submit a proper input! All fields are required!");
    // } else {

    // }
    //   // if fuelLevel is empty or it's not a number THEN {do this}. If not, but it is less than 10000L, THEN {do this}. Otherwise it's correct and {you do this}
    // if (validateInput(fuelLevelInput)=== "Empty" || validateInput(fuelLevelInput) === "Not a Number") {
    //     alert("Please submit a proper input! All fields are required!");
    // } else if (fuelLevelInput<10,000) {
        
    // } else {

    // } 
    //   // if cargomass is empty or it's not a number THEN {do this}. If not, but it is more than 10000L, THEN {do this}. Otherwise it's correct and {you do this}
    // if (validateInput(cargoMassInput)=== "Empty" || validateInput(cargoMassInput) === "Not a Number") {
    //     alert("Please submit a proper input! All fields are required!");
    // } else if (cargoMassInput>10,000) {
        
    // } else {

//}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
