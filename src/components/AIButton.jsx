import React from "react";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AIButton = ({text}) => {
  return (
    <Button
      disableRipple
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        fontWeight: 500,
        px: 3,
        py: 1.5,
        borderRadius: 1,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          backgroundColor: "transparent", // Prevent default MUI hover bg
        },
        "&:active": {
          transform: "scale(0.95)",
        },
      }}
    >
      <Box component="span" sx={{ position: "relative", zIndex: 1 }}>
        {text}
      </Box>
      <MotionBox
        initial={{ left: 0 }}
        animate={{ left: "-300%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 4,
          ease: "linear",
        }}
        sx={{
          position: "absolute",
          zIndex: 0,
          top: 0,
          bottom: 0,
          left: 0,
          width: "400%",
          background:
            "linear-gradient(to right, #8f14e6, #e614dc, #e61453, #e68414, #e6e614)",
        }}
      />
    </Button>
  );
};

export default AIButton;
