import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import CoachWrapper from "./CoachWrapper";

const ConnectSection = () => {
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const [hasAnimated, setHasAnimated] = useState(false); // Track animation status
  const [showCoach, setShowCoach] = useState(false); // Show coach after animation

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      // Start animations
      leftControls.start({ width: "48vw", transition: { duration: 2 } });
      rightControls.start({ width: "48vw", transition: { duration: 2 } });

      // Delay showing coach section until after arrows meet
      setTimeout(() => setShowCoach(true), 2000);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      // Reset on scroll out
      leftControls.start({ width: 0, transition: { duration: 2 } });
      rightControls.start({ width: 0, transition: { duration: 2 } });

      setTimeout(() => setShowCoach(false), 500); // fade out faster
      setHasAnimated(false);
    }
  }, [isInView, hasAnimated, leftControls, rightControls]);

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={0}
          sx={{ textAlign: "center", position: "relative" }}
          mb={4}
        >
          {/* Left Side */}
          <Box sx={{ flex: 1, textAlign: "left", position: "relative" }}>
            <Typography variant="body1" fontWeight="500" color="text.secondary">
              we connect the
            </Typography>

            <Stack direction="row" alignItems="center">
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "#85151C" }}
                  component="span"
                >
                  Organizations
                </Typography>

                {/* Animated Line with Arrow */}
                <Box sx={{ position: "relative", mt: 1 }}>
                  <motion.div
                    animate={leftControls}
                    initial={{ width: 0 }}
                    style={{
                      height: 2,
                      backgroundColor: "#85151C",
                      position: "relative",
                    }}
                  >
                    {/* Right-facing arrow */}
                    <Box
                      sx={{
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 0,
                        height: 0,
                        borderTop: "6px solid transparent",
                        borderBottom: "6px solid transparent",
                        borderLeft: "8px solid #85151C",
                      }}
                    />
                  </motion.div>
                </Box>
              </Box>
            </Stack>
          </Box>

          {/* Right Side */}
          <Box sx={{ flex: 1, textAlign: "right", position: "relative" }}>
            <Typography variant="body1" fontWeight="500" color="text.secondary">
              with the best
            </Typography>

            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "#FF4939", display: "inline-block" }}
                  component="span"
                >
                  Coaches
                </Typography>

                {/* Animated Line with Arrow */}
                <Box sx={{ position: "relative", mt: 1 }}>
                  <motion.div
                    animate={rightControls}
                    initial={{ width: 0 }}
                    style={{
                      height: 2,
                      backgroundColor: "#FF4939",
                      position: "relative",
                    }}
                  >
                    {/* Left-facing arrow */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 0,
                        height: 0,
                        borderTop: "6px solid transparent",
                        borderBottom: "6px solid transparent",
                        borderRight: "8px solid #FF4939",
                      }}
                    />
                  </motion.div>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
        {/* Coach Section Reveal with Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={showCoach ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          mt={4}
        >
          {showCoach && <CoachWrapper />}
        </motion.div>
      </Container>
    </Box>
  );
};

export default ConnectSection;
