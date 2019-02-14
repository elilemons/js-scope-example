# JS Scope Examples

Visit `main.js` to view the example functions. Uncomment functions and the calls to them to see what they do.

## The Functions
`showFunctionVariables()`
- This utilizes variables created within itself and displays them in the HTML and the browser console

`eatSalsa(salsaLabel)`
- This utilizes parameters to show that those are locally scoped, but also logs and displays the `globalSalsa` variable to show that it has access to it

`messUpTheSalsa()`
- This directly modifies the `globalSalsa` variable, logging and displaying the results to show how easy it is to screw up

`logAndDisplay()`
- Writes the `message` parameter to the console and the HTML