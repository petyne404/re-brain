"use client";
import { Box, Container, Typography } from "@mui/material";
import DatePicker from "@/app/components/atoms/DatePicker";
import EmojiReunion from "@/app/components/molecules/EmojiReunion/EmojiReunion";


const page = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: { xs: 4, lg: 4 },
        width: "100%",
        gap: {
          xs: 1,
          lg: 3,
        },
      }}
    >
      <Typography
        component="h3"
        sx={{
          fontWeight: "bold",
          fontSize: {
            xs: "1.2rem", // มือถือ
            sm: "2rem", // แท็บเล็ต
            md: "2.5rem", // หน้าจอกลาง
            lg: "3rem", // หน้าจอใหญ่
            xl: "3.5rem", // หน้าจอ ultra-wide
          },
        }}
      >
        Waiting For You (รอเธอกลับมา)
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          mt: { xs: 4, lg: 4 },
          width: "100%",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 0,
            flexDirection: "column",
            width: { xs: "100%", lg: "50%" },
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "1rem", // มือถือ
                sm: "1rem", // แท็บเล็ต
                md: "1rem", // หน้าจอกลาง
                lg: "1.5rem", // หน้าจอใหญ่
                xl: "2rem", // หน้าจอ ultra-wide
              },
            }}
          >
            Have you ever waited for someone?
          </Typography>
          <Typography
            component="h6"
            sx={{
              textAlign: "justify",
              textIndent: "4ch",
              padding: 2,
              display: {
                xs: "none",
                sm: "block",
                md: "block",
                lg: "block",
              },
            }}
          >
            Have you ever found yourself counting down the days, hours, and
            minutes… just to see someone again? Whether they&apos;re halfway
            across the world chasing dreams, or just a few cities away building
            a better future — the waiting never gets easier. The silence, the
            empty spaces, the longing… it all adds up. But so does every moment
            you wait — every second is proof of love that endures distance and
            time. `&quot;Waiting for You`&quot; isn&apos;t just a countdown timer. It&apos;s
            a space to hold your heart still, to give the wait a shape. Pick a
            date, set a time — and let the seconds gently remind you:
            they&apos;re coming back. And you&apos;re getting closer, every
            heartbeat of the way.
          </Typography>
          {/* <Button variant="outlined">Click</Button> */}
          <Box sx={{ p: { sx: 5 } }}>
            <EmojiReunion />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
          }}
        >
          <DatePicker />
        </Box>
      </Box>
    </Container>
  );
};

export default page;
