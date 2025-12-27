import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import StyledBox from "../molecules/StyledBox";
import { theme } from "../../theme";

const Feature = () => {
  return (
    <Box id="Features" sx={{ py: 2, bgcolor: "background.default" }}>
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
              title: "Waiting for you",
              description:
                "Have you ever waited for someone? ❤️🎉",
              href: "/features/waiting-for-you",
            },
            {
              title: "No Tipsy No Home",
              description: "ไม่เมากูไม่กลับ 🍻🏠",
              href: "/features/no-tipsy-no-home",
            },
          ].map((feature, index) => (
            <Grid  key={index} size={{ xs: 12, md: 4 }}>
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
