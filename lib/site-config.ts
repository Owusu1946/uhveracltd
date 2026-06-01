import {
  Briefcase,
  FileText,
  Globe,
  Mail,
  MapPin,
  Plane,
  ShoppingBag,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export const siteUrl = "https://uhveracltd.vercel.app";

export const siteConfig = {
  name: "Uhverac",
  legalName: "Uhverac Limited Company",
  tagline: "Innovative solutions across Ghana & beyond",
  description:
    "Ghanaian-owned company delivering IT and communications, trading and supply, consultancy, and travel services across Ghana and beyond.",
  ogTitle: "Innovative Solutions. Trusted in Ghana & Beyond.",
} as const;

/** 1200×630 — recommended for WhatsApp, Facebook, LinkedIn, X */
export const ogImage = {
  path: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Uhverac Limited Company — innovative IT, trading, consultancy and travel solutions in Ghana",
} as const;

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

/** Pages that use a light header background when not scrolled */
export const lightHeaderPaths = ["/about", "/contact", "/services", "/blog"];

export type NavSearchItem = {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  category: string;
};

export const searchCatalog: NavSearchItem[] = [
  {
    id: 1,
    title: "IT & Communications",
    description: "Digital solutions for growth and connectivity",
    href: "/services",
    icon: Wifi,
    category: "Services",
  },
  {
    id: 2,
    title: "Trading & Supply",
    description: "Quality products delivered on time",
    href: "/services",
    icon: ShoppingBag,
    category: "Services",
  },
  {
    id: 3,
    title: "Consultancy",
    description: "Strategic guidance for businesses",
    href: "/services",
    icon: Briefcase,
    category: "Services",
  },
  {
    id: 4,
    title: "Travel & Tours",
    description: "Planning and travel assistance",
    href: "/services",
    icon: Plane,
    category: "Services",
  },
  {
    id: 5,
    title: "About Uhverac",
    description: "Our vision, mission, and story",
    href: "/about",
    icon: Globe,
    category: "Pages",
  },
  {
    id: 6,
    title: "Blog",
    description: "News, updates, and insights",
    href: "/blog",
    icon: FileText,
    category: "Pages",
  },
  {
    id: 7,
    title: "Contact",
    description: "Reach our team",
    href: "/contact",
    icon: Mail,
    category: "Pages",
  },
];

export const searchQuickActions = [
  { label: "Contact Us", href: "/contact", icon: Mail },
  { label: "Our Services", href: "/services", icon: Briefcase },
  { label: "About Uhverac", href: "/about", icon: MapPin },
] as const;

export const trendingSearches = [
  "IT & Communications",
  "Consultancy",
  "Travel & Tours",
  "Contact",
];
