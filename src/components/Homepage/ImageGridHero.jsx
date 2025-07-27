import React, { useRef } from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { useScroll, useTransform, motion } from "framer-motion";
import pic1 from "../../assets/herosection/pic1.avif";
import pic2 from "../../assets/herosection/pic2.avif";
import pic3 from "../../assets/herosection/pic3.avif";
import pic4 from "../../assets/herosection/pic4.avif";
import pic5 from "../../assets/herosection/pic5.avif";
import pic6 from "../../assets/herosection/pic6.avif";

const MotionBox = motion(Box);

const ImageGridHero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <Box ref={targetRef} sx={{ bgcolor: "#fce2978a", height: "350vh" }}>
        <Box
          sx={{
            height: "100vh",
            position: "sticky",
            top: 0,
            zIndex: 0,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: 2,
            p: 2,
            overflow: "hidden",
          }}
        >
          <Copy scrollYProgress={scrollYProgress} />
          <Images scrollYProgress={scrollYProgress} />
          <Circles />
        </Box>
      </Box>
    </>
  );
};

const Copy = ({ scrollYProgress }) => {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

  return (
    <MotionBox
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      sx={{
        position: "absolute",
        px: 8,
        zIndex: 20,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        textAlign="center"
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
        Find your Coaches
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        sx={{ my: 3, maxWidth: 600 }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, minus
        nisi? Quod praesentium quaerat possimus.
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            color: "white",
            background: "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)",
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
              background: "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
              boxShadow: "0 6px 20px rgba(255, 105, 80, 0.5)",
              transform: "scale(1.05)",
            },
          }}
        >
          Try For Free
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "white",
            background: "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)",
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
              background: "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
              boxShadow: "0 6px 20px rgba(255, 105, 80, 0.5)",
              transform: "scale(1.05)",
            },
          }}
        >
          Learn about us
        </Button>
      </Box>
    </MotionBox>
  );
};

const Images = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

  const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  return (
    <>
      <MotionBox
        className="col-span-2"
        style={{
          backgroundImage: `url(${pic1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image1Offset,
          y: image1Offset,
        }}
        sx={{
          position: "relative",
          zIndex: 10,
          gridColumn: "span 2",
        }}
      />

      <MotionBox
        style={{
          backgroundImage: `url(${pic3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
        }}
        sx={{
          position: "relative",
          zIndex: 10,
          gridRow: "span 2",
        }}
      />

      <MotionBox
        style={{
          backgroundImage: `url(${pic4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
        sx={{
          position: "relative",
          zIndex: 10,
          gridRow: "span 2",
        }}
      />

      <MotionBox
        style={{
          backgroundImage: `url(${pic2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
        }}
        sx={{
          position: "relative",
          zIndex: 10,
        }}
      />
      <MotionBox
        style={{
          backgroundImage: `url(${pic5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
        sx={{
          position: "relative",
          zIndex: 10,
        }}
      />
      <MotionBox
        style={{
          backgroundImage: `url(${pic6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image6OffsetX,
          y: image6OffsetY,
        }}
        sx={{
          position: "relative",
          zIndex: 10,
        }}
      />
    </>
  );
};

const Circles = () => (
  <>
    <Box
      sx={{
        width: "60%",
        maxWidth: 850,
        minWidth: 400,
        aspectRatio: "1",
        border: "8px solid #ff4a394b",
        borderRadius: "50%",
        position: "absolute",
        zIndex: 0,
        top: 0,
        left: 0,
        transform: "translate(-50%, -50%)",
      }}
    />
    <Box
      sx={{
        width: "50%",
        maxWidth: 600,
        minWidth: 300,
        aspectRatio: "1",
        border: "8px solid #ff4a394b",
        borderRadius: "50%",
        position: "absolute",
        zIndex: 0,
        bottom: 0,
        right: 0,
        transform: "translate(50%, 50%)",
      }}
    />
  </>
);

export default ImageGridHero;
