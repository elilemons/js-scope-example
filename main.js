"use strict";
// Global scope variables
let globalX = `I'm a global variable!`;
let globalY = globalX;

logAndDisplay(`globalX: ${globalX}`);
logAndDisplay(`globalY: ${globalY}`);


// Locally scoped variables - in a function
function showFunctionVariables() {
    let localX = `I'm a local variable! I only exist in showFunctionVariables()!`;
    let localY = localX;

    logAndDisplay(`localX: ${localX}`);
    logAndDisplay(`localY: ${localY}`);
}

showFunctionVariables();

// // Note that we cannot access the local variables here, so this will throw an error:
// logAndDisplay(`localX: ${localX}`);
// logAndDisplay(`localY: ${localY}`);


// // Ok, let's do this again but with stuff
// // Global variables
// let globalSalsa = `There is salsa EVERYWHERE`;

// logAndDisplay(globalSalsa);

// // Notice that when we pass a global variable as an argument, changes to it don't affect the global variable.
// eatSalsa(globalSalsa);

// function eatSalsa(salsaLabel) {
//     // The parameter, salsaLabel, is locally scoped to this function
//     salsaLabel = `You attempt to eat the salsa: ${salsaLabel}`; // Here we modify the label via hte parameter
//     logAndDisplay(`The parameter salsaLabel, after we added to it:  \n \t- ${salsaLabel}`); // Then we display  it
//     logAndDisplay(`The global variable globalSalsa:  \n \t- ${globalSalsa}`); // Here we display the global variable, which has not been changed
// }

// // Trying to display the parameter, salsaLabel, outside of the function, will throw an undefined error
// // logAndDisplay(salsaLabel);

// // Let's see some of the dangers with global variables
// function messUpTheSalsa() {
//     logAndDisplay(`Global salsa before we mess with it: ${globalSalsa}`);
//     globalSalsa = `HAHAHA THERE IS NO SALSA NOW`;
//     logAndDisplay(`Global salsa before we mess with it: ${globalSalsa}`);

//     // Now lets run eatSalsa again
//     eatSalsa(globalSalsa);

//     // See? The global variable has changed now, and any other function that uses it has been affected.
//     // Therefore, it is always better to keep your variables LOCALLY scoped, either by creating them 
//     // INSIDE of a function, or by passing them as arguments to the functions' parameters.
// }

// messUpTheSalsa();

// // Now, let's be nice....
// eatSalsa(`You have finally succeeded in eating the salsa. Unfortunately, it is too spicy.`);




/**
 * 
 * @param {String} message The message you'd like added to the UI console and the actual console.
 */
function logAndDisplay(message) {
    let htmlConsoleLog = document.getElementById('console-log');
    htmlConsoleLog.innerText += `${message}\n`;
    console.log(message);
}