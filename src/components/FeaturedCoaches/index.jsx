import React from "react";
import {
  Container,
  Box,
  Card,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import image1 from "../../assets/featuredcoaches/image1.jpg";
import image2 from "../../assets/featuredcoaches/image2.jpeg";
import image3 from "../../assets/featuredcoaches/image3.jpg";
import image4 from "../../assets/featuredcoaches/image4.jpg";
import image5 from "../../assets/featuredcoaches/image5.jpg";
import image6 from "../../assets/featuredcoaches/image6.jpg";
import map_dot from "../../assets/featuredcoaches/map-dot.png";

const coaches = [
  {
    name: "Liya Sen",
    role: "English coach",
    image: image1,
  },
  {
    name: "Peter Gilbert",
    role: "Instructor",
    image: image2,
  },
  {
    name: "Sara Will",
    role: "Art coach",
    image: image3,
  },
  {
    name: "Tom Williams",
    role: "Coach",
    image: image4,
  },
  {
    name: "John Doe",
    role: "English coach",
    image: image5,
  },
  {
    name: "Polina James",
    role: "Instructor",
    image: image6,
  },
];

const FeaturedCoaches = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        overflow: "hidden",
        backgroundImage: `url(${map_dot})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: {
          xs: "cover", // cover full area on small screens
          sm: "contain", // keep aspect ratio on medium+
          md: "contain",
        },
      }}
    >
      <Box sx={{ py: { xs: 8, md: 5 } }}>
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="body1"
            sx={{
              color: "primary.light",
              fontWeight: 600,
            }}
          >
            Meet Our
          </Typography>
          <Typography
            variant="h2"
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
            Coaches
          </Typography>

          <Typography variant="body1" mt={1} sx={{ color: "neutral.black" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>

        {/* Coaches Swiper */}
        <Swiper
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ Autoplay config
          modules={[Autoplay]} // ✅ Register autoplay module
          breakpoints={{
            0: { slidesPerView: 1.2 },
            600: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {coaches.map((coach, idx) => (
            <SwiperSlide key={idx}>
              <Box sx={{ px: 1 }}>
                <Card
                  sx={{
                    height: 400, // or "100%", "minHeight", etc.
                    borderRadius: 35,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: "100%",
                      "&:hover .social-icons": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    {/* Image */}
                    <Avatar
                      src={coach.image}
                      alt={coach.name}
                      variant="square"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                        transform: "scale(1)",
                        ".MuiCard-root:hover &": {
                          transform: "scale(1.15)",
                        },
                      }}
                    />

                    {/* Overlapping Border Frame */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        right: 10,
                        bottom: 10,
                        border: "1px solid #ffffff",
                        borderRadius: 35,
                        zIndex: 2,
                        pointerEvents: "none",
                      }}
                    />

                    {/* Social Icons at Bottom */}
                    <Box
                      className="social-icons"
                      sx={{
                        position: "absolute",
                        bottom: 30,
                        left: 0,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        opacity: 0,
                        transform: "translateY(20px)",
                        transition: "all 0.4s ease",
                        zIndex: 3,
                      }}
                    >
                      <IconButton
                        sx={{
                          color: "neutral.white",
                          bgcolor: "secondary.main",
                        }}
                      >
                        <Instagram />
                      </IconButton>
                      <IconButton
                        sx={{
                          color: "neutral.white",
                          bgcolor: "secondary.main",
                        }}
                      >
                        <LinkedIn />
                      </IconButton>
                      <IconButton
                        sx={{
                          color: "neutral.white",
                          bgcolor: "secondary.main",
                        }}
                      >
                        <Facebook />
                      </IconButton>
                    </Box>
                  </Box>
                </Card>
                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <Typography variant="h6" fontWeight={600}>
                    {coach.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "primary.main" }}>
                    {coach.role}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default FeaturedCoaches;
