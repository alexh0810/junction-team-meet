import { getTeams, getSingleTeam } from "../services/TeamService.js";

export const getAllTeams = async (req, res) => {
  try {
    const teams = await getTeams();
    return res.json(teams);
  } catch (e) {
    return res.status(500).json("Internal server error, cannot get teams");
  }
};

export const getTeamById = async (req, res) => {
  const teamId = req.params.id;
  try {
    const team = await getSingleTeam(teamId);
    if (team) {
      return res.json(team);
    } else {
      return res.status(404).json(`Cannot find team with ${teamId}`)
    }
  } catch (e) {
    return res.status(500).json("Internal server error, cannot get team");
  }
};
