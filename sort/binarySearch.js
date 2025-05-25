/**
 * 
 *          BINARY SEARCH
 * 
 *  Busca un elemento de un array de una manera eficiente y rápida dado que su complejidad algoritmica
 *  es de logn(n) (logaritmo base n de n).
 *  La lista tiene qu estar ordenada. Se puede usar unalgoritmo de ordenamiento antes.
 *  Divivide a la mitad el arreglo ordenado.
 *  Busca en el punto medio del arreglo.
 *  En caso de que no se encuentre en el medio actual, entonces, si el target es mayor que el valor del indicie medio
 *  se descarta la mitad izquierda y busca en la mitad derecha. 
 *  Ocurre lo mismo en viceversa.
 * 
 * 
 */


function binarySearch(_array, target){
    let left = 0;
    let right = _array.length -1;

    while (left <= right){
        const mid = Math.floor((left + right) /2); 

        if(_array[mid] === target){
            return mid;
        }else if(_array[mid] < target) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }


    //Base case
    return -1;
    
}

const test_array = [1,2,3,4];
const test_target = 2;

console.log("Target's index is: ", binarySearch(test_array, test_target));
console.log("Target's index is: ", binarySearch(test_array, 5));