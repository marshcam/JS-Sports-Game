let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
let teamoneNumshots = document.querySelector("#teamone-numshots");
let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
let teamoneNumGoals = document.querySelector("#teamone-numgoals");
let teamtwoNumGoals = document.querySelector("#teamtwo-numgoals");
let resetButton = document.querySelector ("#reset-button");
let totalResets = document.querySelector ("#num-resets");

teamoneShootButton.addEventListener("click", function () {
    console.log("SHOOT button clicked");
    let newteamoneNumshots = Number(teamoneNumshots.innerHTML) + 1;
    teamoneNumshots.innerHTML = newteamoneNumshots;
})

teamtwoShootButton.addEventListener("click", function () {
    console.log("SHOOT button clicked");
    let newteamtwoNumshots = Number(teamtwoNumshots.innerHTML) + 1;
    teamtwoNumshots.innerHTML = newteamtwoNumshots;


})

teamoneShootButton.addEventListener("click", function () {
    mySound.play();
    console.log("SHOOT button clicked");
    let newteamoneNumGoals = Number(teamoneNumGoals.innerHTML) + Math.round( Math.random() );
    teamoneNumGoals.innerHTML = newteamoneNumGoals;
    
})

teamtwoShootButton.addEventListener("click", function () {
    mySound.play();
    console.log("SHOOT button clicked");
    let newteamtwoNumGoals = Number(teamtwoNumGoals.innerHTML) + Math.round( Math.random() );
    teamtwoNumGoals.innerHTML = newteamtwoNumGoals;
    
})


resetButton.addEventListener("click", function () {
    mybuzzer.play();
    console.log("Reset button clicked");
    let newtotalResets = Number(totalResets.innerHTML) + 1;
    totalResets.innerHTML = newtotalResets;
     if ( Number(teamoneNumGoals.innerHTML) < Number(teamtwoNumGoals.innerHTML) ) {
        alert ("Team Two Wins");
    } else if ( Number(teamtwoNumGoals.innerHTML) < Number(teamoneNumGoals.innerHTML) ) {
        alert ("Team One Wins");
    } else if ( Number(teamtwoNumGoals.innerHTML) == Number(teamoneNumGoals.innerHTML) ) 
        alert ("Tied Game")
    
    
    teamoneNumshots.innerHTML = 0
    teamtwoNumshots.innerHTML = 0
    teamoneNumGoals.innerHTML = 0
    teamtwoNumGoals.innerHTML = 0

   

   
    

})
    
    
    



var a = 0;
var displayValue = document.getElementById('Value');

var updateValue = function () {
    displayValue.innerHTML = a;
};

var add = function (valueToAdd) {
    a += valueToAdd;
    updateValue();
};

var reset = function () {
    a = 0;
    updateValue();
};

const mySound = document.getElementById("sound"); 
const mybuzzer = document.getElementById("buzzer"); 