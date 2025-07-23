import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const JoinAsCoach = () => {
  return (
    <Box
      component="a"
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        height: 48,
        width: 160,
        textDecoration: "none",
        borderRadius: 1,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        backgroundColor: "neutral.main", // dark background initially
        "&:hover .bg-expand": {
          width: "85%",
          backgroundColor: "neutral.light", // slightly darker red
        },
        "&:hover .arrow-img": {
          transform: "scale(0.65)",
          left: 45,
        },
      }}
    >
      {/* Expanding Red Background */}
      <Box
        className="bg-expand"
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "calc(100% - 40px)",
          backgroundColor: "neutral.light",
          transition: "all 0.4s ease",
          zIndex: 1,
        }}
      />

      {/* Left Text Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 2,
          zIndex: 2,
          color: "neutral.black",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: 1,
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          JOIN
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",
            color: "primary.main",
            fontWeight: 500,
            lineHeight: 1.2,
          }}
        >
          as a Coach
        </Typography>
      </Box>

      {/* Arrow on Right */}
      <Box
        sx={{
          width: 40,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <ArrowRightAltIcon
          className="arrow-img"
          sx={{
            fontSize: 30,
            color: "neutral.black",
            position: "relative",
            left: 35,
            transition: "transform 0.3s ease, left 0.3s ease",
          }}
        />
      </Box>
    </Box>
  );
};

export default JoinAsCoach;
