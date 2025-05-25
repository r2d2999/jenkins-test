/*
            BUBLE SORT
            
    EXCERSICE 1
        INOUT: [85, 92, 78, 95, 88]
        OUTPUT: [78, 85, 88, 92, 95].

*/

const list_test = [85, 92, 78, 95, 88];

function bubble_sort(input){

    for(let i=0; i < input.length -1; i++){
        for(let j=0; j< input.length -1; j++){

            if(input[j] > input[j+1]){
                var temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;
            }
        }
    }

    return input;
}


console.log("The final sortted array: ", bubble_sort(list_test));
