import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useGetTeam } from "../hooks/useGetTeam";

const ApplyMain = () => {
  const [hasNotSentApplication, setHasNotSentApplication] = useState(true);
  const [message, setMessage] = useState("");
  let { teamId } = useParams();
  console.log(teamId);
  const team = useGetTeam(teamId);
  console.log(team);

  const sendApplication = () => {
    setHasNotSentApplication(false);
    axios
      .post(`http://localhost:5500/teams/apply/${teamId}`, {
        teamId: teamId,
        user_id: "123",
        message: message,
      })
      .then((res) => console.log(res.data));
  };

  return (
    team && (
      <Box>
        <Box sx={{ ml: 10, mt: 2, paddingLeft: 15 }}>
          <Typography variant="h2" component="h2" sx={{ fontWeight: "400" }}>
            APPLY
          </Typography>
          <Typography variant="subtitle2" color="#959595" fontSize={18}>
            Send your profile information and motivation message to
            {team.name}.
          </Typography>
        </Box>
        <Box sx={{ padding: 5 }}>
          <Card
            sx={{
              background: "#F9F9F9",
              maxWidth: 1000,
              margin: "auto",
              maxHeight: "100%",
              borderRadius: 5,
              padding: 2,
            }}
          >
            <CardContent>
              <Typography variant="h3" fontSize={50}>
                {team.name}
              </Typography>
              <Typography variant="h6" color="#69A988">
                #{team.challenge}
              </Typography>
              {hasNotSentApplication ? (
                <div>
                  <Box marginTop={2}>
                    <Typography variant="body1" color="#5E5E5E">
                      Why do you want to apply for the position of{" "}
                      {team.rolesNeeded[0]} and work with {team.name}?
                    </Typography>
                    <Typography variant="body1" color="#5E5E5E">
                      Max. 400 words
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      onChange={(e) => setMessage(e.target.value)}
                      fullWidth
                      multiline
                      minRows={10}
                      sx={{ marginTop: 2 }}
                    />
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{ marginTop: 2 }}
                    >
                      *Your profile information is automatically included in the
                      application.
                    </Typography>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => {
                        sendApplication();
                      }}
                      sx={{
                        background: "#A3F7CB",
                        color: "#000000",
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginTop: 2,
                      }}
                    >
                      SEND
                    </Button>
                  </Box>
                </div>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CheckCircleIcon
                    variant="filled"
                    sx={{ color: "#A3F7CB", fontSize: 100, mt: 5, mb: 2 }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "400", color: "#454545", mb: 10 }}
                  >
                    Form sent successfully
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "600" }}>
                    Please wait for the team’s response in your mail.
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
          <Box
            sx={{
              display: "flex",
              width: "85%",
              justifyContent: "flex-end",
              padding: 2,
            }}
          ></Box>
        </Box>
      </Box>
    )
  );
};

export default ApplyMain;
