let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];

function taquilla (pelicula) {
    let peliculaDestacada = pelicula.toUpperCase();
    let index = peliculas.indexOf(pelicula);
    if (index != -1) {
        peliculas.splice(index, 1);
    }
    peliculas.unshift(peliculaDestacada);
    return peliculas;
}

let peliculasDestacadas = taquilla("Thor: amor y trueno");

let proximasASalir = ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"];

function concatenarPeliculas(array1, array2) {
    let peliculasTotales = array1.concat(array2);
    return peliculasTotales.join(", ");
}

console.log(concatenarPeliculas(peliculasDestacadas, proximasASalir));


