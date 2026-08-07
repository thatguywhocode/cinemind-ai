import { NextRequest, NextResponse } from "next/server";
import { fetchMovie } from "@/services/movie";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;

    const movieId = Number(id);

    if (Number.isNaN(movieId)) {
      return NextResponse.json(
        {
          error: "Invalid movie id",
        },
        {
          status: 400,
        }
      );
    }

    const movie = await fetchMovie(movieId);

    return NextResponse.json(movie);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to fetch movie.",
      },
      {
        status: 500,
      }
    );
  }
}