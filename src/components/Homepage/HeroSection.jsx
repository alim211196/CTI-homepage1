import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LineLoader from "./LineLoader";
import image1 from "../../assets/herosection/image1.jpg";
import image2 from "../../assets/herosection/image2.jpg";
import image3 from "../../assets/herosection/image3.jpg";
import image4 from "../../assets/herosection/image4.jpg";
import image5 from "../../assets/herosection/image5.jpg";
import image7 from "../../assets/herosection/image7.jpg";
import image8 from "../../assets/herosection/image8.jpg";
import image9 from "../../assets/herosection/image9.jpeg";

const images = [
  { id: 1, src: image1 },
  { id: 2, src: image2 },
  { id: 3, src: image3 },
  { id: 4, src: image4 },
  { id: 5, src: image5 },
  { id: 6, src: image7 },
  { id: 7, src: image8 },
  { id: 8, src: image9 },
];

const HeroSection = () => {
  const [scale, setScale] = useState(2);

  useEffect(() => {
    let isScrollLocked = false;

    const handleScroll = () => {
      const section = document.getElementById("hero-trigger");
      if (!section) return;

      const scrollTop = window.scrollY;
      const offsetTop = section.offsetTop;
      const height = section.offsetHeight;

      const progress = Math.min(
        Math.max((scrollTop - offsetTop) / height, 0),
        1
      );
      const minScale = 2;
      const maxScale = 15;
      const newScale = minScale + (maxScale - minScale) * progress;
      setScale(newScale);

      const unlockThreshold = 1;

      if (progress < unlockThreshold) {
        if (!isScrollLocked) {
          // Lock scroll by keeping user inside the section
          const lockPosition = offsetTop + height * 0.99;
          if (scrollTop > lockPosition) {
            window.scrollTo({ top: lockPosition, behavior: "auto" });
          }
          isScrollLocked = true;
        }
      } else {
        isScrollLocked = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const progress = (scale - 2) / (15 - 2);
  const lerp = (a, b) => a + (b - a) * progress;

  return (
    <>
      <Box
        id="hero-trigger"
        sx={{
          height: "600vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            bgcolor: "#fce2978a",
          }}
        >
          <Container maxWidth="lg">
            <LineLoader />

            {/* Background Grid Image Layer */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignContent: "center",
                zIndex: 3,
              }}
            >
              {images.map((image, index) => {
                const initialOffset = [
                  { x: -30, y: -44 },
                  { x: 15, y: -20 },
                  { x: -10, y: -70 },
                  { x: 20, y: -15 },
                  { x: -20, y: -15 },
                  { x: 25, y: 10 },
                  { x: 10, y: 40 },
                  { x: -15, y: -10 },
                ][index % 8];

                const translateX = lerp(initialOffset.x, 0);
                const translateY = lerp(initialOffset.y, 0);
                const imageWidth = lerp(30, 100); // Scale width from 30% to 100%

                return (
                  <Box
                    key={image.id}
                    sx={{
                      width: "25%",
                      height: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={image.src}
                      alt={`img-${image.id}`}
                      sx={{
                        width: `${imageWidth}%`,
                        borderRadius: "8px",
                        transform: `translate(${translateX}px, ${translateY}px)`,
                        transition: "all 0.3s ease-out",
                        boxShadow: 3,
                      }}
                    />
                  </Box>
                );
              })}
            </Box>

            {/* Centered Heading */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                zIndex: 2,
                opacity: `${1 - progress}`,
                transition: "opacity 0.3s ease-out",
              }}
            >
              <Typography variant="h2" fontWeight={700}>
                Find your work and your people
              </Typography>
              <Typography sx={{ maxWidth: 500, mt: 2, mx: "auto" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
