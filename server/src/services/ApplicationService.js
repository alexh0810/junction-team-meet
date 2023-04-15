import { Application } from "../model/Application.js";

export const createApplication = async (newApplication) => {
  await newApplication.save();
  return await Application.find(newApplication._id).populate();
};
