const direccion = "https://pokeapi.co/api/v2/pokemon/charizard"

async function obtenerPokemon(){
    const response = await fetch(direccion)
    const data = await response.json()
    

    let img = document.createElement("img")

    let imagenCharizard = data.sprites.front_default

    img.setAttribute("src", imagenCharizard)

    let division = document.getElementById("primero")

    division.appendChild(img)
}

obtenerPokemon()