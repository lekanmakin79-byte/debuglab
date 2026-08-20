import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bug,
  CheckCircle2,
  Database,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const caseStudies = [
  {
    number: "01",
    category: "API / DATABASE DEBUGGING",
    title: "Metabolic Health Coach — Daily Plan API",
    problem:
      "The dashboard was not displaying the user's personalised daily plan. The API request to /api/daily-plan was returning HTTP 400.",
    technologies: ["Next.js", "TypeScript", "Supabase", "API Routes"],
    icon: Server,
    status: "Debugging case study",
    href: "/case-studies/metabolic-health-daily-plan",
  },
  {
    number: "02",
    category: "AUTHENTICATION / SESSION",
    title: "Protected Dashboard & User Session",
    problem:
      "A protected application flow required reliable registration, email verification, login, session persistence and logout behaviour.",
    technologies: ["Next.js", "Supabase Auth", "TypeScript"],
    icon: ShieldCheck,
    status: "Debugging case study",
  },
  {
    number: "03",
    category: "DATABASE DEBUGGING",
    title: "Supabase Data Flow",
    problem:
      "Application data was not always appearing where expected, requiring investigation of database records, queries, user IDs and application data flow.",
    technologies: ["Supabase", "PostgreSQL", "Next.js", "API Routes"],
    icon: Database,
    status: "Debugging case study",
  },
  {
    number: "04",
    category: "BUILD / DEPLOYMENT",
    title: "Next.js Build & Deployment Troubleshooting",
    problem:
      "Modern Next.js projects can fail during builds because of TypeScript errors, dependency issues, configuration problems or differences between local and production environments.",
    technologies: ["Next.js", "TypeScript", "GitHub", "Vercel"],
    icon: Wrench,
    status: "Debugging case study",
  },
];

export default function CaseStudiesPage() {
  return (
    <main id="top" className="case-studies-page">
      <nav className="nav container">
        <Link className="brand" href="/">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>DebugLab</span>
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/#contact" className="nav-cta">
            Work with me
          </Link>
        </div>
      </nav>

      <section className="case-hero">
        <div className="container">
          <Link href="/" className="back-link">
            <ArrowLeft size={17} />
            Back to portfolio
          </Link>

          <div className="case-hero-label">
            <span className="section-label">DEBUGGING CASE STUDIES</span>
          </div>

          <h1>
            Real problems.
            <span> Evidence-led solutions.</span>
          </h1>

          <p>
            A collection of technical problems investigated across web
            applications, APIs, databases, authentication and deployment.
            Each case study focuses on the investigation process rather than
            simply showing the final code.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="case-study-intro">
            <div className="case-icon">
              <Bug size={30} />
            </div>

            <div>
              <span className="section-label">HOW I DEBUG</span>
              <h2>Understand → Reproduce → Diagnose → Fix → Verify</h2>
              <p>
                My approach is to investigate the evidence available, isolate
                the failure, identify the most likely root cause, implement a
                focused fix and then test the affected flow again.
              </p>
            </div>
          </div>

          <div className="case-study-list">
            {caseStudies.map((study) => {
              const Icon = study.icon;

              return (
                <article className="case-study-card" key={study.number}>
                  <div className="case-study-number">
                    {study.number}
                  </div>

                  <div className="case-study-card-icon">
                    <Icon size={24} />
                  </div>

                  <div className="case-study-card-content">
                    <span className="project-type">{study.category}</span>

                    <h2>{study.title}</h2>

                    <p>
                      <strong>Problem:</strong> {study.problem}
                    </p>

                    <div className="tags">
                      {study.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="case-study-card-actions">
                      {study.href ? (
                        <Link
                          href={study.href}
                          className="case-study-view-button"
                        >
                          View full investigation
                          <ArrowRight size={17} />
                        </Link>
                      ) : (
                        <span className="case-study-status">
                          <CheckCircle2 size={16} />
                          {study.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="case-study-arrow">
                    <ArrowRight size={20} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="case-study-bottom">
        <div className="container">
          <div className="case-bottom-card">
            <span className="section-label">MORE TO COME</span>

            <h2>
              Building a portfolio around problem solving.
            </h2>

            <p>
              New case studies will document actual debugging challenges from
              my projects, including the evidence collected, investigation,
              root cause, solution and verification.
            </p>

            <Link href="/#contact" className="button primary">
              Discuss a problem
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 DebugLab. Built with Next.js.</span>
          <span>
            Remote web development & application support
          </span>
        </div>
      </footer>

      <a
        className="back-to-top"
        href="#top"
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </main>
  );
}