# AGENTS.md

Repository-wide instructions for coding agents.

## Scope

This file applies to the entire repository.

More specific `AGENTS.md` files may exist in subdirectories and take precedence within their scope.

Task-specific instructions take precedence when they explicitly request a change to the documented project state. When such a change is accepted, update the corresponding source-of-truth document.

## Sources of truth

Use the following documents according to the task:

- `docs/product.md` — product purpose, audience, scope, positioning and success criteria.
- `docs/engineering.md` — technical stack, engineering conventions, testing, CI, deployment and project-wide technical decisions.
- `docs/experience.md` — narrative, visual direction, interaction and experience decisions, when this document exists.

Do not duplicate product, engineering or experience decisions in this file.

If authoritative documents appear to conflict, do not silently choose one interpretation. Surface the conflict before proceeding.

## Design exploration

Files under `docs/exploration/` are non-authoritative design studies.

Do not combine ideas from multiple exploration documents unless the task explicitly asks for that.

When a task targets a specific exploration direction, use only that direction together with the authoritative product and engineering documents.

Once `docs/experience.md` exists, it becomes the source of truth for the selected experience unless a task explicitly concerns an experimental or archived direction.

## Before making changes

Read the source-of-truth documents relevant to the task before implementation.

Inspect the existing working tree and preserve unrelated user changes.

Do not infer project-wide requirements from existing code when an authoritative document defines them.

Do not introduce a new dependency, architectural pattern or project-wide convention merely because it makes the current task easier.

## Missing decisions

Do not treat undocumented details as project requirements.

For local, low-risk and easily reversible choices, use professional judgment and continue.

Do not silently establish a new project-wide convention or make a material decision affecting:

- product behavior;
- architecture;
- dependencies;
- security;
- accessibility;
- long-term maintainability;
- the project-wide visual or interaction system.

If such a decision is required, surface the need and relevant trade-offs before treating the choice as part of the project.

When an accepted decision changes the project's current state, update the corresponding source-of-truth document.

## Scope discipline

Implement the requested task without unrelated refactors or speculative features.

Do not add backend services, persistence, authentication, libraries, abstractions or infrastructure unless the task or an accepted project decision requires them.

Prefer the simplest implementation that satisfies the documented requirements and preserves future flexibility where the project has intentionally deferred a decision.

## Engineering constraints

Follow the project-wide technical decisions and constraints defined in `docs/engineering.md`.

Do not redefine or override them locally unless the task explicitly changes an accepted engineering decision.

## Git discipline

- Preserve unrelated changes already present in the working tree.
- Do not revert or overwrite work outside the requested task.
- Do not amend existing commits unless explicitly requested.
- Do not create commits unless explicitly requested.
- Do not rewrite repository history unless explicitly requested.

## Verification

Before considering a code change complete, run the relevant project checks.

For changes that can affect the application as a whole, the expected checks are:

```bash
pnpm verify
```

`pnpm verify` is the project-wide verification entry point and should remain aligned with the current quality gates defined in `package.json`.

If a check cannot be run, state which one and why.

Do not report a task as complete while known relevant checks are failing.

## Documentation updates

Documentation should describe the current project state, not act as a development diary.

Update documentation when a change modifies a durable product, engineering or experience decision.

Do not document incidental implementation details that are already clear from the code or preserved by Git history.
