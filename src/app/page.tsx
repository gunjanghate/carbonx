"use client";

import Link from "next/link";
import { ConnectButton } from "thirdweb/react";
import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import CursorMascot from "@/components/CursorMascot";
import PresentationGrid from "@/components/PresentationGrid";
import SlidesSection from "@/components/SlidesSection";
import AutoSlideshow from "@/components/AutoSlideshow";
import LaserFlowBoxExample from "@/components/LaserFlowDemo";
import CardSwap, { Card } from "@/components/CardSwap";
import { howItWorksCards } from "./card-data";
export default function Home() {
  const [twClient, setTwClient] = useState<any | null>(null);

  useEffect(() => {
    let mounted = true;
    import("./client")
      .then((m) => {
        if (mounted) setTwClient(m.client);
      })
      .catch(() => setTwClient(null));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-zinc-950">
      <CursorMascot />
      <AmbientBackground />
      <LaserFlowBoxExample />

      {/* Hero */}
      {/* <section className="relative z-10 mx-auto max-w-7xl px-4 pt-8 pb-10 md:pt-12 md:pb-16"> */}
      {/* Spline Animation - Center of Section */}
      {/* <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full">
            <iframe 
              src='https://my.spline.design/aidatamodelinteraction-OQtyoxML83rvORp2CWWxmSuB/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className="w-full h-full"
              style={{ border: 'none' }}
              title="Spline AI Data Model Interaction"
            />
          </div>
        </div> */}

      {/* Bottom gradient fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/40 z-10 pointer-events-none"></div>

      {/* Text Content - Above and Below Animation */}
      {/* <div className="relative z-20 pointer-events-none h-full flex flex-col justify-between py-4"> */}
      {/* Top Section - All Text Content */}
      {/* <div>
            <Reveal className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-900 bg-indigo-900/40 backdrop-blur-sm px-3 py-1 text-indigo-300 text-xs mb-6">
                AI + Web3 Carbon Exchange
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-4">
                Next-gen carbon credits
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent mb-6">
                Trade. Offset. Predict.
              </h2>
              <p className="text-zinc-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                A futuristic marketplace that gives carbon credits real utility—transparent, liquid, and intelligent.
              </p>
            </Reveal>
          </div> */}

      {/* Middle Section - Interactive Animation Space */}


      {/* Bottom Section - CTAs Only */}
      {/* <div>
            <Reveal delay={150} className="flex flex-col items-center justify-center gap-4 pointer-events-auto">
              {twClient ? (
                <ConnectButton client={twClient} appMetadata={{ name: "Carbon Ledger", url: "https://Carbon Ledger.local" }} />
              ) : null}
              <div className="flex flex-wrap items-center justify-center gap-3 btn-row">
                <CTA href="/dashboard" label="Launch App" />
                <CTA href="#how-it-works" label="How it works" variant="secondary" />
              </div>
            </Reveal>
          </div> */}
      {/* </div> */}

      {/* <Reveal delay={250} className="mt-12 relative z-20 pointer-events-auto">
          <StatsRow />
        </Reveal> */}
      {/* </section> */}

      {/* Features */}
      <section
        id="features"
        className="relative min-h-screen z-10 mx-auto max-w-7xl px-4 py-16 md:px-10 md:py-28"
      >
        <Reveal className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400/80">
                Product features
              </span>
              <h2 className="mt-2 text-3xl md:text-5xl font-bold text-zinc-50">
                Features built for climate-positive teams
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-sm md:text-base">
                From real-time trading to AI footprinting, Carbon Ledger gives you the tools to
                make carbon markets usable, transparent, and trustworthy.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Real-time Trading" desc="Buy and sell carbon credits with live liquidity and best execution." icon={
            <IconSpark />
          } />
          <FeatureCard title="AI Footprint" desc="Quantify and offset your carbon impact with AI-guided tooling." icon={<IconBrain />} />
          <FeatureCard title="Price Prediction" desc="ML models forecast credit prices for smarter entries and exits." icon={<IconChart />} />
          <FeatureCard title="Fraud Detection" desc="Anomaly detection flags suspicious credits and behaviors." icon={<IconShield />} />
          <FeatureCard title="On-chain Proof" desc="Transparent, verifiable ownership and retirements on-chain." icon={<IconBlock />} />
          <FeatureCard title="Portfolio Tools" desc="Track PnL, holdings, and retirement progress instantly." icon={<IconWallet />} />
        </div>
      </section>

      {/* Auto-changing Slideshow for Main Features */}
      <AutoSlideshow />

      {/* How it works */}
      <section
        id="how-it-works"
        className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-16"
      >
        <Reveal className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-50">
            From footprint to verifiable offset
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-sm md:text-base">
            Follow a clear four-step flow: choose a project, offset instantly, receive a proof-backed
            certificate, and share your impact with anyone.
          </p>
        </Reveal>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StepCard step="01" title="Connect wallet" desc="Use your wallet to access markets and tools securely." />
          <StepCard step="02" title="Trade & offset" desc="Buy, sell, and retire credits with one click." />
          <StepCard step="03" title="Track impact" desc="Monitor holdings, price trends, and offset progress." />
        </div> */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 py-10">

          <aside className="w-full lg:w-5/12 lg:ml-12 xl:ml-20 flex justify-center items-center flex-col text-left mb-32 md:mb-0">
            <Reveal className="flex flex-col gap-4 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400/80">
                How it works
              </span>
              <h3 className="text-3xl md:text-4xl font-semibold text-zinc-50 leading-tight">
                Offset your impact in four simple steps
              </h3>
              <p className="text-zinc-400 text-sm md:text-base max-w-md">
                Retire carbon credits to offset your emissions. Carbon Ledger guides you from choosing a verified project to sharing a
                proof-backed certificate with your community.
              </p>
              <ul className="mt-2 space-y-1.5 text-sm md:text-base text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Pick a project that matches your climate goals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Offset instantly with a secure digital checkout.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Get a verifiable certificate you can share anywhere.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Share your retirement certificate and proof across social or embed it on your site.</span>
                </li>
              </ul>
            </Reveal>
          </aside>
          <div className="w-full lg:w-7/12">
            <CardSwap
              cardDistance={50}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
            >
              {howItWorksCards.map((card) => (
                <Card key={card.key} customClass={card.bgClass}>
                  <div
                    className={`w-full h-full flex flex-col justify-between p-6 md:p-7 lg:p-8 ${card.baseTextClass}`}
                  >
                    <div>
                      <span className="inline-flex items-center rounded-full bg-black/40/ bg-opacity-40 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/80 px-3 py-1 mb-3">
                        Step {card.step}
                      </span>
                      <h3
                        className={`text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3 ${card.titleClass ?? ""
                          }`}
                      >
                        {card.title}
                      </h3>

                      {card.headlineLines && card.headlineLines.length > 0 && card.headlineClass && (
                        <h3 className={card.headlineClass}>
                          {card.headlineLines.map((line, idx) => (
                            <span key={idx}>
                              {line}
                              {idx < card.headlineLines!.length - 1 && <br />}
                            </span>
                          ))}
                        </h3>
                      )}

                      <p className={card.descriptionClass ?? "text-sm md:text-base leading-relaxed"}>
                        {card.description}
                      </p>
                    </div>

                    {card.badges && card.badges.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2 text-xs md:text-sm">
                        {card.badges.map((badge) => (
                          <span
                            key={badge}
                            className="rounded-full bg-violet-500/40 border border-violet-200/30 px-3 py-1"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    {card.pillText && (
                      <div className="mt-4 flex items-center justify-between gap-4 text-xs md:text-sm">
                        <div className="inline-flex items-center gap-2 rounded-full bg-black/60 border border-indigo-500/60 px-4 py-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          <span className="whitespace-nowrap">{card.pillText}</span>
                        </div>
                      </div>
                    )}

                    {card.type === "certificate" && card.footerPrimary && card.footerSecondary && (
                      <div className="mt-4 flex items-center justify-between gap-4 text-xs md:text-sm">
                        <div className="flex flex-col gap-1">
                          <span className="font-medium">{card.footerPrimary}</span>
                          <span className="text-emerald-100/80">{card.footerSecondary}</span>
                        </div>
                        <div className="h-14 w-14 rounded-lg bg-black/40 border border-emerald-200/40 shadow-[0_0_20px_rgba(52,211,153,0.7)] flex items-center justify-center text-[0.55rem] text-center leading-tight">
                          QR
                          <br />
                          code
                        </div>
                      </div>
                    )}

                    {card.footerChips && card.footerChips.length > 0 && (
                      <div className="mt-4 flex items-center gap-3 text-xs md:text-sm">
                        {card.footerChips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full bg-black/30 px-3 py-1 border border-white/20"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </section>

      {/* MetaMask-style presentation grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-16">
        <PresentationGrid />
      </section>

      {/* Slide-band */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:py-10">
        <SlidesSection />
      </section>

      {/* Why */}
      <section id="why" className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8">
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-zinc-900">Carbon credits with purpose</h3>
              <p className="text-zinc-700">
                We bring real utility to carbon markets by making credits accessible, liquid, and verifiable. Carbon Ledger turns offsetting
                into a seamless, data-driven experience backed by AI and transparent on-chain proofs.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <MiniCard title="Liquidity" desc="Trade instantly with aggregated liquidity pools." />
              <MiniCard title="Transparency" desc="On-chain records and audit trails for every credit." />
              <MiniCard title="Intelligence" desc="AI-powered pricing, alerts, and risk checks." />
              <MiniCard title="Impact" desc="Track your emissions and retire credits that matter." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[80vh] z-10 mx-auto max-w-7xl px-4 py-14">
        <div className="relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden rounded-3xl border border-emerald-300/40 p-10 text-center">
          {/* Background image layer */}
          <div
            className="absolute inset-0 -z-20"
            style={{
              backgroundImage:
                'url("https://media.istockphoto.com/id/1335757483/vector/vector-abstract-summer-background-with-green-and-blue-gradient-for-banner-poster.jpg?s=612x612&w=0&k=20&c=48ZS9iVZ2gg-LGBAYc0-uL8MZyyCwyca6XyroJzUAAE=")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          {/* Radial overlay on top of image */}
          <div className="absolute -inset-24 -z-10 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.3),transparent_65%)]" />
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900">
            Ready to turn climate goals into action?
          </h3>
          <p className="text-zinc-700 mt-3 text-lg md:text-xl max-w-2xl mx-auto">
            Set up your Carbon Ledger workspace,
            and import your baseline emissions so every tonne is tracked from day one.
          </p>
          <div className="mt-6 flex justify-center">
            <Link className="py-2 px-4 bg-white hover:bg-green-600 transition-all duration-300 hover:text-white text-black rounded-full border-green-900 border-2 " href="/dashboard"> Get Started </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-rose-400/20 to-pink-300/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-16 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-rose-300/16 to-violet-300/10 blur-3xl animate-pulse [animation-delay:200ms]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-300/14 to-violet-300/8 blur-3xl animate-pulse [animation-delay:400ms]" />
    </div>
  );
}

// Removed grid overlay to prevent any light-mode bleed-through
function CTA({ href, label, variant = "primary" }: { href: string; label: string; variant?: "primary" | "secondary" }) {
  const base =
    "group relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";
  if (variant === "secondary") {
    return (
      <Link href={href} className={`btn-secondary ${base}`}>
        <span className="relative">{label}</span>
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={`${base} text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.6)] hover:shadow-[0_20px_40px_-12px_rgba(168,85,247,0.6)]`}
    >
      <span className="absolute -inset-px rounded-xl bg-gradient-to-r from-indigo-400/30 to-fuchsia-400/30 blur opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative">{label}</span>
    </Link>
  );
}

function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-indigo-200/40 via-fuchsia-200/30 to-pink-100/30">
      <div className="relative rounded-2xl bg-white border border-zinc-200 p-6 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-300/20 blur-2xl" />


        <div className="mb-3 text-indigo-600 dark:text-indigo-300">
          {icon}
        </div>


        <h3 className="text-xl font-semibold mb-1 text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>

        <p className="text-zinc-700 dark:text-zinc-300 text-sm">{desc}</p>
      </div>
    </div>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-300/20 blur-2xl" />
      <span className="text-indigo-700 text-xs font-mono">{step}</span>
      <h4 className="text-xl font-semibold mt-1 text-zinc-900 dark:text-zinc-100">{title}</h4>
      <p className="text-zinc-700 dark:text-zinc-300 mt-1 text-sm">{desc}</p>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="relative rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h5 className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</h5>
      <p className="text-zinc-700 dark:text-zinc-300 text-sm mt-1">{desc}</p>
    </div>
  );
}

function StatsRow() {
  const stats = [
    { label: "Credits Listed", value: "120k+" },
    { label: "Avg. Spread", value: "0.12%" },
    { label: "Carbon Retired", value: "54,200 tCO₂e" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-xl border border-zinc-200 bg-white p-5 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{s.value}</div>
          <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// Minimal inline icons 
function IconSpark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-300">
      <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="currentColor" opacity="0.9" />
    </svg>
  );
}
function IconBrain() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-300">
      <path d="M8 6a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3v2a3 3 0 1 0 6 0V7a3 3 0 0 0-5-1zM19 10a3 3 0 0 0-3-3h-1v9a3 3 0 1 0 6 0v-1a4 4 0 0 0-2-5z" fill="currentColor" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-300">
      <path d="M4 19h16M7 16l3-3 3 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-300">
      <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="2" />
      <path d="M9.5 12.5l2 2 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconBlock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-300">
      <path d="M4 7l8-4 8 4-8 4-8-4zM4 17l8 4 8-4M4 12l8 4 8-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconWallet() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-300">
      <path d="M20 7H6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h14V7z" stroke="currentColor" strokeWidth="2" />
      <path d="M16 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}


