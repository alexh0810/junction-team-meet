import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TeamCard from "./TeamCard";

const Main = () => {
  const teamList = [
    {
      id: 1,
      name: "Pink Unicorn",
      challenge: "Fazer",
      description:
        "We are a team of three friends studying at Aalto University. We have several ideas for the upcoming project but we are sure that we would like to approach the topic from a user centered point of ciew. We aim to develop a feasible and useful idea that is based on empathy and understanding of human psychology.",
      rolesNeeded: ["Designer", "Engineer 1", "Engineer 2"],
      members: [
        { name: "Jennet", role: "UX Designer" },
        { name: "Andy", role: "Engineer" },
        { name: "Selena", role: "UI Designer" },
      ],
    },
    {
      id: 2,
      name: "Discoverers",
      challenge: "Fazer",
      description:
        "Our idea is to design a digital solution for mobile phones, which would focus on helping teenagers access free therapy sessions.",
      rolesNeeded: ["UX Designer", "UI Designer", "Engineer 2"],
      members: [
        { name: "Harry", role: "UX Designer" },
        { name: "Mordo", role: "Engineer" },
        { role: "Kale", role: "UI Designer" },
      ],
    },
  ];
  console.log(teamList);
  return (
    <Box sx={{ paddingBottom: 10, paddingTop: 2 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ margin: 5, mb: 1, paddingLeft: 15 }}
      >
        JOIN A TEAM
      </Typography>
      <Typography
        variant="subtitle2"
        color="#959595"
        fontSize={18}
        sx={{ ml: 5, paddingLeft: 15 }}
      >
        Apply for a role that suits you the most and join a team.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginLeft: 20,
          marginRight: 20,
          paddingTop: 10,
        }}
      >
        {teamList.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </Box>
    </Box>
  );
};

export default Main;
