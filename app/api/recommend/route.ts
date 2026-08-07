import { NextRequest, NextResponse } from "next/server";
import { recommendMovies } from "@/services/recommendation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { prompt } = body;

    if (!prompt || !prompt.trim()) {
      return NextResponse.json(
        {
          error: "Prompt is required.",
        },
        {
          status: 400,
        }
      );
    }

    const recommendations =
      await recommendMovies(prompt);

    return NextResponse.json(recommendations);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}