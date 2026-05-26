import {
  FaCloudSunRain,
  FaFlask,
  FaBug,
  FaTractor,
  FaWallet,
  FaSeedling,
  FaMoneyCheckDollar,
  FaShieldHalved,
  FaDroplet,
  FaWheatAwn,
  FaLeaf,
  FaPepperHot,
  FaCarrot,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

export type Service = {
  icon: IconType;
  title: string;
  description: string;
  animation: "fade-up" | "fade-left" | "fade-right" | "zoom-in";
  delay: number;
};

export const services: Service[] = [
  {
    icon: FaCloudSunRain,
    title: "Weather Forecast",
    description:
      "Get accurate weather predictions for your district and choose the right time for sowing and harvesting.",
    animation: "fade-left",
    delay: 0,
  },
  {
    icon: FaFlask,
    title: "Soil Testing",
    description:
      "Test your field's soil and find out exactly which nutrients are missing and what fertilizers to use.",
    animation: "fade-up",
    delay: 150,
  },
  {
    icon: FaBug,
    title: "Pest Management",
    description:
      "Expert advice and treatment solutions to protect your crops from insects and diseases effectively.",
    animation: "fade-right",
    delay: 300,
  },
  {
    icon: FaTractor,
    title: "Modern Equipment",
    description:
      "Information on subsidies for tractors, drone spraying, and advanced agricultural machinery.",
    animation: "fade-left",
    delay: 100,
  },
  {
    icon: FaWallet,
    title: "Agriculture Loans",
    description:
      "Details on Kisan Credit Card (KCC) and low-interest loans without any guarantee requirements.",
    animation: "fade-up",
    delay: 250,
  },
  {
    icon: FaSeedling,
    title: "Quality Seeds",
    description:
      "Information about certified, high-yielding seed varieties to maximize your crop production.",
    animation: "fade-right",
    delay: 400,
  },
];

export type Scheme = {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  delay: number;
  details: {
    overview: string;
    benefits: string[];
    eligibility: string[];
    howToApply: string[];
    officialLink: string;
  };
};

export const schemes: Scheme[] = [
  {
    id: "pm-kisan",
    icon: FaMoneyCheckDollar,
    title: "PM-KISAN",
    description:
      "Get ₹6000 per year directly in your bank account in three equal installments.",
    badge: "NEW",
    badgeColor: "#22c55e",
    delay: 0,
    details: {
      overview:
        "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a central sector scheme that provides income support of ₹6,000 per year to all landholding farmer families across the country in three equal installments of ₹2,000 every four months.",
      benefits: [
        "₹6,000 per year as direct income support",
        "Money transferred directly to bank account (DBT)",
        "Three installments of ₹2,000 every 4 months",
        "No repayment, fully grant-based assistance",
        "Helps with input costs like seeds, fertilizer, equipment",
      ],
      eligibility: [
        "All landholding farmer families with cultivable land",
        "Both small and marginal farmers eligible",
        "Aadhaar card linked with bank account is mandatory",
        "Not eligible: institutional landholders, government employees, income-tax payers",
      ],
      howToApply: [
        "Visit pmkisan.gov.in or your nearest CSC (Common Service Centre)",
        "Click on 'New Farmer Registration' and fill the form",
        "Submit Aadhaar, bank account, and land details",
        "Get verification done by local Patwari / Revenue officer",
        "Track status with your Aadhaar or mobile number on the portal",
      ],
      officialLink: "https://pmkisan.gov.in",
    },
  },
  {
    id: "pm-fasal-bima",
    icon: FaShieldHalved,
    title: "PM Fasal Bima",
    description:
      "Full compensation for crop damage with very minimal premium amount for all farmers.",
    badge: "POPULAR",
    badgeColor: "#f59e0b",
    delay: 150,
    details: {
      overview:
        "Pradhan Mantri Fasal Bima Yojana (PMFBY) provides comprehensive crop insurance against natural calamities, pests and diseases. It aims to support farmers through financial assistance for crop losses and stabilize their income.",
      benefits: [
        "Coverage for losses from natural disasters, pests, and diseases",
        "Only 2% premium for Kharif crops, 1.5% for Rabi",
        "5% premium for annual commercial / horticultural crops",
        "Quick claim settlement directly to bank account",
        "Coverage from pre-sowing to post-harvest losses",
      ],
      eligibility: [
        "All farmers — owner, tenant, or sharecropper",
        "Loanee farmers automatically covered (with KCC)",
        "Non-loanee farmers can voluntarily enroll",
        "Crop must be notified in your area by the State Govt",
      ],
      howToApply: [
        "Visit pmfby.gov.in or your nearest bank / CSC",
        "Loanee farmers: enrolled automatically through bank",
        "Non-loanee: fill the proposal form with land & crop details",
        "Pay the nominal premium (deducted from loan or paid in cash)",
        "Keep the policy document and receipt safely",
      ],
      officialLink: "https://pmfby.gov.in",
    },
  },
  {
    id: "pmksy",
    icon: FaDroplet,
    title: "PM Krishi Sinchayee",
    description:
      "Up to 55% subsidy on drip and sprinkler irrigation systems for water efficiency.",
    badge: "MUST KNOW",
    badgeColor: "#3b82f6",
    delay: 300,
    details: {
      overview:
        "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) — 'Har Khet Ko Paani' — focuses on end-to-end irrigation solutions, expanding cultivable area, improving water-use efficiency through micro-irrigation (drip & sprinkler systems).",
      benefits: [
        "Up to 55% subsidy for small & marginal farmers",
        "Up to 45% subsidy for other farmers",
        "Drip and sprinkler irrigation systems covered",
        "Saves 30-70% water vs flood irrigation",
        "Increases crop yield by 20-90%",
      ],
      eligibility: [
        "All categories of farmers — small, marginal, large",
        "Should have a reliable water source (well, tube-well, canal)",
        "Land ownership documents required",
        "Aadhaar-linked bank account mandatory",
      ],
      howToApply: [
        "Visit pmksy.gov.in or your State Agriculture Department",
        "Fill the application form with land and water-source details",
        "Submit Aadhaar, land records, bank passbook, photographs",
        "Get site inspection done by department officer",
        "Subsidy directly credited to bank after installation",
      ],
      officialLink: "https://pmksy.gov.in",
    },
  },
];

export type MandiRow = {
  icon: IconType;
  iconColor: string;
  crop: string;
  mandi: string;
  min: string;
  max: string;
  trend: "up" | "down";
  change: string;
};

export const mandiData: MandiRow[] = [
  {
    icon: FaWheatAwn,
    iconColor: "#f59e0b",
    crop: "Wheat",
    mandi: "Aligarh",
    min: "2,125",
    max: "2,350",
    trend: "up",
    change: "+₹45",
  },
  {
    icon: FaLeaf,
    iconColor: "#22c55e",
    crop: "Mustard",
    mandi: "Bharatpur",
    min: "5,100",
    max: "5,400",
    trend: "up",
    change: "+₹120",
  },
  {
    icon: FaSeedling,
    iconColor: "#a3e635",
    crop: "Basmati Rice",
    mandi: "Karnal",
    min: "3,050",
    max: "3,250",
    trend: "down",
    change: "-₹30",
  },
  {
    icon: FaPepperHot,
    iconColor: "#ef4444",
    crop: "Red Chili",
    mandi: "Gwalior",
    min: "8,500",
    max: "12,000",
    trend: "up",
    change: "+₹300",
  },
  {
    icon: FaCarrot,
    iconColor: "#fb923c",
    crop: "Potato",
    mandi: "Agra",
    min: "800",
    max: "1,100",
    trend: "down",
    change: "-₹50",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/schemes", label: "Schemes" },
  { href: "/mandi", label: "Market Prices" },
  { href: "/contact", label: "Contact" },
];
