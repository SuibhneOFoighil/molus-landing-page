'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Background } from '@/components/ui/background'

/**
 * Animation configurations for the hero section
 * fadeIn: Simple opacity animation
 * fadeUpIn: Combined fade and upward movement animation
 */
const ANIMATION_CONFIG = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  fadeUpIn: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  }
} as const

/**
 * Static content for the hero section
 * Centralized here for easy maintenance and updates
 */
const HERO_CONTENT = {
  title: "Transform your vision into reality with enterprise quality software at 20x",
  description: "Dedicated to helping founders launch softwares. Dedicated to helping founders launch softwares. Dedicated to helping founders launch softwares Dedicated to helping founders launch softwares",
  ctaText: "Apply Now to Join Our Pilot Program"
} as const

// Sub-components with clear single responsibilities
interface AnimatedComponentProps {
  isInView: boolean
}

/**
 * Main title component with fade-up animation
 */
const HeroTitle = ({ isInView }: AnimatedComponentProps) => (
  <motion.h1 
    {...ANIMATION_CONFIG.fadeUpIn}
    animate={isInView ? ANIMATION_CONFIG.fadeUpIn.animate : ANIMATION_CONFIG.fadeUpIn.initial}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-5xl mx-auto"
  >
    {HERO_CONTENT.title}
  </motion.h1>
)

/**
 * Description component with fade-up animation
 */
const HeroDescription = ({ isInView }: AnimatedComponentProps) => (
  <motion.p 
    {...ANIMATION_CONFIG.fadeUpIn}
    animate={isInView ? ANIMATION_CONFIG.fadeUpIn.animate : ANIMATION_CONFIG.fadeUpIn.initial}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
  >
    {HERO_CONTENT.description}
  </motion.p>
)

/**
 * Call-to-action button with arrow animation on hover
 */
const CtaButton = ({ isInView }: AnimatedComponentProps) => (
  <motion.div
    {...ANIMATION_CONFIG.fadeUpIn}
    animate={isInView ? ANIMATION_CONFIG.fadeUpIn.animate : ANIMATION_CONFIG.fadeUpIn.initial}
    transition={{ delay: 0.6, duration: 0.5 }}
  >
    <Button 
      asChild
      className="bg-[#e2d210] hover:bg-[#e2d210]/90 text-black font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg group"
    >
      <Link href="/apply" className="flex items-center">
        <span className="mr-2">{HERO_CONTENT.ctaText}</span>
        <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-in-out flex items-center">
          <ArrowRight className="h-5 w-5 text-black flex-shrink-0" />
        </span>
      </Link>
    </Button>
  </motion.div>
)

/**
 * Hero section component
 * Displays the main landing section with animated title, description, and CTA
 * Uses intersection observer to trigger animations when in view
 */
export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 }) // Triggers when 30% visible

  return (
    <div className="relative min-h-screen -mt-4">
      <Background />
      <motion.main 
        ref={ref}
        {...ANIMATION_CONFIG.fadeIn}
        animate={isInView ? ANIMATION_CONFIG.fadeIn.animate : ANIMATION_CONFIG.fadeIn.initial}
        className="relative flex items-center justify-center px-6 py-24 max-w-7xl mx-auto min-h-screen"
      >
        <div className="text-center space-y-8">
          <HeroTitle isInView={isInView} />
          <HeroDescription isInView={isInView} />
          <CtaButton isInView={isInView} />
        </div>
      </motion.main>
    </div>
  )
}

