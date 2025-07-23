import React from "react";
import { Box } from "@mui/material";
import blue_line from "../../assets/herosection/blue-line.svg";
import light_blue_line from "../../assets/herosection/light-blue-line.svg";
import orange_line from "../../assets/herosection/orange-line.svg";

const LineLoader = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 2, // Behind content
        opacity: 0.4, // Faint background effect
        pointerEvents: "none", // Allow clicks through
      }}
    >
      {/* Blue Line */}
      <Box
        className="blue-line-wrapper"
        sx={{
          flexDirection: "column",
          width: "55%",
          display: "flex",
          position: "absolute",
          inset: "auto 0% 0% auto",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={blue_line}
          alt="Blue Line"
          className="loader-line"
          loading="eager"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          className="blur-line"
          sx={{
            willChange: "width, height",
            width: "300%",
          }}
        />
      </Box>

      {/* Light Blue Line */}
      <Box
        className="lightblue-line-wrapper"
        sx={{
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "35%",
          display: "flex",
          position: "absolute",
          inset: "0% auto auto 15%",
        }}
      >
        <Box
          component="img"
          src={light_blue_line}
          alt="Light Blue Line"
          className="loader-line"
          loading="eager"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          className="blur-line top"
          sx={{
            willChange: "width, height",
            width: "300%",
          }}
        />
      </Box>

      {/* Orange Line */}
      <Box
        className="orange-line-wrapper"
        sx={{
          justifyContent: "flex-start",
          width: "16%",
          display: "flex",
          position: "absolute",
          inset: "8% auto 0% 0%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={orange_line}
          alt="Orange Line"
          className="loader-line is-orange-svg"
          loading="eager"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          className="blur-line-left"
          sx={{
            willChange: "width, height",
            height: "250%",
          }}
        />
      </Box>
    </Box>
  );
};

export default LineLoader;
