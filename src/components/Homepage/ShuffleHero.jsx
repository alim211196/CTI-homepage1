import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LineLoader from "./LineLoader";
import image1 from "../../assets/herosection/image1.jpg";
import image2 from "../../assets/herosection/image2.jpg";
import image3 from "../../assets/herosection/image3.jpg";
import image4 from "../../assets/herosection/image4.jpg";
import image5 from "../../assets/herosection/image5.jpg";
import image6 from "../../assets/herosection/image6.jpg";
import image7 from "../../assets/herosection/image7.jpg";
import image8 from "../../assets/herosection/image8.jpg";
const ShuffleHero = () => {
    return (
        <Box sx={{ py: 10, backgroundColor: "#fce2978a", position: "relative", overflow: "hidden", }}>
            <LineLoader />
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h3" fontWeight={700}>
                            Find your work and your people
                        </Typography>
                        <Typography sx={{ maxWidth: 500, mt: 2 }}>
                            Join the leading community of AI experts to learn, advance, and
                            collaborate on AI projects.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }} sx={{ zIndex: 1000 }}>
                        <ShuffleGrid />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: image1,
    },
    {
        id: 2,
        src: image2,
    },
    {
        id: 3,
        src: image3,
    },
    {
        id: 4,
        src: image4,
    },
    {
        id: 5,
        src: image5,
    },
    {
        id: 6,
        src: image6,
    },
    {
        id: 7,
        src: image7,
    },
    {
        id: 8,
        src: image8,
    },
    {
        id: 9,
        src: image1,
    },
    {
        id: 10,
        src: image2,
    },
    {
        id: 11,
        src: image3,
    },
    {
        id: 12,
        src: image4,
    },
    {
        id: 13,
        src: image5,
    },
    {
        id: 14,
        src: image6,
    },
    {
        id: 15,
        src: image7,
    },
    {
        id: 16,
        src: image8,
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "4px",
            }}
        />
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();
        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());
        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(4, 1fr)",
                gap: 1,
                height: 450,
                width: "100%",
            }}
        >
            {squares.map((sq) => sq)}
        </Box>
    );
};

export default ShuffleHero;
