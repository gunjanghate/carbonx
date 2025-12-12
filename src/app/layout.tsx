import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WelcomeModal from "../components/WelcomeModal";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });
const unbounded = Bricolage_Grotesque({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Carbon Ledger | AI + Web3 Carbon Credit Exchange",
  description: "Buy, sell, and offset carbon credits with AI and blockchain.",
  icons: {
    icon: "/favicon-v2.ico",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={unbounded.className}>
        {/* <ThirdwebProvider> */}
        <SessionWrapper>

          <WelcomeModal />
          <div className="min-h-screen flex flex-col bg-black text-zinc-100 pt-20">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SessionWrapper>
        {/* </ThirdwebProvider> */}
      </body>
    </html>
  );
}
