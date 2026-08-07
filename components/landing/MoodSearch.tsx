"use client";

import { useState } from "react";
import { Search, Sparkles } from "lucide-react";

interface MoodSearchProps {
  onSearch: (prompt: string) => void;
  loading: boolean;
}

export default function MoodSearch({
  onSearch,
  loading,
}: MoodSearchProps) {
  const [prompt, setPrompt] = useState("");

  function handleSearch() {
    if (!prompt.trim()) return;

    onSearch(prompt);
  }

  return (
    <div
      className="
      flex
      overflow-hidden
      rounded-full
      border
      border-yellow-500/20
      bg-[#111214]/90
      backdrop-blur-xl
      shadow-[0_0_25px_rgba(232,180,76,.08)]
    "
    >
      {/* Icon */}

      <div className="flex items-center pl-8 pr-5">
        <Sparkles
          size={22}
          className="text-[#E8B44C]"
        />
      </div>

      {/* Input */}

      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder="Describe your mood..."
        className="
        h-20
        flex-1
        bg-transparent
        text-lg
        text-white
        placeholder:text-zinc-500
        outline-none
      "
      />

      {/* Button */}

      <button
        onClick={handleSearch}
        disabled={loading}
        className="
        flex
        w-44
        items-center
        justify-center
        gap-3
        bg-[#E8B44C]
        font-semibold
        text-black
        transition-all
        duration-300
        hover:bg-[#FFD86B]
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
      >
        <Search size={20} />

        {loading ? "Thinking..." : "Search"}
      </button>
    </div>
  );
}