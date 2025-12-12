"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const phases = [
  {
    id: "phase-1",
    label: "PHASE 1",
    title: "Public prototype",
    badge: "Now live",
    accent: "from-violet-600/70 to-fuchsia-500/90",
    goal: "Show the platform works and get first users.",
    points: [
      "Static list of climate projects.",
      "Simulated or small real offset flow.",
      "Certificate preview with verification page.",
    ],
  },
  {
    id: "phase-1-5",
    label: "PHASE 1.5",
    title: "Web3 mini-launch",
    badge: "Optional step",
    accent: "from-sky-500/70 to-cyan-400/90",
    goal: "Add on-chain offset proof without extra complexity.",
    points: [
      "Record offset proofs on Polygon / Base.",
      "Certificates show blockchain transaction ID.",
      "Verification links directly to a block explorer.",
    ],
  },
  {
    id: "phase-2",
    label: "PHASE 2",
    title: "Real product",
    badge: "Revenue starts",
    accent: "from-emerald-500/70 to-teal-400/90",
    goal: "Sell real offsets with real partners.",
    points: [
      "Partner projects with verified registry metadata.",
      "Live payments (UPI, cards, Razorpay, Stripe).",
      "Retirement proof and company-ready reports.",
    ],
  },
  {
    id: "phase-3",
    label: "PHASE 3",
    title: "Tokenized layer",
    badge: "Web3-native",
    accent: "from-indigo-500 to-purple-500",
    goal: "Turn certificates and credits into Web3 primitives.",
    points: [
      "Soulbound-style NFT certificates for reputation.",
      "Display-only tokenized credits backed by retirements.",
      "Early marketplace UI with ranked projects.",
    ],
  },
  {
    id: "phase-4",
    label: "PHASE 4",
    title: "Full marketplace",
    badge: "Pro level",
    accent: "from-amber-500/70 to-orange-500/90",
    goal: "Operate a real-time carbon credit market.",
    points: [
      "Carbon credit liquidity and trading rails.",
      "Wallet integration and transparent offset registry.",
      "Advanced verification and compliance tooling.",
    ],
  },
];

export default function SlidesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPhases = phases.length;

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPhases);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPhases) % totalPhases);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 px-6 py-8 md:px-8 md:py-10">
      <div className="flex flex-col gap-4 md:gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400/80">
            Product roadmap
          </p>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-zinc-50">
            From prototype to full carbon marketplace
          </h3>
          <p className="mt-2 text-sm md:text-base text-zinc-400 max-w-xl">
            CarbonX is shipping in clear phases, starting with a public prototype and
            evolving into a fully tokenized, real-time carbon market.
          </p>
        </div>
      </div>

      <div className="relative mt-6 md:mt-8">
        {/* Vignette overlays */}
        <div className="pointer-events-none absolute inset-y-4 left-0 w-16 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-4 right-0 w-16 bg-gradient-to-l from-zinc-950 via-zinc-950/90 to-transparent" />

        {/* Navigation arrows */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous phase"
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-zinc-700/80 bg-black/60 p-2 text-xs text-zinc-200 shadow-lg hover:bg-zinc-900/80 hover:border-zinc-500 transition-colors"
        >
          ◀
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next phase"
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-zinc-700/80 bg-black/60 p-2 text-xs text-zinc-200 shadow-lg hover:bg-zinc-900/80 hover:border-zinc-500 transition-colors"
        >
          ▶
        </button>

        <div className="overflow-hidden px-4 md:px-48 ">
          <motion.div
            className="flex "
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            {phases.map((phase, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div key={phase.id} className="w-full shrink-0 pr-4 last:pr-0">
                  <motion.div
                    className={`relative flex min-h-72 flex-col justify-between rounded-2xl border border-zinc-800/80 bg-gradient-to-br ${phase.accent} px-4 py-5 md:px-5 md:py-6 shadow-[0_18px_45px_-18px_rgba(15,23,42,0.9)] min-h-[220px] w-full transition-transform transition-opacity duration-300 ${isActive ? "opacity-100 scale-[1.01]" : "opacity-60 scale-[0.97]"
                      }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center rounded-full bg-black/25 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-zinc-100/90">
                          {phase.label}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-black/35 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.16em] uppercase text-zinc-100/90">
                          {phase.badge}
                        </span>
                      </div>
                      <h4 className="mt-3 text-lg md:text-xl font-semibold text-zinc-50">
                        {phase.title}
                      </h4>
                      <p className="mt-1 text-lg md:text-lg text-zinc-100/80">{phase.goal}</p>
                      <ul className="mt-3 space-y-1.5 text-sm md:text-base text-zinc-50/90">
                        {phase.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-[6px] h-1 w-1 rounded-full bg-zinc-100/90" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[0.7rem] text-zinc-100/70">
                      <span>
                        Step {idx + 1} of {totalPhases}
                      </span>
                      {idx < totalPhases - 1 && (
                        <div className="hidden md:flex items-center gap-1 text-[0.65rem] text-emerald-100/90">
                          <span className="h-px w-6 bg-emerald-300/80" />
                          <span>Next: {phases[idx + 1].title}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
