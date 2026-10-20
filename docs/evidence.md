# Evidence

This document contains the current technical evidence available to Hiram Dev.

It is deliberately curated rather than exhaustive. Hiram Dev complements the CV, LinkedIn and GitHub; it should not reproduce them.

The purpose of this file is to give the site reliable material from which to present Hiram's current technical profile.

It does not define narrative, layout, visual treatment or information architecture.

## Selection principle

Evidence belongs here when it is:

- real and demonstrable;
- relevant to the kinds of software roles Hiram is targeting;
- strong enough to help someone evaluate his capabilities;
- meaningfully different from evidence already represented.

Current learning, planned work and technologies without demonstrable implementation are excluded.

The strongest evidence should receive the most visibility. This document should be re-evaluated as Hiram's work grows rather than expanded indefinitely.

## Current profile

Hiram Gonzalez is an early-career software developer based in Zaragoza, Spain.

His strongest current evidence comes from BeneHom, a financial-management application he has developed end to end and operates in production, together with a short period of professional WordPress development in a client environment.

The site must not imply seniority or professional software experience beyond what the evidence supports.

## Priority evidence

### 1. End-to-end application engineering — BeneHom

BeneHom is a financial-management web application developed and evolved end to end and deployed in production.

It provides evidence of:

- PHP backend development;
- MySQL and relational data;
- custom MVC architecture;
- real financial business logic;
- authentication and session handling;
- authorization and per-user data isolation;
- frontend and backend working as one product;
- ongoing maintenance and evolution after deployment.

The important signal is not the number of features. It is that Hiram has taken a non-trivial application beyond implementation into continued operation and development.

### 2. Quality, CI/CD and production delivery

BeneHom includes a repeatable verification and delivery workflow using:

- PHPUnit;
- PHPStan;
- Playwright;
- GitHub Actions;
- automated CI/CD;
- release-based deployment;
- environment-specific configuration;
- smoke checks;
- rollback mechanisms.

This provides evidence of automated quality controls and a controlled path from code changes to production.

Implemented production and security concerns also include:

- CSRF protection;
- Content Security Policy using nonces;
- login rate limiting;
- session controls;
- authorization and user scoping.

These should be presented as implemented engineering controls, not as a claim of security or DevOps specialization.

### 3. Applied AI inside a real product — Numa

Numa is an AI financial assistant integrated into BeneHom.

It provides evidence of:

- Function Calling for structured application data;
- RAG for documented knowledge;
- embeddings for semantic retrieval;
- input validation and filtering;
- usage limits and cost controls.

The relevant signal is that AI has been integrated into an existing application with real data, boundaries and operational constraints rather than implemented as an isolated chatbot demo.

### 4. External system integration — MCP

BeneHom exposes selected financial capabilities through a remote read-only MCP server running in production.

It provides evidence of:

- Streamable HTTP;
- personal access token authentication;
- per-user data scoping;
- reuse of existing BeneHom/Numa application logic;
- access from compatible MCP clients.

The relevant signal is exposing application capabilities externally while preserving existing access boundaries.

### 5. Workflow automation and infrastructure — n8n

BeneHom uses n8n for operational automation.

The implementation includes:

- n8n self-hosted on an Ubuntu VPS;
- Docker;
- Caddy and HTTPS;
- authenticated webhooks;
- operational user notifications;
- AI-consumption alerts;
- decoupling so failure of the automation service does not make BeneHom unavailable.

This provides evidence of practical automation, webhooks, service integration and basic operational infrastructure.

## Professional software experience

### Agencia SP — WordPress Developer

**March 2026 – May 2026**

Relevant evidence includes:

- development and customization of WordPress sites from technical documentation and client requirements;
- theme and plugin changes;
- structural, visual and functional modifications;
- incident resolution;
- direct client meetings;
- functional and manual testing before publication.

This experience is useful because it demonstrates work in a real client environment. It should remain proportional to its duration and should not displace the deeper technical evidence available from BeneHom.

## Demonstrated technologies

Technologies should normally appear in the context of the work that demonstrates them rather than as an isolated skills inventory.

Current demonstrated technologies and practices include:

- PHP
- JavaScript
- SQL
- MySQL
- PHPUnit
- PHPStan
- Playwright
- Git
- GitHub Actions
- CI/CD
- Docker
- Linux
- n8n
- APIs
- authenticated webhooks
- generative AI
- RAG
- embeddings
- Function Calling
- MCP
- Streamable HTTP
- PAT authentication

## What belongs elsewhere

The complete employment history, education and broader professional background belong primarily in the CV and LinkedIn.

Hiram Dev may link to those sources instead of reproducing them.

External profiles available for integration into the site:

- GitHub: https://github.com/hiram9112
- LinkedIn: https://www.linkedin.com/in/hiramgonzalez9112/
  Previous work outside software development should not occupy significant space in the technical casebook unless a specific product need later justifies it.

## Evolution

This file represents the strongest evidence available now, not a permanent catalogue.

When new work becomes complete and demonstrable:

1. evaluate what new capability it proves;
2. compare its strength with the evidence already present;
3. decide whether it adds a genuinely new signal or strengthens an existing one;
4. promote, reduce or remove evidence accordingly.

The site should grow by improving the quality of the evidence it presents, not by accumulating project cards or technology lists indefinitely.

## Truthfulness constraints

Do not:

- present current learning as demonstrated capability;
- present planned or unfinished projects as completed work;
- invent clients, employers, responsibilities, metrics or outcomes;
- imply seniority unsupported by the evidence;
- convert technology exposure into claims of mastery;
- describe BeneHom, Numa, MCP or automation with capabilities that are not actually implemented.

When evidence is incomplete, prefer the narrower factual claim.
