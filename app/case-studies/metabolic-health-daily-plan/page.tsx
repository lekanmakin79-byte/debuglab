import Link from "next/link";
import {
  ArrowLeft,
  ArrowUp,
  CheckCircle2,
  Database,
  KeyRound,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";

const technologies = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "API Routes",
  "Supabase Auth",
];

const investigationSteps = [
  {
    number: "01",
    title: "Verify authentication",
    text: "I first confirmed that the dashboard had a valid authenticated Supabase session before attempting to load protected application data.",
    icon: KeyRound,
  },
  {
    number: "02",
    title: "Trace the user ID",
    text: "I followed the authenticated user's ID through the dashboard and health profile query to make sure the application was requesting the correct user's record.",
    icon: Database,
  },
  {
    number: "03",
    title: "Inspect the API request",
    text: "I checked the request to /api/daily-plan and verified that the session access token was being passed with the request.",
    icon: Server,
  },
  {
    number: "04",
    title: "Investigate database access",
    text: "I investigated the difference between authentication and access to the health profile, including how the database query behaved when the expected row was not available.",
    icon: ShieldCheck,
  },
];

const verification = [
  "Authenticated user could reach the protected API flow.",
  "The user's profile was associated with the authenticated user ID.",
  "The daily-plan request could proceed through the corrected data-access path.",
  "The returned plan could be processed by the dashboard.",
  "Existing habits were checked before new records were created.",
  "The production Next.js build completed successfully.",
];

export default function MetabolicHealthDailyPlanCaseStudy() {
  return (
    <main className="case-study-detail-page">
      <nav className="nav container case-detail-nav">
        <Link className="brand" href="/">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>DebugLab</span>
        </Link>

        <div className="nav-links case-detail-links">
          <Link href="/#services">Services</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#contact" className="nav-cta">
            Work with me
          </Link>
        </div>
      </nav>

      <section className="case-detail-hero">
        <div className="container">
          <Link href="/case-studies" className="case-back-link">
            <ArrowLeft size={17} />
            Back to Case Studies
          </Link>

          <div className="case-detail-label">
            <span className="section-label">CASE STUDY 01 · API / DATABASE DEBUGGING</span>
          </div>

          <div className="case-detail-grid">
            <div>
              <p className="case-kicker">Metabolic Health Coach</p>

              <h1>
                Daily Plan API
                <span> debugging investigation.</span>
              </h1>

              <p className="case-detail-intro">
                A dashboard API problem investigated from the browser request
                through authentication, user identification and database
                access until the application could successfully process the
                user's daily plan.
              </p>

              <div className="case-tags">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="case-status-card">
              <div className="status-icon">
                <Terminal size={22} />
              </div>

              <span className="status-label">INCIDENT</span>

              <strong>HTTP 400</strong>

              <code>GET /api/daily-plan</code>

              <div className="status-divider" />

              <span className="status-result">
                <CheckCircle2 size={16} />
                Investigated & verified
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="case-detail-section">
        <div className="container">
          <div className="case-problem-grid">
            <div>
              <span className="section-label">THE PROBLEM</span>

              <h2>
                The dashboard loaded, but the personalised daily plan did not.
              </h2>
            </div>

            <div className="case-problem-copy">
              <p>
                The Metabolic Health Coach dashboard was successfully
                authenticating the user, but the personalised daily plan was
                not appearing.
              </p>

              <p>
                The browser was receiving an HTTP 400 response from the
                <code>/api/daily-plan</code> endpoint.
              </p>

              <p>
                Rather than changing the dashboard interface, I traced the
                complete request and data flow to identify where the failure
                was occurring.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-evidence-section">
        <div className="container">
          <div className="section-heading case-section-heading">
            <span className="section-label">SYMPTOMS</span>
            <h2>What the application was telling me.</h2>
          </div>

          <div className="evidence-grid">
            <article className="evidence-card">
              <div className="evidence-number">01</div>
              <h3>Authentication worked</h3>
              <p>
                The dashboard could obtain the current Supabase session and
                identify the authenticated user.
              </p>
            </article>

            <article className="evidence-card">
              <div className="evidence-number">02</div>
              <h3>Profile lookup was involved</h3>
              <p>
                The health profile was queried using the authenticated user's
                ID.
              </p>
            </article>

            <article className="evidence-card">
              <div className="evidence-number">03</div>
              <h3>API returned 400</h3>
              <p>
                The dashboard called the daily-plan endpoint with the
                authenticated access token, but the request failed.
              </p>
            </article>

            <article className="evidence-card">
              <div className="evidence-number">04</div>
              <h3>Plan was missing</h3>
              <p>
                Because the API response was unsuccessful, the dashboard could
                not populate the daily plan and continue its normal habit flow.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-detail-section">
        <div className="container">
          <div className="section-heading case-section-heading">
            <span className="section-label">INVESTIGATION</span>
            <h2>Evidence first. Fix second.</h2>
            <p>
              I followed the request through the application instead of
              assuming that the visible dashboard problem was a UI problem.
            </p>
          </div>

          <div className="investigation-list">
            {investigationSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="investigation-step" key={step.number}>
                  <div className="investigation-number">{step.number}</div>

                  <div className="investigation-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="case-terminal-section">
        <div className="container">
          <div className="case-terminal">
            <div className="terminal-top">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="terminal-title">
                daily-plan-debug-session
              </span>
            </div>

            <div className="terminal-body case-terminal-body">
              <p>
                <span className="green">$</span> check --session
              </p>

              <p className="muted">
                Authenticated user session found
              </p>

              <p>
                <span className="green">$</span> trace --user-id
              </p>

              <p className="muted">
                Following authenticated user → health profile
              </p>

              <p>
                <span className="green">$</span> request GET /api/daily-plan
              </p>

              <p className="error-line">
                HTTP 400 — investigate data access
              </p>

              <p>
                <span className="green">$</span> inspect --database-access
              </p>

              <p className="muted">
                Separating authentication from profile data access...
              </p>

              <p>
                <span className="green">✓</span> Corrected access path
              </p>

              <p>
                <span className="green">✓</span> Daily plan flow verified
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-detail-section">
        <div className="container">
          <div className="solution-grid">
            <div>
              <span className="section-label">ROOT CAUSE</span>

              <h2>
                The failure was in the server-side authentication and database
                access path.
              </h2>
            </div>

            <div>
              <p>
                The dashboard itself was not the underlying problem. The
                investigation showed that the protected daily-plan request
                depended on correctly identifying the authenticated user and
                retrieving the corresponding health-profile data.
              </p>

              <p>
                The debugging process therefore focused on the relationship
                between the Supabase session, the user ID, the health profile
                query and database access rather than treating the HTTP 400 as
                a generic frontend error.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-solution-section">
        <div className="container">
          <div className="solution-card">
            <div className="solution-icon">
              <Wrench size={25} />
            </div>

            <div>
              <span className="section-label">SOLUTION</span>

              <h2>Separate identity verification from data access.</h2>

              <p>
                The corrected flow verifies the authenticated user, uses the
                authenticated user ID to retrieve the appropriate profile
                information and then allows the daily-plan logic to continue.
              </p>

              <div className="flow-diagram">
                <span>Browser</span>
                <b>→</b>
                <span>Authenticated API</span>
                <b>→</b>
                <span>User ID</span>
                <b>→</b>
                <span>Health Profile</span>
                <b>→</b>
                <span>Daily Plan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-detail-section verification-section">
        <div className="container">
          <div className="section-heading case-section-heading">
            <span className="section-label">VERIFICATION</span>
            <h2>The fix was tested through the application flow.</h2>
          </div>

          <div className="verification-grid">
            {verification.map((item) => (
              <div className="verification-item" key={item}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-next-section">
        <div className="container">
          <div className="case-next-card">
            <div>
              <span className="section-label">NEXT CASE STUDY</span>
              <h2>Protected Dashboard & User Session</h2>
              <p>
                Authentication, registration, email verification, session
                persistence and logout behaviour.
              </p>
            </div>

            <Link href="/case-studies" className="button primary">
              View Case Studies
              <ArrowLeft size={17} className="rotate-arrow" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 DebugLab. Built with Next.js.</span>
          <span>Remote web development & application support</span>
        </div>
      </footer>

      <a
        className="back-to-top"
        href="#top"
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp size={19} />
      </a>
    </main>
  );
}