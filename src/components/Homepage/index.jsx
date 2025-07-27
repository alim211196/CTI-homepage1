import React from "react";
import Header from "../Common/Header";
import HeroSection from "./HeroSection";
import Footer from "../Common/Footer";
import Newsletter from "../Newsletter";
import { Box } from "@mui/material";
import AboutUs from "../AboutUs";
import FeaturedCoaches from "../FeaturedCoaches";
import ValueProposition from "../ValueProposition";
import Features from "../Features";
import CoachMatch from "../CoachMatch";
import Testimonials from "../Testimonials";
// import HeroSection1 from "./HeroSection1";
import ShuffleHero from "./ShuffleHero";
import Faqs from "../Faqs";
import ImageGridHero from "./ImageGridHero";

const Homepage = () => {
  return (
    <>
      <Header />
      {/* <ShuffleHero /> */}
      {/* <HeroSection /> */}
      <ImageGridHero />
      <Box id="about-us" sx={{ scrollMarginTop: "100px" }}>
        <AboutUs />
      </Box>
      <Box id="features" sx={{ scrollMarginTop: "100px" }}>
        <Features />
      </Box>
      <Box id="value-proposition" sx={{ scrollMarginTop: "100px" }}>
        <ValueProposition />
      </Box>
      <Box id="coaches" sx={{ scrollMarginTop: "100px" }}>
        <FeaturedCoaches />
      </Box>
      <Box id="coaches-match" sx={{ scrollMarginTop: "100px" }}>
        <CoachMatch />
      </Box>
      <Box id="testimonials" sx={{ scrollMarginTop: "100px" }}>
        <Testimonials />
      </Box>
      <Box id="faqs" sx={{ scrollMarginTop: "100px" }}>
        <Faqs />
      </Box>
      <Box id="newsletter" sx={{ scrollMarginTop: "100px" }}>
        <Newsletter />
      </Box>
      <Footer />
    </>
  );
};

export default Homepage;
