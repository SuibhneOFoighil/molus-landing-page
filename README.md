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
│   ├── casestudies/   # Case studies page
│   ├── fonts/         # Font configuration
│   ├── fonts.ts       # Font imports
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/         # React components
│   ├── Hero.tsx       # Main landing section
│   ├── Navigation.tsx # Site navigation
│   ├── PastClients.tsx # Client showcase
│   ├── PilotProgram.tsx # Pilot program section
│   ├── Solution.tsx    # Solution showcase
│   ├── TheChallenge.tsx # Challenge section
│   ├── WhoWeAre.tsx    # Team section
│   ├── ContactForm.tsx # Contact form
│   ├── Footer.tsx     # Site footer
│   └── ui/            # Reusable UI components
├── lib/               # Utility functions
│   └── utils.ts       # Shared utilities
├── public/            # Static assets
│   └── images/        # Image assets
└── config/            # Configuration files
    ├── next.config.mjs     # Next.js config
    ├── tailwind.config.ts  # Tailwind config
    ├── postcss.config.mjs  # PostCSS config
    └── components.json     # UI components config
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
```typescript
interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  website?: string;
}
```

**Key Dependencies:**
- framer-motion: Handles animations and transitions
- lucide-react: Provides LinkedIn and Globe icons
- next/image: Optimized image handling

**State Management:**
- Uses useState for selected team member tracking
- useInView hook for scroll-based animations

**Implementation Notes:**
- AnimatePresence manages mount/unmount transitions
- Image dimensions standardized to 600x600px
- Mobile-first responsive layout using Tailwind breakpoints
- Social links support both LinkedIn and optional website URLs

**Usage Example:**
```tsx
<WhoWeAre />  // No props required - team data is internal
```

**Key Files:**
- components/WhoWeAre.tsx - Main component
- public/images/* - Team member images (600x600px recommended)

### ContactForm Component
- 💫 Animated form fields
- 🎨 Modern messaging UI preview
- 📱 Responsive layout
- ✨ Interactive submit button

The components use a column-based distribution system for logos and implement pause-on-hover functionality for better user interaction. Each component is built with accessibility and performance in mind, utilizing TypeScript for type safety and Framer Motion for smooth animations.