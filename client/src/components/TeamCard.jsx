import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
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

const TeamCard = ({ team }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500, padding: 1, background: "#F9F9F9" }}>
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
          <Card sx={{ background: "#82C8EF", padding: 5, borderRadius: 5 }}>
            {team.rolesNeeded[0]}
          </Card>
          <Card sx={{ background: "#82C8EF", padding: 5, borderRadius: 5 }}>
            {team.rolesNeeded[1]}
          </Card>
          <Card sx={{ background: "#82C8EF", padding: 5, borderRadius: 5 }}>
            {team.rolesNeeded[2]}
          </Card>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                sx={{ background: "#DADADA", padding: 9, borderRadius: 5 }}
              ></Card>
              <Typography>{team.members[0].name}</Typography>
              <Typography>{team.members[0].role}</Typography>
            </div>
            <div style={{ textAlign: "center" }}>
              <Card
                variant="outlined"
                sx={{ background: "#DADADA", padding: 9, borderRadius: 5 }}
              ></Card>
              <Typography>{team.members[1].name}</Typography>
              <Typography>{team.members[1].role}</Typography>
            </div>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <Card
                variant="outlined"
                sx={{ background: "#DADADA", padding: 9, borderRadius: 5 }}
              ></Card>
              <Typography>{team.members[2].name}</Typography>
              <Typography>{team.members[2].role}</Typography>
            </div>
            <Button
              sx={{ margin: auto }}
              size="large"
              variant="contained"
              onClick={() => {
                navigate(`/apply`);
              }}
            >
              APPLY
            </Button>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default TeamCard;
