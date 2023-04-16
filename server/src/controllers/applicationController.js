import { Application } from "../model/Application.js";
import { Team } from "../model/Team.js";
import { createApplication } from "../services/ApplicationService.js";

export const createNewApplication = async (req, res) => {
  try {
    let team_id = req.params;
    let { user_id, message } = req.body;
    const foundTeam = await Team.findById(team_id.id);
    if (foundTeam) {
      const newApplication = new Application({
        user_id,
        message,
      });
      const application = await createApplication(newApplication);
      return res.status(201).json(application);
    } else {
      return res.status(400).json(`Invalid team ${team_id.id}`);
    }
  } catch (e) {
    return res
      .status(500)
      .json(`Internal server error, cannot save application`);
  }
};
