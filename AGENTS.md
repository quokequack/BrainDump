# Repository Guidelines

## Project Structure & Module Organization

This is a small TypeScript project with static HTML views. Source files live in `src/`; the TypeScript entry point is `src/index.ts`. HTML pages are organized under `src/views/`, with college notes grouped by course path, for example `src/views/college/4p/banco-de-dados/`. TypeScript build output is written to `dist/` by the compiler and should be treated as generated output.

## Build, Test, and Development Commands

- `npm install`: install the TypeScript development dependency.
- `npm run build`: run `tsc` and compile `src/**/*.ts` into `dist/`.
- `npx tsc --noEmit`: type-check without writing compiled files; useful before opening a pull request.

There is no configured local server or test script yet. Static HTML files can be opened directly in a browser unless future code adds runtime dependencies.

## Coding Style & Naming Conventions

TypeScript is compiled with `strict: true`, CommonJS modules, and ES2016 output. Keep TypeScript files in `src/`, use clear camelCase names for variables and functions, and prefer small modules over large mixed-purpose files. Follow the existing quote style in `src/index.ts` for TypeScript strings.

For HTML content, keep filenames lowercase and hyphen-separated, such as `backup-recovery-oracle.html`. Preserve the directory taxonomy by topic and semester when adding new notes. Use semantic headings and concise markup so pages remain easy to scan and maintain.

## Testing Guidelines

No test framework is currently configured. For now, validate changes with `npm run build` and manually open any changed HTML pages in a browser. When adding tests later, prefer colocated test files or a dedicated `tests/` directory, and name tests after the unit or page behavior they cover, for example `index.test.ts`.

## Commit & Pull Request Guidelines

This repository has no commit history yet, so there is no established project convention. Use short, imperative commit subjects such as `Add database recovery notes` or `Configure TypeScript build`. Keep each commit focused on one logical change.

Pull requests should include a brief description, affected paths, validation steps such as `npm run build`, and screenshots for visible HTML changes. Link any related issue or task when available.

## Agent-Specific Instructions

Do not edit generated `dist/` files unless the user explicitly asks for build artifacts. Keep documentation updates concise and repository-specific. Before broad restructuring, inspect the existing `src/views` organization and preserve its topic-based hierarchy.
