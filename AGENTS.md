# Repository Guidelines

## Project Structure & Module Organization

This is a Vue/Vite TypeScript project that renders static HTML content through a catalog in `src/content.ts`. Application code lives in `src/`, Vue route views live in `src/views/app/`, and academic HTML content lives in `src/views/college/`.

College notes are grouped by period and subject, for example `src/views/college/4p/banco-de-dados/`. Documentation, specs, and content standards live in `docs/`; read `docs/project-structure.md` before broad structural changes. Build output is written to `dist/` and should be treated as generated output.

## Build, Test, and Development Commands

- `npm install`: install project dependencies.
- `npm run dev`: start the Vite development server.
- `npm run typecheck`: run `vue-tsc --noEmit`.
- `npm run build`: type-check and build the Vite app into `dist/`.
- `npm run preview`: preview the production build locally.

There is no configured test script yet. Static HTML files can be opened directly in a browser, but final route validation should happen through the Vue app when content is registered in `src/content.ts`.

## Coding Style & Naming Conventions

TypeScript is compiled with `strict: true`, ESNext modules, and ES2016 output. Keep TypeScript files in `src/`, use clear camelCase names for variables and functions, and prefer small modules over large mixed-purpose files. Follow the existing quote style in nearby TypeScript files.

For HTML content, keep new filenames lowercase and hyphen-separated, such as `backup-recovery-oracle.html`. Preserve the directory taxonomy by topic and semester when adding new notes. Use semantic headings and concise markup so pages remain easy to scan and maintain.

Follow `docs/content/college-content-guidelines.md` for academic content and `docs/content/html-slide-deck-standard.md` for slide-style HTML pages. Existing files with legacy names do not need to be renamed unless the spec explicitly includes that work.

## Specification-Driven Development

Use `docs/specs/` for non-trivial changes. Start from `docs/specs/template.md`, keep specs short, and record objective, scope, affected files, acceptance criteria, validation, and decisions. Implement only the scope described by the active spec; update the spec when implementation decisions change the contract.

## Testing Guidelines

No test framework is currently configured. For now, validate code changes with `npm run typecheck` or `npm run build` depending on risk, and manually open any changed HTML pages or routes in a browser. When adding tests later, prefer colocated test files or a dedicated `tests/` directory, and name tests after the unit or page behavior they cover, for example `content.test.ts`.

## Commit & Pull Request Guidelines

This repository has no commit history yet, so there is no established project convention. Use short, imperative commit subjects such as `Add database recovery notes` or `Configure TypeScript build`. Keep each commit focused on one logical change.

Pull requests should include a brief description, affected paths, validation steps such as `npm run build`, and screenshots for visible HTML changes. Link any related issue or task when available.

## Agent-Specific Instructions

Do not edit generated `dist/` files unless the user explicitly asks for build artifacts. Keep documentation updates concise and repository-specific. Before broad restructuring, inspect the existing `src/views` organization and preserve its topic-based hierarchy.

When creating or extending academic content, use a spec in `docs/specs/`, follow the content guidelines in `docs/content/`, update `src/content.ts`, and validate with `npm run typecheck`.

## Repository Commands

- `$adicionar-materia <pedido>`: load `agents/adicionar-materia.md` and `skills/adicionar-materia/SKILL.md`, then create or extend a college subject end to end.

Example:

```text
$adicionar-materia Redes de Computadores, 5p, com uma aula sobre modelo OSI
```
