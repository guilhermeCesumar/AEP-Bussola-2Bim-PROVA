import { PokemonService } from "../pokemon/pokemon.service";
import { TeamService } from "../teams/team.service";
import { describe, test, expect } from "@jest/globals";

describe("Testes service Teams", () => {
  test("Deve verificar se o time possui 6 pokemons", async () => {
    const team = await new TeamService().list();
    expect(team.length).toBe(6);
  });

  test("Deve verificar se o pokemon existe na pokeAPI", async () => {
    const team = await new TeamService().list();
    const pokemons = await new PokemonService().list();

    pokemons.forEach((pokemon) => {
      expect(team).toContainEqual(pokemon);
    });
  });
});
