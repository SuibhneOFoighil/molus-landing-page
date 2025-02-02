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
      description: "In average savings",
      delay: 0.8
    },
    {
      title: "3x Faster",
      description: "Launches compared to traditional development",
      delay: 1.5
    }
  ]

  const platformBenefits = [
    {
      title: "Unlimited Low-Code/No-Code Tools",
      description: "Quickly prototype AI-driven features without deep dev expertise",
      color: "#12C7E0",
      delay: 1.8
    },
    {
      title: "Step-by-Step Tutorials",
      description: "Integrate AI seamlessly into your product with clear, guided lessons",
      color: "#0EE574",
      delay: 2.1
    },
    {
      title: "Community of Founders",
      description: "Connect with peers launching AI-first solutions for shared insights",
      color: "#E8990C",
      delay: 2.4
    }
  ]

  return (
    <div ref={ref}>
      {/* First Section - Black background */}
      <motion.section 
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
            <div className="hidden md:block h-px bg-white/20 w-24"></div>
            <span className="bg-white/10 px-6 py-2 rounded-full text-sm font-medium">HOW MOLUS SOLVES THIS</span>
            <div className="hidden md:block h-px bg-white/20 w-24"></div>
          </motion.div>

          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 max-w-4xl mx-auto"
          >
            MVPs in 3 Months for $15k
          </motion.h2>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-24 text-lg text-white/80"
          >
            Using our AI-driven tech stack, we build your product quickly and at a fraction of the usual cost. 
            You get to market sooner—without sacrificing quality.
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

      {/* Second Section - Grey background */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="px-6 py-24 bg-zinc-900 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 max-w-4xl mx-auto"
          >
            Free Access to Our AI-First Platform
          </motion.h2>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-24 text-lg text-white/80"
          >
            Empower your startup with ready-to-use low-code/no-code AI tools and a thriving community.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platformBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: benefit.delay, duration: 0.5 }}
                className="rounded-[24px] p-8 h-full"
                style={{ backgroundColor: benefit.color }}
              >
                <h3 className="text-[28px] font-bold mb-4 text-black">
                  {benefit.title}
                </h3>
                <p className="text-[18px] leading-relaxed text-black/80">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 2.7, duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mt-16 mb-8 text-lg text-white/80"
          >
            These resources are yours at no extra cost—because we're committed to your AI-first success.
          </motion.p>
        </div>
      </motion.section>
    </div>
  )
}

