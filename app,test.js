

// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
};

// Función de conversión de euros a dólares
function fromEuroToDollar(amountInEuro) {
    return amountInEuro * oneEuroIs.USD;
}
// Función de conversión de dólares a yenes
function fromDollarToYen(amountInDollar) {
    // Convertir de dólar a euro primero
    let amountInEuro = amountInDollar / oneEuroIs.USD;
    // Convertir de euro a yen
    return amountInEuro * oneEuroIs.JPY;
}

// Función de conversión de yenes a libras
function fromYenToPound(amountInYen) {
    // Convertir de yen a euro primero
    let amountInEuro = amountInYen / oneEuroIs.JPY;
    // Convertir de euro a libra
    return amountInEuro * oneEuroIs.GBP;
}



test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expected(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
