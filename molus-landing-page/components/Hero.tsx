'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.main 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-6 py-24 max-w-7xl mx-auto"
    >
      <div className="text-center space-y-8">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-5xl mx-auto"
        >
          Transform your vision into reality with enterprise quality software at 20x
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Dedicated to helping founders launch softwares. Dedicated to helping founders launch softwares. 
          Dedicated to helping founders launch softwares Dedicated to helping founders launch softwares
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button 
            asChild
            className="bg-[#e2d210] hover:bg-[#e2d210]/90 text-black font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg group"
          >
            <Link href="/apply" className="flex items-center">
              <span className="mr-2">Apply Now to Join Our Pilot Program</span>
              <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-in-out flex items-center">
                <ArrowRight className="h-5 w-5 text-black flex-shrink-0" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.main>
  )
}

