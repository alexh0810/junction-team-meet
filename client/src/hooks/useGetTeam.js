import axios from "axios";
import { useState, useEffect } from "react";
import { axiosInstance } from "../config/config";

export const useGetTeam = (teamId) => {
  const [team, setTeam] = useState(undefined);

  useEffect(() => {
    if (teamId) {
      try {
        axiosInstance
          .get(`teams/${teamId}`)
          .then((res) => setTeam(res.data));
      } catch (e) {
        console.log(e);
      }
    }
  }, [teamId]);
  return team;
};
