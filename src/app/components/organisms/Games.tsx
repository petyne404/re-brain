import { Box, Grid } from "@mui/material";
import React from "react";
import StyledBox from "@/app/components/molecules/StyledBox";

const Games = () => {
  return (
    <Box id="Features" sx={{ py: 2, bgcolor: "background.default" }}>
      <Grid container spacing={4}>
        {[
          {
            title: "ขวดไม่ได้หมุน หัวมึงอ่ะหมุน!",
            href: "/features/no-tipsy-no-home/bottle-spin",
          },
        ].map((feature, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <StyledBox title={feature.title} href={feature.href} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Games;
