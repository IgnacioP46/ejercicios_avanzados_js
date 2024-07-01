/**
Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
Que la función use el parametro para simular una tirada de dado y retornar el resultado.
Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()
 */

function rollDice(numFaces) {
    const randomNumber = Math.floor(Math.random() * numFaces) + 1;// Generar un número aleatorio entre 1 y numFaces
    return randomNumber;
  }
  
  // Ejemplos de uso
  console.log(rollDice(2));//1
  console.log(rollDice(4));//1
  console.log(rollDice(6));//5
  console.log(rollDice(8));//5
  console.log(rollDice(10));//9
  console.log(rollDice(12));//4
  console.log(rollDice(20));//6
  console.log(rollDice(100));//26