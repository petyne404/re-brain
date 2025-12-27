"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Navbar from "./components/organisms/Navbar";
import { TypeAnimation } from "react-type-animation";
import Footer from "./components/organisms/Footer";
import Feature from "./components/organisms/Feature";
import Aboutus from "./components/organisms/Aboutus";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Container id="Home" maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12 }}>
            <Box>
              <Box
                sx={{
                  height: { xs: 380, sm: 240, xl: 380 },
                  mt: { xs: 8, sm: 4, xl: 8 },
                }}
              >
                <TypeAnimation
                  sequence={[
                    "Tired of dumb problems? We've got you!",
                    4000,
                    "Stupid problems end here.",
                    4000,
                    "Fixing life's silly issues, one click at a time.",
                    4000,
                    "Solve your stupid problem with our stupid solutions",
                    4000,
                    "Stop wasting time on dumb stuff.",
                  ]}
                  wrapper="span"
                  speed={1}
                  style={{
                    fontSize: "clamp(3em, 5vw, 5em)",
                    display: "inline-block",
                  }}
                  repeat={Infinity}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography sx={{ fontSize: { xs: 24, xl: 28 } }}>
                  Level up your life and unlock your problem with our cool
                  features!
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Add your hero image or illustration here */}
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Feature />
      <Aboutus />

      <Box
        sx={{
          py: 8,
        }}
      ></Box>
      <Footer />
    </Box>
  );
}
