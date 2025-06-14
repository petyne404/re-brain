import { Box, Link, Typography, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const CardWrapper = styled(Box)(({ theme }) => ({
  //   position: "relative",
  padding: theme.spacing(4),
  background: alpha(theme.palette.background.paper, 0.4),
  backdropFilter: "blur(10px)",
  borderRadius: Number(theme.shape.borderRadius) * 2,
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  width: "100%",
  height: "100%",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: Number(theme.shape.borderRadius) * 2,
    padding: "1px",
    background: `linear-gradient(45deg, ${alpha(
      theme.palette.grey[600],
      0.4
    )}, ${alpha(theme.palette.grey[400], 0.1)})`,
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
  textDecoration: "none",

  "&:hover": {
    "&::before": {
      background: `linear-gradient(45deg, ${alpha(
        theme.palette.grey[400],
        0.6
      )}, ${alpha(theme.palette.grey[200], 0.2)})`,
    },
  },
}));

export const CardFeature = styled(Box)(({ theme }) => ({
  //   position: "relative",
  padding: theme.spacing(4),
  background: alpha(theme.palette.background.paper, 0.4),
  backdropFilter: "blur(10px)",
  borderRadius: Number(theme.shape.borderRadius) * 2,
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  width: "100%",
  height: "100%",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: Number(theme.shape.borderRadius) * 2,
    padding: "1px",
    background: `linear-gradient(45deg, ${alpha(
      theme.palette.grey[600],
      0.4
    )}, ${alpha(theme.palette.grey[400], 0.1)})`,
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
  textDecoration: "none",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  background: `linear-gradient(45deg, ${theme.palette.grey[100]}, ${theme.palette.grey[300]})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFamily: "JetBrains Mono, monospace",
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontSize: "1rem",
  lineHeight: 1.6,
  fontFamily: "JetBrains Mono, monospace",
}));

interface StyledBoxProps {
  title: string;
  description: string;
  href?: string;
}

export default function StyledBox({
  title,
  description,
  href,
}: StyledBoxProps) {
  return (
    <Link href={href} sx={{ textDecoration: "none" }}>
      <CardWrapper>
        <Title variant="h2">{title}</Title>
        <Description>{description}</Description>
      </CardWrapper>
    </Link>
  );
}
