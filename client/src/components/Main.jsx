import React, { useState, useEffect } from "react";
import { axiosInstance } from "../config/config";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { auto } from "@popperjs/core";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  margin: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Main = () => {
  const [teamList, setTeamList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState("");
  const navigate = useNavigate();
  const handleExpandClick = (teamId) => {
    if (selectedIndex === teamId) {
      setSelectedIndex("");
    } else {
      setSelectedIndex(teamId);
    }
  };
  const getAllTeams = () => {
    axiosInstance.get("/teams").then((res) => setTeamList(res.data));
  };
  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div data-testid="main">
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
            <Card
              key={team._id}
              sx={{ maxWidth: 500, padding: 1, background: "#F9F9F9" }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingRight: 1,
                    marginBottom: 3,
                  }}
                >
                  <Typography variant="h3" fontSize={50}>
                    {team.name}
                  </Typography>
                  <Typography variant="h6" color="#69A988">
                    #{team.challenge}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {team.description}
                </Typography>
                <Typography
                  variant="h5"
                  fontSize={25}
                  sx={{ marginTop: 3, marginBottom: 3 }}
                >
                  WE ARE LOOKING FOR
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Card
                    sx={{ background: "#82C8EF", padding: 5, borderRadius: 5 }}
                  >
                    {team.rolesNeeded[0]}
                  </Card>
                  <Card
                    sx={{ background: "#82C8EF", padding: 5, borderRadius: 5 }}
                  >
                    {team.rolesNeeded[1]}
                  </Card>
                  <Card
                    sx={{ background: "#82C8EF", padding: 5, borderRadius: 5 }}
                  >
                    {team.rolesNeeded[2]}
                  </Card>
                </Box>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  key={team._id}
                  expand={selectedIndex}
                  onClick={() => handleExpandClick(team._id)}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse
                in={team._id === selectedIndex}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  <Typography variant="h4">WHO WE ARE</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      marginTop: 3,
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <Card
                        variant="outlined"
                        sx={{
                          background: "#DADADA",
                          padding: 9,
                          borderRadius: 5,
                        }}
                      ></Card>
                      <Typography>{team.members[0].name}</Typography>
                      <Typography>{team.members[0].role}</Typography>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <Card
                        variant="outlined"
                        sx={{
                          background: "#DADADA",
                          padding: 9,
                          borderRadius: 5,
                        }}
                      ></Card>
                      <Typography>{team.members[1].name}</Typography>
                      <Typography>{team.members[1].role}</Typography>
                    </div>
                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                      <Card
                        variant="outlined"
                        sx={{
                          background: "#DADADA",
                          padding: 9,
                          borderRadius: 5,
                        }}
                      ></Card>
                      <Typography>{team.members[2].name}</Typography>
                      <Typography>{team.members[2].role}</Typography>
                    </div>
                    <Button
                      sx={{ margin: auto }}
                      size="large"
                      variant="contained"
                      onClick={() => {
                        navigate(`/teams/apply/${team._id}`);
                      }}
                    >
                      APPLY
                    </Button>
                  </Box>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Main;
