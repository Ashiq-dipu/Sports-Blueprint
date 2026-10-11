# Sports Blueprint — Lovable Edition

A high-performance, athletic development web platform built and structured specifically for **[Lovable](https://lovable.dev)**.

---

## ⚡ Tech Stack & Architecture

- **Framework:** React 18 with TypeScript (`.tsx` / `.ts`)
- **Bundler:** Vite 5 with `@/*` path aliases
- **Styling:** Tailwind CSS with shadcn/ui design tokens & custom athletic animations
- **Routing:** React Router v6 (`react-router-dom`) with standard URL routes (`/about`, `/programs`, etc.)
- **State & Data:** TanStack Query (`@tanstack/react-query`)
- **UI & Icons:** Lucide React (`lucide-react`) & Radix UI primitives
- **Notifications:** Sonner Toast & Custom Athletic Badges
- **Interactions:** Canvas Confetti & Dynamic Scroll-Driven Sprint Parallax

---

## 🚀 How to Import into Lovable

1. **Push this folder to a GitHub repository:**
   ```bash
   cd loveable-app
   git init
   git add .
   git commit -m "Initial commit for Lovable"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sports-blueprint.git
   git push -u origin main
   ```
2. **Open Lovable ([lovable.dev](https://lovable.dev)):**
   - Click **"Import from GitHub"**
   - Select your repository
   - Lovable will instantly detect the TypeScript + Vite + Tailwind + shadcn configuration and load the project seamlessly!

---

## 💻 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📂 Project Structure

```
loveable-app/
├── public/                 # Transparent cutouts, backdrops, and icons
├── src/
│   ├── components/         # Modals, Navbar, Footer, and UI elements
│   ├── data/               # Athletic blueprints, training tiers, and curriculum data
│   ├── lib/                # Lovable/shadcn utilities (cn helper)
│   ├── pages/              # 14 complete athletic development modules
│   ├── App.tsx             # Route configuration & global providers
│   ├── index.css           # Tailwind base & brand design system
│   └── main.tsx            # Application entrypoint
├── components.json         # shadcn/ui configuration
├── tailwind.config.ts      # Brand color tokens (Volt #C8F31D, etc.)
├── tsconfig.json           # TypeScript configuration with @/* alias
└── vite.config.ts          # Vite configuration
```
