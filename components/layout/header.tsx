"use client";

import Link from "next/link"
import { Search, Menu, Sun, ArrowRight, ArrowUpRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isMenuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 pt-6 pointer-events-none">

                {/* Left Nav Pills + Logo */}
                <nav className="flex items-center gap-1 pointer-events-auto">
                    <Link href="/" className="flex items-center gap-2 mr-6 group">
                        <div className="bg-white rounded-full p-1">
                            <Sun className="h-6 w-6 text-black fill-black" />
                        </div>
                        {/* Hide text on very small screens if needed, otherwise keep */}
                        <span className="font-bold text-xl text-white tracking-tight drop-shadow-md">St. Louis</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {["About Us", "Services", "Facilities", "Membership"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all capitalize"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </nav>


                {/* Right Actions */}
                <div className="flex items-center gap-3 pointer-events-auto">
                    <div className="relative hidden lg:block group">
                        <Input
                            type="search"
                            placeholder="Search here..."
                            className="w-64 pl-5 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/80 rounded-full h-12 focus:bg-white/20 transition-all"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-white rounded-full flex items-center justify-center">
                            <Search className="h-4 w-4 text-black" />
                        </div>
                    </div>

                    <Link href="/book-appointment" className="hidden sm:block">
                        <Button className="h-12 rounded-full bg-black text-white hover:bg-black/90 pl-6 pr-2 gap-3 text-base">
                            Book Now
                            <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                                <ArrowUpRight className="h-4 w-4 text-black" />
                            </div>
                        </Button>
                    </Link>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(true)}
                        className="h-12 w-12 rounded-full bg-black text-white hover:bg-black/80 flex items-center justify-center md:hidden"
                    >
                        <Menu className="h-6 w-6" />
                    </Button>

                    {/* Desktop Menu Button (optional, kept for consistency if desired, or hidden) */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-12 w-12 rounded-full bg-black text-white hover:bg-black/80 hidden md:flex items-center justify-center"
                    >
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed inset-0 z-[60] bg-black text-white flex flex-col p-6 md:hidden"
                    >
                        <div className="flex items-center justify-between mb-12">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                                <div className="bg-white rounded-full p-1">
                                    <Sun className="h-6 w-6 text-black fill-black" />
                                </div>
                                <span className="font-bold text-xl tracking-tight">St. Louis</span>
                            </Link>

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(false)}
                                className="h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </div>

                        <nav className="flex flex-col gap-6 text-2xl font-medium">
                            {["About Us", "Services", "Facilities", "Membership"].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="border-b border-white/10 pb-4"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto flex flex-col gap-4">
                            <Button className="h-14 w-full rounded-full bg-white text-black hover:bg-gray-100 gap-3 text-lg font-semibold">
                                Book Appointment
                                <ArrowUpRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
