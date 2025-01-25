'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "../../components/ui/button"
import { ArrowLeft, FileText } from 'lucide-react'
import { handleSmoothScroll } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function CaseStudies() {
  const router = useRouter()

  const handleBackClick = () => {
    router.push('/')
    // Small delay to ensure we're back on the home page before scrolling
    setTimeout(() => {
      const element = document.getElementById('startups')
      if (element) {
        const offset = 80 // Account for fixed header
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 mx-auto mb-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#e2d210] to-white opacity-20 rounded-full blur-xl" />
          <FileText className="w-full h-full text-white opacity-80" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Case Studies Coming Soon
        </h1>
        
        <p className="text-lg text-white/80 mb-12">
          We're currently crafting detailed case studies of our successful projects.
          Check back soon to learn more about our work and impact.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center"
        >
          <Button 
            onClick={handleBackClick}
            variant="outline"
            className="bg-transparent hover:bg-white text-white hover:text-black border border-white/20 rounded-full px-6 py-6 h-auto transition-all duration-300 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
} 