export type HowItWorksCardType = "projects" | "offset" | "certificate" | "share";

export interface HowItWorksCardData {
    step: number;
    key: string;
    type: HowItWorksCardType;
    bgClass: string;
    baseTextClass: string;
    title: string;
    titleClass?: string;
    description: string;
    descriptionClass?: string;
    headlineLines?: string[];
    headlineClass?: string;
    badges?: string[];
    pillText?: string;
    footerPrimary?: string;
    footerSecondary?: string;
    footerChips?: string[];
}

export const howItWorksCards: HowItWorksCardData[] = [
    {
        step: 1,
        key: "choose-project",
        type: "projects",
        bgClass:
            "bg-gradient-to-br from-[#4C1D95] via-[#6D28D9] to-[#7C3AED] border-none shadow-[0_20px_60px_rgba(88,28,135,0.4)]",
        baseTextClass: "text-left text-violet-100",
        title: "Choose a climate project",
        titleClass: "text-white",
        description:
            "Select from verified climate projects — energy, forestry, carbon removal, and more.",
        badges: ["Energy", "Forestry", "Carbon removal"],
    },
    {
        step: 2,
        key: "offset-instantly",
        type: "offset",
        bgClass: "bg-violet-300 border border-indigo-500/60",
        baseTextClass: "text-left text-indigo-100",
        title: "Offset instantly",
        titleClass: "text-white",
        headlineLines: ["Get more", "out of carbon"],
        headlineClass: "text-2xl font-extrabold tracking-tight text-indigo-900 mb-3",
        description: "Offset your carbon footprint instantly using secure digital checkout.",
        descriptionClass: "text-sm md:text-base text-indigo-900",
        pillText: "1-click offset · live CO₂ impact",
    },
    {
        step: 3,
        key: "get-certificate",
        type: "certificate",
        bgClass:
            "bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#0F766E] border-none shadow-[0_20px_60px_rgba(5,150,105,0.4)]",
        baseTextClass: "text-left text-emerald-50",
        title: "Get your certificate",
        description:
            "Receive a digital offset certificate with a unique verification ID.",
        footerPrimary: "Smart trading · Offsets · Proof",
        footerSecondary: "Designed to drop straight into your reporting stack.",
    },
    {
        step: 4,
        key: "share-impact",
        type: "share",
        bgClass:
            "bg-gradient-to-br from-orange-600 via-[#F97316] to-[#FDBA74] border-none shadow-[0_20px_60px_rgba(234,88,12,0.4)]",
        baseTextClass: "text-left text-orange-50",
        title: "Share your impact",
        description:
            "Share your certificate on social media and inspire others to take action.",
        footerChips: ["LinkedIn", "X / Twitter", "Instagram"],
    },
];
