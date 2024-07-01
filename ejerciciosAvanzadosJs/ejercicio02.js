/**
Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
Es decir, la media de volumen de todos los volumenes juntos.
 */
const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];

  let volumenTotal = 0;//creamos la variable con valor 0 para poder operar con el
  let contador = 0;//creamos la variable con valor 0 para poder operar con el

  for(const user of users) {//recorremos el array y lo almacenamos en la constante user
    for (const sound in user.favoritesSounds) {//recorremos el objeto dentro del array en el apartado favoritesSounds
        volumenTotal += user.favoritesSounds[sound].volume;//sumamos el total de volumen del array a la constante volumenTotal
        contador++//añadimos el contador vuelta a vuelta
    }
  }

  const volumenMedio = volumenTotal / contador;//dividimos la suma de los minutos entre el contador para sacar la media y esta la almacenamos en una constante para ser mas facil de usar
  console.log(volumenMedio);//57.25