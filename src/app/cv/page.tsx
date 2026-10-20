import Link from "next/link";
import { Arrow, Brand } from "../components/icons";
import { PrintButton } from "./print-button";

export default function CVPage() {
  return (
    <>
      <header className="cv-navigation shell">
        <Brand />
        <Link href="/" className="text-link">
          Back to the casebook <Arrow />
        </Link>
      </header>
      <main className="cv-page">
        <div className="cv-top">
          <span>Technical CV</span>
          <PrintButton />
        </div>
        <h1>Hiram Gonzalez</h1>
        <p className="cv-role">Software developer / Zaragoza, Spain</p>
        <p>
          Early-career software developer with end-to-end application and
          production experience through BeneHom, alongside professional
          WordPress development in a client environment.
        </p>
        <div className="cv-links">
          <a href="https://github.com/hiram9112">github.com/hiram9112</a>
          <a href="https://www.linkedin.com/in/hiramgonzalez9112/">
            LinkedIn / Contact
          </a>
        </div>
        <section>
          <h2>Technical work</h2>
          <h3>BeneHom</h3>
          <p>
            Financial-management web application developed end to end and
            operated in production.
          </p>
          <ul>
            <li>
              PHP, MySQL, JavaScript and custom MVC architecture; financial
              business logic, authentication, sessions, authorization and
              per-user data isolation.
            </li>
            <li>
              Numa: integrated AI financial assistant using Function Calling,
              RAG and embeddings, with input validation, usage limits and cost
              controls.
            </li>
            <li>
              Remote read-only MCP server in production, with Streamable HTTP,
              personal access tokens and scoped access that reuses existing
              application logic.
            </li>
            <li>
              Operational notifications and AI-consumption alerts through
              self-hosted n8n, Docker, Ubuntu, Caddy, HTTPS and authenticated
              webhooks.
            </li>
            <li>
              PHPUnit, PHPStan, Playwright and GitHub Actions for automated
              quality and CI/CD. Release-based deployment, environment
              configuration, smoke checks and rollback mechanisms.
            </li>
            <li>
              Implemented CSRF protection, nonce-based Content Security Policy,
              login rate limiting and session controls.
            </li>
          </ul>
        </section>
        <section>
          <h2>Professional software experience</h2>
          <div className="cv-job">
            <h3>WordPress Developer / Agencia SP</h3>
            <span>March 2026 – May 2026</span>
          </div>
          <ul>
            <li>
              Developed and customized WordPress sites from technical
              documentation and client requirements.
            </li>
            <li>
              Made theme, plugin, structural, visual and functional changes;
              resolved incidents.
            </li>
            <li>
              Participated in direct client meetings and performed functional
              and manual testing before publication.
            </li>
          </ul>
        </section>
        <p className="cv-note">
          This concise technical CV focuses on demonstrated software work. See
          LinkedIn for broader professional background.
        </p>
      </main>
    </>
  );
}
