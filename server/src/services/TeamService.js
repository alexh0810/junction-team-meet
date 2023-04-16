import { Team } from "../model/Team.js";

export const getTeams = async () => {
  const teams = await Team.find();
  return teams;
};

export const getSingleTeam = async (teamId) => {
  const team = await Team.findById(teamId);
  return team;
};
