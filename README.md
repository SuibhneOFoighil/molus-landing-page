# Molus Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 💫 Framer Motion animations
- 📱 Fully responsive design
- ♿️ Accessible UI components with Radix UI
- 🔍 SEO optimized
- 🛠 TypeScript for type safety
- 🔄 Interactive logo carousel with hover pause
- 🎯 Smooth scroll navigation
- 🌟 Modern pill-style client showcase
- 🎨 Dynamic gradient backgrounds
- 📱 Mobile-first responsive design
- 📖 Case studies page with smooth transitions

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
/
├── app/                # Next.js app directory
│   └── casestudies/   # Case studies page
├── components/         # React components
│   ├── Hero.tsx       # Main landing section with gradient background
│   ├── Navigation.tsx # Site navigation with smooth scroll
│   ├── Background.tsx # Gradient background component
│   ├── PastClients.tsx # Client showcase with animated carousel
│   ├── WhoWeAre.tsx   # Team section with member showcase
│   ├── ContactForm.tsx # Contact form with animations
│   └── ui/            # Reusable UI components
├── lib/               # Utility functions
│   └── utils.ts       # Shared utilities like smooth scroll
├── public/            # Static assets
│   └── images/        # Image assets
└── styles/           # Global styles
```

## 🎨 Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Shadcn/UI](https://ui.shadcn.com/) - UI components
- [Radix UI](https://www.radix-ui.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons

## 💫 Component Features

### Navigation Component
- 🔄 Smooth scroll navigation to sections
- 📱 Responsive mobile menu
- 🎯 Fixed header with hide/show on scroll
- 💫 Animated transitions

### Hero Component
- 🎨 Dynamic gradient background
- 💫 Staggered fade-in animations
- 📱 Responsive text sizing
- 🔄 Interactive CTA button with smooth scroll

### PastClients Component
- 🔄 Animated logo carousel
- ⏸️ Hover-to-pause interaction
- 🎨 Grayscale-to-color transition
- 📱 Responsive column layout
- ⚡️ Performance optimized with React hooks
- 🔗 Interactive logos linking to case studies

### Case Studies Page
- 🎨 Consistent dark theme design
- 💫 Smooth animations and transitions
- 🔙 Context-aware back navigation
- 🎯 Smooth scroll to previous section
- 🌟 Dynamic icon with gradient effect

### WhoWeAre Component
- 🎯 Interactive team member showcase
- 💫 Smooth transitions between members
- 📱 Responsive grid layout
- 🎨 Modern card design

### ContactForm Component
- 💫 Animated form fields
- 🎨 Modern messaging UI preview
- 📱 Responsive layout
- ✨ Interactive submit button

The components use a column-based distribution system for logos and implement pause-on-hover functionality for better user interaction. Each component is built with accessibility and performance in mind, utilizing TypeScript for type safety and Framer Motion for smooth animations.