import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
} from "@mui/material";
import { CalendarToday, Event, AccessTime } from "@mui/icons-material";
import StyledBox, { CardWrapper } from "./StyledBox";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const clearAll = () => {
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Date Picker */}
        <Paper elevation={2} sx={{ p: 3, width: "100%", border: "1px red soild" }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <CalendarToday sx={{ mr: 1, color: "primary.main" }} />
            <Typography variant="h6">Select Date</Typography>
          </Box>

          <TextField
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ mb: 2 }}
          />

          {selectedDate && (
            <Chip
              label={`Date Selected: ${formatDate(selectedDate)}`}
              color="primary"
              variant="outlined"
            />
          )}
        </Paper>

        {/* Time Picker */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <AccessTime sx={{ mr: 1, color: "secondary.main" }} />
            <Typography variant="h6">Select Time</Typography>
          </Box>

          <TextField
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ mb: 2 }}
          />

          {selectedTime && (
            <Chip
              label={`Time Selected: ${selectedTime} น.`}
              color="secondary"
              variant="outlined"
            />
          )}
        </Paper>

        {/* Summary Section */}
        {(selectedDate || selectedTime) && (
          <CardWrapper>
            <Typography variant="h6" gutterBottom>
              Summary
            </Typography>

            <Stack spacing={1}>
              {selectedDate && (
                <Typography variant="body1">
                  Date: <strong>{formatDate(selectedDate)}</strong>
                </Typography>
              )}

              {selectedTime && (
                <Typography variant="body1">
                  Time: <strong>{selectedTime}</strong>
                </Typography>
              )}
            </Stack>

            <Button
              variant="outlined"
              color="error"
              onClick={clearAll}
              sx={{ mt: 2 }}
            >
              Clear
            </Button>
          </CardWrapper>
        )}
      </Stack>
    </Box>
  );
};

export default DatePicker;
