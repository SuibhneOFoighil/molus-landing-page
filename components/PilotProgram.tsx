'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { RocketIcon, BellIcon, WrenchIcon } from 'lucide-react'

const benefits = [
  {
    icon: RocketIcon,
    text: "End to end MVP development in just 3 months"
  },
  {
    icon: BellIcon,
    text: "Weekly updates and real-time application access"
  },
  {
    icon: WrenchIcon,
    text: "Ongoing maintenance and support after launch"
  }
]

export function PilotProgram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-24 bg-[#ffda00]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="h-px bg-black/20 w-24"></div>
          <span className="bg-white px-4 py-1 rounded-full text-sm font-medium">SCHEDULE A FREE DEMO</span>
          <div className="h-px bg-black/20 w-24"></div>
        </motion.div>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8"
        >
          Join Our Pilot Program
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mb-16 text-xl"
        >
          What you&apos;ll get.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0, rotate: -5 }}
              animate={isInView ? { y: 0, opacity: 1, rotate: 0 } : { y: 20, opacity: 0, rotate: -5 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                y: -5,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              transition={{ 
                delay: 0.8 + index * 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              className="bg-white rounded-3xl p-8 shadow-lg cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <benefit.icon className="w-8 h-8 mb-4" />
              </motion.div>
              <p className="text-2xl font-medium transform transition-transform duration-200">{benefit.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          whileHover={{ y: -5 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 max-w-3xl mx-auto text-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Transform Your Idea Into Reality—Apply for the Pilot Program
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            We&apos;re excited to learn about your startup and explore how we can help you succeed.
          </p>
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl md:text-6xl font-bold tracking-tight">$5,000</span>
              <span className="text-xl text-gray-500">/month</span>
            </div>
            <p className="text-gray-500">
              <span className="font-medium">for 3 months</span>
              <span className="mx-2">·</span>
              <span className="font-medium">$15k total</span>
            </p>
          </div>
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/apply"
              className="inline-block bg-black text-white font-medium px-8 py-4 rounded-full text-lg hover:bg-black/90 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
            >
              Apply Now to Join Our Pilot Program
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

