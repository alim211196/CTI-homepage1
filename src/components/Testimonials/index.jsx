import React, { useMemo, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import image1 from "../../assets/featuredcoaches/image1.jpg";
import image2 from "../../assets/featuredcoaches/image2.jpeg";
import image4 from "../../assets/featuredcoaches/image4.jpg";
import image5 from "../../assets/featuredcoaches/image5.jpg";

const testimonialsData = [
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#FDCAD4",
    rotate: "-6deg",
    zIndex: 6,
  },
  {
    name: "Tom Williams",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#1E2EFF",
    rotate: "1deg",
    avatar: image5,
    zIndex: 5,
  },
  {
    name: "Peter Gilbert",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#FF8F32",
    rotate: "2deg",
    avatar: image2,
    zIndex: 4,
  },
  {
    name: "Liya Sen",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#FFD600",
    rotate: "-3deg",
    avatar: image1,
    zIndex: 3,
  },
  {
    name: "Charlie Smith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#FCE297",
    rotate: "3deg",
    avatar: image4,
    zIndex: 2,
  },
  {
    name: "Sara Will",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#AEE9F7",
    rotate: "0deg",
    zIndex: 1,
  },
];

const Testimonials = () => {
  const boxRef = useRef(null);

  const scatteredPositions = useMemo(() => {
    const radius = 200; // base distance from center
    const spread = 60; // additional max random spread
    const centerX = 500; // adjust based on box width or set dynamically
    const centerY = 180; // adjust based on box height or set dynamically

    return testimonialsData.map((_, i) => {
      const angle = (i / testimonialsData.length) * 2 * Math.PI; // spread around full circle
      const randomRadius = radius + Math.random() * spread;
      const left = centerX + Math.cos(angle) * randomRadius;
      const top = centerY + Math.sin(angle) * randomRadius;
      return { top, left };
    });
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{ position: "relative", minHeight: "100vh", py: 2 }}
    >
      <Box
        ref={boxRef}
        sx={{
          bgcolor: "#fce2978a",
          borderRadius: 4,
          height: "100%",
          minHeight: "600px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "primary.light",
            fontWeight: 600,
            position: "absolute",
            top: 24,
            left: 32,
            zIndex: 10,
          }}
        >
          Our
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            position: "absolute",
            top: 40,
            left: 32,
            zIndex: 15,
            color: "secondary.main",
            fontWeight: 600,
            transition: "all 0.3s ease",
            cursor: "pointer",
            display: "inline-block",
            "&:hover": {
              color: "primary.light",
              textShadow: "0 2px 6px rgba(56, 56, 56, 0.2)",
              transform: "scale(1.25)",
              textDecoration: "none",
            },
            fontFamily: "ui-serif",
          }}
        >
          Testimonials
        </Typography>

        {/* Cards */}
        {testimonialsData.map((item, index) => {
          const { top, left } = scatteredPositions[index];
          return (
            <motion.div
              key={index}
              drag
              dragConstraints={boxRef}
              style={{
                position: "absolute",
                top,
                left,
                zIndex: item.zIndex,
                transform: `rotate(${item.rotate})`,
                cursor: "grab",
              }}
            >
              <Paper
                elevation={6}
                sx={{
                  width: { xs: "260px", md: "300px" },
                  p: 3,
                  bgcolor: item.color,
                  borderRadius: 3,
                  color:
                    item.color === "#1E2EFF" || item.color === "#3134FF"
                      ? "#fff"
                      : "#000",
                }}
              >
                <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
                  “{item.text}”
                </Typography>
                {item.name && (
                  <Stack direction="row" alignItems="center" mt={2}>
                    <Avatar
                      src={item.avatar}
                      sx={{ width: 24, height: 24, mr: 1 }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        color:
                          item.color === "#1E2EFF" || item.color === "#3134FF"
                            ? "#fff"
                            : "#000",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Stack>
                )}
              </Paper>
            </motion.div>
          );
        })}
      </Box>
    </Container>
  );
};

export default Testimonials;
