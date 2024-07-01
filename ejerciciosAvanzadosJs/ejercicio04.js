/**
4.1  Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos.
 */
function findArrayIndex(array, text) {
    //Tu codigo
    for(let i = 0; i < array.length; i++) {//iteramos el array
        if(array[i] === text) {//si el elemento nombrado esta en el array
            return i;//retorna el numero que ocupa el elemento
        }
    }
        return -1;//si no da -1
    
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Luke")); //0
console.log(findArrayIndex(mainCharacters, "Rey")); //4
console.log(findArrayIndex(mainCharacters, "Darth Vader"));//-1


/**
4.2  Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.
Finalmente retorna el array.
De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente
 */
function removeItem(array, text) {//creamos la funcion
    const indexToRemove = findArrayIndex(array, text);//sacamos el index del elemento que vamos a eliminar
    if (indexToRemove !== -1) {//si el index es diferente a -1 es que no esta y no hace nada
        array.splice(indexToRemove, 1);//en cambio si esta coge ese valor y lo elimina
      }
      return array;//devuelve el array modificado
}


console.log(removeItem(mainCharacters, "Chewbacca"));//[ 'Luke', 'Leia', 'Han Solo', 'Rey', 'Anakin', 'Obi-Wan' ]
console.log(removeItem(mainCharacters, "Yoda"));//[ 'Luke', 'Leia', 'Han Solo', 'Rey', 'Anakin', 'Obi-Wan' ]
console.log(removeItem(mainCharacters, "Luke"));//[ 'Leia', 'Han Solo', 'Rey', 'Anakin', 'Obi-Wan' ]