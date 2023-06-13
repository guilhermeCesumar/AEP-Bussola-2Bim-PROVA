
async function listPoke() {
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2").then(data => {
        return data.json();
    })
    console.log(pokemon)
}

listPoke();