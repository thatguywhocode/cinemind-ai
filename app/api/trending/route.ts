import { NextResponse } from "next/server";
import { getTrendingMovies } from "@/services/trending";

export async function GET() {
  try {
    const movies = await getTrendingMovies();

    return NextResponse.json(movies);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to fetch trending movies.",
      },
      {
        status: 500,
      }
    );
  }
}