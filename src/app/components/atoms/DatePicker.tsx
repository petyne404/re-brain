"use client";

import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
} from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import { CardWrapper } from "../molecules/StyledBox";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  timeCounterSchema,
  TimeCounterInput,
} from "@/lib/zod/timeCounterSchema";
import { createTimeCounter } from "@/lib/backend/timeCounterServices";
import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";

const DatePicker = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TimeCounterInput>({
    resolver: zodResolver(timeCounterSchema),
    defaultValues: {
      name: "",
      partnerName: "",
      emojis: { mine: "", partner: "" },
      targetDate: null,
    },
  });

  const onSubmit = async (data: TimeCounterInput) => {
    try {
      const res = (await createTimeCounter({
        ...data,
        targetDate: new Date(data.targetDate),
      })) as { data: { _id: string } };

      router.push(`/features/waiting-for-you/time-counter/${res.data._id}`);
    } catch (err) {
      console.error(err);
    }
  };

  const selectedDate = watch("targetDate");
  const formatDate = (d: string | Date) =>
    new Date(d).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      {isSubmitting && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(255,255,255,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </Box>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={4}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                label="Your Name"
                fullWidth
                sx={{ mb: 2 }}
                error={!!errors.name}
                helperText={errors.name?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="partnerName"
            control={control}
            render={({ field }) => (
              <TextField
                label="Partner's Name"
                fullWidth
                sx={{ mb: 2 }}
                error={!!errors.partnerName}
                helperText={errors.partnerName?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="emojis.mine"
            control={control}
            render={({ field }) => (
              <TextField
                label="Your Emoji"
                fullWidth
                sx={{ mb: 2 }}
                error={!!errors.emojis?.mine}
                helperText={errors.emojis?.mine?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="emojis.partner"
            control={control}
            render={({ field }) => (
              <TextField
                label="Partner's Emoji"
                fullWidth
                sx={{ mb: 2 }}
                error={!!errors.emojis?.partner}
                helperText={errors.emojis?.partner?.message}
                {...field}
              />
            )}
          />
          {/* ---------- Date Picker ---------- */}
          <Paper elevation={2} sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CalendarToday sx={{ mr: 1, color: "primary.main" }} />
              <Typography variant="h6">Select Date</Typography>
            </Box>

            <Controller
              name="targetDate"
              control={control}
              render={({ field }) => (
                <TextField
                  type="date"
                  fullWidth
                  error={!!errors.targetDate}
                  helperText={errors.targetDate?.message}
                  {...field}
                />
              )}
            />

            {selectedDate && (
              <Chip
                sx={{ mt: 2 }}
                label={`Date Selected: ${formatDate(selectedDate)}`}
                color="primary"
                variant="outlined"
              />
            )}
          </Paper>

          {/* ---------- Summary ---------- */}
          {selectedDate && (
            <CardWrapper>
              <Typography variant="h6">Summary</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Date: <strong>{formatDate(selectedDate)}</strong>
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Button
                  variant="outlined"
                  color="error"
                  endIcon={<DeleteIcon />}
                  onClick={() => reset()}
                  disabled={isSubmitting}
                >
                  Clear
                </Button>

                <LoadingButton
                  type="submit"
                  variant="contained"
                  color="success"
                  endIcon={<SendIcon />}
                  loading={isSubmitting}
                >
                  Let&apos;s go
                </LoadingButton>
              </Stack>
            </CardWrapper>
          )}
        </Stack>
      </form>
    </Box>
  );
};

export default DatePicker;
