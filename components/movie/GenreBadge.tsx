"use client";

interface GenreBadgeProps {
  genre: string;
}

export default function GenreBadge({
  genre,
}: GenreBadgeProps) {
  return (
    <span
      className="
      rounded-full
      border
      border-yellow-500/20
      bg-yellow-500/10
      px-3
      py-1
      text-xs
      font-medium
      text-[#F5D26B]
      backdrop-blur-md
    "
    >
      {genre}
    </span>
  );
}