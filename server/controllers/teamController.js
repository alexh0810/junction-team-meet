import { getTeams, getSingleTeam } from "../services/TeamService.js";

export const getAllTeams = async (req, res) => {
  try {
    const teams = await getTeams();
    return res.json(teams);
  } catch (e) {
    console.log(e);
  }
};

export const getTeamById = async (req, res) => {
  const teamId = req.params.id;
  try {
    const team = await getSingleTeam(teamId);
    return res.json(team);
  } catch (e) {
    console.log(e);
  }
};
