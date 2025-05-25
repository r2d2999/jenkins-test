/**
 *          MERGE SORT
 *  SORT ALGORIHT. 
 *  DIVIDE THE INPUT ARRAY INTO TWO.
 *  SORT THE LEFT AND RIGHT MIDS
 *  MERGE BOTH SIDES INTO A NEW FULLY SORTED ARRAY
 * 
 * 
 * 
 * MERGE
 *  CREATE AN EMPTY REUSLT ARRAY
 *  CREATE AND INDEX FOR LEFT, ANTOHER ONE FOR RIGHT
 *  FILL THE NEW RESULT ARRAY COMPARING BOTH SIDES AND CHOSING THE GREATER VALUE OF EACHE SIDE
 * 
 */



const list_test = [5,6,8,4,2];

function mergeSort(input){

    if(input.length <= 1){
        console.log("Base case: ", input);
        return input;
    }

    const middle = Math.floor(input.length / 2);

    const left = input.slice(0, middle);
    const right = input.slice(middle);

   console.log("Dividing: ", input, " left: ", left, " right: ", right);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            result.push(left[i]);
            i++;
        }else {
            result.push(right[j]);
            j++;
        }
    }

    result = result.concat(left.slice(i)).concat(right.slice(j));
    console.log("Merging: ", left, " and ", right, " => ", result);
    return result;
}



console.log("The final sortted array is: ", mergeSort([...list_test]));
