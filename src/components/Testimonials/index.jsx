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
    color: "#FF4939",
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
  const boxRef = useRef(null); // 🔸 Ref for the green container

  const scatteredPositions = useMemo(() => {
    const centerX = 600;
    const centerY = 300;
    return testimonialsData.map(() => {
      const offsetX = (Math.random() - 0.9) * 300;
      const offsetY = (Math.random() - 0.9) * 200;
      return {
        top: centerY + offsetY,
        left: centerX + offsetX,
      };
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
          variant="h4"
          sx={{
            color: "primary.main",
            fontWeight: 600,
            position: "absolute",
            top: 24,
            left: 24,
            zIndex: 10,
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
              dragConstraints={boxRef} // 🔸 Constrain to green box
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
