import LaserFlow from './LaserFlow';
import { useRef, RefObject } from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion'
import { LineShadowText } from './ui/line-shadow-text';
import { DotPattern } from './ui/dot-pattern';
import { cn } from '@/lib/utils';
import { HoverBorderGradient } from './ui/hover-border-gradient.tsx';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import logo from "../../public/assets/logo.png"
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Image Example Interactive Reveal Effect
export default function LaserFlowBoxExample() {
  const revealImgRef = useRef<HTMLImageElement>(null);
  const router = useRouter();
  const { status } = useSession();

  return (
    <div
      className="h-screen relative overflow-hidden bg-black"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >

      <motion.div
        className="text-left w-96 md:w-3/4 left-4 md:left-16 lg:left-20 flex flex-col justify-start items-start absolute z-10 p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-emerald-900 bg-emerald-900/40 backdrop-blur-sm px-3 py-1 text-emerald-300 text-xs mb-6 relative overflow-hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Shiny left-to-right sweep */}
          <motion.span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
            }}
          >
            <motion.span
              initial={{ x: '-120%' }}
              animate={{ x: '120%' }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '35%',
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%)',
          transform: 'skewX(-20deg)',
          mixBlendMode: 'overlay',
          opacity: 0.45,
              }}
            />
          </motion.span>

          Phase 1 is live <ArrowRight size={12} />
        </motion.div>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-bl from-slate-100 to-slate-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Next-gen carbon credits
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-emerald-300 via-teal-300 to-green-500/70 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Trade. Offset. Predict.
        </motion.h2>

        <motion.p
          className="text-zinc-300 text-base md:text-lg lg:text-lg max-w-xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          A futuristic marketplace that gives carbon credits real utility—transparent, liquid, and intelligent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <div className="flex flex-wrap items-center justify-start gap-3 my-3">
            <HoverBorderGradient
              onClick={() => {
                if (status === 'authenticated') {
                  router.push('/dashboard');
                } else if (status !== 'loading') {
                  router.push('/auth/login');
                }
              }}
            >
              Get started
            </HoverBorderGradient>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link className='bg-white text-black rounded-full px-3 py-2 hover:bg-black hover:text-white hover:border-2 border-white transition-colors duration-300' href="#how-it-works">How it works</Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>



      <LaserFlow
        horizontalBeamOffset={0.25}
        verticalBeamOffset={-0.1}
        color="rgba(34,197,94,0.7)"
      />

      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[86%] h-[40%] md:h-[60%] bg-black rounded-[20px] border-2 border-emerald-900 flex items-center justify-center text-white text-[2rem] z-[6]">
        {/* Your content here */}
        <DotPattern
          glow={true}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <Image src={logo} alt="Logo" height={100} width={100} />
        <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-slate-200 to-slate-400 leading-none font-semibold tracking-tighter text-balance text-5xl md:text-6xl lg:text-7xl py-2 ">
          Carbon
          <LineShadowText className="italic text-transparent bg-clip-text bg-gradient-to-tr from-slate-200 to-slate-400 " shadowColor={"#D3D3D3"}>
            Ledger
          </LineShadowText>
        </h1>
      </div>

      <img
        ref={revealImgRef}
        src="../../public/favicon-v2.ico"
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-50%',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.3,
          pointerEvents: 'none',
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        } as React.CSSProperties & Record<string, any>}
      />
    </div>
  );
}