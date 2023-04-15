import { Router } from "express";
import { createNewApplication } from "../controllers/applicationController.js";
import { getAllTeams, getTeamById } from "../controllers/teamController.js";

const teams = Router();
teams.get("", getAllTeams);
teams.get("/apply/:id", getTeamById)
teams.post("/apply/:id", createNewApplication)

export default teams;
