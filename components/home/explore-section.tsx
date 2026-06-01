import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const IMAGES = {
  main: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&auto=format&fit=crop",
  secondary:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop",
} as const;

export function ExploreSection() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-16 text-black sm:px-6 md:px-12 md:py-24">
      <div className="mb-10 flex flex-col items-center text-center sm:mb-14 md:mb-16">
        <Link
          href="/about"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-gray-50 sm:mb-6"
        >
          About {siteConfig.name}
          <ArrowRight className="h-3 w-3" />
        </Link>
        <h2 className="mx-auto max-w-4xl text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          One Partner for IT, Supply,{" "}
          <span className="md:block">Consultancy & Travel</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
        <div className="flex flex-col justify-start lg:col-span-3 lg:pt-4">
          <div className="mb-4 inline-block self-center rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium lg:mb-6 lg:self-start">
            Who We Are
          </div>
          <p className="mb-4 text-center text-lg font-medium leading-relaxed sm:text-xl md:mb-6 md:text-2xl lg:text-left">
            {siteConfig.legalName} is a Ghanaian-owned company built on
            professionalism, integrity, and innovation.
          </p>
          <p className="mb-6 text-center text-sm leading-relaxed text-gray-600 sm:text-base md:mb-8 lg:text-left">
            We support businesses, institutions, and individuals with reliable
            services?from digital transformation to strategic consultancy and
            travel solutions.
          </p>
          <Button
            asChild
            className="group mx-auto h-12 w-fit gap-4 rounded-full bg-black px-6 text-white hover:bg-black/80 lg:mx-0"
          >
            <Link href="/about" className="inline-flex items-center gap-4">
              Learn More
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors group-hover:bg-gray-100">
                <ArrowUpRight className="h-4 w-4 text-black" />
              </span>
            </Link>
          </Button>
        </div>

        <Link
          href="/services"
          className="group relative min-h-[280px] overflow-hidden rounded-3xl sm:min-h-[340px] sm:rounded-[2.5rem] md:min-h-[420px] lg:col-span-5 lg:min-h-[500px]"
        >
          <Image
            src={IMAGES.main}
            alt="Uhverac team collaboration"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-1.5 sm:text-sm">
            IT & Communications
          </div>
          <p className="absolute right-4 top-4 hidden max-w-[200px] text-right text-base font-medium leading-tight text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:right-8 sm:top-8 sm:block sm:text-lg">
            Modern digital solutions for growth, efficiency, and connectivity
          </p>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black sm:bottom-6 sm:left-6 sm:px-4 sm:py-2 sm:text-sm">
            <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Accra, Ghana
          </div>
          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors group-hover:bg-gray-100 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12">
            <ArrowUpRight className="h-4 w-4 text-black sm:h-5 sm:w-5" />
          </div>
        </Link>

        <div className="flex flex-col gap-6 lg:col-span-4">
          <Link
            href="/services"
            className="group relative min-h-[220px] w-full overflow-hidden rounded-3xl sm:min-h-[260px] sm:rounded-[2.5rem] md:min-h-[300px]"
          >
            <Image
              src={IMAGES.secondary}
              alt="Business consultation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-1.5 sm:text-sm">
              Consultancy & Supply
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black sm:bottom-6 sm:left-6 sm:px-4 sm:py-2 sm:text-sm">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Ghana & beyond
            </div>
            <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors group-hover:bg-gray-100 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12">
              <ArrowUpRight className="h-4 w-4 text-black sm:h-5 sm:w-5" />
            </div>
          </Link>

          <div className="flex flex-col gap-3 text-center sm:gap-4 lg:text-left">
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-gray-600 sm:text-base lg:mx-0">
              Trading, supply, travel, and professional advisory?delivered with a
              commitment to excellence and long-term client relationships.
            </p>
            <Link
              href="/services"
              className="mx-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-black transition-opacity hover:opacity-70 lg:mx-0"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
