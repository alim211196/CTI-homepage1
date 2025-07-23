import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import image1 from "../../assets/features/image1.jpg";
import image2 from "../../assets/features/image2.jpg";
import image3 from "../../assets/features/image3.jpg";
import image4 from "../../assets/features/image4.jpg";
import image5 from "../../assets/features/image5.jpg";

const platform_features = [
  {
    image: image1,
    title: "Global Certificate",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    image: image2,
    title: "Best Programm",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    image: image3,
    title: "Quiz Match",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    image: image4,
    title: "Organization Support Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    image: image5,
    title: "Expert Coaches",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];

const Features = () => {
  const [revealedIndex, setRevealedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.2, // You can tune this
  });

  useEffect(() => {
    if (!isInView) return;

    setRevealedIndex(-1); // Reset for fresh animation

    const interval = setInterval(() => {
      setRevealedIndex((prev) => {
        if (prev < platform_features.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isInView]);

  const activeFeature =
    platform_features[hoveredIndex !== null ? hoveredIndex : revealedIndex] ||
    platform_features[0]; // fallback

  return (
    <Box ref={ref} sx={{ backgroundColor: "#fce2978a", py: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
        >
          {/* Left Content */}
          <Box flex={1}>
            <Typography
              variant="overline"
              sx={{ color: "primary.main", textTransform: "uppercase" }}
            >
              Platform Features
            </Typography>

            {activeFeature && (
              <Box
                key={activeFeature.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ mt: 1, color: "secondary.main" }}
                >
                  {activeFeature.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 2, mb: 4, maxWidth: 460 }}
                >
                  {activeFeature.desc}
                </Typography>
              </Box>
            )}

            {/* <Button
              variant="contained"
              sx={{
                px: 3,
                py: 1.2,
                borderRadius: 8,
                fontWeight: 600,
                backgroundColor: "primary.light",
                color: "white",
                "&:hover": { backgroundColor: "primary.main" },
              }}
            >
              Find your integrations
            </Button> */}

            <Button
              variant="contained"
              sx={{
                color: "white",
                background: "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)",
                borderRadius: "999px",
                px: 4,
                py: 1.2,
                fontWeight: 600,
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                },
                textTransform: "none",
                boxShadow: "0 4px 14px rgba(255, 105, 80, 0.4)",
                transition: "all 0.4s ease",
                transform: "scale(1)",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
                  boxShadow: "0 6px 20px rgba(255, 105, 80, 0.5)",
                  transform: "scale(1.05)",
                },
              }}
            >
              Ask Question
            </Button>
          </Box>

          {/* Image Grid */}
          <Box flex={1} display="flex" justifyContent="center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.3, // delay between each avatar
                  },
                },
              }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: 32,
                maxWidth: 400,
              }}
            >
              {platform_features.map((item, index) => {
                const isVisible = index <= revealedIndex;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                      isVisible
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.5 }
                    }
                    transition={{
                      duration: 0.25,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    whileHover={{ scale: 1.2 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Avatar
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: { xs: 70, sm: 90, md: 100 },
                        height: { xs: 70, sm: 90, md: 100 },
                        border: "2px solid",
                        borderColor: "primary.light",
                        boxShadow: "0 0 0 6px rgba(203,28,27,0.2)",
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Features;
