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
- 🎯 Smooth animations and transitions
- 🌟 Modern pill-style client showcase

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
/
├── app/                # Next.js app directory
├── components/         # React components
│   ├── Hero.tsx       # Main landing section
│   ├── Navigation.tsx # Site navigation
│   ├── Footer.tsx     # Site footer
│   ├── PastClients.tsx # Client showcase with animated carousel
│   └── ui/            # Reusable UI components
├── lib/               # Utility functions
├── public/            # Static assets
│   └── images/       # Image assets
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

### PastClients Component

The PastClients section showcases our client partnerships with these key features:

- 🔄 Animated logo carousel with smooth transitions
- ⏸️ Hover-to-pause interaction for better UX
- 🎨 Elegant pill-style containers with hover effects
- 📱 Responsive design with optimized mobile view
- 🖼️ Grayscale-to-color transition on hover
- ⚡️ Performance optimized with React hooks
- 🎯 Framer Motion animations for smooth transitions

The component uses a column-based distribution system for logos and implements pause-on-hover functionality for better user interaction. Each logo is displayed in a modern pill-shaped container that elevates and reveals the original logo colors on hover.