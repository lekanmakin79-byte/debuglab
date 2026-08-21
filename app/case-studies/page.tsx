"use client";

import React from "react";
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
  ChevronRight,
  Code2,
  FileText,
  Layers,
} from "lucide-react";

interface CaseStudy {
  id: string;
  name: string;
  tag: string;
  focus: string;
  situation: string;
  task: string;
  action: string[];
  result: string[];
  codeSnippet: string;
  fileName: string;
}

const WORKSPACE_CASES: CaseStudy[] = [
  {
    id: "estateflow",
    name: "estateflow-ai",
    tag: "Real Estate Management Application",
    focus: "Supabase / PostgreSQL / Application Data Flow",
    situation:
      "The application required reliable property, lead and viewing data flow across the Next.js application and Supabase backend.",
    task:
      "Investigate the application's database and data-flow behaviour, identify where information could fail to appear as expected, and verify the affected application flow.",
    action: [
      "Inspected the application data flow between Next.js components, API operations and Supabase.",
      "Checked database records, queries and user-related data to isolate where the expected information was being lost or returned incorrectly.",
      "Tested the affected application flow again after changes to verify that the data was being handled correctly.",
    ],
    result: [
      "The investigation was narrowed to specific application and database data-flow paths rather than treating the problem as a general UI failure.",
      "The affected flow could then be tested against the underlying Supabase records and application behaviour.",
    ],
    codeSnippet: `// Example investigation pattern:
// verify the database response before changing the UI

const { data, error } = await supabase
  .from("properties")
  .select("*");

if (error) {
  console.error("Property query failed:", error);
  throw error;
}

console.log("Properties returned:", data);`,
    fileName: "estateflow_data_flow.ts",
  },
  {
    id: "flowpilot",
    name: "flowpilot_ai",
    tag: "AI Office Manager / SaaS Application",
    focus: "Next.js / Supabase / Authentication / API",
    situation:
      "The application contains authentication, protected dashboards, Supabase data and API-driven functionality that must work together reliably.",
    task:
      "Trace application behaviour across authentication, protected routes, API requests and database operations when a feature does not behave as expected.",
    action: [
      "Checked the authenticated user and session before investigating downstream application behaviour.",
      "Inspected API responses and database operations instead of assuming the visible dashboard was the source of the problem.",
      "Verified the complete flow again after the relevant changes were made.",
    ],
    result: [
      "The debugging process separated authentication, API and database problems into individual investigation paths.",
      "The affected functionality could be verified from the user session through to the application data layer.",
    ],
    codeSnippet: `// Verify the authenticated session
// before investigating protected application data.

const {
  data: { user },
} = await supabase.auth.getUser();

if (!user) {
  throw new Error("Authenticated user not found");
}

console.log("Authenticated user:", user.id);`,
    fileName: "flowpilot_session_check.ts",
  },
  {
    id: "metaboguide",
    name: "metaboguide",
    tag: "Health Tracking Web Application",
    focus: "Next.js / Supabase / API Routes / Dashboard",
    situation:
      "The dashboard was not displaying the user's personalised daily plan. The request to `/api/daily-plan` was returning HTTP 400.",
    task:
      "Determine why the daily-plan API could not obtain the expected user profile and restore the dashboard data flow.",
    action: [
      "Inspected the browser request and API response instead of treating the missing dashboard content as a rendering problem.",
      "Checked the authenticated user ID and traced the request into the daily-plan API route.",
      "Investigated the Supabase health profile lookup and identified that the expected profile was not being returned.",
      "Saved the required health profile data and tested the dashboard flow again.",
    ],
    result: [
      "The HTTP 400 response was traced to the missing profile/data dependency rather than the dashboard UI itself.",
      "The debugging process established a repeatable approach for investigating API, authentication and database data-flow problems.",
    ],
    codeSnippet: `// Investigation pattern used in the
// daily-plan API route.

const {
  data: { user },
} = await supabase.auth.getUser();

if (!user) {
  return Response.json(
    { error: "Unauthenticated" },
    { status: 401 }
  );
}

const { data: profile, error } = await supabase
  .from("health_profiles")
  .select("*")
  .eq("user_id", user.id)
  .maybeSingle();

console.log("Daily plan profile:", profile);

if (error) {
  console.error("Profile lookup failed:", error);
}`,
    fileName: "metaboguide_daily_plan_api.ts",
  },
];

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
    href: "/case-studies/protected-dashboard-session",
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
    href: "/case-studies/supabase-data-flow",
  },
  {
    number: "04",
    category: "BUILD / DEPLOYMENT",
    title: "Next.js Build & Deployment Troubleshooting",
    problem:
      "Production-build failures investigated through TypeScript errors, dependencies, configuration and deployment verification.",
    technologies: ["Next.js", "TypeScript", "GitHub", "Vercel"],
    icon: Wrench,
    status: "Debugging case study",
    href: "/case-studies/nextjs-build-deployment",
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

          {/* INTERACTIVE DEBUG WORKSPACE */}
          <DebugWorkspace />

          {/* INDIVIDUAL CASE STUDIES */}
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

                    <div className="case-study-status">
                      <CheckCircle2 size={16} />
                      {study.status}
                    </div>

                    <div className="case-study-card-actions">
                      <Link
                        href={study.href}
                        className="case-study-view-button"
                      >
                        View Full Investigation
                        <ArrowRight size={17} />
                      </Link>
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

/* -------------------------------------------------------------------------- */
/* Interactive technical debugging workspace                                  */
/* -------------------------------------------------------------------------- */

function DebugWorkspace() {
  return <DebugWorkspaceClient />;
}

function DebugWorkspaceClient() {
  "use client";

  return <DebugWorkspaceUI />;
}

function DebugWorkspaceUI() {
  const [activeTab, setActiveTab] = React.useState("metaboguide");
  const [showCode, setShowCode] = React.useState(false);

  const currentCase =
    WORKSPACE_CASES.find((study) => study.id === activeTab) ||
    WORKSPACE_CASES[0];

  return (
    <div
      className="debug-workspace"
      style={{
        marginTop: "3rem",
        marginBottom: "4rem",
        background: "#030712",
        border: "1px solid #1f2937",
        borderRadius: "16px",
        overflow: "hidden",
        color: "#e5e7eb",
      }}
    >
      {/* WORKSPACE HEADER */}
      <div
        style={{
          padding: "1rem 1.25rem",
          borderBottom: "1px solid #1f2937",
          background: "#111827",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontFamily: "monospace",
            fontSize: "0.75rem",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#3ECF8E",
              display: "inline-block",
              boxShadow: "0 0 8px rgba(62,207,142,.5)",
            }}
          />

          <span style={{ color: "#6b7280" }}>
            TECHNICAL_DEBUG_WORKSPACE
          </span>

          <span style={{ color: "#3ECF8E" }}>
            STABLE_BUILD
          </span>
        </div>

        <div
          style={{
            color: "#6b7280",
            fontFamily: "monospace",
            fontSize: "0.7rem",
          }}
        >
          NEXT.JS // SUPABASE // TYPESCRIPT
        </div>
      </div>

      {/* WORKSPACE INTRO */}
      <div
        style={{
          padding: "1.5rem",
          background: "#0b0f19",
          borderBottom: "1px solid #1f2937",
        }}
      >
        <div
          style={{
            color: "#3ECF8E",
            fontFamily: "monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            fontWeight: 700,
            marginBottom: "0.6rem",
          }}
        >
          // APPLICATION SUPPORT & DEBUGGING
        </div>

        <h2
          style={{
            margin: 0,
            color: "#fff",
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
          }}
        >
          From error message to verified solution.
        </h2>

        <p
          style={{
            marginTop: "0.75rem",
            marginBottom: 0,
            color: "#9ca3af",
            maxWidth: "760px",
            lineHeight: 1.7,
          }}
        >
          Explore selected debugging investigations and see how I move from
          the reported problem through evidence collection, diagnosis, focused
          fixes and verification.
        </p>
      </div>

      {/* WORKSPACE */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(180px, 260px) 1fr",
        }}
        className="debug-workspace-grid"
      >
        {/* SIDEBAR */}
        <div
          style={{
            background: "#0f1422",
            borderRight: "1px solid #1f2937",
            padding: "1rem",
          }}
          className="debug-workspace-sidebar"
        >
          <div
            style={{
              color: "#6b7280",
              fontFamily: "monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.1em",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              marginBottom: "0.75rem",
            }}
          >
            <Layers size={13} />
            REPO_CASE_STUDIES
          </div>

          <div style={{ display: "grid", gap: "0.35rem" }}>
            {WORKSPACE_CASES.map((study) => {
              const active = activeTab === study.id;

              return (
                <button
                  key={study.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(study.id);
                    setShowCode(false);
                  }}
                  style={{
                    width: "100%",
                    border: 0,
                    borderRadius: "7px",
                    padding: "0.65rem 0.7rem",
                    background: active ? "#1f2937" : "transparent",
                    color: active ? "#3ECF8E" : "#9ca3af",
                    fontFamily: "monospace",
                    fontSize: "0.72rem",
                    fontWeight: active ? 700 : 400,
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {study.name}
                  </span>

                  <ChevronRight size={13} />
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN WORKSPACE */}
        <div
          style={{
            background: "#0b0f19",
            minWidth: 0,
          }}
        >
          {/* FILE BAR */}
          <div
            style={{
              minHeight: "44px",
              padding: "0.5rem 0.75rem",
              background: "#0f1422",
              borderBottom: "1px solid #1f2937",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                color: "#d1d5db",
                fontFamily: "monospace",
                fontSize: "0.72rem",
                fontWeight: 700,
              }}
            >
              {showCode ? currentCase.fileName : `${currentCase.name}.md`}
            </span>

            <div
              style={{
                display: "flex",
                gap: "0.2rem",
                padding: "0.2rem",
                background: "#1f2937",
                borderRadius: "5px",
              }}
            >
              <button
                type="button"
                onClick={() => setShowCode(false)}
                style={{
                  border: 0,
                  borderRadius: "4px",
                  padding: "0.35rem 0.55rem",
                  background: !showCode ? "#0b0f19" : "transparent",
                  color: !showCode ? "#3ECF8E" : "#9ca3af",
                  fontFamily: "monospace",
                  fontSize: "0.68rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <FileText size={12} />
                Markdown
              </button>

              <button
                type="button"
                onClick={() => setShowCode(true)}
                style={{
                  border: 0,
                  borderRadius: "4px",
                  padding: "0.35rem 0.55rem",
                  background: showCode ? "#0b0f19" : "transparent",
                  color: showCode ? "#60a5fa" : "#9ca3af",
                  fontFamily: "monospace",
                  fontSize: "0.68rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <Code2 size={12} />
                Code Patch
              </button>
            </div>
          </div>

          {/* CONTENT */}
          <div
            style={{
              padding: "1.5rem",
              minHeight: "480px",
              maxHeight: "560px",
              overflowY: "auto",
            }}
          >
            {showCode ? (
              <div
                style={{
                  background: "#030712",
                  border: "1px solid #1f2937",
                  borderRadius: "8px",
                  padding: "1rem",
                  overflowX: "auto",
                }}
              >
                <pre
                  style={{
                    margin: 0,
                    color: "#d1d5db",
                    fontFamily: "monospace",
                    fontSize: "0.75rem",
                    lineHeight: 1.7,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <code>{currentCase.codeSnippet}</code>
                </pre>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gap: "1.35rem",
                  fontSize: "0.82rem",
                }}
              >
                <div
                  style={{
                    borderBottom: "1px solid #1f2937",
                    paddingBottom: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      color: "#fff",
                      fontFamily: "monospace",
                      fontSize: "1rem",
                    }}
                  >
                    {currentCase.name}
                  </h3>

                  <p
                    style={{
                      margin: "0.35rem 0 0",
                      color: "#6b7280",
                      fontFamily: "monospace",
                      fontSize: "0.72rem",
                    }}
                  >
                    {currentCase.tag}
                  </p>

                  <p
                    style={{
                      margin: "0.5rem 0 0",
                      color: "#3ECF8E",
                      fontFamily: "monospace",
                      fontSize: "0.7rem",
                    }}
                  >
                    FOCUS: {currentCase.focus}
                  </p>
                </div>

                <div>
                  <h4
                    style={{
                      margin: 0,
                      color: "#f87171",
                      fontFamily: "monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    ▪ SITUATION
                  </h4>

                  <p
                    style={{
                      margin: "0.4rem 0 0",
                      color: "#9ca3af",
                      lineHeight: 1.7,
                    }}
                  >
                    {currentCase.situation}
                  </p>
                </div>

                <div>
                  <h4
                    style={{
                      margin: 0,
                      color: "#fbbf24",
                      fontFamily: "monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    ▪ TASK
                  </h4>

                  <p
                    style={{
                      margin: "0.4rem 0 0",
                      color: "#9ca3af",
                      lineHeight: 1.7,
                    }}
                  >
                    {currentCase.task}
                  </p>
                </div>

                <div>
                  <h4
                    style={{
                      margin: 0,
                      color: "#60a5fa",
                      fontFamily: "monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    ▪ ACTION PATHS
                  </h4>

                  <ul
                    style={{
                      margin: "0.5rem 0 0",
                      paddingLeft: "1rem",
                      display: "grid",
                      gap: "0.45rem",
                    }}
                  >
                    {currentCase.action.map((action, index) => (
                      <li
                        key={index}
                        style={{
                          color: "#9ca3af",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            color: "#3ECF8E",
                            fontFamily: "monospace",
                            marginRight: "0.4rem",
                          }}
                        >
                          ▹
                        </span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4
                    style={{
                      margin: 0,
                      color: "#3ECF8E",
                      fontFamily: "monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    ▪ VERIFICATION / RESULT
                  </h4>

                  <ul
                    style={{
                      margin: "0.5rem 0 0",
                      paddingLeft: "1rem",
                      display: "grid",
                      gap: "0.45rem",
                    }}
                  >
                    {currentCase.result.map((result, index) => (
                      <li
                        key={index}
                        style={{
                          color: "#9ca3af",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            color: "#3ECF8E",
                            fontFamily: "monospace",
                            marginRight: "0.4rem",
                          }}
                        >
                          ✓
                        </span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}