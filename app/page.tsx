"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Sparkles,
  Mail,
  ExternalLink,
  Check,
  Send,
  GraduationCap,
  Award,
  Download,
  Phone,
  MapPin,
  Menu,
  X,
  Clock,
  Eye,
} from "lucide-react";

// --- CUSTOM CURSOR ---
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-white/40 rounded-full flex items-center justify-center backdrop-blur-[1px] pointer-events-none shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.35)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.3 }}
      >
        <motion.div
          className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_#ffffff]"
          animate={{
            scale: isHovered ? 0.5 : 1,
            backgroundColor: "#ffffff",
          }}
        />
      </motion.div>
    </div>
  );
};

// --- BRAND SVG ICONS ---
const Github = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const Linkedin = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

// --- DATA & LINKS ---
const RESUME_PDF_URL = "/NARENDRA_RAJPUT_FlowCV_Resume_2026-08-12.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/narendra-rajput-r17?utm_source=share_via&utm_content=profile&utm_medium=member_ios";

const EXPERIENCES = [
  {
    role: "Full Stack Web Development Intern",
    company: "Future Interns",
    period: "07/2026 – 08/2026",
    description: "Developed responsive web applications using React, Node.js, Django, and modern web technologies.",
    skills: ["React.js", "Node.js", "Django", "Web Technologies"],
  },
  {
    role: "AI & Data Science Intern",
    company: "Navodita Infotech",
    period: "06/2026 – 07/2026",
    description: "Worked on Python, Data Science, data analysis, and Machine Learning projects.",
    skills: ["Python", "Data Science", "Data Analysis", "Machine Learning"],
  },
  {
    role: "App Development Intern",
    company: "Radixweb",
    period: "01/2026 – 02/2026",
    description: "Worked on application development, UI implementation, and system debugging.",
    skills: ["App Development", "UI Implementation", "Debugging", "C#"],
  },
];

const PROJECTS = [
  {
    id: "mini-crm",
    title: "Mini CRM – Client Lead Management System",
    category: "Full Stack Web App",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    description: "Client lead management system built for tracking leads, managing sales interactions, and real-time activity monitoring.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    status: "Completed",
    githubUrl: "https://github.com/Narendra-r07/Mini-CRM",
    liveUrl: "https://mini-crm-frontend-git-main-narendra-r07s-projects.vercel.app/",
  },
  {
    id: "student-result",
    title: "Student Result Management System",
    category: "Full Stack Web App",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    description: "Developed a comprehensive system for managing students, subjects, classes, marks, and automated result generation.",
    tags: ["Python", "Django", "SQLite", "Bootstrap"],
    status: "Completed",
    githubUrl: "https://github.com/Narendra-r07/Student-Result-Management",
    liveUrl: "https://student-result-management-ojog.onrender.com",
  },
  {
    id: "nr-cafe",
    title: "NR Cafe – Local Business Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    description: "Developed a responsive business website with menu filtering, WhatsApp ordering, reservations, and Google Maps integration.",
    tags: ["React.js", "Vite", "JavaScript", "CSS"],
    status: "Completed",
    githubUrl: "https://github.com/Narendra-r07/Local-Business-Website",
    liveUrl: "https://local-business-website-phi.vercel.app/",
  },
  {
    id: "house-price",
    title: "House Price Prediction",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    description: "Built an ML model for house price prediction using data preprocessing, feature engineering, and regression analysis.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    status: "Completed",
    githubUrl: "https://github.com/Narendra-r07/House-Price-Prediction",
    liveUrl: null,
  },
  {
    id: "vr-classroom",
    title: "3D Virtual Classroom",
    category: "3D / VR Development",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80",
    description: "Developing an interactive 3D virtual classroom environment featuring spatial virtual learning spaces and VR headset integration.",
    tags: ["Unity", "C#", "3D Modeling", "VR Box"],
    status: "In Progress",
    githubUrl: "https://github.com/Narendra-r07/3D-Virtual-Classroom",
    liveUrl: null,
  },
];

const GALLERY_PHOTOS = [
  {
    id: 1,
    title: "3D Virtual Classroom — Spatial VR Lab",
    caption: "In Progress — Unity & C# Virtual Learning Environment",
    url: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "3D Virtual Classroom — VR Box Integration",
    caption: "Headset Spatial Interaction & 3D Modeling Demo",
    url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Mini CRM — Lead Management Dashboard",
    caption: "React & Node.js Sales Activity Tracker",
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "NR Cafe — Local Business Web Platform",
    caption: "React & Vite Dynamic Ordering System",
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Student Result Management UI",
    caption: "Django & Bootstrap Marks & Grade Portal",
    url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "House Price Prediction Analytics",
    caption: "Python Machine Learning Regression Pipeline",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
  },
];

const SKILL_CATEGORIES = [
  { title: "Languages", skills: ["Python", "C#", "JavaScript", "SQL", "HTML", "CSS"] },
  { title: "AI & Data Science", skills: ["Machine Learning", "Pandas", "NumPy", "Scikit-learn", "EDA", "Statistics"] },
  { title: "Web Development", skills: ["React.js", "Node.js", "Express.js", "Django", "REST API"] },
  { title: "3D & Game Dev", skills: ["Unity", "C#", "3D Modeling Integration"] },
  { title: "Databases", skills: ["PostgreSQL", "SQLite", "MongoDB"] },
  { title: "Tools & Deployment", skills: ["Git", "GitHub", "Power BI", "Excel", "Linux", "Vercel", "Render"] },
];

const EDUCATION = [
  { degree: "Bachelor of Technology (B.Tech) - Computer Engineering", institution: "Ramrao Adik Institute Of Technology", period: "07/2023 – 05/2027" },
  { degree: "Higher Secondary Certificate (HSC)", institution: "Jai Hind College", period: "04/2021 – 03/2023" },
  { degree: "Secondary Section Certificate (SSC)", institution: "Kenia and Anchor English School", period: "04/2020 – 03/2021" },
];

const COURSES = [
  { title: "CS50's Introduction to Programming with Python", issuer: "Harvard University (edX)" },
  { title: "Machine Learning", issuer: "Stanford University (Coursera)" },
  { title: "Generative AI for Games Development", issuer: "Specialized Course" },
  { title: "Python for Data Science", issuer: "Certification Course" },
];

export default function Home() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Scroll Animations for Floating Cards on Left Side
  const { scrollYProgress } = useScroll();
  const cardY1 = useTransform(scrollYProgress, [0, 0.5], [0, -280]);
  const cardY2 = useTransform(scrollYProgress, [0, 0.5], [0, -180]);
  const cardRotate1 = useTransform(scrollYProgress, [0, 0.5], [-12, 8]);
  const cardRotate2 = useTransform(scrollYProgress, [0, 0.5], [8, -15]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Photos", id: "photos" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased font-sans selection:bg-white selection:text-black relative overflow-x-hidden">
      
      {/* CUSTOM CURSOR */}
      <CustomCursor />

      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* HEADER NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between relative">
          
          {/* LOGO */}
          <motion.a whileHover={{ scale: 1.05 }} href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-zinc-600 bg-black flex items-center justify-center font-mono font-black text-xs text-white group-hover:bg-white group-hover:text-black transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]">
              NR
            </div>
          </motion.a>

          {/* NAV PANEL */}
          <nav className="hidden lg:flex items-center gap-7 bg-zinc-950 border border-zinc-800/80 px-6 py-2.5 rounded-full shadow-2xl backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-mono font-bold tracking-wider text-zinc-400 hover:text-white transition-colors uppercase"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* TOP RIGHT WIDGET */}
          <div className="hidden sm:flex items-center gap-6 relative">
            <div className="flex items-center gap-4 font-mono text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
              <a href="https://github.com/Narendra-r07" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" /> GITHUB
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5" /> LINKEDIN
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.15, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all z-10"
              title="Get in touch"
            >
              <Sparkles className="w-5 h-5 fill-black" />
            </motion.button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-zinc-400 hover:text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-black border-b border-zinc-800 px-6 py-6 space-y-4 font-mono text-xs font-bold uppercase tracking-wider text-zinc-300"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 hover:text-white transition-colors border-b border-zinc-900"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="about" className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 px-6 sm:px-12 z-10 overflow-hidden">
        
        {/* FLOATING BLACK CARDS PLACED DIAGONALLY ON THE LEFT SIDE (SAME LENGTH / DIMENSIONS) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          
          {/* TOP-LEFT BLACK CARD (ENGINEERING ID) */}
          <motion.div
            style={{ y: cardY1, rotate: cardRotate1 }}
            className="absolute top-32 left-[2%] w-60 h-36 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white border border-zinc-800 backdrop-blur-md rounded-xl p-4 shadow-2xl flex flex-col justify-between transform -rotate-6 hidden lg:flex opacity-95 z-20"
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-400 uppercase">ENGINEERING DEPT</span>
              <div className="w-8 h-5 rounded bg-zinc-800 border border-zinc-700 font-bold text-[8px] flex items-center justify-center text-zinc-300">ID</div>
            </div>
            <p className="font-mono text-[10px] text-zinc-200 font-bold tracking-wider uppercase">
              RAMRAO ADIK INST OF TECH
            </p>
            <div className="flex justify-between items-center text-[9px] font-mono text-zinc-400">
              <span>AUTHORIZED</span>
              <span className="text-white font-bold">2026</span>
            </div>
          </motion.div>

          {/* BOTTOM-LEFT BLACK CARD (AMERICAN EXPRESS) */}
          <motion.div
            style={{ y: cardY2, rotate: cardRotate2 }}
            className="absolute bottom-24 left-[8%] w-60 h-36 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white border border-zinc-800 backdrop-blur-md rounded-xl p-4 shadow-2xl flex flex-col justify-between transform rotate-6 hidden lg:flex opacity-95 z-10"
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono font-black tracking-widest text-zinc-300 uppercase">AMERICAN EXPRESS</span>
              <div className="w-8 h-5 rounded bg-zinc-800 border border-zinc-700 font-bold text-[8px] flex items-center justify-center text-zinc-300">BLACK</div>
            </div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-zinc-300 font-bold">
              3759 •••••• 91007
            </div>
            <div className="flex items-end justify-between font-mono text-[8px] text-zinc-400">
              <div>
                <p className="text-[6px] text-zinc-500 uppercase">CARD HOLDER</p>
                <p className="font-bold text-white uppercase">NARENDRA RAJPUT</p>
              </div>
              <span className="text-zinc-300 font-extrabold uppercase">VALID THRU 12/28</span>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto relative z-10">
          
          <div className="lg:col-span-7 space-y-6 lg:pl-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[2px] bg-white" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white font-bold uppercase">
                NARENDRA RAJPUT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] uppercase"
            >
              AI & DATA SCIENCE <br />
              <span className="text-zinc-500">ENGINEER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl font-sans"
            >
              Final-year B.Tech AI & Data Science student at Ramrao Adik Institute of Technology with hands-on experience in AI/ML, Full Stack Web Development, App Development, and interactive 3D VR Box environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href={RESUME_PDF_URL}
                download="NARENDRA_RAJPUT_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-mono text-xs tracking-wider font-bold hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              >
                DOWNLOAD RESUME <Download className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                </span>
                AVAILABLE FOR ROLES
              </div>
            </motion.div>
          </div>

          {/* PROFILE PHOTO CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-700 to-zinc-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Narendra Rajput"
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/90 border border-zinc-800 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white font-mono">Narendra Rajput</p>
                    <p className="text-[10px] text-zinc-400 font-mono">Mumbai, INDIA</p>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700">
                    B.TECH '27
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="max-w-7xl w-full mx-auto pt-8 border-t border-zinc-900 flex justify-between items-center text-xs font-mono text-zinc-500 relative z-10">
          <span>NARENDRA RAJPUT PORTFOLIO</span>
          <button onClick={() => scrollToSection("experience")} className="flex items-center gap-2 hover:text-white transition-colors">
            SCROLL DOWN <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </section>

      {/* MAIN SECTIONS */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 py-24 space-y-36 relative z-10">

        {/* WORK EXPERIENCE */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800 pb-6 gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">01 // EXPERIENCE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">Internship Experience</h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">2026 PRESENT</span>
          </div>

          <motion.div variants={staggerContainer} className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ borderLeftColor: "#ffffff", x: 6 }}
                className="bg-zinc-950 border-l-2 border-l-zinc-700 border-y border-r border-zinc-900 p-6 sm:p-8 rounded-r-2xl transition-all shadow-xl group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zinc-300 transition-colors">{exp.role}</h3>
                    <span className="text-xs font-mono text-zinc-400 font-semibold">{exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-300 bg-zinc-900 px-3.5 py-1 rounded-full border border-zinc-800 w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mt-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((s) => (
                    <span key={s} className="text-[11px] font-mono text-zinc-300 bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
                      #{s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* FEATURED PROJECTS */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800 pb-6 gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">02 // PORTFOLIO</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">Featured Projects (5)</h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">GITHUB & LIVE LINKS ATTACHED</span>
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-500 transition-all shadow-2xl flex flex-col justify-between group relative"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-zinc-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      {project.status === "In Progress" ? (
                        <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase font-bold text-amber-300 bg-black/90 border border-amber-500/50 px-2.5 py-1 rounded-full backdrop-blur-md shadow-lg">
                          <Clock className="w-3 h-3 animate-spin text-amber-400" /> IN PROGRESS
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono uppercase font-bold text-zinc-300 bg-black/90 border border-zinc-700 px-2.5 py-1 rounded-full backdrop-blur-md">
                          <Check className="w-3 h-3 text-white" /> COMPLETED
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-black hover:bg-white hover:text-black text-zinc-300 border border-zinc-800 rounded-lg transition-colors backdrop-blur-md shadow-md"
                          title="View GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-black hover:bg-white hover:text-black text-zinc-300 border border-zinc-800 rounded-lg transition-colors backdrop-blur-md shadow-md"
                          title="View Live Site"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-[9px] uppercase font-mono text-white bg-zinc-900 border border-zinc-700 px-2.5 py-0.5 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs font-mono">
                    {project.githubUrl ? (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors">
                        <Github className="w-3.5 h-3.5" /> CODE REPO
                      </a>
                    ) : (
                      <span className="text-zinc-600">PRIVATE REPO</span>
                    )}

                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-white hover:underline flex items-center gap-1.5 font-bold">
                        LIVE PREVIEW <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-zinc-600">ML / OFFLINE</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* PHOTO GALLERY SECTION */}
        <motion.section
          id="photos"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800 pb-6 gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">03 // GALLERY</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">Project Visuals & VR Lab</h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">CLICK TO EXPAND</span>
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_PHOTOS.map((photo) => (
              <motion.div
                key={photo.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedPhoto(photo.url)}
                className="relative group cursor-pointer aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-xl"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="p-2 bg-black/80 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity border border-zinc-700">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">{photo.title}</h3>
                    <p className="text-[10px] font-sans text-zinc-300 mt-0.5">{photo.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* LIGHTBOX MODAL */}
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <div className="relative max-w-5xl w-full max-h-[90vh]">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 p-2 text-white bg-zinc-900 border border-zinc-700 rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedPhoto}
                alt="Enlarged View"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl border border-zinc-800 shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* SKILLS SECTION */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800 pb-6 gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">04 // EXPERTISE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">Skills & Technologies</h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">TECHNICAL STACK</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl shadow-xl space-y-4 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="text-xs font-mono text-zinc-300 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION & COURSES */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800 pb-6 gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">05 // CREDENTIALS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">Education & Certifications</h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">ACADEMIC BACKGROUND</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                <GraduationCap className="w-5 h-5 text-zinc-400" /> EDUCATION
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl space-y-2 shadow-xl">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                      <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-zinc-400">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                <Award className="w-5 h-5 text-zinc-400" /> CERTIFICATIONS & COURSES
              </h3>
              <div className="space-y-4">
                {COURSES.map((course, idx) => (
                  <div key={idx} className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl space-y-2 shadow-xl">
                    <h4 className="text-sm font-bold text-white">{course.title}</h4>
                    <p className="text-xs font-mono text-zinc-400">{course.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800 pb-6 gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">06 // CONTACT</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">Get In Touch</h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">OPEN FOR OPPORTUNITIES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                I am actively looking for full-time roles, internships, or exciting collaborations in AI & Data Science, Full Stack Web Development, and 3D/VR Applications. Feel free to drop a message!
              </p>

              <div className="space-y-4 font-mono text-xs text-zinc-300">
                <div className="flex items-center gap-3 p-4 bg-zinc-950 border border-zinc-900 rounded-xl">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>narendrarajput7777@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-zinc-950 border border-zinc-900 rounded-xl">
                  <Phone className="w-4 h-4 text-zinc-400" />
                  <span>+91 9664376307</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-zinc-950 border border-zinc-900 rounded-xl">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-zinc-950 border border-zinc-900 p-8 rounded-3xl space-y-6 shadow-2xl">
                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-zinc-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-zinc-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-zinc-300 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Let's build something amazing together..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-xl bg-white text-black font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-zinc-200 transition-all"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4" /> MESSAGE SENT SUCCESSFULLY!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> SEND MESSAGE
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-6 sm:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Narendra Rajput. All rights reserved.</p>
          <div className="flex items-center gap-6 uppercase">
            <a href="https://github.com/Narendra-r07" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">Back to Top ↑</button>
          </div>
        </div>
      </footer>

    </div>
  );
}