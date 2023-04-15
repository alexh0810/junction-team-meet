import axios from "axios";
import { useState, useEffect } from "react";

export const useGetTeam = (teamId) => {
  const [team, setTeam] = useState(undefined);
  console.log(teamId);

  useEffect(() => {
    if (teamId) {
      try {
        axios
          .get(`http://localhost:5500/teams/${teamId}`)
          .then((res) => setTeam(res.data));
      } catch (e) {
        console.log(e);
      }
    }
  }, [teamId]);
  return team;
};
