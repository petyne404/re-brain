import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Aboutus = () => {
  return (
    <Container id="About" maxWidth="lg" className="flex flex-col gap-2 mt-10">
      <Box id="aboutus" className="flex flex-col gap-2 p-4">
        <Typography variant="h2" className="text-center">About us</Typography>
        <Typography variant="body1" className="text-center lg:px-8">
          Tired of dealing with dumb problems that shouldn&apos;t even be
          problems in the first place? We&apos;ve got you! Our website is
          designed to tackle the silly, annoying issues that most people
          overlook but somehow manage to mess up your day. &quot;Stupid problems end
          here!&quot; We provide creative, fun, and effective solutions, so you
          don&apos;t have to waste your time on things that shouldn&apos;t be a
          hassle.
        </Typography>
      </Box>
      <Box id="mission" className="flex flex-col gap-2 p-4">
        <Typography variant="h2" className="text-center">Mission</Typography>
        <Typography variant="body1" className="text-center lg:px-8">
          Our mission is to help people eliminate ridiculous everyday problems
          with simple, fun, and effective solutions. We aim to make the world a
          better place—at least when it comes to the dumb stuff!
        </Typography>
      </Box>
      <Box id="vision" className="flex flex-col gap-2 p-4">
        <Typography variant="h2" className="text-center">Vision</Typography>
        <Typography variant="body1" className="text-center lg:px-8">
          We believe the world should be a place where people can live smoothly
          without unnecessary annoyances. Our goal is to become the ultimate hub
          for solving life&apos;s silliest problems—whether it&apos;s minor inconveniences
          or absurd situations that somehow disrupt your daily routine. Life is
          already complicated enough. Don&apos;t let dumb problems get in your way!
        </Typography>
      </Box>
    </Container>
  );
};

export default Aboutus;
