import TimeCounter, { TimeCounterProps } from "@/app/components/TimeCounter";
import { getTimeCounterById } from "@/lib/backend/timeCounterServices";
import { Container } from "@mui/material";
import React from "react";

interface TimeCounterData {
  data: {
    name: string;
    partnerName: string;
    targetDate: Date;
    createdAt: Date;
    emojis: {
      mine: string;
      partner: string;
    };
  };
}

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const timeCounter = (await getTimeCounterById(id)) as TimeCounterData;

  if (!timeCounter) {
    return;
  }

  const targetDate = new Date(timeCounter.data.targetDate);
  const createdDate = new Date(timeCounter.data.createdAt);
  const targetDateFormatted = targetDate.toISOString().split("T")[0];
  const createdDateFormatted = createdDate.toISOString().split("T")[0];

  const counter: TimeCounterProps = {
    name: timeCounter.data.name,
    partnerName: timeCounter.data.partnerName,
    emojis: {
      mine: timeCounter.data.emojis.mine,
      partner: timeCounter.data.emojis.partner,
    },
    targetDate: targetDateFormatted,
    createdDate: createdDateFormatted,
  };
  console.log(counter);

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
      }}
    >
      <TimeCounter counter={counter} />
    </Container>
  );
}

export default Page;
