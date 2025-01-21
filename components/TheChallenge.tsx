'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: "Our MVP cost $150,000, nearly derailing our startup before launch...",
    name: "Sarah Kelsy",
    title: "CEO, CloudData",
    image: "/images/placeholder.svg",
    color: "#12c7e0",
    rotate: "rotate-[-4deg]"
  },
  {
    quote: "We faced $200,000 software costs, almost shelving our idea...",
    name: "Jeremy Tulin",
    title: "CEO, Razerpath",
    image: "/images/placeholder.svg",
    color: "#e8990c",
    rotate: "rotate-[2deg]"
  },
  {
    quote: "Development expenses exceeded two years of operating costs, delaying our launch...",
    name: "Mercy Agnes",
    title: "CEO CloudData",
    image: "/images/placeholder.svg",
    color: "#0ee574",
    rotate: "rotate-[-2deg]"
  },
  {
    quote: "Our MVP cost $150,000, nearly derailing our startup before launch...",
    name: "Kamal Chase",
    title: "CEO CloudData",
    image: "/images/placeholder.svg",
    color: "#e2d210",
    rotate: "rotate-[4deg]"
  }
]

export function TheChallenge() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
          <div className="h-px bg-black/20 w-24"></div>
          <span className="bg-white px-4 py-1 rounded-full text-sm font-medium">THE CHALLENGE</span>
          <div className="h-px bg-black/20 w-24"></div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 max-w-4xl mx-auto">
          Building software is prohibitively expensive, with costs ranging from $100k–$200k
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-16 text-lg">
          Without technical expertise, many founders struggle to find affordable, high-quality development options. 
          For many, this creates a dead end before their vision has a chance to succeed.
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className={`transform ${testimonial.rotate} transition-transform`}
            >
              <motion.div
                className="rounded-3xl p-6 h-full flex flex-col justify-between shadow-lg"
                style={{ backgroundColor: testimonial.color }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3 }
                }}
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
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-black">{testimonial.name}</h3>
                    <p className="text-sm text-black/80">{testimonial.title}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

