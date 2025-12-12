"use client";

import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";
import { Brain, LineChart, FileText, CalendarCheck, Calculator, BarChart3, PieChart, Waves, Recycle } from "lucide-react";
import Reveal from "./Reveal";

interface Slide {
  id: string;
  badge: string;
  badgeIcon: ReactNode;
  badgeColor: string;
  title: string;
  description: string;
  features: {
    icon: ReactNode;
    title: string;
    description: string;
    bgColor: string;
  }[];
  ctaText: string;
  ctaIcon: string;
  ctaLink: string;
  ctaColor: string;
  borderColor: string;
  bgGradient: string;
  ambientColors: {
    primary: string;
    secondary: string;
  };
}

const slides: Slide[] = [
  {
    id: "ai-calculator",
    badge: "AI Tool",
    badgeIcon: <Brain className="h-4 w-4" />,
    badgeColor: "bg-emerald-900/30 border-emerald-800 text-emerald-300",
    title: "AI Carbon Footprint Calculator",
    description:
      "Describe your business once and let AI estimate annual emissions, credits needed, and reduction strategies in seconds.",
    features: [
      {
        icon: <Brain className="h-5 w-5" />,
        title: "Smart Emissions Analysis",
        description:
          "AI reads your description and returns a full breakdown of Scope 1, 2, and 3 emissions.",
        bgColor: "bg-emerald-900/50",
      },
      {
        icon: <LineChart className="h-5 w-5" />,
        title: "Credits & Costs",
        description:
          "Get an instant estimate of credits required, budget ranges, and offset options.",
        bgColor: "bg-teal-900/50",
      },
      {
        icon: <FileText className="h-5 w-5" />,
        title: "Shareable Reports",
        description:
          "Export structured summaries for pitch decks, client proposals, or internal planning.",
        bgColor: "bg-green-900/40",
      }
    ],
    ctaText: "Open AI Carbon Calculator",
    ctaIcon: "⚡",
    ctaLink: "/calculator",
    ctaColor:
      "bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-600 hover:via-teal-600 hover:to-sky-600",
    borderColor: "border-emerald-800",
    bgGradient: "from-emerald-900/20 via-teal-900/20 to-sky-900/20",
    ambientColors: {
      primary: "bg-emerald-300/20",
      secondary: "bg-teal-300/15",
    }
  },
  {
    id: "event-planner",
    badge: "New Feature",
    badgeIcon: <CalendarCheck className="h-4 w-4" />,
    badgeColor: "bg-emerald-900/30 border-emerald-800 text-emerald-300",
    title: "Sustainable Event Planner",
    description: "Plan eco-friendly hackathons, college fests, and events with our comprehensive sustainability checklist and carbon calculator.",
    features: [
      {
        icon: <CalendarCheck className="h-5 w-5" />,
        title: "Smart Checklist",
        description: "Get personalized recommendations for sustainable alternatives to traditional event materials and practices.",
        bgColor: "bg-emerald-900/50"
      },
      {
        icon: <Calculator className="h-5 w-5" />,
        title: "Impact Calculator",
        description: "Track carbon savings, cost implications, and environmental impact of your sustainable choices in real-time.",
        bgColor: "bg-green-900/50"
      },
      {
        icon: <BarChart3 className="h-5 w-5" />,
        title: "Sustainability Score",
        description: "Get a comprehensive sustainability rating and exportable reports to showcase your environmental commitment.",
        bgColor: "bg-teal-900/50"
      }
    ],
    ctaText: "Start Planning Your Event",
    ctaIcon: "🌱",
    ctaLink: "/event-planner",
    ctaColor: "bg-emerald-600 hover:bg-emerald-700",
    borderColor: "border-emerald-800",
    bgGradient: "from-emerald-900/20 via-green-900/20 to-teal-900/20",
    ambientColors: {
      primary: "bg-emerald-300/20",
      secondary: "bg-green-300/15"
    }
  },
  {
    id: "plastic-tracker",
    badge: "New Tool",
    badgeIcon: <Waves className="h-4 w-4" />,
    badgeColor: "bg-blue-900/30 border-blue-800 text-blue-300",
    title: "Plastic Footprint Visualizer",
    description: "Track your single-use plastic consumption and visualize its environmental impact through interactive ocean pollution simulations.",
    features: [
      {
        icon: <PieChart className="h-5 w-5" />,
        title: "Usage Tracking",
        description: "Monitor your monthly plastic consumption across 8 categories from water bottles to shopping bags.",
        bgColor: "bg-blue-900/50"
      },
      {
        icon: <Waves className="h-5 w-5" />,
        title: "Ocean Visualization",
        description: "See how your plastic usage translates to ocean pollution with real-time interactive visualizations.",
        bgColor: "bg-cyan-900/50"
      },
      {
        icon: <Recycle className="h-5 w-5" />,
        title: "Smart Alternatives",
        description: "Discover sustainable alternatives for each plastic item with decomposition timelines and environmental impact data.",
        bgColor: "bg-teal-900/50"
      }
    ],
    ctaText: "Visualize Your Impact",
    ctaIcon: "🌊",
    ctaLink: "/plastic-tracker",
    ctaColor: "bg-blue-600 hover:bg-blue-700",
    borderColor: "border-blue-800",
    bgGradient: "from-blue-900/20 via-cyan-900/20 to-teal-900/20",
    ambientColors: {
      primary: "bg-blue-300/20",
      secondary: "bg-cyan-300/15"
    }
  }
];

export default function AutoSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setKey(prev => prev + 1); // Force re-render of Reveal components
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 px-4 py-6 md:px-8 md:py-8">
        {/* Header + controls */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400/80">
              AI tools spotlight
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-zinc-50">
              Explore CarbonX interactive tools
            </h2>
          </div>

          <div className="flex items-center gap-4 self-start md:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-black/60 px-4 py-2 text-xs font-medium text-zinc-200 shadow-sm transition-colors hover:border-zinc-500 hover:bg-zinc-900/80"
            >
              {isPlaying ? "⏸️ Pause" : "▶️ Play"}
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setKey((prev) => prev + 1);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                  title={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide ? "true" : "false"}
                  className={`h-2.5 w-2.5 rounded-full border border-zinc-700/70 transition-colors ${index === currentSlide
                      ? "bg-emerald-400"
                      : "bg-zinc-800"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Slide */}
        <div
          className={`relative overflow-hidden rounded-2xl border ${currentSlideData.borderColor} bg-gradient-to-br ${currentSlideData.bgGradient} p-6 md:p-8 transition-all duration-1000`}
        >
          <div
            className={`pointer-events-none absolute -top-24 -right-16 h-40 w-40 rounded-full ${currentSlideData.ambientColors.primary} blur-3xl transition-all duration-1000`}
          />
          <div
            className={`pointer-events-none absolute -bottom-20 -left-12 h-32 w-32 rounded-full ${currentSlideData.ambientColors.secondary} blur-2xl transition-all duration-1000`}
          />

          <Reveal key={`title-${key}`} className="relative text-center mb-8">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-100/90 bg-black/35 ${currentSlideData.badgeColor} mb-4 transition-all duration-500`}
            >
              <span>{currentSlideData.badgeIcon}</span>
              <span>{currentSlideData.badge}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-3 transition-all duration-500">
              {currentSlideData.title}
            </h3>
            <p className="text-zinc-300 text-base md:text-lg max-w-2xl mx-auto transition-all duration-500">
              {currentSlideData.description}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-8">
            {currentSlideData.features.map((feature, index) => (
              <Reveal key={`feature-${currentSlide}-${index}-${key}`} delay={100 * (index + 1)}>
                <div
                  className={`rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-sm p-5 transition-colors`}
                >
                  <div
                    className={`w-11 h-11 ${feature.bgColor} rounded-full flex items-center justify-center mb-4 text-lg`}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="text-base font-semibold text-zinc-50 mb-1.5">
                    {feature.title}
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal key={`cta-${key}`} delay={400} className="relative text-center">
            <Link
              href={currentSlideData.ctaLink}
              className={`inline-flex items-center gap-2 ${currentSlideData.ctaColor} text-white font-semibold py-3 px-6 rounded-xl transition-colors`}
            >
              {currentSlideData.ctaIcon} {currentSlideData.ctaText}
            </Link>
          </Reveal>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 mx-auto max-w-md">
          <div className="bg-zinc-900 rounded-full h-1 overflow-hidden">
            <div
              className={`bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-100 ease-linear ${isPlaying ? "animate-progress" : "w-0"
                }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
