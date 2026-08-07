import { groq } from "@/lib/ai/groq";
import { discoverCandidates } from "@/services/discover";
import { MoodAnalysisSchema } from "@/lib/ai/schema";

interface AIResponse {
  mood?: string;
  genres?: string[];
  keywords?: string[];
}

export async function recommendMovies(prompt: string) {
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,

    response_format: {
      type: "json_object",
    },

    messages: [
      {
        role: "system",
        content: `
You are CineMind.

Understand the user's movie preferences.

Return ONLY valid JSON.

Schema:

{
  "mood":"string",
  "genres":["string"],
  "keywords":["string"]
}

Examples:

Comedy

{
  "mood":"Funny",
  "genres":["Comedy"],
  "keywords":[]
}

I want emotional sci-fi

{
  "mood":"Emotional",
  "genres":["Science Fiction","Drama"],
  "keywords":["space","survival"]
}
`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const content = completion.choices[0].message.content;

  console.log("========== GROQ RAW ==========");
  console.log(content);
  console.log("==============================");

  let ai: AIResponse = {};

  try {
    ai = content ? JSON.parse(content) : {};
  } catch (error) {
    console.error("Failed to parse AI response:", error);
  }

  console.log("Parsed AI:", ai);

const moodAnalysis = MoodAnalysisSchema.parse({
  mood: ai.mood ?? "General",
  genres: ai.genres ?? [],
  themes: ai.keywords ?? [],
  energy: "medium",
  pace: "medium",
});

const tmdb = await discoverCandidates(moodAnalysis);

const mood = moodAnalysis.mood;

  return {
    mood: {
      mood,
      confidence: 0.95,
    },

    recommendations: tmdb.results.slice(0, 5).map((movie) => ({
      id: movie.id,

      title: movie.title,

      poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/placeholder-poster.jpg",

      rating: Number(movie.vote_average.toFixed(1)),

      year: movie.release_date
        ? movie.release_date.slice(0, 4)
        : "N/A",

      genres: ai.genres ?? [],

      reason: `Chosen because it matches your "${mood}" mood.`,
    })),
  };
}