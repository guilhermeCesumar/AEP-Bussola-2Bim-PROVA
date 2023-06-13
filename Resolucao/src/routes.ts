import { Router } from "express";
import teamController from "./teams/team.controller";
import pokemonController from "./pokemon/pokemon.controller";

const routes = Router();

routes.get("/pokemon", pokemonController.list);

routes.post("/pokemon-team", teamController.create);
routes.get("/pokemon-team", teamController.list);
routes.get("/pokemon-team-trainer-name", teamController.findByTrainer);
routes.put("/pokemon-team-trainer-name", teamController.update);
routes.delete("/pokemon-team-trainer-name", teamController.delete);
routes.get("/pokemon-by-type", teamController.pokemonByType);

export default routes;
