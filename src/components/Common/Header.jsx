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
  Menu,
  MenuItem,
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
import AIButton from "../AIButton";
import logo from "../../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grow from "@mui/material/Grow";

const navItems = [
  { label: "Find A Coach", icon: <HomeIcon />, href: "#" },
  { label: "How it works", icon: <InfoIcon />, href: "#" },
  {
    label: "About Us",
    icon: <EmojiObjectsIcon />,
    href: "#",
  },
  { label: "FAQ", icon: <GroupIcon />, href: "#" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{ width: "200px", height: "auto" }}
              />
            </Box>

            {/* Navigation Menu */}
            {!isMobile ? (
              <>
                <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Box
                    onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                    onMouseLeave={() => setAnchorEl(null)}
                    onClick={(e) => setAnchorEl(e.currentTarget)} // Also supports click
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      sx={{
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: isSticky ? "neutral.black" : "primary.light",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        "&:hover": {
                          color: "primary.light",
                        },
                      }}
                    >
                      Coaching
                      <KeyboardArrowDownIcon fontSize="small" />
                    </Typography>

                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={() => setAnchorEl(null)}
                      TransitionComponent={Grow} // <-- animation here
                      MenuListProps={{
                        onMouseEnter: () => setAnchorEl(anchorEl),
                        onMouseLeave: () => setAnchorEl(null),
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      sx={{ top: "30px" }}
                    >
                      <MenuItem onClick={() => setAnchorEl(null)}>
                        Individual Coaching
                      </MenuItem>
                      <MenuItem onClick={() => setAnchorEl(null)}>
                        Coaching For Organization
                      </MenuItem>
                      <MenuItem onClick={() => setAnchorEl(null)}>
                        Train To Become A Coach
                      </MenuItem>
                    </Menu>
                  </Box>
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
                  <AIButton text={"Join As A Coach"} />
                  <AIButton text={"Hire A Coach"} />
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
            {/* <JoinAsCoach />
            <HireCoach /> */}
            <AIButton text={"Join As A Coach"} />
            <AIButton text={"Hire A Coach"} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
