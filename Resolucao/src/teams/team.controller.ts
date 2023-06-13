import { Request, Response } from "express";
import { TeamService } from "./team.service";

class TeamController {
  async create(req: Request, res: Response) {
    const team = await new TeamService().create(req.body);
    return res.status(200).json(team);
  }

  async list(req: Request, res: Response) {
    const teams = await new TeamService().list();
    return res.status(200).json(teams);
  }

  async findByTrainer(req: Request, res: Response) {
    const team = await new TeamService().find(req.query.name);
    //http://localhost:3001/pokemon-team-trainer-name?name=Ash <- consulta
    return res.status(200).json(team);
  }

  async update(req: Request, res: Response) {
    const team = await new TeamService().update(req.query.name, req.body);
    return res.status(200).json(team);
  }

  async delete(req: Request, res: Response) {
    const deletedTeam = await new TeamService().delete(req.query.name);
    return res.status(200).json(deletedTeam);
  }

  async pokemonByType(req: Request, res: Response) {
    const pokeType = await new TeamService().pokemonByType();
    return res.status(200).json(pokeType);
  }
}

export default new TeamController();
