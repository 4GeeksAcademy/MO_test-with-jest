// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}// app.js file content


// Declaramos una función con el nombre exacto "formEuroToDollar"
//const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a Yen
   // let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en dólares
    //return valueInDollar;

// Declaramos una función con el nombre exacto "formYenToPound"

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a Pound
    let valueInPound = valueInYen * 156.5;
    // Retornamos el valor en Pound
    return valueInYen;





}// app.js file content

console.log("Hello World")

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar,fromYenToPound}

//comprobado también con "formEuroToDollar", si se prueba los tres al mismo tiempo da error