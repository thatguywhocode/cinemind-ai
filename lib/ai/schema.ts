import { z } from "zod";

export const MoodAnalysisSchema = z.object({
  mood: z.string(),

  energy: z.enum([
    "low",
    "medium",
    "high",
  ]),

  pace: z.enum([
    "slow",
    "medium",
    "fast",
  ]),

  genres: z.array(z.string()),

  themes: z.array(z.string()),
});

export type MoodAnalysis = z.infer<
  typeof MoodAnalysisSchema
>;