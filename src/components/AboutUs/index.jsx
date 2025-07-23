import React from "react";
import { Box, Stack, Typography, Button, Container, Grid } from "@mui/material";
import bg_image from "../../assets/aboutus/bg_image.png";
import image1 from "../../assets/aboutus/image1.png";

const AboutUs = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "black",
        // background: `radial-gradient(ellipse at bottom center, #85151C 0%, #CB1C1B 25%, #FF4939 50%, #FCC380 75%, #FCE297 100%)`,
        "--primary-light": "34 100% 70%",
        background: `radial-gradient(
          ellipse at bottom center,
          hsl(var(--primary-light)) 0%,
          hsl(var(--primary-light) / 0) 100%
        )`,
        py: { xs: 8, md: 10 },
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
              {[
                { label: "Features", value: "20+" },
                { label: "Coaches", value: "70+" },
                { label: "Organizations", value: "49+" },
              ].map((item, idx) => (
                <Box key={idx} textAlign="center" py={2}>
                  <Typography variant="h3" fontWeight="bold" color="black">
                    {item.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ textTransform: "uppercase", fontWeight: 600 }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right: Text & CTA */}
          <Box
            sx={{
              width: "100%",
              textAlign: { xs: "center", md: "left" },
              px: 2,
            }}
          >
            <Box pb={3}>
              <Typography variant="h5" sx={{ color: "primary.main" }} pb={2}>
                About Us
              </Typography>
              <Typography
                variant="h3"
                sx={{ color: "secondary.main" }}
                fontWeight="bold"
              >
                START{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
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
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
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
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUs;
