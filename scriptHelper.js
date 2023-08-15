// Write your helper functions here!
require('isomorphic-fetch');

//  First, review the comments in addDestinationInfo(). 
//This is the format of the innerHTML for the missionTarget div, which you can locate using the document parameter of addDestinationInfo().
// addDestinationInfo() does not need to return anything. 
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        const div = document.getElementById("missionTarget")
        //console.log(name)
        // console.log(json.name)
        div.innerHTML = 
        `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
        `
    
   
   // Here is the HTML formatting for our mission target div.
   /*
   document.querySelector("#missionTarget") =
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
function validateInput(input) {
    let testInput = Number(input)
    if ((typeof testInput) === Number) {
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
    //console.log(typeof pilot)
    let statusCheck = document.getElementById("launchStatus")
    console.log(typeof validateInput(pilot))
        // if PILOT name is empty or it's number THEN {do this}. Otherwise it's correct and {you do this}
    
        if (validateInput(pilot) === "Is a Number" || validateInput(pilot) === undefined|| validateInput(pilot) === "Empty") {
         alert("Please submit a proper input! All fields are required!");
     } else {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch.`
     }
    // console.log(typeof pilot)
    //   // if copilot name is empty or it's number THEN {do this}. Otherwise it's correct and {you do this}
    
    if (validateInput(copilot) === "Is a Number" || validateInput(copilot) === undefined || validateInput(copilot) === "Empty") {
         alert("Please submit a proper input! All fields are required!");
     } else {
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch.`
     }
    
     // if fuelLevel is empty or it's not a number THEN {do this}. If not, but it is less than 10000L, THEN {do this}. Otherwise it's correct and {you do this}
 
     if (validateInput(fuelLevel)=== "Empty" || validateInput(fuelLevel) === "Not a Number") {
         alert("Please submit a proper input! All fields are required!");
     } else if (fuelLevel<10000) {
        /// make faulty items visible
        list.style.visibility = "visible"
        // change the innerHTML on the faulty item list
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`
        //The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red
        statusCheck.innerHTML = `Shuttle Not Ready for Launch`
         statusCheck.style.color =  "rgb(199, 37, 78)"
    } else if(document.getElementById("cargoStatus").innerHTML === `Cargo mass too heavy for launch`){ 
     document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`
     } else if(document.getElementById("cargoStatus").innerHTML === `Cargo mass low enough for launch`){
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`
        statusCheck.innerHTML = `Shuttle is Ready for Launch`
       statusCheck.style.color =  "rgb(65, 159, 106)"
     }
 
     //   // if cargomass is empty or it's not a number THEN {do this}. If not, but it is more than 10000L, THEN {do this}. Otherwise it's correct and {you do this}
 
     if (validateInput(cargoLevel)=== "Empty" || validateInput(cargoLevel) === "Not a Number") {
         alert("Please submit a proper input! All fields are required!");
     } else if (cargoLevel>10000) {
        ///make faulty items visisble
        list.style.visibility  = "visible"
        //change the innerHTML on faulty item
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`
        //The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red
        statusCheck.innerHTML = `Shuttle Not Ready for Launch`
        statusCheck.style.color =  "rgb(199, 37, 78)"
    } else if(document.getElementById("fuelStatus").innerHTML === `Fuel level too low for launch`){
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`
    } else if (document.getElementById("fuelStatus").innerHTML === `Fuel level high enough for launch`) {
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`
        statusCheck.innerHTML = `Shuttle is Ready for Launch`
         statusCheck.style.color =  "rgb(65, 159, 106)"
    }
}
//list.style.visiblility = hidden or visible <--

async function myFetch() {
    let planetsReturned;
//const fetchPromise =  fetch("https://handlers.education.launchcode.org/static/planets.json")
// fetchPromise.then( function(response) {
//     const jsonPromise = response.json();
//     jsonPromise.then( function(json) {
//response.json().then(function(json){})
// })
// })
       // const jsonPromise = await response.json()
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
return response.json()
})


    return planetsReturned;

}
//  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){})
//response.json().then(function(json){})
// pickPlanet() takes in one argument: a list of planets.
// Using Math.random(), return one planet from the list with a randomly-selected index. 
function pickPlanet(planets) {
return selectedPlanet = Math.floor(Math.random()*planets.length)
// return planets[selectedPlanet]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
