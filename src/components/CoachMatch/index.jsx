import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  useTheme,
} from "@mui/material";
import ConnectSection from "./ConnectSection";
import { AnimatePresence, motion } from "framer-motion";
import image1 from "../../assets/coachmatch/image1.jpg";
import image2 from "../../assets/coachmatch/image2.jpg";
import image3 from "../../assets/coachmatch/image3.jpg";
import image4 from "../../assets/coachmatch/image4.jpg";

const steps = [
  {
    number: "01",
    title: "AI matching with the world’s top coaches",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    buttonText: "Meet our coaches",
    image: image1,
  },
  {
    number: "02",
    title: "Coaching sessions anytime, anywhere",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    buttonText: "Discover our platform",
    image: image2,
  },
  {
    number: "03",
    title: "Personalize content for continuous growth",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    buttonText: "Discover our Academy",
    image: image3,
  },
  {
    number: "04",
    title: "Measure what matters",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    buttonText: "Start coaching",
    image: image4,
  },
];

const CoachMatch = () => {
  const [activeScroll, setActiveScroll] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveScroll(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.3,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          py: 10,
          background: `linear-gradient(
                        to bottom,
                        white 0%,
                        #fce2978a 30%,
                        #fce2978a 70%,
                        white 100%
                      )`,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="body1"
              sx={{
                color: "primary.light",
                fontWeight: 600,
              }}
            >
              Coach Match
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
              Level up your people development
            </Typography>
          </Box>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            {/* Left Section */}
            <Box
              sx={{ width: { xs: "100%", md: "40%" }, position: "relative" }}
            >
              <Stack spacing={6} m={8}>
                {steps.map((step, idx) => (
                  <Box
                    key={idx}
                    data-index={idx}
                    ref={(el) => (sectionRefs.current[idx] = el)}
                    mb={4}
                  >
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      {/* Step Number (Left) */}
                      <Box
                        sx={{
                          minWidth: 30,
                          height: 30,
                          backgroundColor: "secondary.main",
                          color: "neutral.white",
                          fontWeight: 600,
                          fontSize: 14,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mt: 0.5, // slight adjustment to align with title
                        }}
                      >
                        {step.number}
                      </Box>

                      {/* Content (Right) */}
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          sx={{ color: "primary.light", mb: 1, mt: -0.5 }}
                        >
                          {step.title}
                        </Typography>
                        <Typography variant="body1" mb={1.5}>
                          {step.description}
                        </Typography>
                        {step.buttonText !== "Start coaching" ? (
                          <Button
                            variant="outlined"
                            size="medium"
                            sx={{
                              backgroundColor: "transparent",
                              color: "#FF4939",
                              px: 3,
                              py: 1,
                              fontWeight: 600,
                              borderRadius: 8,
                              textTransform: "none",
                              borderColor: "#FF4939",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                background:
                                  "linear-gradient(135deg, #FCC380 0%, #fff6da 100%)",
                                borderColor: "#fcb96eff",
                              },
                            }}
                          >
                            {step.buttonText}
                          </Button>
                        ) : (
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
                            {step.buttonText}
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Right Section - Sticky Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "60%" },
                position: "sticky",
                top: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                px: 2,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={steps[activeScroll].image} // triggers animation on image change
                  src={steps[activeScroll].image}
                  alt={steps[activeScroll].title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: "100%",
                    maxWidth: 500,
                    borderRadius: 12,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  }}
                />
              </AnimatePresence>
            </Box>
          </Stack>
        </Container>
      </Box>
      <ConnectSection />
    </>
  );
};

export default CoachMatch;
