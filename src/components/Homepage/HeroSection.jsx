import React, { useEffect, useRef, useState } from "react";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import LineLoader from "./LineLoader";
import image1 from "../../assets/herosection/image1.jpg";
import image2 from "../../assets/herosection/image2.jpg";
import image3 from "../../assets/herosection/image3.jpg";
import image4 from "../../assets/herosection/image4.jpg";
import image5 from "../../assets/herosection/image5.jpg";
import image6 from "../../assets/herosection/image6.jpg";
import image7 from "../../assets/herosection/image7.jpg";
import image8 from "../../assets/herosection/image8.jpg";
import checkmark from "../../assets/coachmatch/checkmark.svg";

const cardData = [
  {
    name: "Henrik",
    title: "AI Architect",
    img: image1,
  },
  {
    name: "Eva",
    title: "AI Developer",
    img: image2,
  },
  {
    name: "Michael",
    title: "AI Architect",
    img: image3,
  },
  {
    name: "Wojtek",
    title: "AI Engineer",
    img: image4,
  },
  {
    name: "Lena",
    title: "AI Scientist",
    img: image5,
  },
  {
    name: "Carlos",
    title: "ML Engineer",
    img: image6,
  },
  {
    name: "Anya",
    title: "Data Scientist",
    img: image7,
  },
  {
    name: "Tom",
    title: "AI Strategist",
    img: image8,
  },
];

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [randomPositions, setRandomPositions] = useState([]);

  useEffect(() => {
    const radius = 40; // distance in vh/vw away from center
    const centerTop = 50;
    const centerLeft = 50;

    const positions = cardData.map((_, index) => {
      const angle = (index / cardData.length) * 2 * Math.PI; // spread around full circle

      const top = `${centerTop + radius * Math.sin(angle)}vh`;
      const left = `${centerLeft + radius * Math.cos(angle)}vw`;

      return { top, left };
    });

    setRandomPositions(positions);
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        height: "100vh",
        bgcolor: "#fce2978a",
        overflow: "hidden",
      }}
    >
      <LineLoader />

      {/* Centered Heading */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
          opacity: textOpacity,
        }}
      >
        <Typography variant="h3" fontWeight={700}>
          Find your work and your people
        </Typography>
        <Typography sx={{ maxWidth: 500, mt: 2, mx: "auto" }}>
          Join the leading community of AI experts to learn, advance, and
          collaborate on AI projects.
        </Typography>
      </motion.div>

      {/* Cards */}
      {cardData.map((card, index) => {
        const gridRow = Math.floor(index / 4);
        const gridCol = index % 4;

        const finalTop = `${5 + gridRow * 40}vh`;
        const finalLeft = `${10 + gridCol * 22}vw`;

        const initialTop = randomPositions[index]?.top || "50vh";
        const initialLeft = randomPositions[index]?.left || "50vw";

        const top = useTransform(
          scrollYProgress,
          [0, 0.5, 0.75],
          [initialTop, finalTop, finalTop]
        );
        const left = useTransform(
          scrollYProgress,
          [0, 0.5, 0.75],
          [initialLeft, finalLeft, finalLeft]
        );
        const scale = useTransform(
          scrollYProgress,
          [0, 0.5, 0.75],
          [0.8, 1.4, 1.4]
        );

        const zIndex = useTransform(scrollYProgress, [0, 1], [5, 15]);

        return (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              top,
              left,
              transform: "translate(-50%, -50%)",
              scale,
              zIndex,
            }}
          >
            <CardComponent card={card} />
          </motion.div>
        );
      })}
    </Box>
  );
};

const CardComponent = ({ card }) => (
  <Paper elevation={6} gap={2}>
    <Box
      sx={{
        position: "relative",
        width: 100,
        textAlign: "center",
      }}
    >
      <Avatar
        src={card.img}
        alt={card.name}
        sx={{ width: 60, height: 60, mx: "auto" }}
      />
      <Box
        component="img"
        src={checkmark}
        alt="checkmark"
        className="home-talented_checkmark"
        sx={{
          width: 16,
          height: 16,
          position: "absolute",
          top: 0,
          right: 5,
        }}
      />
      <Typography
        className="home-talented_person-name"
        variant="subtitle2"
        fontWeight={600}
        mt={1}
      >
        {card.name}
      </Typography>
      <Typography
        className="home-talented_person-position"
        variant="caption"
      >
        {card.title}
      </Typography>
    </Box>
  </Paper>
);

export default HeroSection;
