/**
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante.
 */
function swap(array, index1, index2) {
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {//si index 1 es menor a 0 |o| index1 es mayor o igual al contenido entero del array |o| si index2 es menor a 0 |o| index2 es mayor o igual al contenido entero del array 
        console.error("Los índices están fuera del rango del array.");//saca por consola el mensaje
    return array; // retornamos el array original si los índex no son válidos
  }
  // Intercambiamos los elementos en los índices index1 y index2
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;//devolvemos el array modificado
}


const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  console.log(swap(fantasticFour, 0, 3));/**
   [
  'La cosa',
  'Mr. Fantástico',
  'La mujer invisible',
  'La antorcha humana'
]*/
  console.log(swap(fantasticFour, 1, 2)); /**
  [
  'La cosa',
  'La mujer invisible',
  'Mr. Fantástico',
  'La antorcha humana'
] */