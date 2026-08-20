import Link from "next/link";
import {
  ArrowLeft,
  ArrowUp,
  CheckCircle2,
  Database,
  GitBranch,
  KeyRound,
  Search,
  Terminal,
  Wrench,
} from "lucide-react";

const technologies = [
  "Supabase",
  "PostgreSQL",
  "Next.js",
  "TypeScript",
  "API Routes",
  "User IDs",
];

const investigationSteps = [
  {
    number: "01",
    title: "Identify the expected data",
    text: "I first established which records the application expected to retrieve and how those records were connected to the authenticated user.",
    icon: Search,
  },
  {
    number: "02",
    title: "Trace the user ID",
    text: "I followed the authenticated user's ID from the application through the database query to determine whether the correct user's data was being requested.",
    icon: KeyRound,
  },
  {
    number: "03",
    title: "Inspect the database query",
    text: "I examined the Supabase query, the requested table and the returned data to determine whether the issue was caused by the query, missing data or the relationship between records.",
    icon: Database,
  },
  {
    number: "04",
    title: "Follow the application data flow",
    text: "I traced the returned database data back through the API and into the dashboard to verify where the expected information was being lost or interpreted incorrectly.",
    icon: GitBranch,
  },
];

const verification = [
  "The expected database tables and records were identified.",
  "The authenticated user's ID was traced through the application flow.",
  "Supabase queries were checked against the expected user data.",
  "Returned database records could be followed into the application.",
  "The application data flow was verified from request to dashboard.",
  "The production Next.js build completed successfully.",
];

export default function SupabaseDataFlowCaseStudy() {
  return (
    <main id="top" className="case-study-detail-page">
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
            <span className="section-label">
              CASE STUDY 03 · DATABASE DEBUGGING
            </span>
          </div>

          <div className="case-detail-grid">
            <div>
              <p className="case-kicker">Metabolic Health Coach</p>

              <h1>
                Supabase Data Flow
                <span> debugging investigation.</span>
              </h1>

              <p className="case-detail-intro">
                A database-flow investigation tracing application data from
                the authenticated user and database query through Supabase
                records and back into the dashboard.
              </p>

              <div className="case-tags">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="case-status-card">
              <div className="status-icon">
                <Database size={22} />
              </div>

              <span className="status-label">INCIDENT</span>

              <strong>DATA FLOW</strong>

              <code>User → Query → Record → Dashboard</code>

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
                Application data was not always appearing where expected.
              </h2>
            </div>

            <div className="case-problem-copy">
              <p>
                The application depended on Supabase data being correctly
                associated with the authenticated user and returned through
                the expected database queries.
              </p>

              <p>
                When information did not appear as expected, the visible
                dashboard did not immediately reveal whether the problem was
                caused by the database record, the user ID, the query or the
                application data flow.
              </p>

              <p>
                Rather than changing the interface first, I traced the data
                from the authenticated user through the database and back
                into the application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-evidence-section">
        <div className="container">
          <div className="section-heading case-section-heading">
            <span className="section-label">SYMPTOMS</span>

            <h2>What needed to be investigated.</h2>

            <p>
              Database problems can appear as frontend problems, so I
              separated the data layer from the interface and investigated
              each stage independently.
            </p>
          </div>

          <div className="evidence-grid">
            <article className="evidence-card">
              <div className="evidence-number">01</div>

              <h3>Expected records</h3>

              <p>
                The application expected specific records to exist for the
                authenticated user.
              </p>
            </article>

            <article className="evidence-card">
              <div className="evidence-number">02</div>

              <h3>User ID relationship</h3>

              <p>
                The authenticated user ID needed to correspond correctly with
                the application's database records.
              </p>
            </article>

            <article className="evidence-card">
              <div className="evidence-number">03</div>

              <h3>Query behaviour</h3>

              <p>
                Supabase queries needed to return the expected record instead
                of an empty, incorrect or unexpected result.
              </p>
            </article>

            <article className="evidence-card">
              <div className="evidence-number">04</div>

              <h3>Dashboard data flow</h3>

              <p>
                Data returned from the database needed to reach the correct
                application component and be interpreted correctly.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-detail-section">
        <div className="container">
          <div className="section-heading case-section-heading">
            <span className="section-label">INVESTIGATION</span>

            <h2>Trace the data. Don't guess.</h2>

            <p>
              I followed the data through each layer to identify where the
              expected information stopped matching the application's
              expectations.
            </p>
          </div>

          <div className="investigation-list">
            {investigationSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className="investigation-step"
                  key={step.number}
                >
                  <div className="investigation-number">
                    {step.number}
                  </div>

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
                supabase-data-flow-debug
              </span>
            </div>

            <div className="terminal-body case-terminal-body">
              <p>
                <span className="green">$</span> identify --user
              </p>

              <p className="muted">
                Authenticated user ID identified
              </p>

              <p>
                <span className="green">$</span> inspect --table
              </p>

              <p className="muted">
                Checking expected application records...
              </p>

              <p>
                <span className="green">$</span> query --user-id
              </p>

              <p className="muted">
                Comparing database records against authenticated user
              </p>

              <p>
                <span className="green">$</span> trace --data-flow
              </p>

              <p className="muted">
                Following database result → API → dashboard
              </p>

              <p>
                <span className="green">✓</span> Data relationship verified
              </p>

              <p>
                <span className="green">✓</span> Application data flow verified
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
                The investigation focused on the relationship between user
                identity, database records and application queries.
              </h2>
            </div>

            <div>
              <p>
                The visible dashboard could only display the information that
                successfully passed through the application's data flow.
              </p>

              <p>
                The debugging process therefore separated the individual
                layers: authenticated user identity, database records,
                Supabase queries, API responses and dashboard rendering.
              </p>

              <p>
                This made it possible to determine whether missing data was
                caused by the record itself, the user relationship, the query
                or the way the application consumed the returned data.
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

              <h2>Trace database data through every application layer.</h2>

              <p>
                The corrected approach verifies the authenticated user,
                confirms the expected database record, checks the Supabase
                query and then follows the returned data into the API and
                dashboard.
              </p>

              <div className="flow-diagram">
                <span>Authenticated User</span>
                <b>→</b>
                <span>User ID</span>
                <b>→</b>
                <span>Supabase Query</span>
                <b>→</b>
                <span>Database Record</span>
                <b>→</b>
                <span>API</span>
                <b>→</b>
                <span>Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-detail-section verification-section">
        <div className="container">
          <div className="section-heading case-section-heading">
            <span className="section-label">VERIFICATION</span>

            <h2>
              The data flow was tested from the user to the interface.
            </h2>
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

              <h2>Next.js Build & Deployment Troubleshooting</h2>

              <p>
                Investigating TypeScript errors, dependency problems,
                configuration issues and production build failures.
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
        <ArrowUp size={19} />
      </a>
    </main>
  );
}