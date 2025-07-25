import React from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  InputAdornment,
} from "@mui/material";
import { motion } from "framer-motion";
import { Global, css } from "@emotion/react";
import map_dot from "../../assets/featuredcoaches/map-dot.png";

const Newsletter = () => {
  return (
    <>
      {/* Global Keyframes for clockwise and anti-clockwise border animation */}
      <Global
        styles={css`
          @keyframes clockwise {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes anticlockwise {
            0% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
        `}
      />

      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 8, md: 20 },
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundImage: `url(${map_dot})`,
          backgroundSize: {
            xs: "cover", // cover full area on small screens
            sm: "contain", // keep aspect ratio on medium+
            md: "contain",
          },
        }}
      >
        {/* Faint Background Text */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
            textTransform: "uppercase",
            color: "#85151C",
            fontWeight: 800,
            fontSize: { xs: "4rem", md: "5rem" },
            opacity: 0.07,
            whiteSpace: "pre-line",
            lineHeight: 1.2,
          }}
        >
          SUBSCRIBE TO OUR NEWSLETTER
        </Box>

        {/* Main Subscription Card */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <Paper elevation={5} sx={{ p: 5, borderRadius: 3 }}>
              <Typography
                variant="h6"
                sx={{ mb: 3, color: "neutral.black", fontWeight: 600 }}
              >
                Never miss out, Stay updated!
              </Typography>

              {/* Border Wrapper with Clockwise and Anti-Clockwise Layers */}
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "400px" },
                  borderRadius: "50px",
                  p: "2px",
                  zIndex: 0,
                  overflow: "hidden",
                  backgroundColor: "neutral.white",

                  // Outer rotating border (Clockwise)
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-4px",
                    left: "-4px",
                    right: "-4px",
                    bottom: "-4px",
                    borderRadius: "60px",
                    background: `#FF4939`,
                    animation: "clockwise 6s linear infinite",
                    zIndex: -2,
                  },

                  // Inner rotating border (Anti-clockwise)
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "4px",
                    left: "4px",
                    right: "4px",
                    bottom: "4px",
                    borderRadius: "40px",
                    background: `#FF4939`,
                    animation: "anticlockwise 6s linear infinite",
                    zIndex: -1,
                  },
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  type="email"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {/* <Button
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
                            "&:hover": {
                              backgroundColor: "primary.main",
                            },
                          }}
                        >
                          Join
                        </Button> */}
                        <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      background: "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)",
                      borderRadius: "999px",
                      px: 3,
                      py: 1,
                      m: 2,
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
                        background: "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
                        boxShadow: "0 6px 20px rgba(255, 105, 80, 0.5)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    Join
                  </Button>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    zIndex: 1,
                    backgroundColor: "white",
                    borderRadius: "50px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      paddingRight: 0,
                    },
                  }}
                />
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </>
  );
};

export default Newsletter;
