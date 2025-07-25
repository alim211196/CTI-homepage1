import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../../assets/logo.png";

// const navItems = [
//   { label: "About", href: "#about-us" },
//   { label: "Features", href: "#features" },
//   {
//     label: "Value Proposition",

//     href: "#value-proposition",
//   },
//   { label: "Coaches", href: "#coaches" },
//   { label: "Coach Match", href: "#coaches-match" },
//   { label: "Testimonials", href: "#testimonials" },
// ];

const navItems = [
  { label: "Home", href: "#" },
  { label: "For Coaches", href: "#" },
  { label: "Coach Levels", href: "#" },
  {
    label: "Find Coaches",
    href: "#",
  },
  { label: "Coach Match Quiz", href: "#" },
  { label: "Organizational Needs", href: "#" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        pt: 9,
        textAlign: "center",
        color: "white",
        position: "relative",
        "--primary-light": "34 100% 70%",
        background: `
          linear-gradient(
            to top,
            hsl(var(--primary-light)) 0%,
            hsl(var(--primary-light) / 0.8) 30%,
            hsl(var(--primary-light) / 0.4) 60%,
            white 100%
          )
    `,
      }}
    >
      {/* Background overlay if needed */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.6)",
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        {/* Logo */}
        <Box sx={{ maxWidth: 300, mx: "auto", mb: 4 }}>
          <Link href="/">
            <Box
              component="img"
              src={logo}
              alt="footer-logo"
              sx={{ width: "100%", mx: "auto" }}
            />
          </Link>
        </Box>

        {/* Description */}
        <Box
          sx={{
            borderBottom: "1px solid #FF4939",
            maxWidth: { xs: "100%", md: "60%" },
            mx: "auto",
            mb: 6,
          }}
        >
          <Typography variant="body2" sx={{ mb: 3, color: "secondary.main" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={1} justifyContent="center" pb={3}>
            {[
              FacebookIcon,
              TwitterIcon,
              GoogleIcon,
              InstagramIcon,
              YouTubeIcon,
            ].map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  bgcolor: "secondary.main",
                  color: "#fff",
                  "&:hover": { bgcolor: "primary.light" },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Stack>
        </Box>

        {/* Footer Menu */}
        <Box sx={{ pb: 6 }}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            sx={{
              "& a": {
                color: "secondary.main",
                textDecoration: "none",
                fontSize: "0.85rem",
              },
            }}
          >
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.label}
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Copyright */}
        <Typography
          variant="caption"
          sx={{ pb: 6, display: "block", opacity: 0.7, color: "primary.light" }}
        >
          &copy; {new Date().getFullYear()} CTI. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
