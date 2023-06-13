import { TeamType } from "./type/team.type";
import TeamModel from "./team.schema";
import { readFile, writeFile } from "fs/promises";

export class TeamService {
  async create(team: TeamType) {
    const createdTeam = await TeamModel.create(team);
    return createdTeam;
  }

  async list() {
    const listedTeams = await TeamModel.find();
    return listedTeams;
  }

  async find(name: String) {
    const findedTeam = await TeamModel.find({
      trainerName: name,
    });
    return findedTeam;
  }

  async update(name: String, data: TeamType) {
    const updatedTeam = await TeamModel.findOneAndUpdate(
      { trainerName: name },
      {
        trainerName: data.trainerName,
        team: data.team,
      },
      { new: true }
    );
    return updatedTeam;
  }

  async delete(name: String) {
    await TeamModel.findOneAndDelete(name);
    return "successfully deleted user!";
  }
}
