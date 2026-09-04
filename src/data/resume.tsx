import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Solidity } from "@/components/ui/svgs/solidity";
import { Rust } from "@/components/ui/svgs/rust";
import { Cpp } from "@/components/ui/svgs/cpp";
import { Tailwind } from "@/components/ui/svgs/tailwind";

export const DATA = {
  name: "Hrishabh Ayush",
  initials: "HA",
  url: "https://hrishabhayush.com",
  location: "Ithaca, NY",
  locationLink: "https://www.google.com/maps/place/ithaca+ny",
  description:
    "Fintech and AI enthusiast. Math & CS at Cornell, building and breaking things everyday.",
  summary:
    "TATA Scholar at Cornell studying Mathematics and Computer Science with a focus on AI and reading mathematics/economics of different events. I'm the [President of Cornell Blockchain](/#work), where we ran a [1200-person AI & Blockchain conference](https://www.aiblockchaincornelltech.org/) at Cornell Tech. Most recently I interned at [Microsoft](/#work) on AI ERP & Payments, where I worked on POS products and at [Gemini](/#work) on the Onchain team, shipping APIs that serve 1.5M+ requests a day.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "Typescript", icon: Typescript },
    { name: "Solidity", icon: Solidity },
    { name: "Rust", icon: Rust },
    { name: "Go", icon: Golang },
    { name: "Java", icon: Java },
    { name: "C++", icon: Cpp },
    { name: "C#", icon: Csharp },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "TailwindCSS", icon: Tailwind },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ha385@cornell.edu",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hrishabhayush",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hrishabh-ayush/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hrishabhayush",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ha385@cornell.edu",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Microsoft",
      href: "https://microsoft.com",
      badges: [],
      location: "Seattle, WA",
      title: "Software Engineering Intern, AI ERP & Payments",
      logoUrl: "/microsoft.png",
      start: "May 2026",
      end: "August 2026",
    },
    {
      company: "Gemini",
      href: "https://gemini.com",
      badges: [],
      location: "Manhattan, NY",
      title: "Software Engineering Intern, Onchain Team",
      logoUrl: "/gemini.png",
      start: "January 2026",
      end: "May 2026",
    },
    {
      company: "Seismic Systems",
      href: "https://www.seismic.systems/",
      badges: [],
      location: "Manhattan, NY",
      title: "Software Engineering Intern, Smart Contracts & Fullstack",
      logoUrl: "/seismic.png",
      start: "January 2025",
      end: "April 2025",
    },
    {
      company: "Cornell Blockchain",
      href: "https://www.cornellblockchain.org/",
      badges: [],
      location: "Ithaca, NY",
      title: "President",
      logoUrl: "/cornellblockchain.png",
      start: "January 2024",
      end: "Present",
    },
  ],
  education: [
    {
      school: "Cornell University",
      href: "https://www.cornell.edu",
      degree:
        "B.A. in Computer Science & Mathematics, TATA Scholar",
      logoUrl: "/cornell.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Primer",
      href: "https://primerpay.xyz",
      dates: "August 2025 - December 2025",
      active: true,
      description:
        "Stablecoin payments on Amazon. You pay with your choice of stablecoin and the web2 and web3 sides are bridged through the Coinbase Data API and Amazon gift cards — sub-700ms transaction latency, gift card codes applied automatically at checkout. Top 10 ETHGlobal finalist out of 270+ projects.",
      technologies: [
        "Typescript",
        "React",
        "Coinbase",
        "PostgreSQL",
        "Neon",
        "Next.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://primerpay.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hrishabhayush/primer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://d2cv8nsjauj8c9.cloudfront.net/fiver/video/Screen%20Recording%202025-10-10%20at%204.29.06%E2%80%AFAM.mov",
    },
    {
      title: "Unwind",
      href: "https://github.com/hrishabhayush/unwind",
      dates: "July 2025",
      active: true,
      description:
        "Chargeback-like refunds for crypto payments through a WalletConnect POS. A merchant vault and refund protocol with lockup refunds, arbiter-assisted early withdrawals, and payer reclaim windows.",
      technologies: [
        "Solidity",
        "OpenZeppelin",
        "WalletConnect",
        "Next.js",
        "Typescript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hrishabhayush/unwind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://d2cv8nsjauj8c9.cloudfront.net/fiver/video/unwind-x.mp4",
    },
    {
      title: "Verge",
      href: "https://thevergesocial.com",
      dates: "May 2024 - February 2025",
      active: true,
      description:
        "A fullstack app that picks the thumbnail for your next YouTube video, Instagram cover, or dating profile photo — the one that will actually get clicks — through decentralized voting. Payments settle on Solana and uploads run through S3 presigned URLs and CloudFront.",
      technologies: [
        "Typescript",
        "Next.js",
        "Solana",
        "XRPL",
        "AWS",
        "Web3.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://thevergesocial.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hrishabhayush/verge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://d2cv8nsjauj8c9.cloudfront.net/fiver/video/XRPL.mov",
    },
    {
      title: "Cove",
      href: "https://github.com/hrishabhayush/pbc2025-cove",
      dates: "February 2025 - Present",
      active: true,
      description:
        "A peer-to-peer parametric insurance marketplace, starting with flight insurance, that auto-pays claims and shrinks settlement time by 95%. Pooled underwriting and stochastic modeling create an uncorrelated yield stream targeting 5% APY. Won $5,000 for Best Product in Encrypted DeFi at the Penn Blockchain Hackathon.",
      technologies: [
        "Solidity",
        "Typescript",
        "Ethereum",
        "zkEmail",
        "Node.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hrishabhayush/pbc2025-cove",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cove.png",
      video: "",
    },
    {
      title: "RIFF",
      href: "https://github.com/SeismicSystems/prototypes/tree/79f59213a42a81ddcba6d641f0089cd282776963/riff",
      dates: "January 2025 - April 2025",
      active: false,
      description:
        "A bonding curve you can listen to. An Automated Market Maker in Solidity where every swap becomes an AI-generated violin track, paired with a React Native app for real-time market-driven audio feedback. Built at Seismic Systems.",
      technologies: ["Solidity", "Foundry", "Typescript", "React Native"],
      links: [
        {
          type: "Source",
          href: "https://github.com/SeismicSystems/prototypes/tree/79f59213a42a81ddcba6d641f0089cd282776963/riff",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/riff.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "ETHGlobal New York",
      dates: "August 2025",
      location: "New York, NY",
      description:
        "Built Primer, a browser extension for paying with stablecoins on Amazon. Top 10 finalist out of 270+ projects, with 300+ external waitlist signups.",
      image: "/ethglobal-nyc.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/hrishabhayush/primer",
        },
      ],
    },
    {
      title: "Dreamnet Character Agent Hackathon",
      dates: "July 2025",
      location: "Remote",
      description:
        "Built a context-aware screen overlay agent using reinforcement learning — a real-time voice agent that reads your activity and responds with sub-2-second latency, boosting user interaction rates by 60% per session. Awarded $20,000 for Best Immersive Experience.",
      image: "",
      links: [],
    },
    {
      title: "ETHGlobal Cannes",
      dates: "July 2025",
      location: "Cannes, France",
      description:
        "Built Unwind, a refund protocol that gives crypto payments chargeback-like guarantees through a WalletConnect point-of-sale.",
      image: "/ethglobal-cannes.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/hrishabhayush/unwind",
        },
      ],
    },
    {
      title: "Healthcare Hackathon",
      dates: "June 2025",
      location: "New York, NY",
      description:
        "Built ClaimAssist, which predicts insurance claim adjudication from physician's notes and EHR data using Random Forest, ClinicalBERT and OpenAI — 90% accuracy on 5,000 synthetic data points. First prize for best collaborative solution in legacy healthcare among 50+ participants.",
      image: "",
      links: [],
    },
    {
      title: "ETHDenver",
      dates: "February 2025",
      location: "Denver, CO",
      description:
        "Competed in the EigenLayer hackathon, building an interview AI agent that talks to users to find product-market fit for early-stage ideas.",
      image: "",
      links: [],
    },
    {
      title: "Penn Blockchain Hackathon",
      dates: "February 2025",
      location: "Philadelphia, PA",
      description:
        "Built Cove, a peer-to-peer parametric flight insurance marketplace. Won $5,000 for Best Product in Encrypted DeFi.",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/hrishabhayush/pbc2025-cove",
        },
      ],
    },
  ],
} as const;
