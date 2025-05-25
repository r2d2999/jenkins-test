/**
 *      DATA STRUCTURES     ARRAYS
 * 
 *  DIFFICULTY: NORMAL
 * 
 *  EXCERCISE #1: SHIFT AN ARRAY TO THE RIGHT
 * 
 *  DESCRIPTION:
 *      Create a function called shiftRight who takes an array and a number k (times to shift) 
 *      as arguments and returns the shifted array k times to the right.
 *      
 *       -Each shift moves the element to the begining
 *       -If k is bigger than the array's length, rotate just the needed ones,
 *         (e.g. rotate 5 times an 3 elements array is equivalent to rotate 2 times).
 * 
 *  EXAMPLES:
 *      shiftRight([1, 2, 3, 4], 1);  => [4, 1, 2, 3];
 *      shiftRight([1, 2, 3], 4); => [3, 1, 2] ( 4 % 3 = 1 effective rotation)
 * 
 *  TESTING:
 *      -WRITE UNIT TESTS.
 *      -USING EDGE AND CORNER CASES.
 *  
 */


function shiftRight(_array, k){
    let result_array = [];

    //Calculate the number of elements to rotate
    let index = k % _array.length;

    const toRotate = _array.slice(-index);
    const remainder = _array.slice(0, -index);

    console.log("toRotateIS: ", toRotate);
    console.log("The remainder is: ", remainder);

    result_array = result_array.concat(toRotate).concat(remainder);

    return result_array;
}

const test_array = [1, 2, 3, 4];

console.log("Final shifted array: ", shiftRight( test_array, 1));
console.log("Final shifted array: ", shiftRight( test_array, 4));