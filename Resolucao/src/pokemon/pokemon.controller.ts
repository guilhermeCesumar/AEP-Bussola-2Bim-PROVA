import {Request, Response} from 'express'
import { PokemonService } from './pokemon.service'

class PokemonController {
    async list(req: Request, res: Response) {
        const pokemons = await new PokemonService().list()
        return res.status(200).json(pokemons)
    }
}

export default new PokemonController();