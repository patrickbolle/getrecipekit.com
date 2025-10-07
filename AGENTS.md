# Repository Guidelines

## Project Structure & Module Organization
Core theme Liquid lives in `layout/`, `templates/`, `sections/`, and `snippets/`; move reusable blocks into sections or snippets to keep JSON lean. Tailwind sources sit in `assets/app-tailwind.css` and compile into `assets/app.css` (generated in CI—never hand-edit). Store storefront settings in `config/`, translations in `locales/`, and static media in `assets/` or `blocks/` following Dawn conventions.

## Build, Test, and Development Commands
`npm install` installs dependencies and Husky hooks. Run `npx tailwindcss -i ./assets/app-tailwind.css -o ./assets/app.css --watch` alongside Liquid edits to mirror CI output. Use `shopify theme dev --store=<store>` for live preview, and `shopify theme pull -d` to sync online-editor changes. Execute `shopify theme check` before pushing to catch Liquid or schema issues early.

## Coding Style & Naming Conventions
Prettier via `@trelliscommerce/prettier-config` enforces two-space indentation across JS and CSS; format with `npx prettier --write "**/*.{js,css}"`. Prefix every Tailwind class with `twcss-` (e.g., `twcss-flex twcss-gap-4`) to avoid global clashes. Name sections and snippets in kebab-case (`sections/featured-recipes.liquid`) and keep schema setting IDs in snake_case for consistency.

## Testing Guidelines
There is no automated test suite; rely on `shopify theme check` and manual QA in the preview store. Verify responsive breakpoints in `shopify theme dev` sessions and confirm Lighthouse scores once CI secrets are configured. Document additional manual checks in PR descriptions so reviewers can reproduce them.

## Commit & Pull Request Guidelines
Follow the existing short, scope-first commit style (`feat: add hero-block`, `ci: tailwindcss-update`) and only commit compiled CSS when Tailwind output changes. PRs should describe intent, link Shopify preview URLs or screenshots for UI work, reference related issues, and call out configuration changes such as new secrets or safelist adjustments.

## Security & Configuration Tips
Never commit shop credentials; store them as GitHub secrets like `SHOP_ACCESS_TOKEN` and `SHOP_STORE`. Keep workflow permissions at “Read and write” so automation can update compiled assets. Note any Tailwind safelist or environment variable changes in PRs to keep deploys predictable.
