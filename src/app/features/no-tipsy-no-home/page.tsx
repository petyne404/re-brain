"use client";

import Games from "@/app/components/organisms/Games";
import { Box, Container, Grid, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const Page = () => {
  return (
    <Container id="Home" maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12 }}>
          <Box>
            <Box
              sx={{
                height: 300,
                mt: { xs: 8, sm: 4, xl: 8 },
              }}
            >
              <TypeAnimation
                sequence={[
                  "ขวดไม่ได้หมุน หัวมึงอ่ะหมุน!",
                  4000,
                  "เหล้าเข้าปาก ความกากเริ่มทำงาน",
                  4000,
                  "ต้องเมาอีกกี่รอบ เธอถึงจะหันมาชอบเรา",
                  4000,
                  "เจ็บใจยกขวด เจ็บปวดก็ต้องยกแก้ว",
                  4000,
                  "กินเหล้าแล้วเมา กินเราแล้วมัน",
                  4000,
                  "เวลาเมา ชอบหลงทาง เวลาสร่าง ชอบหลงเธอ",
                  4000,
                ]}
                wrapper="span"
                speed={1}
                style={{
                  fontSize: "clamp(3em, 5vw, 5em)",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
                repeat={Infinity}
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: { xs: 24, xl: 28 } }}>
                เมาเหล้าก็เสียหลัก เมารักก็เสียเงิน
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Games />
    </Container>
  );
};

export default Page;
