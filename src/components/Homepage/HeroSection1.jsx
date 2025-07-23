import { useRef } from "react";
import { Box } from "@mui/material";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

const SECTION_HEIGHT = 1500;

const HeroSection1 = () => {
    return (
        <Box
            sx={{
                height: `calc(${SECTION_HEIGHT}px + 100vh)`,
                position: "relative",
                width: "100%",
                bgcolor: "background.default",
            }}
        >
            <StickyBackground />
            <ParallaxImages />
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 300,
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
                }}
            />
        </Box>
    );
};

const StickyBackground = () => {
    const { scrollY } = useScroll();

    const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
    const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["160%", "100%"]);
    const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

    return (
        <motion.div
            style={{
                clipPath,
                backgroundSize,
                opacity,
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="sticky top-0 h-screen w-full"
        />
    );
};

const ParallaxImages = () => {
    return (
        <Box
            sx={{
                position: "relative",
                maxWidth: "1200px",
                mx: "auto",
                px: 2,
                pt: "200px",
            }}
        >
            <ParallaxImage
                src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80"
                start={-200}
                end={200}
                sx={{ width: "33%" }}
            />
            <ParallaxImage
                src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80"
                start={200}
                end={-250}
                sx={{ width: "66%", mx: "auto", display: "block" }}
            />
            <ParallaxImage
                src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80"
                start={-200}
                end={200}
                sx={{ width: "33%", ml: "auto" }}
            />
            <ParallaxImage
                src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80"
                start={0}
                end={-500}
                sx={{ width: "42%", ml: 6 }}
            />
        </Box>
    );
};

const ParallaxImage = ({ src, start, end, sx }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.img
            ref={ref}
            src={src}
            alt="Parallax Element"
            style={{
                ...sx,
                borderRadius: "12px", transform, opacity,
            }}
            className="rounded-xl"
            loading="lazy"

        />
    );
};

export default HeroSection1;
