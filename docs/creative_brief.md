# Hiram Dev — Under the Surface

## Narrative

What a user sees in a software product is only the surface.

The experience should progressively reveal the engineering that exists beneath
that visible layer: application logic, data, integrations, reliability and
production.

The story is not about BeneHom itself and it is not a tour of projects.

It is about showing that a working product depends on multiple technical layers,
and that Hiram has real, inspectable work across several of them.

As the visitor progresses, the experience should move conceptually from the
visible product toward the systems that make it work.

## What the visitor should understand

A non-technical visitor should be able to understand that Hiram has worked on
more than the visible interface of an application.

A technical visitor should be able to inspect concrete evidence and understand
the implementation depth behind those layers.

The experience must remain honest about Hiram being early in his software
career. It should demonstrate exposure and implemented work, not imply seniority
or mastery that is not supported.

## Narrative progression

The conceptual progression is:

Surface
→ Application
→ Data
→ Integrations
→ Reliability
→ Production

These are narrative layers, not prescribed visual sections.

The design should make the sense of going deeper increasingly meaningful as the
experience progresses.

## Evidence available

BeneHom is the main body of current public technical evidence.

It is a financial web application developed end to end and running in
production.

Its core implementation includes:

- PHP backend with controllers, PDO models, services and server-rendered views.
- MySQL / SQL relational persistence.
- HTML, CSS and JavaScript on the frontend.
- Authentication, authorization, sessions and per-user data isolation.
- Real financial business logic and calculations.

Relevant work built around the application includes:

- Numa: generative AI integrated with real application data using Function
  Calling, RAG and embeddings.
- MCP: a remote read-only server using Streamable HTTP, PAT authentication and
  user-scoped access.
- n8n-based operational automation and authenticated webhooks.
- PHPUnit, PHPStan and Playwright for automated validation at different levels.
- GitHub Actions and automated CI/CD.
- Release-based deployments, smoke checks and rollback.
- Production operation in a Linux/VPS environment.

BeneHom is evidence, not the subject of the site.

Use this material selectively to support the narrative. Do not try to reproduce
the complete project or README.

Important implementation technologies such as PHP, JavaScript and MySQL should
remain discoverable even when they are not the visual focus.

Technologies should be connected to the work that demonstrates them rather than
presented as disconnected proficiency claims.

Selected technical decisions may be surfaced when they genuinely help explain
the depth of the work, but they are supporting material rather than a required
part of the narrative.

For deeper verification, the public project is available at:

- Production: https://benehom.es/
- Repository: https://github.com/hiram9112/benehom

## The one memorable thing

Build toward a moment where the visible product is no longer perceived as the
main object and the engineering system that makes it possible is revealed as a
whole.

Choose how that reveal works.

## Experience

The experience should unfold through scrolling and feel like progressive
discovery rather than a sequence of independent portfolio sections.

Important narrative motion should be linked to scroll progress where appropriate:
scrolling forward advances the experience and scrolling backward reverses it.

The scrolling experience should feel smooth, continuous and controlled rather
than abrupt or jumpy.

Movement through the page should contribute to the sense of navigating deeper
into the system.

Avoid relying on one-shot viewport entrance animations as the primary narrative
mechanism.

Do not fight or hijack the user's scroll input. The experience should remain
responsive, predictable and comfortable on both pointer and touch devices.

Motion, spatial change, depth, transformation and interaction may be used as
major design materials.

The exact visual metaphor and technical approach are open.

## Creative freedom

Choose the visual language, composition, typography, color, motion language,
interaction model and graphical treatment.

Do not reproduce the diagrams, layouts, lines, layers or animations from earlier
exploration notes.

Those were examples used to discover the narrative, not implementation
instructions.

The design does not need to visually resemble BeneHom.

Technical novelty is not a goal by itself. Choose implementation techniques
because they strengthen the experience.

## Constraints

Use `docs/product.md` as the product source of truth.

Use `docs/engineering.md` as the technical source of truth.

Do not invent projects, capabilities, professional experience, metrics or
seniority.

The site remains a professional presentation and engineering casebook. Visual
experimentation must support the visitor's ability to understand and evaluate
Hiram's actual work.

Important information must remain discoverable even when the primary experience
relies heavily on motion or scrolling.

Preserve accessibility, phone usability and reduced-motion support.
