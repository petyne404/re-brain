import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import StyledBox from "./StyledBox";
import { theme } from "../theme";

const Feature = () => {
  return (
    <Box sx={{ py: 2, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 2,
            background: `linear-gradient(45deg, ${theme.palette.grey[300]}, ${theme.palette.grey[100]})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Features
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Language Converter",
              description: "No more mistyped words—just Copy & Paste! 🚀",
              href: "/features/lang-converter",
            },
            {
              title: "Food Roulette",
              description:
                "Let us take the guesswork out of mealtime. enjoy your next meal stress-free! 🍽🎉",
                href: "",
            },
            {
              title: "Coming soon",
              description: "A game-changing feature is on the way! 🎉",
              href: "",
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <StyledBox
                title={feature.title}
                description={feature.description}
                href={feature.href}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Feature;
