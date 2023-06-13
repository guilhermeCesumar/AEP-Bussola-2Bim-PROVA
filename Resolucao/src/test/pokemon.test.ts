import { PokemonService } from "../pokemon/pokemon.service";
import { describe, test, expect } from "@jest/globals";

describe("Testes service Pokemons", () => {
  test("Deve retornar 151 pokemons", async () => {
    const pokemons = await new PokemonService().list();
    expect(pokemons.length).toBe(151);
  });

  test("Deve retornar o pokemon Bulbasaur", async () => {
    const pokemons = await new PokemonService().list();
    expect(pokemons[0].nome).toBe("bulbasaur");
  });

  test("Deve retornar o pokemon Mew", async () => {
    const pokemons = await new PokemonService().list();
    expect(pokemons[150].nome).toBe("mew");
  });
});
