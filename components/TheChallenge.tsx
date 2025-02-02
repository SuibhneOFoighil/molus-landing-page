'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: "Our MVP cost $150,000, nearly derailing our startup before launch...",
    name: "Sarah Kelsy",
    title: "CEO, CloudData",
    color: "#12c7e0",
    rotate: "rotate-[-4deg]"
  },
  {
    quote: "We faced $200,000 software costs, almost shelving our idea...",
    name: "Jeremy Tulin",
    title: "CEO, Razerpath",
    color: "#e8990c",
    rotate: "rotate-[2deg]"
  },
  {
    quote: "Development expenses exceeded two years of operating costs, delaying our launch...",
    name: "Mercy Agnes",
    title: "CEO CloudData",
    color: "#0ee574",
    rotate: "rotate-[-2deg]"
  },
  {
    quote: "Our MVP cost $150,000, nearly derailing our startup before launch...",
    name: "Kamal Chase",
    title: "CEO CloudData",
    color: "#e2d210",
    rotate: "rotate-[4deg]"
  }
]

export function TheChallenge() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const rotations = [3, -4, 2, -3] // Desktop rotations

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Increased delay between cards (was 0.15)
        delayChildren: 0.3,   // Initial delay
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: rotations[index],
      transition: {
        duration: 0.5,
        ease: [0.23, 1.12, 0.25, 1], // Spring-like easing
        opacity: { duration: 0.4 },
      }
    })
  }

  // Modified hover animation for card-like feel
  const hoverAnimation = {
    scale: 1.05,
    y: -5,
    zIndex: 10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-24 bg-[#fec5c9]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="hidden md:block h-px bg-black/20 w-24"></div>
          <span className="bg-white px-6 py-2 rounded-full text-sm font-medium">THE CHALLENGE</span>
          <div className="hidden md:block h-px bg-black/20 w-24"></div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 max-w-4xl mx-auto">
          Building software often costs $100k–$200k
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-16 text-lg">
          Without in-house technical expertise, many founders find it impossible to secure affordable, high-quality development. 
          This can derail promising ideas before they ever go to market.
        </p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative"
        >
          {/* Mobile and Tablet Layout */}
          <div className="xl:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className="transform"
                  style={{
                    position: 'relative',
                    top: `${index % 2 === 0 ? -5 : 5}px`,
                  }}
                >
                  <motion.div
                    className="rounded-3xl p-6 shadow-lg h-full"
                    style={{ backgroundColor: testimonial.color }}
                    whileHover={hoverAnimation}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.p 
                      className="text-black text-lg font-medium mb-8"
                      whileHover={{ scale: 1.02 }}
                    >
                      {testimonial.quote}
                    </motion.p>
                    <motion.div 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-black/40"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-black">{testimonial.name}</h3>
                        <p className="text-sm text-black/80">{testimonial.title}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden xl:flex xl:gap-0 xl:justify-center xl:items-center xl:-mx-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                className="transform w-[320px] -ml-4 first:ml-0"
                style={{
                  position: 'relative',
                  top: `${index % 2 === 0 ? -10 : 10}px`,
                  zIndex: index === 0 ? 4 : 4 - index
                }}
              >
                <motion.div
                  className="rounded-3xl p-6 shadow-lg h-full"
                  style={{ backgroundColor: testimonial.color }}
                  whileHover={hoverAnimation}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.p 
                    className="text-black text-lg font-medium mb-8"
                    whileHover={{ scale: 1.02 }}
                  >
                    {testimonial.quote}
                  </motion.p>
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-black/40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-black">{testimonial.name}</h3>
                      <p className="text-sm text-black/80">{testimonial.title}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

