# Frontend Developer Guide

## Styling Conventions
We utilize **Tailwind CSS** for all styling.
- Avoid writing custom CSS in `globals.css` unless absolutely necessary.
- We have extended the Tailwind config with custom brand colors. Use `bg-aegis-brand`, `text-aegis-dark`, and `text-aegis-accent` to maintain brand consistency.

## Adding a New Page
1. Create a new `.tsx` file in the `src/pages/` directory. Next.js will automatically route it.
2. Ensure you wrap the page content appropriately and import necessary components.