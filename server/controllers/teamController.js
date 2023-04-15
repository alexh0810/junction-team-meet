import TeamService from "../services/TeamService.js";

const getAllTeams = async (req, res) => {
  try {
    const teams = await TeamService.getTeams();
    return res.json(teams);
  } catch (e) {
    console.log(e);
  }
};

export default getAllTeams;
