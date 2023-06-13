import { Request, Response } from "express";
import { PokemonService } from "./pokemon.service";

class PokemonController {
  async list(req: Request, res: Response) {
    const pokemons = await new PokemonService().list();
    return res.status(200).json(pokemons);
  }

  async pokemonByType(req: Request, res: Response) {
    const pokeType = await new PokemonService().pokemonByType();
    return res.status(200).json(pokeType);
  }
}

export default new PokemonController();
