# Gemini Assistant Instructions for Portfolio Project

## Architecture & Structure
This project is built using React + TypeScript + Vite. It is designed to be purely static and hosted on GitHub Pages. The architecture should be clean, modular, and maintainable, adhering to senior software engineering standards.

### Directory Structure
* `src/components/ui/`: Reusable, purely presentational UI components (e.g., `Badge`, `Card`, `Section`). These should have no business logic and no hardcoded data.
* `src/components/sections/`: Domain-specific components that make up the page layout (e.g., `HeroSection`, `ExperienceSection`, `SkillsSection`).
* `src/data/`: Static data representing the CV/Resume (`resumeData.ts`). By keeping data completely separate from components, the components remain pure and testable.
* `src/types/`: TypeScript interfaces and types representing the domain models (e.g., `Experience`, `Skill`).

### Styling Principles
* Use purely Vanilla CSS (via CSS Modules or a well-structured `index.css`).
* Define global CSS variables in `:root` for colors, spacing, and fonts to ensure a cohesive design system (Dark Mode Tech Startup Aesthetic).
* Avoid inline styles.
* Avoid Tailwind unless the user explicitly requests it.

### Testing Strategy
* Tests are written using `vitest` and `@testing-library/react`.
* Core UI components must be tested for rendering and accessibility.
* Ensure data components gracefully handle empty states.

### Maintenance
* Whenever a new component or feature is added, ensure the structure remains strictly component-based.
* Keep this `GEMINI.md` file updated if major architectural patterns change.
