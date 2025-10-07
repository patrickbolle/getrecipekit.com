# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Shopify Dawn theme customized with Tailwind CSS integration. The theme is based on Dawn v15.2.0 and includes Tailwind CSS with a `twcss-` prefix to avoid conflicts with Dawn's existing styles, Prettier formatting with Husky pre-commit hooks, and GitHub Actions for automated Tailwind compilation, theme checking, and Lighthouse performance testing.

## Development Commands

### Initial Setup
```bash
npm install
```

### Tailwind CSS Development
Run this in a separate terminal to watch for Tailwind class changes and compile CSS:
```bash
npx tailwindcss -i ./assets/app-tailwind.css -o ./assets/app.css --watch
```

### Shopify Theme Development
```bash
# Launch development server
shopify theme dev --store=mystore.myshopify.com

# Pull changes from theme editor
shopify theme pull -d

# Share theme
shopify theme share
```

### Code Formatting
Prettier runs automatically on commit via Husky. Manual formatting:
```bash
npx prettier --write "*.{js,css}"
```

### Theme Check
```bash
shopify theme check
```

## Architecture

### Theme Structure
- **Templates** (`/templates/`): JSON-based page templates defining section groups
- **Sections** (`/sections/`): Reusable Liquid components with schema settings
- **Snippets** (`/snippets/`): Smaller reusable Liquid code fragments
- **Assets** (`/assets/`): CSS, JavaScript, and image files
  - `app-tailwind.css`: Source Tailwind file
  - `app.css`: Compiled Tailwind output (auto-generated)
- **Locales** (`/locales/`): Translation files for internationalization
- **Config** (`/config/`): Theme settings schema and data

### Tailwind CSS Integration
- Uses prefix `twcss-` to avoid conflicts with Dawn styles
- Configuration in `tailwind.config.js` with custom breakpoints matching Shopify's responsive design
- Classes must have a space before Liquid tags to compile correctly:
  - ✅ `lg:!twcss-px-[32px] {% endif %}`
  - ❌ `lg:!twcss-px-[32px]{% endif %}`

### GitHub Actions Workflow
The CI pipeline (`/.github/workflows/ci.yml`) runs on every push:
1. **Tailwind CSS Update**: Automatically compiles and commits CSS changes
2. **Theme Check**: Validates Liquid syntax and theme best practices
3. **Lighthouse CI**: Performance testing (requires repository secrets)

### Key Modifications from Standard Dawn
- Default page width: 1440px (adjustable 1200px-1600px in 10px increments)
- `noindexnofollow` page template for SEO control
- Tailwind CSS with custom prefix integration
- Automated Prettier formatting on commit

## Important Notes

- Always use the `twcss-` prefix for Tailwind classes
- The `app.css` file is auto-generated - do not edit directly
- GitHub Actions automatically compile Tailwind CSS on push
- For partner dashboard access, create a separate admin user for Shopify CLI
- Workflow permissions must be set to "Read and write permissions" in GitHub repo settings