import { z } from "zod";

export const timeCounterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  partnerName: z.string().min(1, "Partner name is required"),
  emojis: z.object({
    mine: z.string().emoji("Must be an emoji"),
    partner: z.string().emoji("Must be an emoji"),
  }),
  targetDate: z.coerce
    .date()
    .refine(
      (d) => d.getTime() > Date.now(),
      "Target date must be in the future"
    ),
});

export type TimeCounterInput = z.infer<typeof timeCounterSchema>;
