import React from "react";
import { Box, Typography, Avatar, Stack, Paper } from "@mui/material";
import karolina from "../../assets/coachmatch/karolina.jpg";
import matthew from "../../assets/coachmatch/matthew.jpg";
import damian from "../../assets/coachmatch/damian.jpg";
import anna from "../../assets/coachmatch/anna.jpg";
import checkmark from "../../assets/coachmatch/checkmark.svg";

const people = [
  {
    name: "Karolina",
    position: "AI Architect",
    img: karolina,
  },
  {
    name: "Matthew",
    position: "AI Developer",
    img: matthew,
  },
  {
    name: "Damian",
    position: "AI Specialist",
    img: damian,
  },
  {
    name: "Anna",
    position: "AI Engineer",
    img: anna,
  },
];

const CoachWrapper = () => {
  return (
    <Box
      className="coach-wrapper"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 2,
        justifyContent: "center",
        mt: 15,
      }}
    >
      {people.map((person, index) => {
        const isHighlighted = index === 1;

        return (
          <Paper
            elevation={isHighlighted ? 12 : 6}
            key={index}
            sx={{
              p: 4,
              bgcolor: isHighlighted ? "#FCE297" : "background.paper",
              transform: isHighlighted ? "translateY(-30px)" : "none",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Box
              className="coach-wrapper_item"
              sx={{
                position: "relative",
                width: isHighlighted ? 100 : 80,
                textAlign: "center",
              }}
            >
              <Avatar
                src={person.img}
                alt={person.name}
                sx={{ width: 60, height: 60, mx: "auto" }}
                className="home-talented_person"
              />
              <Box
                component="img"
                src={checkmark}
                alt="checkmark"
                className="home-talented_checkmark"
                sx={{
                  width: 16,
                  height: 16,
                  position: "absolute",
                  top: 0,
                  right: 5,
                }}
              />
              <Typography
                className="home-talented_person-name"
                variant="subtitle2"
                fontWeight={600}
                mt={1}
              >
                {person.name}
              </Typography>
              <Typography
                className="home-talented_person-position"
                variant="caption"
                color="text.secondary"
              >
                {person.position}
              </Typography>
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
};

export default CoachWrapper;
