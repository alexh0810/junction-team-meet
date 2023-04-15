import Team from "../models/Team.js";

const getTeams = async () => {
  return await Team.find();
};

export default getTeams;
