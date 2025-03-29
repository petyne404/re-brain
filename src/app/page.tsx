"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import { alpha } from "@mui/material/styles";
import { TypeAnimation } from "react-type-animation";
import StyledBox from "./components/StyledBox";
import Footer from "./components/Footer";
import Feature from "./components/Feature";

const AnimatedButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  background: `linear-gradient(45deg, ${theme.palette.grey[700]}, ${theme.palette.grey[600]})`,
  color: theme.palette.grey[100],
  border: `1px solid ${alpha(theme.palette.grey[600], 0.3)}`,
  "&:hover": {
    background: `linear-gradient(45deg, ${theme.palette.grey[600]}, ${theme.palette.grey[500]})`,
    border: `1px solid ${alpha(theme.palette.grey[500], 0.5)}`,
    "&::after": {
      transform: "scale(1)",
      opacity: 1,
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "300%",
    height: "300%",
    background: `radial-gradient(circle, ${alpha(
      theme.palette.grey[100],
      0.2
    )} 0%, transparent 60%)`,
    transform: "translate(-50%, -50%) scale(0)",
    opacity: 0,
    transition: theme.transitions.create(["transform", "opacity"], {
      duration: theme.transitions.duration.standard,
    }),
  },
}));

export default function Home() {
  const theme = useTheme();

  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
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
          <Grid item xs={12} md={6}>
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

      <Box
        sx={{
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 800,
              mx: "auto",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: theme.palette.grey[100],
              }}
            >
              Ready to Start Learning?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: theme.palette.grey[400],
              }}
            >
              Join thousands of learners who are already transforming their
              lives with ReBrain
            </Typography>
            <AnimatedButton variant="contained" size="large">
              Sign Up Now
            </AnimatedButton>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ mt: 8 }}>
          <Grid item xs={12} md={4}>
            <StyledBox
              title="The clear developer's choice"
              description="During evaluation periods, an average of 83% of developers choose Cursor over all competitors as their top AI coding tool of choice."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledBox
              title="Ready for enterprise scale"
              description="Battle-tested to handle large codebases with tens of millions of lines of code and support development teams of any size."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledBox
              title="Committed to security"
              description="SOC2 Type II certified, Enforced Privacy Mode, and Zero Data Retention to make sure your proprietary code stays safe."
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}
