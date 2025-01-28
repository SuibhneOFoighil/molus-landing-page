'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'

interface StatCardProps {
  title: string
  description: string
  delay: number
  isInView: boolean
}

function StatCard({ title, description, delay, isInView }: StatCardProps) {
  return (
    <div className="relative flex-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
        transition={{ delay, duration: 0.4 }}
        className="flex items-start gap-4 group"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ delay, duration: 0.3, type: "spring", stiffness: 200 }}
          className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ffda00] flex-shrink-0"
        >
          <Check className="w-4 h-4 text-black" strokeWidth={2.5} />
        </motion.div>
        <div className="space-y-2">
          <h3 className="text-4xl md:text-5xl font-bold transition-colors duration-200 group-hover:text-[#e2d210]">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: delay + 0.3, duration: 0.4 }}
        className="absolute -bottom-4 left-0 right-4 h-1 bg-[#e2d210] origin-left transform transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  )
}

export function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    {
      title: "$50,000+",
      description: "In savings for our clients",
      delay: 0.8
    },
    {
      title: "3x Faster",
      description: "Launch of MVPs compared to traditional development approaches",
      delay: 1.5
    }
  ]

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-24 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="h-px bg-white/20 w-24"></div>
          <span className="bg-white/10 px-4 py-1 rounded-full text-sm font-medium">HOW MOLUS SOLVES THIS</span>
          <div className="h-px bg-white/20 w-24"></div>
        </motion.div>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 max-w-4xl mx-auto"
        >
          We deliver MVPs in just 3 months for $15k using our proprietary AI-powered tech stack
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-24 text-lg text-white/80"
        >
          This drastically reduces costs and accelerates time-to-market, ensuring your software is ready to scale without compromise.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              description={stat.description}
              delay={stat.delay}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

