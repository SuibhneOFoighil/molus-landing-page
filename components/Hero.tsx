'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Background } from '@/components/ui/background'
import { handleSmoothScroll } from '@/lib/utils'

/**
 * Animation configurations for the hero section
 * fadeIn: Simple opacity animation
 * fadeUpIn: Combined fade and upward movement animation
 * textReveal: Text reveal animation
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
  },
  textReveal: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] }
  }
} as const

/**
 * Static content for the hero section
 * Centralized here for easy maintenance and updates
 */
const HERO_CONTENT = {
  title: "Transform Your Idea into Reality—20x Faster with AI-Powered Development",
  description: {
    prefix: "We help founders build ",
    emphasis: "enterprise-grade",
    suffix: " software at a fraction of the usual cost. Let us handle the tech so you can focus on growing your startup."
  },
  ctaText: "Join our Pilot Program"
} as const

// Sub-components with clear single responsibilities
interface AnimatedComponentProps {
  isInView: boolean
}

/**
 * Main title component with text reveal animation
 */
const HeroTitle = ({ isInView }: AnimatedComponentProps) => (
  <motion.div
    {...ANIMATION_CONFIG.textReveal}
    animate={isInView ? ANIMATION_CONFIG.textReveal.animate : ANIMATION_CONFIG.textReveal.initial}
    transition={{ delay: 0.2, duration: 0.7 }}
    className="relative"
  >
    <motion.h1 
      className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-5xl mx-auto"
      style={{ textShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
    >
      <motion.span 
        className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80 inline-block"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {HERO_CONTENT.title}
      </motion.span>
    </motion.h1>
  </motion.div>
)

/**
 * Description component with text reveal animation
 */
const HeroDescription = ({ isInView }: AnimatedComponentProps) => (
  <motion.p 
    {...ANIMATION_CONFIG.textReveal}
    animate={isInView ? ANIMATION_CONFIG.textReveal.animate : ANIMATION_CONFIG.textReveal.initial}
    transition={{ delay: 0.4, duration: 0.7 }}
    className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
  >
    <motion.span
      className="inline-block"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {HERO_CONTENT.description.prefix}
      <span className="relative inline-block">
        {HERO_CONTENT.description.emphasis}
        <span 
          className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-[#e2d210]/0 via-[#e2d210] to-[#e2d210]/0"
          style={{
            transform: 'translateY(2px) rotate(-1deg)',
            width: '108%',
            left: '-4%'
          }}
        />
      </span>
      {HERO_CONTENT.description.suffix}
    </motion.span>
  </motion.p>
)

/**
 * Call-to-action button with arrow animation on hover
 */
const CtaButton = ({ isInView }: AnimatedComponentProps) => (
  <motion.div
    {...ANIMATION_CONFIG.textReveal}
    animate={isInView ? ANIMATION_CONFIG.textReveal.animate : ANIMATION_CONFIG.textReveal.initial}
    transition={{ delay: 0.6, duration: 0.7 }}
    className="relative"
  >
    <Button 
      asChild
      className="bg-[#e2d210] hover:bg-[#e2d210]/90 text-black font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 group relative z-10"
    >
      <Link 
        href="#contact" 
        onClick={(e) => handleSmoothScroll(e, '#contact')}
        className="flex items-center"
      >
        <motion.span 
          className="mr-2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {HERO_CONTENT.ctaText}
        </motion.span>
        <motion.span 
          className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-in-out flex items-center"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowRight className="h-5 w-5 text-black flex-shrink-0" />
        </motion.span>
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
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative min-h-screen">
      <Background />
      <motion.main 
        ref={ref}
        {...ANIMATION_CONFIG.fadeIn}
        animate={isInView ? ANIMATION_CONFIG.fadeIn.animate : ANIMATION_CONFIG.fadeIn.initial}
        className="relative flex items-center justify-center px-6 py-24 max-w-7xl mx-auto min-h-screen pt-32 md:pt-24"
      >
        <div className="text-center space-y-12">
          <HeroTitle isInView={isInView} />
          <HeroDescription isInView={isInView} />
          <CtaButton isInView={isInView} />
        </div>
      </motion.main>
    </section>
  )
}

