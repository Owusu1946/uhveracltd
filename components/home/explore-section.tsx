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
    <section className="w-full overflow-hidden bg-white px-6 py-24 text-black md:px-12">
      <div className="mb-16 flex flex-col items-center text-center">
        <Link
          href="/about"
          className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-gray-50"
        >
          About {siteConfig.name}
          <ArrowRight className="h-3 w-3" />
        </Link>
        <h2 className="mx-auto max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          One Partner for IT, Supply, <br className="hidden md:block" />
          Consultancy & Travel
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="flex flex-col justify-start pt-4 lg:col-span-3">
          <div className="mb-6 inline-block self-start rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium">
            Who We Are
          </div>
          <p className="mb-8 text-xl font-medium leading-relaxed md:text-2xl">
            {siteConfig.legalName} is a Ghanaian-owned company built on
            professionalism, integrity, and innovation.
          </p>
          <p className="mb-8 text-base leading-relaxed text-gray-600">
            We support businesses, institutions, and individuals with reliable
            services—from digital transformation to strategic consultancy and
            travel solutions.
          </p>
          <Button
            asChild
            className="group mt-auto h-12 w-fit gap-4 rounded-full bg-black px-6 text-white hover:bg-black/80"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-4"
            >
              Learn More
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors group-hover:bg-gray-100">
                <ArrowUpRight className="h-4 w-4 text-black" />
              </span>
            </Link>
          </Button>
        </div>

        <Link
          href="/services"
          className="group relative h-[500px] overflow-hidden rounded-[2.5rem] lg:col-span-5"
        >
          <Image
            src={IMAGES.main}
            alt="Uhverac team collaboration"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-md">
            IT & Communications
          </div>
          <p className="absolute right-8 top-8 max-w-[200px] text-right text-lg font-medium leading-tight text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Modern digital solutions for growth, efficiency, and connectivity
          </p>
          <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
            <MapPin className="h-4 w-4" />
            Accra, Ghana
          </div>
          <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-colors group-hover:bg-gray-100">
            <ArrowUpRight className="h-5 w-5 text-black" />
          </div>
        </Link>

        <div className="flex flex-col gap-6 lg:col-span-4">
          <Link
            href="/services"
            className="group relative h-[300px] w-full overflow-hidden rounded-[2.5rem]"
          >
            <Image
              src={IMAGES.secondary}
              alt="Business consultation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-md">
              Consultancy & Supply
            </div>
            <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
              <MapPin className="h-4 w-4" />
              Ghana & beyond
            </div>
            <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-colors group-hover:bg-gray-100">
              <ArrowUpRight className="h-5 w-5 text-black" />
            </div>
          </Link>

          <div className="mt-auto flex flex-col gap-4">
            <p className="max-w-sm text-sm leading-relaxed text-gray-600">
              Trading, supply, travel, and professional advisory—delivered with a
              commitment to excellence and long-term client relationships.
            </p>
            <Link
              href="/services"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-black transition-opacity hover:opacity-70"
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
