"use client";

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
    <section className="relative flex h-[100dvh] max-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-[#0a0a0a] pt-28 pb-8 sm:pt-32 sm:pb-10">
      {/* Background photo */}
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
          className="absolute inset-0 bg-gradient-to-r from-[#0a0f18]/95 via-[#0a0f18]/75 to-[#0a0f18]/35 lg:via-[#0a0f18]/65"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0a0f18]/90 via-transparent to-[#0a0f18]/50"
          aria-hidden
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_70%_at_72%_48%,rgba(56,120,220,0.14)_0%,transparent_55%)]"
        aria-hidden
      />

      {/* 3D scene */}
      <div
        className="pointer-events-none absolute z-[2] overflow-visible
          right-0 bottom-0 h-[min(50vh,420px)] w-full max-w-[100vw]
          sm:h-[min(48vh,440px)] sm:max-w-[90%]
          lg:left-[38%] lg:right-0 lg:top-1/2 lg:bottom-auto lg:h-[min(88vh,780px)] lg:w-[62%] lg:max-w-none lg:-translate-y-1/2"
        aria-hidden
      >
        <div
          className="absolute inset-0 origin-center
            translate-x-[12%] translate-y-[2%] scale-[0.88]
            sm:translate-x-[6%] sm:scale-[1]
            lg:translate-x-[4%] lg:translate-y-0 lg:scale-[1.45]
            xl:scale-[1.6]"
        >
          <HeroSplineScene className="size-full" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center px-4 sm:px-8">
        <div className="w-full lg:max-w-[48%] lg:pr-6">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/70 sm:text-sm md:text-base">
              Uhverac Limited
            </p>

            <h1 className="mb-4 max-w-2xl text-[2rem] font-medium leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
              Innovative Solutions.{" "}
              <span className="text-white/90">Trusted in Ghana & Beyond.</span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              Ghanaian-owned expertise in IT, trading, consultancy, and travel—built
              on integrity and long-term partnerships.
            </p>

            <div className="relative z-30 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/contact"
                className="flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-1.5 shadow-[0_16px_32px_-6px_rgba(0,0,0,0.4)] transition-opacity hover:opacity-95 sm:pl-8 sm:pr-2"
              >
                <span className="text-base font-semibold tracking-tight text-black sm:text-lg">
                  Get in Touch
                </span>
                <Button
                  size="icon"
                  className="pointer-events-none h-10 w-10 rounded-full bg-black text-white sm:h-12 sm:w-12"
                  tabIndex={-1}
                  aria-hidden
                >
                  <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-base font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:px-6 sm:py-3 sm:text-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-20 flex flex-col items-end sm:bottom-6 sm:right-6 md:bottom-8 md:right-8">
          <AnimatePresence mode="wait">
            {!isChatOpen ? (
              <motion.button
                key="chat-btn"
                layoutId="social-widget"
                onClick={() => setIsChatOpen(true)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-transform hover:scale-110"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-6 w-6 text-black" />
              </motion.button>
            ) : (
              <motion.div
                key="social-list"
                layoutId="social-widget"
                className="flex flex-col items-end gap-3 bg-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <motion.button
                  onClick={() => setIsChatOpen(false)}
                  className="mb-1 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
                  whileHover={{ rotate: 90 }}
                >
                  <X className="h-4 w-4 text-black" />
                </motion.button>

                {["Instagram", "Twitter", "Facebook"].map((social, i) => (
                  <motion.div
                    key={social}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="min-w-[140px] cursor-pointer rounded-full bg-white/90 px-6 py-3 text-center shadow-lg backdrop-blur-md transition-transform hover:scale-105"
                  >
                    <span className="text-sm font-bold uppercase tracking-wider text-black">
                      {social}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
