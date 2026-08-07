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
    <section className="mt-20">

      <h2 className="mb-8 text-3xl font-bold text-white">
        Movie Information
      </h2>

      <div
        className="
          grid
          grid-cols-1
          gap-8
          rounded-3xl
          border
          border-white/10
          bg-[#111214]
          p-8
          md:grid-cols-2
        "
      >

        {/* Runtime */}

        <InfoItem
          icon={<Clock3 size={20} />}
          label="Runtime"
          value={`${runtime} minutes`}
        />

        {/* Release */}

        <InfoItem
          icon={<Calendar size={20} />}
          label="Release Date"
          value={releaseDate}
        />

        {/* Language */}

        <InfoItem
          icon={<Languages size={20} />}
          label="Language"
          value={originalLanguage.toUpperCase()}
        />

        {/* Status */}

        <InfoItem
          icon={<Film size={20} />}
          label="Status"
          value={status}
        />

        {/* Budget */}

        <InfoItem
          icon={<Building2 size={20} />}
          label="Budget"
          value={formatMoney(budget)}
        />

        {/* Revenue */}

        <InfoItem
          icon={<Globe size={20} />}
          label="Revenue"
          value={formatMoney(revenue)}
        />

      </div>

      {/* Production */}

      <div
        className="
          mt-8
          rounded-3xl
          border
          border-white/10
          bg-[#111214]
          p-8
        "
      >

        <h3 className="mb-5 text-xl font-semibold text-white">
          Production Companies
        </h3>

        <div className="flex flex-wrap gap-3">

          {productionCompanies.map((company) => (

            <span
              key={company}
              className="
                rounded-full
                border
                border-yellow-500/20
                bg-yellow-500/10
                px-4
                py-2
                text-sm
                text-yellow-300
              "
            >
              {company}
            </span>

          ))}

        </div>

      </div>

    </section>
  );
}

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
    <div className="flex items-start gap-4">

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-yellow-500/10
          text-yellow-400
        "
      >
        {icon}
      </div>

      <div>

        <p className="text-sm text-zinc-500">
          {label}
        </p>

        <p className="mt-1 text-lg font-medium text-white">
          {value}
        </p>

      </div>

    </div>
  );
}