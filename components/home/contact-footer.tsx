import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Globe } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ContactFooter() {
  return (
    <footer className="relative mt-8 w-full overflow-hidden bg-white pb-10 pt-10 text-black sm:mt-12 sm:pb-12 sm:pt-12">
      <div className="relative mx-auto mb-12 w-full max-w-[1440px] px-4 sm:mb-16 sm:px-8 md:mb-24">
        <div className="relative z-10 flex flex-wrap justify-center text-center">
          <h2 className="text-[11vw] font-medium uppercase leading-[0.9] tracking-tighter text-black sm:text-[9vw] md:text-[7vw] lg:text-[6vw]">
            <span className="block">{siteConfig.name}</span>
            <span className="block text-gray-400">Contact</span>
          </h2>
        </div>

        <div className="absolute left-[5%] top-[10%] hidden h-[18vw] w-[18vw] max-h-48 max-w-48 rotate-[-6deg] overflow-hidden rounded-3xl shadow-2xl md:block lg:left-[10%]">
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop"
            alt="Uhverac office"
            fill
            className="object-cover"
            sizes="200px"
          />
        </div>

        <div className="absolute bottom-[10%] right-[5%] h-[28vw] w-[28vw] max-h-56 max-w-56 translate-y-1/4 overflow-hidden rounded-3xl shadow-2xl sm:right-[8%] md:right-[12%] md:h-[20vw] md:w-[20vw]">
          <Image
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=600&auto=format&fit=crop"
            alt="Business partnership"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 40vw, 220px"
          />
        </div>
      </div>

      <div className="relative z-30 mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-4 sm:px-6 md:flex-row md:items-end md:justify-between md:gap-12 md:px-12">
        <div className="flex w-full flex-col gap-1 text-center text-sm font-medium md:w-auto md:text-left">
          <p>Helpline: +233 XX XXX XXXX</p>
          <p className="text-gray-500">info@uhverac.com</p>
        </div>

        <div className="flex w-full max-w-md flex-col items-center gap-6 text-center md:max-w-lg md:gap-8">
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1 text-sm font-semibold"
              >
                {item.label}
                <span className="opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </Link>
            ))}
          </nav>

          <p className="max-w-md text-xs leading-relaxed text-gray-500 sm:text-sm">
            {siteConfig.legalName} delivers IT, trading, consultancy, and travel
            solutions with a commitment to professionalism and long-term client
            relationships.
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {[Linkedin, Instagram, Twitter, Globe].map((Icon, i) => (
              <div
                key={i}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-black hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full text-center text-xs font-medium text-gray-500 sm:text-sm md:w-auto md:text-right">
          © {new Date().getFullYear()} {siteConfig.legalName}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
