/**
Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
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

  const contadorFavoritos = users.reduce((contador, user) => {//usamos la funcion de flechas para crear la funcion
    for (const sonido in user.favoritesSounds) {//recorremos el array
        if(contador[sonido]) {//si el sonido existe en la lista 
            contador[sonido]++;//añadimos uno al contador
        }else {//en caso contrario
            contador[sonido] = 1//si no esta en la lista lo añadimos con valor 1
        }
    }
    return contador;//retornamos el resultado del contador
  }, {})

  console.log(contadorFavoritos);//{ waves: 3, rain: 1, firecamp: 3, shower: 2, train: 2, wind: 1 }