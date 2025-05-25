/**
 * 
 *              BUBLE SORTT
 *      EXCERICSE #3
 * 
 * 
 * INTPUT: [4,5,2,9];
 * EXPECTED OUTPU: [2, 4, 5, 9]
 * 
 * STEPS:
 *      -Iterate over n length array.
 *      -Starting for the firts element, then compare it to the next one, if the first is bigger than the other one,
 *       change its positions in the main array. 
 *      -We need to repeat this as long as the value of the input array length.
 *      -We need to use to one nested for loops. This because the firt for loop would repeat the operations as the 
 *       input array has elementos to iterate whith.
 *      -The second loop would check main array element values and so, if the condition applies to them, 
 *       the posiitons of the elements would swap.
 */

const test_array = [4,5,2,9];

function bubleSort(input){

    for(let i=0; i<input.length -1; i++){

        for(let j=0; j < input.length -1; j++){
            if(input[j] > input[ j+1]){
                let temp = input[j];
                input[j] = input[j + 1];
                input[j+1] = temp;
            }
        }
    }

    return input;
}



console.log("THE OUTPUT IS: ", bubleSort(test_array));