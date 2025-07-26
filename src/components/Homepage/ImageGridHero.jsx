import React, { useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import image1 from "../../assets/herosection/image1.jpg";
import image2 from "../../assets/herosection/image2.jpg";
import image3 from "../../assets/herosection/image3.jpg";
import image4 from "../../assets/herosection/image4.jpg";
import image5 from "../../assets/herosection/image5.jpg";
import image7 from "../../assets/herosection/image7.jpg";

const images = [
  { id: 1, src: image1, alt: 'Image 1' },
  { id: 2, src: image2, alt: 'Image 2' },
  { id: 3, src: image3, alt: 'Image 3' },
  { id: 4, src: image4, alt: 'Image 4' },
  { id: 5, src: image5, alt: 'Image 5' },
  { id: 6, src: '/path/to/img6.jpg', alt: 'Image 6' },
];

export default function ImageGridHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const yRange = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <Box ref={ref} sx={{ width: '100%', overflow: 'hidden', position: 'relative', py: 10 }}>
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        Our Visual Showcase
      </Typography>
      <Grid container spacing={2}>
        {images.map((img, idx) => (
          <Grid item key={img.id} xs={12} sm={6} md={4}>
            <motion.div style={{ y: yRange }}>
              <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{
                  width: '100%',
                  height: 250,
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 3,
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
