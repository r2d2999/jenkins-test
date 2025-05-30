//algoriths/algo_array.js

/**
 *  DATA STRUCRURES
 *                      ARRAYS
 *  
 *  DIFFICULTY: Basic
 *  EXCERISE #1
 *      CREATE A FUNCTION TO FILTER ONLY PAIR NUMBERS. DUE A  NUMERIC ARRAYS, THE OUTPUT MUST RETURN 
 *      A NEW ARRAY WITH ONLY PAIR NUMBERS.
 *       
 *  INPUT:  [1, 2, 3, 4, 5, 6]
 * 
 *  EXPECTED OUTPUT:   [2, 4, 6]
 * 
 */


    function filterArray(_array){

        let result_array = [];

        for(let i = 0; i < _array.length; i++){

            if(_array[i] % 2 === 0){
                result_array.push(_array[i]);
            }
        }


        return result_array;
    }


    const test_array = [1, 2, 3, 4, 5, 6];

    console.log("Resulting array with onyl pair numbers: ", filterArray(test_array));


    module.exports = filterArray;


    //pruebadsdasd