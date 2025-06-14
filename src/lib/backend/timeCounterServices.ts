import { TimeCounterInput } from "../zod/timeCounterSchema";
import { apiClient } from "./apiClient";

export async function createTimeCounter(payload: TimeCounterInput) {
  const baseUrl = process.env.NEXT_PUBLIC_BACK_END_END_POINT;
  const url = `${baseUrl}/api/timecounter`;
  return apiClient(url, {
    method: "POST",
    body: payload,
  });
}

export async function getTimeCounterById(id) {
  const baseUrl = process.env.NEXT_PUBLIC_BACK_END_END_POINT;
  const url = `${baseUrl}/api/timecounter/${id}`;
  return apiClient(url, {
    method: "GET",
  });
}
