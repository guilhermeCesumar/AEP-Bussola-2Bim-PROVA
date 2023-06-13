import pokemonSchema from "./pokemon.schema";
import { writeFile } from "fs/promises";

export class PokemonService {
  async list() {
    const listPokemons = await fetch("http://localhost:3001/pokemons-data");

    const tratedList = await listPokemons.json().then((allPokes) => {
      const pokeStatus = allPokes.map((poke) => {
        return {
          nome: poke.name,
          tipo: poke.types.map((type) => {
            return type.type.name;
          }),
          status: poke.stats.map((stat) => {
            return `${stat.stat.name} - ${stat.base_stat}`;
          }),
          numeroDex: poke.game_indices[9].game_index,
          altura: poke.height,
          peso: poke.weight,
          moves: poke.moves
            .map((move) => {
              return move.move.name;
            })
            .slice(0, 4),
        };
      });
      return pokeStatus;
    });

    await writeFile("pokemonList.json", JSON.stringify(tratedList, null, 2)); // Salvando em arquivo
    pokemonSchema.insertMany(tratedList); // Salvando no banco

    return tratedList;
  }
}
