import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import shape1 from "../../assets/faqs/shape.svg";
import image1 from "../../assets/faqs/2.png";
import { motion } from "framer-motion";
import map_dot from "../../assets/featuredcoaches/map-dot.png";

const faqs_content = [
  {
    question: "If I face any issue then how can I contact with you?",
    answer:
      "An attack of the ague sent him home, and on recovery, having resolved to attend a high school and fit himself to become a teacher, he passed the next four years in a hard struggle with poverty.",
  },
  {
    question: "I need to know your best proffered Courses?",
    answer:
      "An attack of the ague sent him home, and on recovery, having resolved to attend a high school and fit himself to become a teacher, he passed the next four years in a hard struggle with poverty.",
  },
  {
    question: "How much money we need to give you?",
    answer:
      "An attack of the ague sent him home, and on recovery, having resolved to attend a high school and fit himself to become a teacher, he passed the next four years in a hard struggle with poverty.",
  },
];

const Faqs = () => {
  return (
    <Container
      maxWidth="lg"
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
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Image Section with animation */}
          <Box
            component={motion.div}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              minHeight: { xs: 380, sm: 480, md: 520 },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              component={motion.div}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              sx={{ position: "relative", width: "100%" }}
            >
              <Box
                component="img"
                src={shape1}
                alt="Shape"
                sx={{
                  width: "100%",
                  height: "auto",
                  zIndex: 0,
                  borderRadius: "5%",
                  position: "absolute",
                  top: 178,
                  left: 0,
                }}
              />
              <Box
                component="img"
                src={image1}
                alt="Foreground"
                sx={{
                  width: "100%",
                  height: "auto",
                  zIndex: 1,
                  position: "relative",
                  borderRadius: "5%",
                }}
              />
            </Box>
          </Box>

          {/* Right Text Content with animation */}
          <Box
            component={motion.div}
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            sx={{ flex: 1, zIndex: 2, width: "100%" }}
          >
            <Stack spacing={2}>
              <Box sx={{ pl: { md: 6 }, mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "primary.light",
                    fontWeight: 600,
                  }}
                >
                  Frequently Ask Questions
                </Typography>

                <Typography
                  variant="h3"
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
                  gutterBottom
                >
                  Do you have questions?
                </Typography>

                <Typography variant="body1" mb={4}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </Typography>

                {faqs_content.map((faq, idx) => (
                  <Accordion
                    key={idx}
                    elevation={0}
                    sx={{
                      mb: 2,
                      boxShadow: "0 4px 14px rgba(250, 204, 194, 0.4)",
                      border: "none",
                    }}
                    defaultExpanded={idx === 0}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight="bold">{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}

                <Box mt={5}>
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
                    Ask Question
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Faqs;
