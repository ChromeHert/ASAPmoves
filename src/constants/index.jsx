import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


import profile1 from "../assets/profile/profile1.jpg";
import profile2 from "../assets/profile/profile2.jpg";
import profile3 from "../assets/profile/profile3.jpg";
import profile4 from "../assets/profile/profile4.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: profile2,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: profile1,
    text: "I couldn't be happier with the outcome of the delivery.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: profile3,
    text: "Working with this company was a pleasure. Excellent handling of goods and top-notch delivery.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: profile4,
    text: "Working with ASAPmoves Company was a game-changer for our business. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: profile3,
    text: "I am amazed by the level of professionalism and dedication shown by the company. They were able to exceed our expectations and deliver goods and services on time.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: profile4,
    text: "The team went above and beyond to ensure our product was delivered to where it was needed.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Guaranteed Delivery Services",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    icon: <Fingerprint />,
    text: "Social Services",
    description:
      "Dolor Lorem ipsum dolor sit amet, consectetur adip iscing vel scelerisque tempor invid",
  },
  {
    icon: <ShieldHalf />,
    text: "Online & Offline Services",
    description:
      "Dolor Lorem ipsum dolor sit amet, consectetur adip iscing vel scelerisque tempor invid",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Dolor Lorem ipsum dolor sit amet, consectetur adip iscing vel scelerisque tempor invid",
  },
  {
    icon: <PlugZap />,
    text: "Tracking",
    description:
      "Dolor Lorem ipsum dolor sit amet, consectetur adip iscing vel scelerisque tempor invid",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Dolor Lorem ipsum dolor sit amet, consectetur adip iscing vel scelerisque tempor invid",
  },
];

export const checklistItems = [
  {
    title: "Movement made easy",
    description:
      "Lorem ipsum dolor sit",
  },
  {
    title: "Movement made easy",
    description:
      "Lorem Dolor Lorem ipsum dolor sit amet, consectetur adip iscing vel scelerisque tempor invid.",
  },
  {
    title: "Reduced time",
    description:
    "Lorem Dolor Lorem ipsum dolor sit amet, consectetur adip iscing vel scelerisque tempor invid.",
  },
  {
    title: "Careful handling of your goods",
    description:
      "Lorem Dolor Lorem ipsum dolor sit amet, consectetur adip iscing vel scelerisque tempor invid.",
  },
];

export const pricingOptions = [
  {
    title: "Intrastate",
    price: "250",
    features: [
      "Under 24hrs delivery",
      "Fast",
      "Handling fragile items",
      "Confidential",
    ],
  },
  {
    title: "Interstate",
    price: "1,000",
    features: [
      "1 week delivery max",
      "Fast",
      "Handling fragile items",
      "Secure",
    ],
  },
  {
    title: "International",
    price: "4,000",
    features: [
      "Depends on destination",
      "Quick and easy",
      "Handling fragile items",
      "Secure",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Portfolio" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "About us" },
  { href: "#", text: "Blog" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Pick Up" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Oversees Shipping" },
  { href: "#", text: "Report Issues" },
];

export const communityLinks = [
  { href: "#", text: "facebook", icon: <FaFacebookF /> },
  { href: "#", text: "twitter(X)", icon: <FaTwitter /> },
  { href: "#", text: "instagram", icon: <FaInstagram /> },
  { href: "#", text: "linkedIn", icon: <FaLinkedin /> },
];
