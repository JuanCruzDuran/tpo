const direccion = "https://pokeapi.co/api/v2/pokemon/jolteon"

async function obtenerPokemon(){
    const response = await fetch(direccion)
    const data = await response.json()
    console.log(data);
    let img = document.createElement("img")
    let imagenJolteon = data.sprites.front_default
    img.setAttribute("src", imagenJolteon)
    let division = document.getElementById("primero")
    division.appendChild(img)
}
obtenerPokemon()