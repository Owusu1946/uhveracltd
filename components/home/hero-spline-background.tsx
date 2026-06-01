"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { cn } from "@/lib/utils";
import { configureHeroSplineScene } from "@/lib/spline-hero";

const HERO_SPLINE_SCENE =
  "https://prod.spline.design/orexv3SaljjquWTD/scene.splinecode";

type HeroSplineSceneProps = {
  className?: string;
};

export function HeroSplineScene({ className }: HeroSplineSceneProps) {
  const handleLoad = (spline: Application) => {
    configureHeroSplineScene(spline);
  };

  return (
    <div
      className={cn(
        "relative size-full min-h-[240px] overflow-hidden bg-transparent",
        className
      )}
    >
      <Spline
        scene={HERO_SPLINE_SCENE}
        className="hero-spline-canvas"
        style={{ width: "100%", height: "100%", background: "transparent" }}
        onLoad={handleLoad}
      />
    </div>
  );
}
