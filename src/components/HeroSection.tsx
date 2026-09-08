import React from 'react';
import { motion } from 'framer-motion';
import { FadingVideo } from './FadingVideo';
import { BlurText } from './BlurText';
import { ArrowUpRight, PlayIcon, ClockIcon, GlobeIcon } from './Icons';

const motionProps = (delay: number) => ({
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const, delay },
});

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-black flex flex-col justify-between">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0 pointer-events-none"
        style={{ width: '120%', height: '120%' }}
      />

      {/* Navbar (fixed top) */}
      <header className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 pointer-events-none">
        {/* Left: Brand "a" */}
        <div className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center pointer-events-auto cursor-pointer">
          <span className="font-heading italic text-2xl text-white select-none">a</span>
        </div>

        {/* Center: Nav links + CTA */}
        <nav className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1.5 pointer-events-auto">
          {['Work', 'Studio', 'Services', 'Journal', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1 bg-white text-black rounded-full px-3.5 py-2 text-sm font-medium font-body flex items-center gap-1 hover:bg-white/90 transition-all hover:scale-[1.02]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </nav>

        {/* Right: Spacer */}
        <div className="h-12 w-12" aria-hidden="true" />
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
        {/* Badge */}
        <motion.div
          {...motionProps(0.4)}
          className="liquid-glass rounded-full px-3.5 py-1.5 flex items-center gap-2.5 text-xs md:text-sm font-body text-white/90 select-none"
        >
          <span className="bg-white text-black font-semibold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
            New
          </span>
          <span>Booking Q3 2026 engagements -- limited capacity</span>
        </motion.div>

        {/* Headline */}
        <div className="mt-6 max-w-3xl">
          <BlurText
            text="Crafted Digital Experiences Built to Outlast Trends"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]"
          />
        </div>

        {/* Subtext */}
        <motion.p
          {...motionProps(0.8)}
          className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight text-white/90"
        >
          We are a small studio of designers and engineers shaping brand-defining websites for
          ambitious companies. Precise typography, cinematic motion, and code you can be proud of.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...motionProps(1.1)} className="mt-6 flex items-center gap-6">
          <a
            href="#contact"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-body font-medium text-white flex items-center gap-2 hover:brightness-110 transition-all hover:scale-105 active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-body font-medium text-white/90 hover:text-white transition-colors cursor-pointer group"
          >
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <PlayIcon className="w-3.5 h-3.5 translate-x-0.5" />
            </div>
            <span>Watch Showreel</span>
          </button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div {...motionProps(1.3)} className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between">
            <ClockIcon className="w-5 h-5 text-white/80" />
            <div>
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4 text-white">
                6 Weeks
              </div>
              <div className="text-xs text-white/70 font-body mt-2 leading-snug">
                Average End-to-End Launch Time
              </div>
            </div>
          </div>

          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between">
            <GlobeIcon className="w-5 h-5 text-white/80" />
            <div>
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4 text-white">
                140+
              </div>
              <div className="text-xs text-white/70 font-body mt-2 leading-snug">
                Brands Shipped Across Four Continents
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Trust Bar */}
      <motion.div
        {...motionProps(1.4)}
        className="relative z-10 flex flex-col items-center gap-4 pb-8"
      >
        <div className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80 font-body">
          Trusted by founders, operators, and creative directors worldwide
        </div>

        <div className="flex items-center justify-center gap-12 md:gap-16">
          {['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'].map((brand) => (
            <span
              key={brand}
              className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/60 hover:text-white transition-colors select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
