import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TeamCard from "./TeamCard";


const Main = () => {
  return (
    <Box sx={{paddingBottom: 10, paddingTop: 2}}>
      <Typography variant="h2" component="h2" sx={{ margin: 5, mb: 1, paddingLeft: 15 }}>
        JOIN A TEAM
      </Typography>
      <Typography variant="subtitle2" color="#959595" fontSize={18} sx={{ ml: 5, paddingLeft: 15 }}>
        Apply for a role that suits you the most and join a team.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginLeft: 20, marginRight: 20, paddingTop: 10}}>
        <TeamCard />
        <TeamCard />
      </Box>
    </Box>
  );
};

export default Main;
