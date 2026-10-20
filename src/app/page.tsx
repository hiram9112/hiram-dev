import Link from "next/link";
import { Arrow, Brand } from "./components/icons";
import { SystemDrawing } from "./components/system-drawing";
import { SystemStory } from "./components/system-story";

const github = "https://github.com/hiram9112";
const linkedin = "https://www.linkedin.com/in/hiramgonzalez9112/";

const chapters = [
  {
    id: "application",
    number: "01",
    name: "The application",
    title: "Start with a real problem.",
    body: "BeneHom is a financial-management application I developed end to end and continue to operate in production. The interface is one part of the work. Underneath it sit financial business logic, relational data and a custom MVC architecture.",
    detail:
      "Authentication, sessions and per-user authorization keep each person’s financial data within its own boundaries.",
    technologies: ["PHP", "MySQL", "JavaScript", "Custom MVC"],
    proof: "From application logic to a working product.",
  },
  {
    id: "numa",
    number: "02",
    name: "Numa / Applied AI",
    title: "Give AI context.\nAnd boundaries.",
    body: "Numa is BeneHom’s integrated financial assistant. Function Calling connects it to structured application data. RAG and embeddings retrieve documented knowledge, so the assistant works within the context of the product.",
    detail:
      "Input validation, filtering, usage limits and cost controls are part of the implementation—not an afterthought to a chatbot demo.",
    technologies: ["Function Calling", "RAG", "Embeddings"],
    proof: "AI inside a product, with operational constraints.",
  },
  {
    id: "mcp",
    number: "03",
    name: "MCP / External access",
    title: "Open the capability.\nKeep the boundaries.",
    body: "A remote, read-only MCP server makes selected financial capabilities available to compatible clients. It runs in production over Streamable HTTP and authenticates requests with personal access tokens.",
    detail:
      "The integration reuses BeneHom and Numa logic while preserving per-user data scoping. A new entry point does not need a second set of business rules.",
    technologies: ["MCP", "Streamable HTTP", "PAT authentication"],
    proof: "The same application logic, beyond the interface.",
  },
  {
    id: "automation",
    number: "04",
    name: "Automation / Operations",
    title: "Connect the work\naround the product.",
    body: "Self-hosted n8n workflows handle operational user notifications and AI-consumption alerts. Authenticated webhooks connect the application to automation running in Docker on an Ubuntu VPS, behind Caddy and HTTPS.",
    detail:
      "The automation service is decoupled: its failure does not make BeneHom unavailable.",
    technologies: ["n8n", "Docker", "Linux", "Webhooks", "Caddy"],
    proof: "Useful automation without a new point of failure for the app.",
  },
  {
    id: "delivery",
    number: "05",
    name: "Quality / Production",
    title: "Shipping is\npart of building.",
    body: "BeneHom has a repeatable path from a code change to production. Tests, static analysis and browser checks feed into automated CI/CD, with release-based deployment and environment-specific configuration.",
    detail:
      "Smoke checks and rollback mechanisms support delivery. CSRF protection, nonce-based CSP, login rate limiting and session controls address concrete production concerns.",
    technologies: ["PHPUnit", "PHPStan", "Playwright", "GitHub Actions"],
    proof: "Implemented, verified, deployed—and maintained.",
  },
];

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <Brand />
          <nav aria-label="Main navigation">
            <a href="#benehom">The work</a>
            <a href="#profile">About</a>
            <a href="#contact" className="nav-contact">
              Let’s talk <Arrow diagonal />
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-intro">
            <span className="status-dot" /> Hiram Gonzalez{" "}
            <span className="intro-divider" /> Software developer
          </div>
          <div className="hero-main">
            <div className="hero-copy">
              <h1 id="hero-title">
                Beyond the
                <br />
                interface.
              </h1>
              <p className="hero-description">
                I build the application.
                <br />
                And the systems that make it work.
              </p>
              <p className="hero-context">
                From financial logic to applied AI and production delivery. A
                closer look at my work, through one real product.
              </p>
              <a href="#benehom" className="button button-primary">
                Explore the engineering <Arrow />
              </a>
            </div>
            <a
              className="hero-art"
              href="#benehom"
              aria-label="Look inside BeneHom’s engineering"
            >
              <div className="hero-art-orbit" />
              <SystemDrawing hero />
              <div className="hero-art-caption">
                <span className="art-caption-line" />
                <span>
                  BeneHom
                  <br />
                  <small>There’s more beneath the surface.</small>
                </span>
                <span className="art-open">
                  <Arrow />
                </span>
              </div>
            </a>
          </div>
          <div className="hero-bottom">
            <span>Based in Zaragoza, Spain</span>
            <a href="#benehom">
              Scroll to look closer <span className="scroll-mark">↓</span>
            </a>
            <span className="hero-edition">Engineering casebook / V1</span>
          </div>
        </section>

        <section
          id="benehom"
          className="case-section"
          aria-labelledby="case-title"
        >
          <div className="shell">
            <div className="case-intro">
              <div>
                <div className="section-caption">
                  <span className="small-cross">+</span> The work, in depth
                </div>
                <h2 id="case-title">
                  One product.
                  <br />A whole system.
                </h2>
              </div>
              <div className="case-intro-description">
                <span className="production-status">
                  <span /> In production
                </span>
                <p>
                  BeneHom is my main body of public technical work. A
                  financial-management app—and a place where application
                  engineering, AI, integrations and operations meet.
                </p>
                <a href={github} className="text-link light-link">
                  Explore my code on GitHub <Arrow diagonal />
                </a>
              </div>
            </div>
            <SystemStory>
              {chapters.map((chapter) => (
                <article
                  className="system-chapter"
                  id={chapter.id}
                  key={chapter.id}
                  aria-labelledby={`${chapter.id}-title`}
                >
                  <div className="chapter-label">
                    <span>{chapter.number}</span>
                    {chapter.name}
                  </div>
                  <h3 id={`${chapter.id}-title`}>{chapter.title}</h3>
                  <p>{chapter.body}</p>
                  <p className="chapter-detail">{chapter.detail}</p>
                  <ul
                    className="technology-list"
                    aria-label="Demonstrated technologies"
                  >
                    {chapter.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <div className="chapter-proof">
                    <span>↳</span>
                    {chapter.proof}
                  </div>
                </article>
              ))}
            </SystemStory>
            <div className="case-outro">
              <span>Not five separate demos. One evolving application.</span>
              <a href="#approach">
                The decisions behind it <span>↓</span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="approach-section shell"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="approach-heading">
            <div className="section-caption">
              <span className="small-cross">+</span> The thinking behind the
              work
            </div>
            <h2 id="approach-title">
              The connections
              <br />
              are the interesting part.
            </h2>
            <p>
              A feature matters. How it fits into the rest of the application
              matters just as much. Three decisions from BeneHom.
            </p>
          </div>
          <div className="decisions">
            <details open>
              <summary>
                <span>Reuse the rules, not just the data.</span>
                <span className="details-toggle" aria-hidden="true" />
              </summary>
              <div className="decision-content">
                <p>
                  The MCP integration reuses existing BeneHom and Numa
                  application logic. External access keeps the same per-user
                  boundaries instead of creating a parallel implementation.
                </p>
                <span>Application ↔ Numa ↔ MCP</span>
              </div>
            </details>
            <details>
              <summary>
                <span>Let automation fail independently.</span>
                <span className="details-toggle" aria-hidden="true" />
              </summary>
              <div className="decision-content">
                <p>
                  Notifications and consumption alerts are useful, but the
                  financial application must remain available when the
                  automation service fails. The n8n integration is decoupled
                  from the availability of BeneHom.
                </p>
                <span>BeneHom ↔ Authenticated webhooks ↔ n8n</span>
              </div>
            </details>
            <details>
              <summary>
                <span>A release needs a way back.</span>
                <span className="details-toggle" aria-hidden="true" />
              </summary>
              <div className="decision-content">
                <p>
                  Automated checks are one part of delivery. BeneHom also uses
                  release-based deployment, smoke checks and rollback
                  mechanisms, so the production workflow includes a path back
                  after a release.
                </p>
                <span>Verification → Release → Smoke check / Rollback</span>
              </div>
            </details>
          </div>
        </section>

        <section
          className="profile-section"
          id="profile"
          aria-labelledby="profile-title"
        >
          <div className="shell profile-grid">
            <div className="profile-heading">
              <div className="section-caption">
                <span className="small-cross">+</span> The person behind the
                work
              </div>
              <h2 id="profile-title">
                Hiram
                <br />
                Gonzalez<span className="name-period">.</span>
              </h2>
              <span className="profile-location">
                <span className="location-mark" />
                Zaragoza, Spain
              </span>
            </div>
            <div className="profile-content">
              <p className="profile-lead">
                An early-career developer,
                <br />
                with work you can look inside.
              </p>
              <p>
                My strongest technical experience comes from developing and
                operating BeneHom end to end. It brings together the parts of
                software I want to keep working on: application logic, useful
                integrations and the realities of production.
              </p>
              <div className="experience-entry">
                <div>
                  <h3>WordPress Developer</h3>
                  <span>Agencia SP</span>
                </div>
                <span className="experience-date">Mar–May 2026</span>
                <p>
                  Client-facing development, theme and plugin changes, incident
                  resolution and functional testing before publication.
                </p>
              </div>
              <div className="profile-links">
                <Link href="/cv" className="text-link">
                  Read my technical CV <Arrow />
                </Link>
                <a href={linkedin} className="text-link">
                  LinkedIn <Arrow diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="contact-section shell"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-top">
            <span className="section-caption">
              <span className="small-cross">+</span> Continue the conversation
            </span>
            <span>For teams, projects and collaborations</span>
          </div>
          <div className="contact-main">
            <h2 id="contact-title">
              Good work starts
              <br />
              with a conversation.
            </h2>
            <a
              href={linkedin}
              className="contact-button"
              aria-label="Start a conversation with Hiram on LinkedIn"
            >
              <Arrow diagonal />
            </a>
          </div>
          <div className="contact-bottom">
            <p>Have something in mind? I’d like to hear about it.</p>
            <a href={linkedin} className="text-link">
              Let’s connect on LinkedIn <Arrow diagonal />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <Brand />
        <span>Built with care. Backed by working code.</span>
        <nav aria-label="Professional profiles">
          <a href={github}>
            GitHub <Arrow diagonal />
          </a>
          <a href={linkedin}>
            LinkedIn <Arrow diagonal />
          </a>
          <Link href="/cv">
            CV <Arrow />
          </Link>
        </nav>
        <a className="back-top" href="#main" aria-label="Back to top">
          ↑
        </a>
      </footer>
    </>
  );
}
