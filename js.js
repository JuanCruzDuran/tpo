const direccion = "https://pokeapi.co/api/v2/pokemon/jolteon"

// crear async
async function obtenerPokemon(){
    const response = await fetch(direccion)
    const data = await response.json()
    console.log(data);
    // crear img como elemento 
    let img = document.createElement("img")

    //buscar elemento(imagen) en la data
    let imagenJolteon = data.sprites.front_default

    //agregar el contendo a la imagen creada
    img.setAttribute("src", imagenJolteon)

    //buscar por id el espacio donde va la imagen
    let division = document.getElementById("primero")


    //pasar la imagen a la division del html
    division.appendChild(img)
}
obtenerPokemon()