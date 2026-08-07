import { groq } from "./groq";
import {
  MoodAnalysis,
  MoodAnalysisSchema,
} from "./schema";

export async function analyzeMood(
  prompt: string
): Promise<MoodAnalysis> {
  const completion =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.5,

      response_format: {
        type: "json_object",
      },

      messages: [
        {
          role: "system",
          content: `
You are CineMind.

Analyze the user's movie preference.

Return ONLY JSON.

{
  "mood":"string",
  "energy":"low|medium|high",
  "pace":"slow|medium|fast",
  "genres":["string"],
  "themes":["string"]
}
`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

  const json = JSON.parse(
    completion.choices[0].message.content ?? "{}"
  );

  return MoodAnalysisSchema.parse(json);
}