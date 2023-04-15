import { Application } from "../model/Application.js";

export const createApplication = async (newApplication) => {
  await newApplication.save();
  return await Application.findOne({user_id: newApplication.user_id}).populate("team");
};
