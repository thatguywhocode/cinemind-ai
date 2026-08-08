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
    if (!prompt.trim() || loading) return;

    onSearch(prompt.trim());
  }

  return (
    <div
      className="
        flex
        w-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#101114]/90
        shadow-[0_0_40px_rgba(0,0,0,.35)]
        backdrop-blur-xl

        sm:flex-row
        sm:rounded-full
      "
    >
      {/* ================================================================ */}
      {/* INPUT ROW                                                        */}
      {/* ================================================================ */}

      <div className="flex min-w-0 flex-1 items-center">
        {/* Icon */}

        <div
          className="
            flex
            shrink-0
            items-center
            pl-5
            pr-3
            sm:pl-6
            sm:pr-3
          "
        >
          <Sparkles
            size={20}
            className="text-[#E8B44C] sm:h-[22px] sm:w-[22px]"
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
          disabled={loading}
          placeholder="Describe your mood..."
          className="
            h-16
            min-w-0
            flex-1
            bg-transparent
            pr-4
            text-base
            text-white
            placeholder:text-zinc-500
            outline-none
            disabled:cursor-not-allowed
            sm:h-20
            sm:text-lg
          "
        />
      </div>

      {/* ================================================================ */}
      {/* SEARCH BUTTON                                                    */}
      {/* ================================================================ */}

      <button
        type="button"
        onClick={handleSearch}
        disabled={loading || !prompt.trim()}
        className="
          flex
          h-14
          w-full
          shrink-0
          items-center
          justify-center
          gap-2
          bg-[#E8B44C]
          px-6
          font-semibold
          text-black
          transition-all
          duration-300
          hover:bg-[#FFD86B]
          disabled:cursor-not-allowed
          disabled:opacity-60
          sm:h-20
          sm:w-40
          sm:gap-3
          sm:px-5
        "
      >
        <Search size={19} />

        <span>
          {loading ? "Thinking..." : "Search"}
        </span>
      </button>
    </div>
  );
}