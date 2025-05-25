//BUBBLE-SORT

const list_test = [5,6,8,4,2];


function buble_sort(array_test){

    for(let i = 0; i< list_test.length -1; i++){

        for(let j=0; j< list_test.length -1; j++){

            if(list_test[j] > list_test[j +1]){

                let temp = list_test[j];
                list_test[j] = list_test[j+1];
                list_test[j +1] = temp;
            }
        }
}

    return array_test;

}



console.log("NEW ORDER: ", buble_sort(list_test));

