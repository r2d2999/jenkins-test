//tests/algo_array.test.js

//edge case:  caso de prueba ubcuado en el limite de las condiciones validas (valores maximos o minimos)
//corner case: caso que contoene multiples edge cases que ocurren simultaneamente.

const Chance = require('chance');
const chance = new Chance();
const filterArray = require('../algorithms/algo_array');


//Tests with static data
describe('filterArray function', () => {
    test('filter pair number of  [1, 2, 3, 4, 5, 6]', () => {
        expect(filterArray([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    test('return an empty array if there are not pairs', () => {
        expect(filterArray([1, 3, 5])).toEqual([]);
    });

    //Edge case
    test('handle array with negative even numbers', () => {
        expect(filterArray([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
    }); 

    //Edge case
    test('correctly handle an empty array', () => {
        expect(filterArray([])).toEqual([]);
    });

    //Corner case
    test('handle very large numbers', () => {
        expect(filterArray([Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER - 1]))
        .toEqual([Number.MAX_SAFE_INTEGER - 1]);
    });
});

//Tests using random data (chance)
describe('filterArray function with random data (chance.js)', () => {
    test('filters even numbers from a random array', () => {
        const randomArray = chance.n(chance.integer, 20, {min: 1, max:100});
        const result = filterArray(randomArray);

        expect(result.every(num => num % 2 === 0)).toBe(true);
    });

    test('handle array with mixed negative/positive numbers', () => {
        const mixedArray = chance.n(chance.integer, 10, { min: -50, max: 50});
        const result = filterArray(mixedArray);

        expect(result.every(n => n % 2 === 0)).toBe(true);
    });

});