/**
 * 
 *          LINEAR SEARCH
 * 
 * RECORRE TODOS LOS ELMENTOS DE UN ARREGLO HASTA QUE ENEUCNTRA EL TARGET.
 * LA EJECUCIÓN Y LA COMPLIJIDAD PUEDE SER MUY SIMPLE SI EL TARGET SE ENCUENTRA
 * EN LAS PRIMERAS POSICIONES.
 * 
 * 
 */


function linearSearch(_array, target){

    for(let i = 0; i<_array.length; i++){
        if(_array[i] === target){
            return true;
        }
        else return false;
    }
}

const test_array = [2, 1, 4, 5, 6];

console.log("Linear search: ", linearSearch(test_array, 4));
console.log("Linear Search, second attempt: ", linearSearch(test_array, 2));