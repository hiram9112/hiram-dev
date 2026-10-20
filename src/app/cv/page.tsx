import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { layers, links } from "@/lib/content";

export default function CvPage() {
  return (
    <main className="cv-page">
      <nav className="cv-nav" aria-label="CV actions">
        <Link href="/">Back to Hiram Dev</Link>
        <PrintButton />
      </nav>
      <header className="cv-heading">
        <h1>Hiram</h1>
        <p>Software developer</p>
      </header>
      <p className="cv-intro">
        Early-career developer working across web interfaces, backend logic,
        relational data, AI integrations and production. This technical profile
        summarizes the implemented work available for inspection.
      </p>
      <section>
        <h2>Selected technical work</h2>
        <h3>BeneHom</h3>
        <p>
          A financial web application, developed end to end and running in
          production. The main body of current public technical evidence.
        </p>
        <p>
          <a href={links.production}>benehom.es</a> /{" "}
          <a href={links.repository}>github.com/hiram9112/benehom</a>
        </p>
        <dl className="cv-work">
          {layers.map((layer) => (
            <div key={layer.id}>
              <dt>{layer.name}</dt>
              <dd>
                {layer.evidence}
                <span>{layer.technologies}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="cv-contact">
        <h2>Contact & professional profile</h2>
        <a href={links.linkedin}>linkedin.com/in/hiramgonzalez9112</a>
        <a href={links.github}>github.com/hiram9112</a>
      </section>
      <p className="cv-note">
        A work-focused CV. Employment history, education and qualifications are
        not listed in this profile.
      </p>
    </main>
  );
}
