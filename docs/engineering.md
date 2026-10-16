# Engineering

## Purpose

This document is the technical source of truth for Hiram Dev.

It describes the current engineering decisions that affect how the project is built, verified and deployed. It is intentionally kept separate from product requirements and from the narrative or visual direction of the site.

This is a living document: when a relevant technical decision changes, this document should be updated to reflect the new current state.

It is not a changelog. Git preserves history; this document preserves the technical state and the reasoning needed for future work.

## Decision policy

A technical decision belongs here when it can materially affect future implementation work, such as:

- runtime or package management;
- framework or language choices;
- project-wide conventions;
- dependencies with architectural impact;
- testing strategy;
- accessibility requirements;
- CI/CD;
- deployment;
- rendering strategy;
- animation or graphics infrastructure.

Local implementation details do not belong here unless they establish a project-wide convention.

If a task requires changing an existing decision recorded here, the change should be justified before implementation and this document should be updated once the decision is accepted.

If this document does not define a required decision:

- local and easily reversible implementation choices may be made pragmatically;
- decisions affecting architecture, dependencies, product behavior, security or long-term maintainability should not be invented silently.

## Runtime and package management

- Node.js 24 LTS.
- pnpm as package manager.
- The Node.js major version will be pinned in the repository.
- The pnpm version will be pinned through the `packageManager` field in `package.json`.
- The lockfile will be committed.

## Application stack

- Next.js 16.x.
- React 19.
- TypeScript.
- App Router.
- TypeScript strict mode enabled.

The project is intentionally frontend-first.

No backend, database, authentication or persistence layer will be introduced unless a real product requirement later justifies it.

## Rendering and component model

The initial implementation should follow Next.js App Router conventions.

Server Components should remain the default where no client-side behavior is required.

Client Components should be introduced only when interaction, browser APIs, local state or animation requirements justify them.

The final component structure is intentionally deferred until the selected experience makes the composition clear.

## Styling

- Tailwind CSS 4 for layout, spacing, responsive behavior and general styling.
- Plain CSS remains available where custom visual work would become clearer or more flexible outside utility classes.
- No generic component library is part of the current stack.

The visual system should remain specific to the project rather than being shaped by a prebuilt UI kit.

## Motion and advanced graphics

No animation, smooth-scroll, WebGL or 3D library is selected yet.

These decisions are intentionally deferred until the narrative and visual direction are selected.

Potential future needs may include:

- scroll-driven animation;
- timeline orchestration;
- SVG animation;
- Canvas or WebGL;
- shaders;
- smooth scrolling.

A dependency should only be introduced when the selected experience requires it.

Simple local transitions should prefer platform capabilities and CSS where appropriate.

## Code quality

The project must provide:

- ESLint;
- Prettier;
- TypeScript type checking;
- production build verification.

Expected project commands:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Formatting should be deterministic and should not require repeated manual style decisions.

## Testing

- Playwright will be configured from the beginning.
- The initial automated test will be a minimal smoke test confirming that the home page loads successfully.
- Additional end-to-end tests should be added for behavior that merits them.
- A unit-test framework is not part of the initial setup and should only be introduced if meaningful application logic appears.

Testing effort should remain proportional to the behavior and risk of the site.

## Accessibility

Implementation must preserve:

- semantic HTML;
- keyboard accessibility;
- visible focus states;
- sufficient contrast;
- responsive behavior;
- support for `prefers-reduced-motion`;
- access to essential information without requiring animation.

Experimental visual work must not make the content inaccessible.

## Continuous integration

GitHub Actions will verify relevant pushes and pull requests.

The initial pipeline should run:

1. dependency installation;
2. type checking;
3. linting;
4. Playwright smoke test;
5. production build.

CI should use the same pinned runtime and package manager as local development.

## Deployment

Vercel is the initial deployment target.

Reasons:

- first-class support for Next.js;
- preview deployments for branches and pull requests;
- minimal operational overhead;
- infrastructure deployment is not a learning objective of this project.

This decision may be revisited only if a later product or technical requirement justifies it.

## Deferred decisions

The following technical decisions are intentionally not defined yet:

- motion implementation strategy;
- animation library;
- smooth-scroll library;
- SVG / Canvas / WebGL requirements;
- Three.js or other graphics libraries;
- shader implementation;
- final component structure.

These decisions depend on the selected experience and should only be introduced when the implementation requires them.
