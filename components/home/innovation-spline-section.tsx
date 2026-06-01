"use client";

import Link from "next/link";
import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Headphones,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { configureHeroSplineScene } from "@/lib/spline-hero";
import { siteConfig } from "@/lib/site-config";

const ROBOT_SPLINE_SCENE =
  "https://prod.spline.design/vA7mzUKlgbRGhZ8y/scene.splinecode";

const VALUE_POINTS = [
  {
    icon: Sparkles,
    title: "Smart digital solutions",
    description:
      "IT and communications that help your business grow, connect, and work smarter.",
  },
  {
    icon: Headphones,
    title: "Responsive partnership",
    description:
      "Consultancy and support tailored to your goals—with clarity at every step.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable delivery",
    description:
      "Trading, supply, and travel services you can count on across Ghana and beyond.",
  },
] as const;

function handleSplineLoad(spline: Application) {
  configureHeroSplineScene(spline);
}

export function InnovationSplineSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f5f7] px-6 py-20 md:px-12 md:py-28">
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-black/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            Innovation & client focus
          </p>

          <h2 className="mb-5 max-w-xl text-3xl font-medium leading-[1.12] tracking-tight text-black sm:text-4xl md:text-5xl">
            Technology that works with you—not against you
          </h2>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
            At {siteConfig.legalName}, we blend technical expertise with a
            human approach: modern tools, clear communication, and services
            designed around real business needs.
          </p>

          <ul className="mb-10 space-y-5">
            {VALUE_POINTS.map(({ icon: Icon, title, description }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                className="flex gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-black">{title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="h-12 gap-3 rounded-full bg-black pr-2 pl-6 text-base text-white hover:bg-black/90"
            >
              <Link href="/contact" className="inline-flex items-center gap-3">
                Partner With Us
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <ArrowUpRight className="h-4 w-4 text-black" />
                </span>
              </Link>
            </Button>
            <Link
              href="/services"
              className="inline-flex h-12 items-center rounded-full border border-black/15 bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-gray-50 sm:text-base"
            >
              See our services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-black/10 bg-[#2b2b2b] shadow-[0_32px_64px_-24px_rgba(0,0,0,0.35)] sm:rounded-[2.5rem] sm:aspect-square lg:aspect-[5/6]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
            <Spline
              scene={ROBOT_SPLINE_SCENE}
              className="spline-embed-canvas !absolute inset-0 size-full"
              style={{ width: "100%", height: "100%", background: "transparent" }}
              onLoad={handleSplineLoad}
            />
          </div>
          <p className="mt-4 text-center text-sm text-gray-500 lg:text-left">
            Your forward-thinking partner for IT, consultancy, trading & travel
          </p>
        </motion.div>
      </div>
    </section>
  );
}
