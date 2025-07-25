import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Link,
  useTheme,
  useMediaQuery,
  Tooltip,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import GroupIcon from "@mui/icons-material/Group";
import ForumIcon from "@mui/icons-material/Forum";
import HelpIcon from "@mui/icons-material/Help";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import JoinAsCoach from "./JoinAsCoach";
import HireCoach from "./HireCoach";
import logo from "../../assets/logo.png";

// const navItems = [
//   { label: "Home", icon: <HomeIcon />, href: "#" },
//   { label: "About", icon: <InfoIcon />, href: "#about-us" },
//   { label: "Features", icon: <StarIcon />, href: "#features" },
//   {
//     label: "Value Proposition",
//     icon: <EmojiObjectsIcon />,
//     href: "#value-proposition",
//   },
//   { label: "Coaches", icon: <GroupIcon />, href: "#coaches" },
//   { label: "Coach Match", icon: <HelpIcon />, href: "#coaches-match" },
//   { label: "Testimonials", icon: <ForumIcon />, href: "#testimonials" },
//   { label: "Newsletter", icon: <MailOutlineIcon />, href: "#newsletter" },
// ];

const navItems = [
  { label: "Home", icon: <HomeIcon />, href: "#" },
  { label: "For Coaches", icon: <InfoIcon />, href: "#" },
  { label: "Coach Levels", icon: <StarIcon />, href: "#" },
  {
    label: "Find Coaches",
    icon: <EmojiObjectsIcon />,
    href: "#",
  },
  { label: "Coach Match Quiz", icon: <GroupIcon />, href: "#" },
  { label: "Organizational Needs", icon: <HelpIcon />, href: "#" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={isSticky ? 2 : 0}
        sx={{
          backgroundColor: isSticky ? "#ffffff" : "#fce2978a",
          color: isSticky ? "#121212" : "#121212",
          borderBottom: "none",
          boxShadow: isSticky ? "0px 2px 8px rgba(0,0,0,0.05)" : "none",
          transition: "all 0.3s ease-in-out",
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 0.5 }}>
            {/* Logo */}
            <Box
              component="a"
              href="/"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box component="img" src={logo} alt="Logo" sx={{ width: "200px", height: "auto" }} />
            </Box>

            {/* Navigation Menu */}
            {!isMobile ? (
              <>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      underline="none"
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: isSticky ? "neutral.black" : "primary.light",
                        "&:hover": {
                          color: "primary.light",
                        },
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <JoinAsCoach />
                  <HireCoach />
                </Box>
              </>
            ) : (
              <IconButton onClick={toggleDrawer} sx={{ ml: 1 }}>
                <MenuIcon
                  sx={{ fontSize: 28, color: isSticky ? "#000" : "#121212" }}
                />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{ sx: { width: 260 } }}
      >
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6">Menu</Typography>
          <List>
            {navItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component="a"
                href={item.href}
                onClick={toggleDrawer}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
            <JoinAsCoach />
            <HireCoach />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
