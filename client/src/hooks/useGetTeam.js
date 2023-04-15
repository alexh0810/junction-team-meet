import axios from "axios";
import { useState, useEffect } from "react";
import { axiosInstance } from "../config/config";

export const useGetTeam = (teamId) => {
  const [team, setTeam] = useState(undefined);
  console.log(teamId);

  useEffect(() => {
    if (teamId) {
      try {
        axiosInstance
          .get(`teams/apply/${teamId}`)
          .then((res) => setTeam(res.data));
      } catch (e) {
        console.log(e);
      }
    }
  }, [teamId]);
  return team;
};
