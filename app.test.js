import { fromEuroToDollar, fromDollarToYen, fromYenToPound } from './app.js';

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(1); // Cambiar 3.5 a 1 para verificar 1 euro
    const expected = 1 * 1.07; // Actualiza el valor esperado
    expect(dollars).toBe(expected);
});

test("One dollar should be approximately 146.26 yen", function() {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected); // toBeCloseTo para manejar la precisión
});

test("One yen should be approximately 0.0056 pounds", function() {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected); // toBeCloseTo para manejar la precisión
});
