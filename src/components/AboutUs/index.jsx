import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, Container, Grid } from "@mui/material";
import bg_image from "../../assets/aboutus/bg_image.png";
import image1 from "../../assets/aboutus/image1.png";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const stats = [
  { label: "Features", value: 80 },
  { label: "Coaches", value: 100 },
  { label: "Organizations", value: 120 },
];

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren", // wait before animating children
      staggerChildren: 0.2, // delay children (if multiple)
    },
  },
};

const globalWordVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const AboutUs = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, 30);
    });

    const stopIntervals = setInterval(() => {
      stats.forEach((stat, i) => {
        if (counts[i] >= stat.value) {
          clearInterval(intervals[i]);
        }
      });
    }, 100);

    return () => {
      intervals.forEach(clearInterval);
      clearInterval(stopIntervals);
    };
  }, [counts]);

  return (
    <Box
      sx={{
        position: "relative",
        color: "black",
        background: `linear-gradient(
      to bottom,
      #fce2978a 0%,
      hsl(34 100% 70% / 0.5) 50%,
      white 100%
    )`,
        py: { xs: 4, md: 4 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left: Images & Stats */}
          <MotionBox
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            sx={{
              flex: 1,
              width: "100%",
              position: "relative",
              minHeight: { xs: 380, sm: 480, md: 520 },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{ width: "100%", textAlign: "center", position: "relative" }}
            >
              {/* Background image */}
              <Box
                component="img"
                src={bg_image}
                alt="bg"
                sx={{
                  width: "100%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                  opacity: 0.3,
                }}
              />

              {/* Foreground image */}
              <Box
                component="img"
                src={image1}
                alt="main"
                sx={{
                  width: "70%",
                  zIndex: 1,
                  position: "relative",
                }}
              />

              {/* Stats Box */}
              <Box
                sx={{
                  mt: -3,
                  backgroundColor: "#fff",
                  p: 1,
                  borderRadius: 5,
                  boxShadow: 3,
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  flexWrap: "wrap",
                  zIndex: 2,
                  position: "relative",
                }}
              >
                {stats.map((item, idx) => (
                  <Box key={idx} textAlign="center" py={2}>
                    <Typography
                      variant="h3"
                      fontWeight="bold"
                      sx={{ color: "secondary.main" }}
                    >
                      {counts[idx]}
                      <span style={{ color: "#85151C" }}>+</span>
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: 600,
                        color: "primary.light",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </MotionBox>

          {/* Right: Text & CTA */}
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            sx={{ flex: 1, width: "100%" }}
          >
            <Box
              sx={{
                width: "100%",
                textAlign: { xs: "center", md: "left" },
                px: 2,
              }}
            >
              <Box pb={3}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "primary.light",
                    fontWeight: 600,
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
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
                  START{" "}
                  <Box
                    component={motion.span}
                    variants={globalWordVariants}
                    sx={{
                      display: "inline-block",
                      color: "primary.main",
                      fontFamily: "ui-serif",
                    }}
                  >
                    GLOBAL
                  </Box>{" "}
                  CONFERENCE
                </Typography>
              </Box>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                alignItems="center"
                justifyContent={{ xs: "center", md: "flex-start" }}
                pb={2}
              >
                <Typography
                  variant="body2"
                  sx={{ borderRight: { sm: "1px solid #000" }, pr: 2 }}
                >
                  <i className="fa fa-calendar-o" style={{ marginRight: 4 }} />
                  22-31 JULY 2025
                </Typography>
                <Typography variant="body2">
                  <i className="fa fa-map-marker" style={{ marginRight: 4 }} />
                  UAE
                </Typography>
              </Stack>

              <Typography variant="body1" pb={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  {/* <Button
                  fullWidth
                  variant="contained"
                  size="medium"
                  sx={{
                    backgroundColor: "primary.light",
                    color: "neutral.white",
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    borderRadius: 8,
                    m: 2,
                    border: "1px solid #fff",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  Register Now
                </Button> */}

                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      background:
                        "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)",
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
                    Register Now
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <Button
                  fullWidth
                  variant="contained"
                  size="medium"
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "neutral.white",
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    borderRadius: 8,
                    m: 2,
                    border: "1px solid #fff",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  VIEW SCHEDULE
                </Button> */}

                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      background:
                        "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)",
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
                    VIEW SCHEDULE
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUs;
