import Link from "next/link";
import { Arrow, Mark } from "@/components/icons";
import { ScrollController } from "@/components/scroll-controller";
import { SystemScene } from "@/components/system-scene";
import { layers, links } from "@/lib/content";
import type { CSSProperties } from "react";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip the motion, explore the work
      </a>
      <header className="site-header">
        <a
          href="#top"
          className="brand"
          aria-label="Hiram Dev, back to the surface"
        >
          <Mark />
          <span>
            hiram<span className="brand-suffix">.dev</span>
          </span>
        </a>
        <span className="header-description">
          Software, beneath the surface.
        </span>
        <nav aria-label="Main navigation">
          <a href="#work">The work</a>
          <a href="#profile">About</a>
          <a href="#contact" className="contact-nav">
            Let’s talk <Arrow diagonal />
          </a>
        </nav>
      </header>
      <main id="top">
        <section
          className="journey"
          data-enhanced="true"
          data-active="0"
          aria-label="Under the surface: six layers of a working product"
        >
          <ScrollController />
          {[...layers, { id: "system" }].map((layer, index) => (
            <div
              key={layer.id}
              id={`layer-${layer.id}`}
              className="layer-anchor"
              style={
                {
                  "--stop": index === 0 ? 0 : (index + 0.2) / 6.4,
                } as CSSProperties
              }
            />
          ))}
          <div className="journey-stage">
            <div className="stage-topline">
              <span>Under the surface</span>
              <a href="#work">
                Go straight to the work <Arrow />
              </a>
            </div>
            <div className="chapters">
              {layers.map((layer, index) => (
                <article
                  key={layer.id}
                  className={`chapter chapter-${layer.id}`}
                  data-active={index === 0 ? "true" : "false"}
                >
                  {index === 0 ? (
                    <h1>{layer.title}</h1>
                  ) : (
                    <h2>{layer.title}</h2>
                  )}
                  <p>{layer.description}</p>
                  {index === 0 ? (
                    <a
                      className="text-link journey-link"
                      href="#layer-application"
                    >
                      Explore beneath the surface{" "}
                      <span className="down-arrow">
                        <Arrow />
                      </span>
                    </a>
                  ) : (
                    <a className="text-link" href={`#evidence-${layer.id}`}>
                      Inspect this layer <Arrow />
                    </a>
                  )}
                  {index === 0 && (
                    <span className="hero-footnote">
                      An engineering casebook. Built on real, inspectable work.
                    </span>
                  )}
                </article>
              ))}
              <article className="chapter chapter-system" data-active="false">
                <h2>
                  One interface.
                  <br />A whole system.
                </h2>
                <p>
                  The visible product is just the beginning. BeneHom is where
                  these layers come together—and where you can inspect my work.
                </p>
                <a className="text-link" href="#work">
                  Follow the evidence <Arrow />
                </a>
              </article>
            </div>
            <SystemScene />
            <nav
              className="depth-navigation"
              aria-label="Explore the technical layers"
            >
              <span className="depth-label">Go deeper</span>
              <ol>
                {[...layers, { id: "system", name: "The system" }].map(
                  (layer, index) => (
                    <li key={layer.id}>
                      <a
                        className="depth-stop"
                        href={`#layer-${layer.id}`}
                        aria-label={`${index + 1}: ${layer.name}`}
                      >
                        <span className="stop-number">0{index + 1}</span>
                        <span className="stop-name">{layer.name}</span>
                        <span className="stop-dot" />
                      </a>
                    </li>
                  ),
                )}
              </ol>
              <div className="depth-track">
                <span />
              </div>
            </nav>
          </div>
        </section>

        <section
          className="work-section"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="work-intro">
            <h2 id="work-title">
              Don’t take my word.
              <br />
              Look under the hood.
            </h2>
            <div>
              <p>
                BeneHom is my main body of public technical work: a financial
                web application, built end to end and running in production.
              </p>
              <p className="secondary-copy">
                One project with enough depth to look closer.
              </p>
            </div>
          </div>
          <div className="project-bar">
            <span className="project-name">
              <span className="project-symbol">b</span>BeneHom
            </span>
            <div>
              <a href={links.production}>
                Visit the live product <Arrow diagonal />
              </a>
              <a href={links.repository}>
                Explore the repository <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="evidence-list">
            {layers.map((layer, index) => (
              <article
                className="evidence-row"
                id={`evidence-${layer.id}`}
                key={layer.id}
              >
                <div className="evidence-label">
                  <span className="evidence-number">0{index + 1}</span>
                  <h3>{layer.name}</h3>
                </div>
                <div className="evidence-main">
                  <h4>{layer.evidenceTitle}</h4>
                  <p>{layer.evidence}</p>
                  <details>
                    <summary>
                      {layer.detailTitle}
                      <span className="disclosure-mark" />
                    </summary>
                    <div className="detail-content">
                      <p>{layer.detail}</p>
                      {layer.id === "integrations" && (
                        <a
                          className="text-link"
                          href={`${links.repository}/tree/main/resources/numa`}
                        >
                          Read the Numa documentation <Arrow diagonal />
                        </a>
                      )}
                    </div>
                  </details>
                </div>
                <div className="evidence-meta">
                  <p>{layer.technologies}</p>
                  <a href={`${links.repository}${layer.source}`}>
                    {layer.sourceLabel}
                    <Arrow diagonal />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="evidence-note">
            The code and implementation are the evidence. The cutaway above is a
            conceptual view of that work.
          </p>
        </section>

        <section
          className="profile-section"
          id="profile"
          aria-labelledby="profile-title"
        >
          <div className="profile-heading">
            <span className="profile-monogram" aria-hidden="true">
              h.
            </span>
            <h2 id="profile-title">
              Curious about
              <br />
              the whole thing.
            </h2>
          </div>
          <div className="profile-copy">
            <p className="profile-lead">
              I’m Hiram, an early-career software developer interested in how
              all the parts become a working product.
            </p>
            <p>
              My current work spans web interfaces, PHP application logic,
              relational data, AI integrations and production. BeneHom is the
              clearest place to see that work together.
            </p>
            <p>
              I’m still building my experience. I’d rather show you what I’ve
              implemented than make claims a technology list can’t prove.
            </p>
            <div className="profile-links">
              <a className="text-link" href={links.github}>
                GitHub <Arrow diagonal />
              </a>
              <a className="text-link" href={links.linkedin}>
                LinkedIn <Arrow diagonal />
              </a>
              <Link className="text-link" href="/cv">
                View CV <Arrow />
              </Link>
            </div>
          </div>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div>
            <h2 id="contact-title">
              Good work starts
              <br />
              with a conversation.
            </h2>
            <p>
              Considering me for a team, collaboration or project?
              <br />
              Let’s talk about what you’re building.
            </p>
          </div>
          <a className="contact-link" href={links.linkedin}>
            <span>
              Let’s connect
              <span className="contact-channel">Find me on LinkedIn</span>
            </span>
            <Arrow diagonal />
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand" href="#top">
          <Mark />
          <span>hiram.dev</span>
        </a>
        <span>Built with care. Open to inspection.</span>
        <a className="text-link" href="#top">
          Back to the surface{" "}
          <span className="up-arrow">
            <Arrow />
          </span>
        </a>
      </footer>
    </>
  );
}
