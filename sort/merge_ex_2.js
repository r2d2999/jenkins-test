/**
 * 
 *          MERGE SORT
 * 
 * INPUT: [1,2,7,9,7,6,4]
 * 
 * OUTPUT: [1, 2, 4, 6, 7, 7, 9]
 * 
 * STEPS:
 *    -The description fo the Merge Sort is an sort alghorithm who uses the divide-compare to, take one array, split into two
 *     then, reapit it in  recursive way until each element of the arrya si separate from the other ones. 
 *      After that is complete, the final step is compare each element of the left array and right array. These compations are 
 *      pushed it into a new resukting array, taking speacial care of the correctly way to sort those new elementos (from minus to major)
 * 
 *    -Create one fucntion who takes care of divide the main arry in many sub-arrays. Many as it needed in a recusrive way
 *     until each element of the arrya ended up separatly alone.
 *    -The next function 
 */



const test_array = [1,2,7,9,7,6,4];

function mergeSort(input){

    if(input.length <= 1){
        return input;
    }

    const middle = Math.floor(input.length / 2);

    const left = input.slice(0, middle);
    const right = input.slice(middle);



    return  merge(mergeSort(left), mergeSort(right));
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
    return result;

}



console.log("The final sortted array is: ", mergeSort([...test_array]));