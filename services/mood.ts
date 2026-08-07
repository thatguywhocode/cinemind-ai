import { groq } from "@/lib/ai/groq";
import { MoodAnalysisSchema } from "@/lib/ai/schema";
import { MOOD_ANALYSIS_PROMPT } from "@/lib/ai/prompts";

export async function analyzeMood(
  userInput: string
) {
  const completion =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.3,

      messages: [
        {
          role: "system",
          content: MOOD_ANALYSIS_PROMPT,
        },

        {
          role: "user",
          content: userInput,
        },
      ],

      response_format: {
        type: "json_object",
      },
    });

  const raw =
    completion.choices[0].message.content ?? "{}";

  const parsed = JSON.parse(raw);

  return MoodAnalysisSchema.parse(parsed);
}