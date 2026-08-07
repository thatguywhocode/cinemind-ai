import { groq } from "@/lib/ai/groq";

export async function generateExplanation(
  mood: unknown,
  movie: unknown
) {

  const completion =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.5,

      messages: [
        {
          role: "system",
          content: `
You are CineMind.

Write ONE paragraph.

Maximum 45 words.

Explain WHY this movie matches.

Never spoil.

Be warm.

Don't mention AI.
`,
        },

        {
          role: "user",
          content: JSON.stringify({
            mood,
            movie,
          }),
        },
      ],
    });

  return completion.choices[0].message.content!;
}