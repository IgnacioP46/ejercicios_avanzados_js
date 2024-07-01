/**
Dado el siguiente código usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
Ten en cuenta que las categorías no tienen que repetirse.
Es decir, const categorias = ["comedia", "aventura", "acción", "thriller", "animación"]
Para filtrar las categorías puedes ayudarte de la función .includes().
 */
const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];

  function getUniqueCategories(movies) {
    const categories = []; // creamos el array vacío para rellenar luego
  
   
    for (const movie of movies) {//recorremos el array y le damos el valor movie
      for (const category of movie.categories) {//recorremos la nueva constante en la parte de categorias
        if (!categories.includes(category)) {//vemos si las categorias estan ya incluidas o no
          categories.push(category); //si no esta en la lista se agrega al array vacio
        }
      }
    }
  
    return categories; //retornamos el array de categorías únicas
  }
  
  const uniqueCategories = getUniqueCategories(movies); //almacenamos la funcion en una constante para hacerla mas manejable
  console.log(uniqueCategories);//[ 'comedia', 'aventura', 'acción', 'thriller', 'animación' ]