import Link from "next/link";
import {
  ArrowLeft,
  ArrowUp,
  CheckCircle2,
  Code2,
  GitBranch,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";

const technologies = [
  "Next.js",
  "TypeScript",
  "GitHub",
  "Vercel",
  "Turbopack",
  "npm",
];

const investigationSteps = [
  {
    number: "01",
    title: "Reproduce the build failure",
    text: "I first ran the production build locally to reproduce the failure and capture the exact error output rather than relying on the behaviour seen during development.",
    icon: Terminal,
  },
  {
    number: "02",
    title: "Identify the failing layer",
    text: "I separated application-code errors from TypeScript, dependency, configuration and framework-related build problems to narrow down the source of the failure.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Correct the underlying issue",
    text: "I investigated the affected files, corrected the relevant code or configuration and then reran the build to determine whether the failure had been resolved.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Verify production readiness",
    text: "After the local build succeeded, I verified the generated application routes and deployment configuration before treating the issue as resolved.",
    icon: Server,
  },
];

const verification = [
  "The production build could be reproduced locally.",
  "The failing TypeScript or application issue was isolated.",
  "The affected code or configuration was corrected.",
  "The production Next.js build completed successfully.",
  "Application routes were generated successfully.",
  "The project could proceed through the deployment workflow.",
];

export default function NextjsBuildDeploymentCaseStudy() {
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
              CASE STUDY 04 · BUILD / DEPLOYMENT
            </span>
          </div>

          <div className="case-detail-grid">
            <div>
              <p className="case-kicker">Next.js Application</p>

              <h1>
                Build & Deployment
                 <span> troubleshooting.</span>
               </h1>

              <p className="case-detail-intro">
                A production-build investigation covering TypeScript errors,
                dependency and configuration issues, local build verification
                and the deployment path from source code to production.
              </p>

              <div className="case-tags">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="case-status-card">
              <div className="status-icon">
                <GitBranch size={22} />
              </div>

              <span className="status-label">INCIDENT</span>

              <strong>BUILD FAILURE</strong>

              <code>npm run build</code>

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
                The application needed to pass a production build before
                deployment.
              </h2>
            </div>

            <div className="case-problem-copy">
              <p>
                Modern Next.js applications can work correctly during
                development while still failing during the production build.
              </p>

              <p>
                Build failures can originate from TypeScript errors,
                dependencies, configuration, framework behaviour or differences
                between development and production environments.
              </p>

              <p>
                Rather than repeatedly changing code without evidence, I ran
                the production build, captured the failure and traced it back
                to the affected part of the application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-evidence-section">
        <div className="container">
          <div className="section-heading case-section-heading">
            <span className="section-label">SYMPTOMS</span>
            <h2>What the build process was telling me.</h2>
          </div>

          <div className="evidence-grid">
            <article className="evidence-card">
              <div className="evidence-number">01</div>
              <h3>Development worked</h3>
              <p>
                The application could run during development, but production
                validation still needed to be completed.
              </p>
            </article>

            <article className="evidence-card">
              <div className="evidence-number">02</div>
              <h3>Production build exposed errors</h3>
              <p>
                Running the production build provided more specific evidence
                about the code or configuration that needed attention.
              </p>
            </article>

            <article className="evidence-card">
              <div className="evidence-number">03</div>
              <h3>Multiple layers were possible</h3>
              <p>
                TypeScript, dependencies, Next.js configuration and application
                code all had to be considered during the investigation.
              </p>
            </article>

            <article className="evidence-card">
              <div className="evidence-number">04</div>
              <h3>Deployment depended on build success</h3>
              <p>
                The application could not be treated as production-ready until
                the optimized Next.js build completed successfully.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-detail-section">
        <div className="container">
          <div className="section-heading case-section-heading">
            <span className="section-label">INVESTIGATION</span>
            <h2>Reproduce. Isolate. Fix. Verify.</h2>

            <p>
              I used the build output as evidence and worked through the
              failure layer by layer instead of guessing at the cause.
            </p>
          </div>

          <div className="investigation-list">
            {investigationSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="investigation-step" key={step.number}>
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
                nextjs-build-debug-session
              </span>
            </div>

            <div className="terminal-body case-terminal-body">
              <p>
                <span className="green">$</span> npm run build
              </p>

              <p className="error-line">
                Build failure detected — investigate
              </p>

              <p>
                <span className="green">$</span> inspect --typescript
              </p>

              <p className="muted">
                Checking application types and affected files...
              </p>

              <p>
                <span className="green">$</span> inspect --dependencies
              </p>

              <p className="muted">
                Checking framework and package compatibility...
              </p>

              <p>
                <span className="green">$</span> fix --application
              </p>

              <p className="muted">
                Applying focused correction...
              </p>

              <p>
                <span className="green">$</span> npm run build
              </p>

              <p>
                <span className="green">✓</span> Production build completed
              </p>

              <p>
                <span className="green">✓</span> Routes generated successfully
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
                The failure was isolated by treating the build output as
                evidence.
              </h2>
            </div>

            <div>
              <p>
                The investigation separated the production build process into
                the relevant layers instead of assuming that a development
                server successfully running meant the application was ready
                for deployment.
              </p>

              <p>
                By reproducing the build, identifying the affected code or
                configuration and rerunning the build after each focused
                correction, the application could be verified using the actual
                production build process.
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

              <h2>Make the production build the final verification step.</h2>

              <p>
                The corrected workflow reproduces the problem, isolates the
                failing layer, applies a focused fix and then runs the complete
                production build again before deployment.
              </p>

              <div className="flow-diagram">
                <span>Source Code</span>
                <b>→</b>
                <span>npm Build</span>
                <b>→</b>
                <span>TypeScript</span>
                <b>→</b>
                <span>Next.js</span>
                <b>→</b>
                <span>Static Routes</span>
                <b>→</b>
                <span>Deployment</span>
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
              The application was tested using the production build process.
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
              <span className="section-label">CASE STUDIES COMPLETE</span>

              <h2>Explore the full debugging portfolio.</h2>

              <p>
                Review the API, authentication, database and build/deployment
                investigations.
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