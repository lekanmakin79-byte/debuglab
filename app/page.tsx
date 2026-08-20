"use client";
import {
  ArrowRight,
  Bug,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe,
  Mail,
  Menu,
  Server,
  ShieldCheck,
  Smartphone,
  Wrench,
  X,
} from "lucide-react";

import { useState } from "react";

const services = [
  {
    icon: Bug,
    title: "Bug Fixing & Debugging",
    text: "I investigate errors, reproduce problems, identify likely root causes and verify fixes across real applications.",
  },
  {
    icon: Code2,
    title: "React & Next.js Support",
    text: "Help with React, Next.js, JavaScript and TypeScript errors, broken components, routing and application behaviour.",
  },
  {
    icon: Database,
    title: "Supabase & API Troubleshooting",
    text: "Troubleshooting authentication, database queries, API routes, permissions, data flow and integration issues.",
  },
  {
    icon: Server,
    title: "Deployment Support",
    text: "Diagnosing production problems involving environment variables, builds, Vercel deployments and server-side errors.",
  },
];

const projects = [
  {
    name: "FlowPilot AI",
    type: "Business SaaS / AI Office Manager",
    description:
      "A small-business web application with authentication, protected dashboards, Supabase data, subscriptions and Stripe webhook integration.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Vercel"],
    github: "https://github.com/lekanmakin79-byte",
    portfolio: "https://olaandweb.netlify.app",
  },
  {
    name: "Metabolic Health Coach",
    type: "Health Tracking Web App",
    description:
      "A personalised health-tracking application with profiles, dashboard functionality, database-backed data and API-driven daily plans.",
    stack: ["Next.js", "TypeScript", "Supabase", "API Routes"],
    github: "https://github.com/lekanmakin79-byte",
    portfolio: "https://olaandweb.netlify.app",
  },
  {
    name: "EstateFlow AI",
    type: "Real Estate CRM",
    description:
      "A real-estate management application for properties, leads, viewings and property images using Supabase storage and database functionality.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Capacitor"],
    github: "https://github.com/lekanmakin79-byte",
    portfolio: "https://olaandweb.netlify.app",
  },
  {
    name: "DataAnalystApp",
    type: "Mobile Data Application",
    description:
      "A React Native / Expo mobile project focused on data analysis functionality and mobile application development.",
    stack: ["React Native", "Expo", "JavaScript"],
    github: "https://github.com/lekanmakin79-byte",
    portfolio: "https://olaandweb.netlify.app",
  },
  {
    name: "FXSignal Pro",
    type: "Python Trading Analysis",
    description:
      "A Python-based analysis and signal project integrating market data, technical analysis and MetaTrader 5 functionality.",
    stack: ["Python", "MetaTrader 5", "yfinance", "TA-Lib"],
    github: "https://github.com/lekanmakin79-byte",
    portfolio: "https://olaandweb.netlify.app",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "REST APIs",
  "React Native",
  "Expo",
  "Python",
  "Git / GitHub",
  "Vercel",
];

export default function Home() {
	const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <nav className="nav container">
  <a
    className="brand"
    href="#top"
    onClick={() => setMenuOpen(false)}
  >
    <span className="brand-mark">&lt;/&gt;</span>
    <span>DebugLab</span>
  </a>

  <button
    type="button"
    className="menu-toggle"
    onClick={() => setMenuOpen((open) => !open)}
    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={menuOpen}
  >
    {menuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>

  <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
    <a href="#services" onClick={() => setMenuOpen(false)}>
      Services
    </a>

    <a href="#projects" onClick={() => setMenuOpen(false)}>
      Projects
    </a>

    <a href="/case-studies" onClick={() => setMenuOpen(false)}>
      Case Studies
    </a>

    <a href="#process" onClick={() => setMenuOpen(false)}>
      Process
    </a>

    <a
      href="#contact"
      className="nav-cta"
      onClick={() => setMenuOpen(false)}
    >
      Work with me
    </a>
  </div>
</nav>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">
              <span className="pulse" />
              Available for remote projects
            </div>
            <h1>
              I troubleshoot the problems
              <span> that stop applications working.</span>
            </h1>
            <p className="hero-copy">
              Junior Web Developer and Application Support specialist focused
              on debugging React, Next.js, TypeScript, Supabase, APIs and
              deployment issues.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button primary">
                Discuss a problem <ArrowRight size={18} />
              </a>
              <a href="#projects" className="button secondary">
                See my projects
              </a>
            </div>
            <div className="trust-row">
              <span><CheckCircle2 size={16} /> Real project experience</span>
              <span><CheckCircle2 size={16} /> Evidence-led debugging</span>
              <span><CheckCircle2 size={16} /> Test before delivery</span>
            </div>
          </div>

          <div className="terminal-card">
            <div className="terminal-top">
              <span className="dot" /><span className="dot" /><span className="dot" />
              <span className="terminal-title">debug-session</span>
            </div>
            <div className="terminal-body">
              <p><span className="green">$</span> analyse --issue production</p>
              <p className="muted">Collecting logs...</p>
              <p className="muted">Checking API response...</p>
              <p className="muted">Checking database...</p>
              <p><span className="green">✓</span> Root cause identified</p>
              <p><span className="green">✓</span> Fix implemented</p>
              <p><span className="green">✓</span> Regression test passed</p>
              <p><span className="green">$</span> deploy --verified</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div><strong>5+</strong><span>Technical projects</span></div>
          <div><strong>10+</strong><span>Technologies used</span></div>
          <div><strong>Full-stack</strong><span>Web & API troubleshooting</span></div>
          <div><strong>Remote</strong><span>Support-ready workflow</span></div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">SERVICES</span>
            <h2>Technical problems, investigated properly.</h2>
            <p>
              I focus on understanding why something is failing, not just
              changing code until an error disappears.
            </p>
          </div>
          <div className="cards four">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="card" key={service.title}>
                  <div className="icon-box"><Icon size={22} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section dark-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">PROJECTS</span>
            <h2>Real applications. Real troubleshooting.</h2>
            <p>
              These projects demonstrate practical experience across web,
              mobile, databases, APIs and deployment.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.name}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-content">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <div className="project-actions">
                  <a href={project.github} className="project-link" target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>
                    <Github size={18} />
                  </a>
                  <a href={project.portfolio} className="project-link" target="_blank" rel="noreferrer" aria-label={`View portfolio for ${project.name}`}>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">MY DEBUGGING PROCESS</span>
            <h2>Evidence first. Fix second.</h2>
          </div>
          <div className="process-grid">
            {[
              ["01", "Understand", "Define the expected behaviour and collect the error, logs and relevant code."],
              ["02", "Reproduce", "Reproduce the problem so the investigation is based on evidence rather than guesses."],
              ["03", "Diagnose", "Narrow down the root cause and test competing explanations."],
              ["04", "Fix & verify", "Implement the fix, test the affected flow and check for regressions."],
            ].map(([number, title, text]) => (
              <div className="process-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="container skills-grid">
          <div>
            <span className="section-label">TECHNOLOGY</span>
            <h2>Tools I work with.</h2>
            <p>
              A practical stack for modern web applications, mobile projects,
              APIs, databases and deployment.
            </p>
          </div>
          <div className="skill-list">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="section case-study">
        <div className="container case-grid">
          <div className="case-icon"><Wrench size={30} /></div>
          <div>
            <span className="section-label">CASE STUDY APPROACH</span>
            <h2>From error message to verified solution.</h2>
            <p>
              My portfolio will document the technical challenges behind
              selected projects: what broke, what evidence was collected,
              what was changed and how the result was tested. This gives
              employers and clients a clearer picture of how I solve problems.
            </p>
          </div>
          <div className="case-points">
            <span><ShieldCheck size={18} /> Authentication & access</span>
            <span><Database size={18} /> Data & database issues</span>
            <span><Server size={18} /> API & deployment errors</span>
            <span><Smartphone size={18} /> Mobile application issues</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-card">
          <div>
            <span className="section-label">LET'S WORK TOGETHER</span>
            <h2>Have an application that isn't behaving?</h2>
            <p>
              Send the problem, error message and relevant details. I can
              investigate the issue and help identify the next step.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:lekamakin79@gmail.com">
              <Mail size={18} /> Email me
            </a>
            <a className="button secondary" href="https://github.com/lekanmakin79-byte" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 DebugLab. Built with Next.js.</span>
          <span><Globe size={15} /> Remote web development & application support</span>
        </div>
      </footer>

      <a className="back-to-top" href="#top" aria-label="Back to top" title="Back to top">
        <ArrowRight size={20} />
      </a>
    </main>
  );
}