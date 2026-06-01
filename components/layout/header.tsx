"use client";

import Link from "next/link";
import { Search, Menu, ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SearchModal } from "@/components/ui/search-modal";
import { lightHeaderPaths, mainNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 24;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isLightPage = lightHeaderPaths.includes(pathname);
  const isFloating = scrolled;
  const isHeroTop = !scrolled && !isLightPage;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinkClass = (href: string) => {
    const active = pathname === href;
    const disabled =
      "cursor-not-allowed pointer-events-none opacity-45 select-none";

    if (isFloating) {
      return cn(
        "whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] font-medium lg:px-3.5 lg:text-sm",
        disabled,
        active ? "bg-black/10 text-black/80" : "text-black/50"
      );
    }

    if (isHeroTop) {
      return cn(
        "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium lg:px-5 lg:py-2.5",
        disabled,
        active
          ? "border-white/40 bg-white/20 text-white/80"
          : "border-white/15 bg-white/5 text-white/50"
      );
    }

    return cn(
      "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium lg:px-5 lg:py-2.5",
      disabled,
      active
        ? "border-black/20 bg-black/10 text-black/70"
        : "border-black/10 bg-black/5 text-black/50"
    );
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 pointer-events-none transition-[padding] duration-500 ease-out",
          isFloating
            ? "flex justify-center px-3 pt-3 sm:px-4 sm:pt-4"
            : "px-4 py-4 sm:px-6 sm:py-5"
        )}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 420, damping: 38 }}
          className={cn(
            "pointer-events-auto flex items-center",
            isFloating
              ? "max-w-[calc(100vw-1.5rem)] flex-nowrap gap-0.5 rounded-full border border-black/[0.07] bg-white/95 py-1.5 pl-2 pr-1.5 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:gap-1 sm:pl-2.5 sm:pr-1.5"
              : "w-full justify-between gap-2"
          )}
        >
          {/* Desktop nav — links disabled */}
          <nav
            className={cn(
              "hidden items-center md:flex",
              isFloating ? "gap-0" : "gap-1",
              !isFloating && "mr-auto"
            )}
          >
            {mainNav.map((item) => (
              <span
                key={item.href}
                role="link"
                aria-disabled="true"
                className={navLinkClass(item.href)}
              >
                {item.label}
              </span>
            ))}
          </nav>

          {isFloating && (
            <span
              className="mx-0.5 hidden h-5 w-px shrink-0 bg-black/10 lg:block"
              aria-hidden
            />
          )}

          {/* Actions */}
          <div
            className={cn(
              "flex shrink-0 items-center",
              isFloating ? "gap-0.5 sm:gap-1" : "gap-2 sm:gap-3"
            )}
          >
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className={cn(
                "flex items-center justify-center rounded-full transition-all",
                isFloating
                  ? "h-9 w-9 text-black/70 hover:bg-black/[0.06] hover:text-black"
                  : cn(
                      "border",
                      isHeroTop
                        ? "hidden h-11 w-11 border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 lg:flex lg:h-12 lg:w-12"
                        : "hidden h-11 w-11 border-black/10 bg-black/5 text-black hover:bg-black/10 lg:flex lg:h-12 lg:w-12"
                    )
              )}
            >
              <Search className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
            </button>

            {!isFloating && (
              <button
                onClick={() => setIsSearchOpen(true)}
                className={cn(
                  "hidden h-12 items-center gap-3 rounded-full border px-5 transition-all lg:flex",
                  isHeroTop
                    ? "border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                    : "border-black/10 bg-black/5 text-black hover:bg-black/10"
                )}
              >
                <Search className="h-4 w-4" />
                <span className="text-sm font-medium">Search...</span>
                <kbd
                  className={cn(
                    "hidden items-center rounded px-2 py-1 font-mono text-xs xl:inline-flex",
                    isHeroTop ? "bg-white/20" : "bg-black/10"
                  )}
                >
                  ⌘K
                </kbd>
              </button>
            )}

            <Link
              href="/contact"
              className={cn(
                "hidden sm:block",
                isFloating && "ml-0.5"
              )}
            >
              {isFloating ? (
                <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-black px-3.5 text-sm font-semibold text-white transition-colors hover:bg-black/90">
                  Contact
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              ) : (
                <Button className="h-12 gap-3 rounded-full bg-black pr-2 pl-6 text-base text-white hover:bg-black/90">
                  Contact Us
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <ArrowUpRight className="h-4 w-4 text-black" />
                  </div>
                </Button>
              )}
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full md:hidden",
                isFloating
                  ? "bg-black/[0.06] text-black hover:bg-black/10"
                  : "bg-black text-white hover:bg-black/80"
              )}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#121212] p-6 text-white md:hidden"
          >
            <div className="mb-8 flex items-center justify-end">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                setTimeout(() => setIsSearchOpen(true), 300);
              }}
              className="mb-8 flex h-14 w-full items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 text-left"
            >
              <Search className="h-5 w-5 text-white/60" />
              <span className="text-white/60">Search services, pages...</span>
            </button>

            <nav className="flex flex-col gap-5 text-2xl font-medium" aria-label="Menu">
              {mainNav.map((item) => (
                <span
                  key={item.href}
                  role="link"
                  aria-disabled="true"
                  className={cn(
                    "cursor-not-allowed border-b border-white/10 pb-4 text-white/40 select-none",
                    pathname === item.href && "text-white/55"
                  )}
                >
                  {item.label}
                </span>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Button
                asChild
                className="h-14 w-full gap-3 rounded-full bg-white text-lg font-semibold text-black hover:bg-gray-100"
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 w-full rounded-full border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                  Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
