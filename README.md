# Apex Ridge Roofing 🏠

A modern, fully responsive roofing company website built with React, TypeScript, and Tailwind CSS v4.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)

---

## Preview

> A professional roofing business website featuring smooth scroll animations,
> a before/after image slider, filterable project portfolio, contact form,
> and a fully responsive layout.

---

## Pages

| Page | Description |
|------|-------------|
| `/` | Hero, stats, services overview, why choose us, testimonials, CTA |
| `/about` | Mission, values, certifications, timeline, team |
| `/services` | Detailed service breakdowns, process steps, warranty info |
| `/projects` | Before/after slider, filterable project portfolio |
| `/contact` | Contact form, info sidebar, service area map, trust section |

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [React Router v6](https://reactrouter.com) | Client-side routing |
| [Framer Motion](https://framer.com/motion) | Scroll animations |
| [Lucide React](https://lucide.dev) | Icons |

---

## Features

- ⚡ Lightning-fast Vite build
- 🎨 Custom design system with navy, orange, and charcoal palette
- 📱 Fully responsive — mobile, tablet, desktop
- 🎭 Smooth scroll-triggered animations via Framer Motion
- 🖼️ Interactive before/after image slider with touch support
- 🔍 Filterable project portfolio by category
- 📋 Contact form with validation and success state
- 🗺️ Service area section with region color coding
- 🌙 Custom scrollbar styling
- ♿ Accessible — semantic HTML, aria labels, keyboard nav
- 🚀 SEO-friendly structure

---

## Getting Started

### Prerequisites

- Node.js **18+**
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/apex-ridge-roofing.git

# 2. Navigate into the project
cd apex-ridge-roofing

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
The app will be running at http://localhost:5173

Project Structure
text

apex-ridge-roofing/
├── public/
│   ├── hero-roofing.jpg
│   ├── about-team.jpg
│   ├── residential-roof.jpg
│   ├── commercial-roofing.jpg
│   ├── before-roof.jpg
│   └── after-roof.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── BeforeAfterSlider.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
Available Scripts
Bash

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type check
npm run typecheck

# Lint
npm run lint
Images
Place the following images in the /public folder:

File	Used In
hero-roofing.jpg	Home hero background
about-team.jpg	About & Home sections
residential-roof.jpg	Services & Projects
commercial-roofing.jpg	Services & Projects
before-roof.jpg	Before/after slider
after-roof.jpg	Before/after slider
Tip: Use high-quality images from Unsplash or
Pexels while prototyping.

Customization
Colors
Edit the theme variables in src/index.css:

CSS

@theme {
  --color-navy-900: #0a192f;
  --color-orange-500: #e8751a;
  --color-orange-400: #f09030;
  /* ... */
}
Fonts
The project uses Outfit (headings) and Inter (body).
To change fonts, update the @theme block in index.css and
the <link> tags in index.html.

Content
All page content is defined as arrays at the top of each page file —
no CMS required. Just edit the data directly:

TypeScript

// src/pages/Home.tsx
const stats = [
  { value: '2,500+', label: 'Projects Completed' },
  { value: '18+',    label: 'Years Experience' },
  // ...
];
Deployment
Vercel (Recommended)
Bash

# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
Or connect your GitHub repo at vercel.com for automatic deployments
on every push.

Netlify
Bash

# Build the project
npm run build

# Drag and drop the /dist folder at netlify.com
<!-- gitpulse:contribution index="1" timestamp="2026-06-10" -->
<!-- gitpulse:contribution index="2" timestamp="2026-06-10" -->
<!-- gitpulse:contribution index="3" timestamp="2026-06-10" -->
<!-- gitpulse:contribution index="4" timestamp="2026-06-10" -->