// Write your JavaScript code here!

// X const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
   //Validate the user responses with `preventDefault()` to ensure the following: 
  // a. The user has entered something for every field.
   //b. The user has entered string values for names and number for fuel and cargo levels.
   //preventDefault is to stop "default functionality of browser" when we do not meet conditions.
   let form = document.querySelector("form")
   let list = document.getElementById("faultyItems")
   //do i add another function here or do i add the submission form function in script helper when prevent defaulting the reloaded page
   //formSubmission(event) {event.preventDefault()}
   //form.addEventListener("submit",formSubmission)
   //OR
   //function noReload(event){event.preventDefault()}
   //form.addEventListener("submit",formSubmission)
   //OR
   //do you event listen for "load" and if it does it without the stuff, it can't submit the stuff?
   form.addEventListener("submit", function(event){
    event.preventDefault();
    //call form submission to pass these variables in 
  
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
        //  if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput === "" || cargoMassInput === "") {
        //     alert("All fields are required!");
        //     // stop the form submission
        //  } else if ((!String(pilotNameInput))||(!String(copilotNameInput))||(!Number(fuelLevelInput))||(!Number(cargoMassInput))) {
        //      alert("Please submit a proper input!");
        //     } 
        formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value)
//console.log(cargoMassInput.value)
// formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
});
   function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log(pilot)
}
// function validateInput(testInput) {
//     let testInput = Number(testInput)
//     if (testInput === Number) {
//         return("Is a Number")
//     } else if (isNaN(testInput)) {
//         return("Not a Number")
//     } else if (testInput === '') {
//         return("Empty")
//     }
// }

let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse;
listedPlanetsResponse.then(function (result) {
   listedPlanets = result;
    console.log(listedPlanets);
}).then(function () {
   console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
})
});