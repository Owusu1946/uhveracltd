import { Header } from "@/components/layout/header";
import { ContactFooter } from "@/components/home/contact-footer";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="px-4 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium">
            <FileText className="h-4 w-4" />
            Blog
          </div>
          <h1 className="mb-4 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            News & Insights
          </h1>
          <p className="mb-8 text-base leading-relaxed text-gray-500 md:text-lg">
            Company updates, announcements, and industry articles from Uhverac
            Limited Company will appear here soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black/90"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
