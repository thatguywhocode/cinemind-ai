"use client";

interface AIExplanationProps {
  mood: string;
}

export default function AIExplanation({
  mood,
}: AIExplanationProps) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-[#E8B44C]/20
      bg-[#E8B44C]/5
      p-6
      "
    >
      <h3 className="mb-4 text-xl font-semibold text-[#F5D26B]">
        Mood Analysis
      </h3>

      <p className="leading-8 text-zinc-300">
        CineMind understood your input as{" "}
        <span className="font-semibold text-white">
          `{mood}`
        </span>.
        Recommendations will prioritize emotional tone,
        pacing, themes, cinematography, and audience
        sentiment instead of relying only on genre.
      </p>
    </div>
  );
}