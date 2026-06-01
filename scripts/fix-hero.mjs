import { execSync } from "node:child_process";
import fs from "node:fs";

const path = "components/home/hero.tsx";
const content = `"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSplineScene } from "@/components/home/hero-spline-background";

const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop";

export function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-x-hidden bg-[#0a0a0a] lg:h-[100svh] lg:max-h-[100svh] lg:overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_BG_IMAGE}
          alt="Modern corporate workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0a0f18]/80" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a0f18]/95 via-[#0a0f18]/70 to-[#0a0f18]/50 lg:bg-gradient-to-r lg:from-[#0a0f18]/95 lg:via-[#0a0f18]/75 lg:to-[#0a0f18]/35"
          aria-hidden
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_50%_at_80%_70%,rgba(56,120,220,0.12)_0%,transparent_55%)] lg:bg-[radial-gradient(ellipse_80%_70%_at_72%_48%,rgba(56,120,220,0.14)_0%,transparent_55%)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute z-[2] overflow-hidden inset-x-0 bottom-0 h-[36vh] min-h-[200px] max-h-[320px] sm:h-[40vh] sm:max-h-[360px] lg:inset-x-auto lg:left-[36%] lg:right-0 lg:top-1/2 lg:bottom-auto lg:h-[min(85vh,760px)] lg:max-h-none lg:w-[64%] lg:-translate-y-1/2"
        aria-hidden
      >
        <div className="absolute inset-0 origin-bottom scale-[0.75] translate-y-[8%] sm:scale-[0.85] lg:origin-center lg:translate-x-[4%] lg:translate-y-0 lg:scale-[1.4] xl:scale-[1.55]">
          <HeroSplineScene className="size-full" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-4 pb-[38vh] pt-24 sm:px-6 sm:pb-[40vh] sm:pt-28 md:px-8 lg:min-h-0 lg:pb-10 lg:pt-32">
        <div className="w-full lg:max-w-[50%] xl:max-w-[48%]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 sm:mb-3 sm:text-xs md:text-sm">
              Uhverac Limited
            </p>

            <h1 className="mb-3 max-w-xl text-[1.65rem] font-medium leading-[1.12] tracking-tight text-white drop-shadow-lg sm:mb-4 sm:text-[1.85rem] md:text-4xl lg:text-6xl xl:text-7xl">
              Innovative Solutions.{" "}
              <span className="text-white/90">Trusted in Ghana & Beyond.</span>
            </h1>

            <p className="mb-6 max-w-lg text-sm leading-relaxed text-white/85 sm:mb-8 sm:text-base md:text-lg lg:text-xl">
              Ghanaian-owned expertise in IT, trading, consultancy, and travel—built
              on integrity and long-term partnerships.
            </p>

            <div className="relative z-30 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-white py-2.5 pl-6 pr-1.5 shadow-[0_16px_32px_-6px_rgba(0,0,0,0.4)] transition-opacity hover:opacity-95 sm:w-auto sm:py-2 sm:pl-8 sm:pr-2"
              >
                <span className="text-sm font-semibold tracking-tight text-black sm:text-base md:text-lg">
                  Get in Touch
                </span>
                <Button
                  size="icon"
                  className="pointer-events-none h-9 w-9 shrink-0 rounded-full bg-black text-white sm:h-10 sm:w-10 md:h-12 md:w-12"
                  tabIndex={-1}
                  aria-hidden
                >
                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </Button>
              </Link>
              <Link
                href="/services"
                className="flex h-11 w-full items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:h-auto sm:w-auto sm:px-6 sm:py-3 sm:text-base md:text-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[38vh] right-4 z-20 hidden flex-col items-end sm:bottom-[40vh] sm:right-6 md:flex lg:bottom-8 lg:right-8">
        <AnimatePresence mode="wait">
          {!isChatOpen ? (
            <motion.button
              key="chat-btn"
              layoutId="social-widget"
              onClick={() => setIsChatOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl transition-transform hover:scale-110 sm:h-14 sm:w-14"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              aria-label="Open social links"
            >
              <MessageCircle className="h-5 w-5 text-black sm:h-6 sm:w-6" />
            </motion.button>
          ) : (
            <motion.div
              key="social-list"
              layoutId="social-widget"
              className="flex flex-col items-end gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <motion.button
                onClick={() => setIsChatOpen(false)}
                className="rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
                whileHover={{ rotate: 90 }}
                aria-label="Close social links"
              >
                <X className="h-4 w-4 text-black" />
              </motion.button>

              {["Instagram", "Twitter", "Facebook"].map((social, i) => (
                <motion.div
                  key={social}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="min-w-[120px] cursor-pointer rounded-full bg-white/90 px-4 py-2.5 text-center shadow-lg backdrop-blur-md sm:min-w-[140px] sm:px-6 sm:py-3"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-black sm:text-sm">
                    {social}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path, content, "utf8");
console.log("Wrote", path, fs.statSync(path).size, "bytes");
