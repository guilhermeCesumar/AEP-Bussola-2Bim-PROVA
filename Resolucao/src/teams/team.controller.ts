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
    const team = await new TeamService().find(req.query.name as string);
    return res.status(200).json(team);
  }

  async update(req: Request, res: Response) {
    const team = await new TeamService().update(
      req.query.name as string,
      req.body
    );
    return res.status(200).json(team);
  }

  async delete(req: Request, res: Response) {
    const deletedTeam = await new TeamService().delete(
      req.query.name as string
    );
    return res.status(200).json(deletedTeam);
  }
}

export default new TeamController();
