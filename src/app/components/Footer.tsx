"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

const FooterWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(8, 0, 4),
  marginTop: 100,
  background: alpha(theme.palette.background.paper, 0.4),
  backdropFilter: "blur(10px)",
  borderTop: `1px solid ${alpha(theme.palette.grey[800], 0.2)}`,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: `linear-gradient(90deg, 
      transparent 0%, 
      ${alpha(theme.palette.grey[500], 0.3)} 50%,
      transparent 100%
    )`,
  },
}));

const FooterLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.grey[400],
  textDecoration: "none",
  transition: "color 0.2s ease-in-out",
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.grey[400],
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    color: theme.palette.grey[100],
    transform: "translateY(-2px)",
    background: alpha(theme.palette.grey[800], 0.2),
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  fontFamily: "JetBrains Mono, monospace",
}));

export default function Footer() {
  const footerLinks = {
    // Product: ["Features", "Pricing", "Documentation", "Updates"],
    // Company: ["About", "Blog", "Careers", "Contact"],
    // Resources: ["Community", "Help Center", "Support", "Status"],
    // Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box >
              <Link href="/">
                <Image
                  src="/images/logo/logo.svg"
                  width={170}
                  height={50}
                  alt="rebrain logo"
                />
              </Link>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "grey.400", mb: 2, maxWidth: 300 }}
            >
              Let's make your life easier with ReBrain
            </Typography>
            <Stack direction="row" spacing={1}>
              <SocialButton aria-label="github">
                <Link href="https://github.com/petyne404" target="_blank">
                  <GitHubIcon />
                </Link>
              </SocialButton>
              <SocialButton aria-label="linkedin">
                <Link href="https://www.linkedin.com/in/tharathepnoe/" target="_blank">
                  <LinkedInIcon />
                </Link>
              </SocialButton>
            </Stack>
          </Grid>

          {/* {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={6} sm={3} md={2} key={category}>
              <FooterTitle variant="subtitle2">{category}</FooterTitle>
              <Stack spacing={1.5}>
                {links.map((link) => (
                  <FooterLink
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    variant="body2"
                  >
                    {link}
                  </FooterLink>
                ))}
              </Stack>
            </Grid>
          ))} */}
        </Grid>

        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: (theme) =>
              `1px solid ${alpha(theme.palette.grey[800], 0.2)}`,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "grey.500" }}>
            © {new Date().getFullYear()} ReBrain. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
}
