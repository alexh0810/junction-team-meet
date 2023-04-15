import { Router } from "express";
import teamController from "../controllers/teamController.js";

const teams = Router();
teams.get("/teams", teamController.getAllTeams());

export default teams;
