"use client";

import {
  Calendar,
  Clock3,
  Globe,
  Languages,
  Building2,
  Film,
} from "lucide-react";

interface MovieInfoProps {
  runtime: number;
  releaseDate: string;
  originalLanguage: string;
  status: string;
  budget?: number;
  revenue?: number;
  productionCompanies: string[];
}

export default function MovieInfo({
  runtime,
  releaseDate,
  originalLanguage,
  status,
  budget,
  revenue,
  productionCompanies,
}: MovieInfoProps) {
  function formatMoney(value?: number) {
    if (!value) return "—";

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  }

  return (
    <section className="w-full min-w-0">
      {/* ============================================================ */}
      {/* TITLE                                                        */}
      {/* ============================================================ */}

      <h2
        className="
          mb-6
          text-2xl
          font-bold
          text-white
          sm:mb-8
          sm:text-3xl
        "
      >
        Movie Information
      </h2>

      {/* ============================================================ */}
      {/* INFORMATION GRID                                             */}
      {/* ============================================================ */}

      <div
        className="
          grid
          w-full
          min-w-0
          grid-cols-1
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-[#111214]
          p-4
          sm:grid-cols-2
          sm:gap-5
          sm:rounded-3xl
          sm:p-6
          lg:gap-8
          lg:p-8
        "
      >
        {/* Runtime */}

        <InfoItem
          icon={<Clock3 size={19} />}
          label="Runtime"
          value={
            runtime
              ? `${runtime} minutes`
              : "—"
          }
        />

        {/* Release */}

        <InfoItem
          icon={<Calendar size={19} />}
          label="Release Date"
          value={releaseDate || "—"}
        />

        {/* Language */}

        <InfoItem
          icon={<Languages size={19} />}
          label="Language"
          value={
            originalLanguage
              ? originalLanguage.toUpperCase()
              : "—"
          }
        />

        {/* Status */}

        <InfoItem
          icon={<Film size={19} />}
          label="Status"
          value={status || "—"}
        />

        {/* Budget */}

        <InfoItem
          icon={<Building2 size={19} />}
          label="Budget"
          value={formatMoney(budget)}
        />

        {/* Revenue */}

        <InfoItem
          icon={<Globe size={19} />}
          label="Revenue"
          value={formatMoney(revenue)}
        />
      </div>

      {/* ============================================================ */}
      {/* PRODUCTION COMPANIES                                         */}
      {/* ============================================================ */}

      <div
        className="
          mt-4
          w-full
          min-w-0
          rounded-2xl
          border
          border-white/10
          bg-[#111214]
          p-4
          sm:mt-6
          sm:rounded-3xl
          sm:p-6
          lg:mt-8
          lg:p-8
        "
      >
        <h3
          className="
            mb-4
            text-lg
            font-semibold
            text-white
            sm:mb-5
            sm:text-xl
          "
        >
          Production Companies
        </h3>

        {productionCompanies.length > 0 ? (
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {productionCompanies.map((company) => (
              <span
                key={company}
                className="
                  max-w-full
                  break-words
                  rounded-full
                  border
                  border-yellow-500/20
                  bg-yellow-500/10
                  px-3
                  py-1.5
                  text-xs
                  text-yellow-300
                  sm:px-4
                  sm:py-2
                  sm:text-sm
                "
              >
                {company}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-zinc-500">
            Production information unavailable.
          </p>
        )}
      </div>
    </section>
  );
}

/* ================================================================== */
/* INFO ITEM                                                          */
/* ================================================================== */

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoItem({
  icon,
  label,
  value,
}: InfoItemProps) {
  return (
    <div
      className="
        flex
        min-w-0
        items-center
        gap-3
        rounded-xl
        border
        border-white/5
        bg-white/[0.02]
        p-3
        sm:gap-4
        sm:p-4
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-yellow-500/10
          text-yellow-400
          sm:h-12
          sm:w-12
        "
      >
        {icon}
      </div>

      {/* Text */}

      <div className="min-w-0">
        <p className="text-xs text-zinc-500 sm:text-sm">
          {label}
        </p>

        <p
          className="
            mt-1
            truncate
            text-sm
            font-medium
            text-white
            sm:text-lg
          "
          title={value}
        >
          {value}
        </p>
      </div>
    </div>
  );
}