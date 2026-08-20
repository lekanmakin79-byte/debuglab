import Link from "next/link";
import {
  ArrowLeft,
  ArrowUp,
  CheckCircle2,
  KeyRound,
  LogIn,
  LogOut,
  MailCheck,
  ShieldCheck,
  UserPlus,
} from "lucide-react";

const technologies = [
  "Next.js",
  "TypeScript",
  "Supabase Auth",
  "Authentication",
  "Protected Routes",
];

const investigationSteps = [
  {
    number: "01",
    title: "Verify registration",
    text: "I first confirmed that a new user could successfully complete the registration process and that the authentication system created the expected account.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Verify email confirmation",
    text: "I tested the email verification stage to confirm that the newly registered account could complete the required verification step before accessing the protected application flow.",
    icon: MailCheck,
  },
  {
    number: "03",
    title: "Inspect session establishment",
    text: "After verification, I confirmed that login established an authenticated Supabase session and that the application could recognise the signed-in user.",
    icon: KeyRound,
  },
  {
    number: "04",
    title: "Test protected dashboard access",
    text: "I followed the authenticated user into the protected dashboard and verified that the application could maintain the expected authenticated state.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Test logout behaviour",
    text: "I logged the user out and verified that the authenticated session was cleared and the application returned to the expected unauthenticated state.",
    icon: LogOut,
  },
  {
    number: "06",
    title: "Test login again",
    text: "Finally, I signed in again to verify that a new authenticated session could be established successfully after logout.",
    icon: LogIn,
  },
];

const verification = [
  "New users could complete registration.",
  "Email verification completed successfully.",
  "Login established an authenticated session.",
  "The protected dashboard recognised the authenticated user.",
  "Logout cleared the authenticated state.",
  "The user could log in again successfully.",
  "The complete authentication lifecycle was verified through the application.",
  "The production Next.js build completed successfully.",
];

export default function ProtectedDashboardSessionCaseStudy() {
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
              CASE STUDY 02 · AUTHENTICATION / SESSION
            </span>
          </div>

          <div className="case-detail-grid">
            <div>
              <p className="case-kicker">Metabolic Health Coach</p>

              <h1>
                Protected Dashboard
                <span>& User Session.</span>
              </h1>

              <p className="case-detail-intro">
                An authentication and session-flow investigation covering
                registration, email verification, login, protected dashboard
                access, logout and subsequent re-authentication.
              </p>

              <div className="case-tags">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="case-status-card">
              <div className="status-icon">
                <ShieldCheck size={22} />
              </div>

              <span className="status-label">FLOW</span>

              <strong>AUTH OK</strong>

              <code>Registration → Session → Dashboard</code>

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
                The application needed a reliable authentication lifecycle.
              </h2>
            </div>

            <div className="case-problem-copy">
              <p>
                The application contained protected functionality that should
                only be available to authenticated users.
              </p>

              <p>
                Rather than testing login in isolation, I investigated the
                complete user lifecycle from registration through email
                verification, session establishment, dashboard access, logout
                and subsequent login.
              </p>

              <p>
                The objective was to verify that authentication state remained
                consistent throughout the application rather than only checking
                whether a login form appeared to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-evidence-section">
        <div className="container">
          <div className="section-heading case-section-heading">
            <span className="section-label">SYMPTOMS</span>

            <h2>What needed to be verified.</h2>

            <p>
              Authentication problems can appear at different points in the
              user lifecycle, so I tested the complete flow rather than
              assuming that successful login meant everything was working.
            </p>
          </div>

          <div className="evidence-grid">
            <article className="evidence-card">
              <div className="evidence-number">01</div>

              <h3>Account creation</h3>

              <p>
                A new user needed to be registered successfully before the
                protected application flow could begin.
              </p>
            </article>

            <article className="evidence-card">
              <div className="evidence-number">02</div>

              <h3>Email verification</h3>

              <p>
                The account verification stage needed to complete correctly
                before continuing with authenticated access.
              </p>
            </article>

            <article className="evidence-card">
              <div className="evidence-number">03</div>

              <h3>Session persistence</h3>

              <p>
                The application needed to recognise the authenticated user
                after login and during protected dashboard access.
              </p>
            </article>

            <article className="evidence-card">
              <div className="evidence-number">04</div>

              <h3>Logout and re-login</h3>

              <p>
                The session needed to clear correctly on logout and allow a
                fresh authenticated session to be established afterwards.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-detail-section">
        <div className="container">
          <div className="section-heading case-section-heading">
            <span className="section-label">INVESTIGATION</span>

            <h2>Test the entire authentication lifecycle.</h2>

            <p>
              I treated authentication as a sequence of connected states
              rather than a single login action.
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
                authentication-debug-session
              </span>
            </div>

            <div className="terminal-body case-terminal-body">
              <p>
                <span className="green">$</span> register --user
              </p>

              <p className="muted">
                New user registration completed
              </p>

              <p>
                <span className="green">$</span> verify --email
              </p>

              <p className="muted">
                Email verification completed
              </p>

              <p>
                <span className="green">$</span> login --user
              </p>

              <p className="muted">
                Authenticated session established
              </p>

              <p>
                <span className="green">$</span> access --dashboard
              </p>

              <p className="muted">
                Protected dashboard accessible
              </p>

              <p>
                <span className="green">$</span> logout
              </p>

              <p className="muted">
                Authenticated session cleared
              </p>

              <p>
                <span className="green">$</span> login --again
              </p>

              <p className="muted">
                New authenticated session established
              </p>

              <p>
                <span className="green">✓</span> Authentication lifecycle
                verified
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-detail-section">
        <div className="container">
          <div className="solution-grid">
            <div>
              <span className="section-label">SOLUTION</span>

              <h2>
                Validate authentication as a complete application flow.
              </h2>
            </div>

            <div>
              <p>
                The investigation confirmed that registration, verification,
                authentication, protected dashboard access, logout and
                subsequent login worked together as an expected lifecycle.
              </p>

              <p>
                Testing each stage independently made it possible to distinguish
                account creation issues from session-state issues and protected
                route behaviour.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-solution-section">
        <div className="container">
          <div className="solution-card">
            <div className="solution-icon">
              <ShieldCheck size={25} />
            </div>

            <div>
              <span className="section-label">AUTHENTICATION FLOW</span>

              <h2>Follow the user's state from account creation to logout.</h2>

              <p>
                Each authentication state was tested before moving to the next
                stage, allowing the complete protected application flow to be
                verified.
              </p>

              <div className="flow-diagram">
                <span>Register</span>
                <b>→</b>
                <span>Verify Email</span>
                <b>→</b>
                <span>Login</span>
                <b>→</b>
                <span>Session</span>
                <b>→</b>
                <span>Dashboard</span>
                <b>→</b>
                <span>Logout</span>
                <b>→</b>
                <span>Login Again</span>
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
              The authentication lifecycle was tested through the application.
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

              <h2>Supabase Data Flow</h2>

              <p>
                Investigating database records, queries, user IDs and
                application data flow.
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