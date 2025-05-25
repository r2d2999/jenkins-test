/*
        6. Ejercicio Propuesto
Implementa una función que busque todas las ocurrencias de un objetivo y retorne un array de índices:

javascript
function linearSearchAll(arr, target) {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indices.push(i);
    }
  }
  return indices;
}

// Ejemplo:
console.log(linearSearchAll([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 5]


*/