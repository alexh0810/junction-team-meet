import { Application } from "../model/Application.js";

export const createApplication = async (newApplication) => {
  await newApplication.save();
  return await Application.findOne(newApplication._id).populate("team_id");
};
