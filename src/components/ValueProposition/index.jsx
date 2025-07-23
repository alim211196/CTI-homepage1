import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import JoinAsCoach from "../Common/JoinAsCoach";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import HireCoach from "../Common/HireCoach";
import image1 from "../../assets/valueproposition/image1.jpg";
import image2 from "../../assets/valueproposition/image2.jpg";

const leftContent = [
  {
    title: "Join a community of owners",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Secure your career and your future",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Keep more of your money",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const rightContent = [
  {
    title: "Hire top, vetted AI experts",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Deliver projects on time & budget",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Transparent fees",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const itemVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ValueProposition = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 6, sm: 8, md: 10 },
        mb: { xs: 0, sm: 0, md: 60 },
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight={700}>
            Value{" "}
            <Box component="span" color="primary.light">
              Proposition
            </Box>
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 4 }}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          {/* Left Section */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "700px",
            }}
          >
            {/* Image Wrapper */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                borderRadius: "12px",
              }}
            >
              {/* Zoomable Image */}
              <motion.img
                src={image1}
                alt={"For Coaches"}
                width="100%"
                style={{
                  borderRadius: "12px",
                  display: "block",
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.25 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.2)",
                  borderRadius: "12px",
                  pointerEvents: "none",
                }}
              />

              {/* Top-left Label */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  bgcolor: "#fff",
                  px: 2,
                  py: 0.5,
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "text.primary",
                  zIndex: 2,
                  boxShadow: 2,
                }}
              >
                For Coaches
              </Box>
            </Box>

            {/* JoinAsCoach & Card for smaller screens - stacked */}
            {!isMdUp && (
              <>
                <Box mt={4}>
                  <JoinAsCoach />
                </Box>
                <Box mt={4}>
                  <Paper elevation={6} sx={{ p: 4 }}>
                    {leftContent.map((item, idx) => (
                      <motion.div
                        key={idx}
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={itemVariantsLeft}
                      >
                        <Box mb={4}>
                          <Box
                            sx={{
                              backgroundColor: "#fce2978a",
                              borderRadius: "6px",
                              alignItems: "center",
                              padding: "14px",
                              display: "flex",
                              mb: 2,
                            }}
                          >
                            <CheckIcon sx={{ color: "neutral.black" }} />
                            <Box sx={{ width: "10px" }} />
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 600,
                                fontSize: "16px",
                                color: "neutral.black",
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {item.text}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Paper>
                </Box>
              </>
            )}

            {/* Overlapping Elements for larger screens only */}
            {isMdUp && (
              <>
                <Box
                  sx={{
                    position: "absolute",
                    top: "75%",
                    left: "45px",
                    zIndex: 2,
                  }}
                >
                  <JoinAsCoach />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: "123%",
                    left: "244px",
                    transform: "translateY(-50%)",
                    width: { xs: "90%", md: "400px" },
                    zIndex: 1,
                  }}
                >
                  <Paper elevation={6} sx={{ p: 4 }}>
                    {leftContent.map((item, idx) => (
                      <motion.div
                        key={idx}
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={itemVariantsLeft}
                      >
                        <Box mb={4}>
                          <Box
                            sx={{
                              backgroundColor: "#fce2978a",
                              borderRadius: "6px",
                              alignItems: "center",
                              padding: "14px",
                              display: "flex",
                              mb: 2,
                            }}
                          >
                            <CheckIcon sx={{ color: "neutral.black" }} />
                            <Box sx={{ width: "10px" }} />
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 600,
                                fontSize: "16px",
                                color: "neutral.black",
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {item.text}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Paper>
                </Box>
              </>
            )}
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "700px",
            }}
          >
            {/* Image Wrapper */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                borderRadius: "12px",
              }}
            >
              {/* Zoomable Image */}
              <motion.img
                src={image2}
                alt={"For Organizations"}
                width="100%"
                style={{
                  borderRadius: "12px",
                  display: "block",
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.25 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.2)",
                  borderRadius: "12px",
                  pointerEvents: "none",
                }}
              />

              {/* Top-left Label */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  bgcolor: "#fff",
                  px: 2,
                  py: 0.5,
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "text.primary",
                  zIndex: 2,
                  boxShadow: 2,
                }}
              >
                For Organizations
              </Box>
            </Box>

            {/* HireCoach  & Card for smaller screens - stacked */}
            {!isMdUp && (
              <>
                <Box mt={4}>
                  <HireCoach />
                </Box>
                <Box mt={4}>
                  <Paper elevation={6} sx={{ p: 4 }}>
                    {rightContent.map((item, idx) => (
                      <motion.div
                        key={idx}
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={itemVariantsRight}
                      >
                        <Box mb={4}>
                          <Box
                            sx={{
                              backgroundColor: "#ff4a39a9",
                              borderRadius: "6px",
                              alignItems: "center",
                              padding: "14px",
                              display: "flex",
                              mb: 2,
                            }}
                          >
                            <CheckIcon sx={{ color: "neutral.white" }} />
                            <Box sx={{ width: "10px" }} />
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 600,
                                fontSize: "16px",
                                color: "neutral.white",
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {item.text}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Paper>
                </Box>
              </>
            )}

            {/* Overlapping Elements for larger screens only */}
            {isMdUp && (
              <>
                <Box
                  sx={{
                    position: "absolute",
                    top: "75%",
                    right: "45px",
                    zIndex: 2,
                  }}
                >
                  <HireCoach />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: "123%",
                    right: "244px",
                    transform: "translateY(-50%)",
                    width: { xs: "90%", md: "400px" },
                    zIndex: 1,
                  }}
                >
                  <Paper elevation={6} sx={{ p: 4 }}>
                    {rightContent.map((item, idx) => (
                      <motion.div
                        key={idx}
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={itemVariantsRight}
                      >
                        <Box mb={4}>
                          <Box
                            sx={{
                              backgroundColor: "#ff4a39a9",
                              borderRadius: "6px",
                              alignItems: "center",
                              padding: "14px",
                              display: "flex",
                              mb: 2,
                            }}
                          >
                            <CheckIcon sx={{ color: "neutral.white" }} />
                            <Box sx={{ width: "10px" }} />
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 600,
                                fontSize: "16px",
                                color: "neutral.white",
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {item.text}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Paper>
                </Box>
              </>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ValueProposition;
