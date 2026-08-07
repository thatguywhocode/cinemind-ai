"use client";

import { Star } from "lucide-react";

interface RatingBadgeProps {
  rating: number;
}

export default function RatingBadge({
  rating,
}: RatingBadgeProps) {
  return (
    <div
      className="
      flex
      items-center
      gap-1.5
      rounded-full
      border
      border-yellow-400/20
      bg-black/55
      px-3
      py-1.5
      backdrop-blur-xl
      shadow-[0_0_18px_rgba(232,180,76,.15)]
    "
    >
      <Star
        size={14}
        className="fill-[#E8B44C] text-[#E8B44C]"
      />

      <span
        className="
        text-sm
        font-semibold
        text-[#FFF7E6]
      "
      >
        {rating.toFixed(1)}
      </span>
    </div>
  );
}