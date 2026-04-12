// Advisory Board and Governing Board members section
"use client";

// import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BoardMember {
  name: string;
  role: string;
  qualifications?: string;
  description?: string;
  linkedin?: string;
  website?: string;
  image: string;
}

const ADVISORY_BOARD: BoardMember[] = [
  {
    name: "Prof. Gopal Krishna Mahadev",
    role: "Founder & CEO, UHEALTH — International Healthcare Development Organisation, London",
    qualifications: "MD · MRCS · FRCS",
    description:
      "A pioneer in healthcare innovation, Professor Mahadev is the founding architect of the world's first Healthcare Apprenticeship Programme within the UK NHS (2011), now a National Program with 6.5 million Apprentices. He created the world's first Healthcare Academy for 2,500 high school girls in 2014 and has played a formative role in establishing medical schools including Kent & Medway Medical School, University of Greater Manchester Medical School, and Jacksonville University Medical School in Florida.",
    image: "/members/G-K-Mahadev.webp",
  },
  {
    name: "Prof. Tosendra Dwivedi",
    role: "Professor, Alliance University, Bangaluru",
    qualifications: "Doctorate in Psychology",
    linkedin: "https://linkedin.com/in/prof-dr-tosendra-dwivedi-4b2a8b15",
    image: "/members/tosendra-dwivedi.webp",
  },
  {
    name: "Ankur Gaur",
    role: "Director, UNISYS, Bangalore",
    qualifications: "IISc",
    description:
      "Principal Architect AI | Deep Learning Expert | GenAI | Agentic Workflows | Intelligent Machines | AGI",
    linkedin: "https://linkedin.com/in/ankur-gaur-06869153",
    image: "/members/ankur-gaur.webp",
  },
  {
    name: "Sanjay Singh",
    role: "Senior Manufacturing and Operations Leader, UAE",
    qualifications: "IIT BHU · IIM Indore",
    description:
      "Over 36 years of experience across complex, highly regulated global environments. Driven sustainable business performance and operational excellence while leading high-performing teams in multi-site, matrixed organizations.",
    linkedin: "https://linkedin.com/in/sanjay-singh-32166774",
    image: "/members/sanjay-singh.webp",
  },
  {
    name: "Dr. Rishi Mishra",
    role: "Founder, Connaissance Specialists, Noida",
    qualifications: "Doctorate in Psychology · RCI Licensed Psychologist",
    description:
      "Over 18 years of experience in counseling, academia, and career guidance. Former faculty at Addis Ababa University, Amity University, and Bennett University. Led trauma counseling initiatives with the Ministry of Women & Child Development.",
    linkedin: "https://linkedin.com/in/drrishimishra",
    image: "/members/rishi-mishra.webp",
  },
  {
    name: "Dr. Priyanka Bhattacharjee",
    role: "Educator & Design Patent Holder, New Delhi",
    qualifications: "Doctorate in Economics",
    description:
      "Researcher focused on sustainability and green energy, examining pathways for resilient, responsible, and future-facing development.",
    linkedin: "https://linkedin.com/in/dr-priyanka-bhattacharjee-959524280",
    image: "/members/priyanka-bhattacharjee.webp",
  },
  {
    name: "Ashish Poddar",
    role: "Executive Creative Director, Delhi NCR",
    description: "Leading Advertising agencies",
    linkedin: "https://linkedin.com/in/ashish-poddar-80636776",
    image: "/members/ashish-poddar.webp",
  },
  {
    name: "Shishir Sinha",
    role: "Business Journalist · Associate Editor at Business Line (The Hindu)",
    linkedin: "https://linkedin.com/in/shishir-sinha-b56b356b",
    image: "/members/shishir-sinha.webp",
  },
  {
    name: "Ankur Shukla",
    role: "Co-Founder & CEO, Pathnovo, Gurugram",
    qualifications: "IIT BHU · Top 1% on Upwork · $1.5M USD ARR",
    description:
      "IIT BHU graduate. Started Pathnovo from a hostel room in 2023 with a $16 Upwork project and grew it to a document intelligence company serving EPC contractors and manufacturing teams. Leads product strategy, business development, and client relationships. Drives the vision of making engineering knowledge machine-readable for the physical world.",
    linkedin: "https://linkedin.com/in/ankur-shukla-ai-agent",
    website: "https://pathnovo.com",
    image: "/members/ankur-shukla.webp",
  },
  {
    name: "Amit Kumar Jha",
    role: "Co-Founder & CTO, Pathnovo, Gurugram",
    qualifications: "IIT BHU · 35+ end-to-end projects delivered · AI & Systems Architecture",
    description:
      "IIT BHU graduate. Leads the technical architecture behind Pathnovo's extraction pipelines, reconciliation engines, and AI agent framework. Has delivered 35+ end-to-end projects across document intelligence, enterprise integrations, and AI systems. Built the connector layer that delivers verified data into SAP PM, Maximo, and AVEVA.",
    website: "https://pathnovo.com",
    linkedin: "https://linkedin.com/in/amit-kumarjha",
    image: "/members/amit-jha.webp",
  },
];

const GOVERNING_BOARD: BoardMember[] = [
  {
    name: "Bharat Bhardwaj",
    role: "Serial Entrepreneur · Founder Director, Givinity Foundation (Non-profit)",
    qualifications: "IITian · MBA (FMS)",
    description:
      "Philanthropist and social changemaker with over 35 years of experience in top MNCs and Indian companies. Recipient of many International and National Honours.",
    linkedin: "https://linkedin.com/in/bharatbhardwaj",
    image: "/members/bharat.webp",
  },
  {
    name: "Akhilesh Gupta",
    role: "Investor · Certified Independent Director (IICA)",
    qualifications: "IM-BHU · IIM Ahmedabad · INSEAD",
    description:
      "Investor with three decades of experience. Winner of S&P Micropal Award for best performance. Led Board Investment Committees and served as Key Managerial Person (KMP).",
    linkedin: "https://linkedin.com/in/akhilesh-gupta-ceo",
    image: "/members/akhilesh-guptaji.webp",
  },
  {
    name: "Shailesh Tiwari",
    role: "Former Senior Officer (IRSSE), Indian Railways",
    qualifications: "CS&E Graduate (IIT & JNU) · Advanced Management Programme (INSEAD & ICLIF)",
    description:
      "Over three decades of experience in telecommunications, IT, transportation, and infrastructure. Key role in scaling RailTel and established nationwide broadband networks.",
    linkedin: "https://linkedin.com/in/shailesh-tiwari-9b200122",
    image: "/members/shailesh-tiwari.webp",
  },
  {
    name: "Nagarajan",
    role: "Multi-talented Professional & Advisor",
    qualifications: "CISA (Certified Information Systems Auditor) · CAISP",
    description:
      "Over three decades of experience in senior management. Worked with leading organizations like Dubai Ports Authority and DP World. Bridges the gap between strategic vision and operational execution.",
    image: "/members/nagarajan.webp",
  },
  {
    name: "Rajeev Sharma",
    role: "Serial Entrepreneur · Founder of Multiple Companies · Philanthropist",
    qualifications: "Hindu College (DU) · PGDBM YMCA · PGMSM",
    description:
      "Result-oriented businessman with over four decades of experience in Sales, Marketing, Team Management, and Project Management. Focused on helping deserving sections of society.",
    image: "/members/rajeev-sharma.webp",
  },
];

function MemberCard({ member }: { member: BoardMember }) {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = descRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [member.description]);

  return (
    <div className="group relative rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="px-5 py-5">
        {/* Photo + Name */}
        <div className="flex items-center gap-3.5 mb-3">
          <div className="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="100px"
              className="object-cover object-top"
            />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 leading-tight truncate">
              {member.name}
            </h4>
            {member.qualifications && (
              <p className="text-[11px] text-primary/80 font-medium mt-0.5">
                {member.qualifications}
              </p>
            )}
          </div>
        </div>

        {/* Role */}
        <p className="text-xs text-gray-600 leading-relaxed">{member.role}</p>

        {/* Description (expandable) */}
        {member.description && (
          <p
            ref={descRef}
            className={`mt-2 text-xs text-gray-500 leading-relaxed transition-all duration-300 ${
              expanded ? "" : "line-clamp-2"
            }`}
          >
            {member.description}
          </p>
        )}

        {/* Read more + LinkedIn */}
        <div className="flex items-center gap-3 mt-2">
          {(isClamped || expanded) && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[11px] text-primary hover:text-primary/70 font-medium transition-colors cursor-pointer"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-primary/60 hover:text-primary transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          )}
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-primary/60 hover:text-primary transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8M12 3a14.25 14.25 0 0 1 0 18M12 3a14.25 14.25 0 0 0 0 18" />
              </svg>
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function InstitutionalTrust() {
  // const t = useTranslations("home");
  const [activeTab, setActiveTab] = useState<"advisory" | "governing">("governing");

  const tabs = [
    { key: "governing" as const, label: "Governing Board", count: GOVERNING_BOARD.length },
    { key: "advisory" as const, label: "Advisory Board", count: ADVISORY_BOARD.length },
  ];

  const currentMembers = activeTab === "advisory" ? ADVISORY_BOARD : GOVERNING_BOARD;

  return (
    <section className="pt-12 md:pt-16">
      <div className="max-w-6xl mx-auto">
        {/* Tab selector */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab.key
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-900 hover:text-primary"
                }`}
              >
                {tab.label}
                <span
                  className={`ml-1.5 inline-flex items-center justify-center text-[10px] w-5 h-5 rounded-full ${
                    activeTab === tab.key
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Member grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
