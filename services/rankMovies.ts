import { groq } from "@/lib/ai/groq";

interface CandidateMovie {
  id: number;
  title: string;
  overview: string;
  genres: string[];
  rating: number;
  year: string;
}

interface Mood {
  mood: string;
  energy: string;
  pace: string;
  themes: string[];
}

export async function rankMovies(
  mood: Mood,
  movies: CandidateMovie[]
): Promise<number[]> {

  const completion =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.2,

      messages: [
        {
          role: "system",
          content: `
You are CineMind.

Rank these movies ONLY.

Return ONLY valid JSON.

Format:

{
  "movieIds":[12,44,91,2,8]
}

Do not explain.

Do not add markdown.
`,
        },

        {
          role: "user",
          content: JSON.stringify({
            mood,
            movies,
          }),
        },
      ],

      response_format: {
        type: "json_object",
      },
    });

  const json = completion.choices[0].message.content!;

  return JSON.parse(json).movieIds;
}