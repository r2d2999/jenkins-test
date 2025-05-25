

const array_test = [23, 19, 25, 21, 20];

function bubble_sort(input){
    for(let i=0; i< input.length -1 ; i++){

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

console.log("Sortted data: ", bubble_sort(array_test));