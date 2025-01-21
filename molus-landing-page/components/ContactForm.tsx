'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const formFields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'company', label: 'Company Name', type: 'text' },
  ]

  const messages = [
    { color: '#ed3e4b', position: 'left' },
    { color: '#12c7e0', position: 'right' },
    { color: '#0ee574', position: 'left' },
  ]

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 sm:px-6 py-12 sm:py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="max-w-xl mx-auto relative">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          Let's Build Together
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg mb-8"
        >
          Your idea deserves to make an impact. Contact us to start building today.
        </motion.p>

        <div className="bg-black rounded-3xl p-6 mb-8">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ x: message.position === 'left' ? -50 : 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: message.position === 'left' ? -50 : 50, opacity: 0 }}
              transition={{ delay: 0.6 + (index * 0.2), duration: 0.5 }}
              className={`flex items-center gap-3 mb-6 last:mb-0 ${message.position === 'right' ? 'justify-end' : ''}`}
            >
              {message.position === 'left' && (
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/public/images/placeholder.svg"
                    alt="User avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div 
                className={`rounded-2xl p-3 flex-1`}
                style={{ backgroundColor: message.color }}
              >
                <div className="w-full h-3 bg-white/20 rounded-full"></div>
                <div className="w-2/3 h-2 bg-white/20 rounded-full mt-2"></div>
              </div>
              {message.position === 'right' && (
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/public/images/placeholder.svg"
                    alt="User avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {formFields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
            >
              <Input
                type={field.type}
                placeholder={field.label}
                className="w-full p-3 bg-transparent border-b border-black/20 focus:border-black rounded-none placeholder:text-black/60 transition-colors duration-300"
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <Textarea
              placeholder="Brief Description of Your Idea"
              className="w-full p-3 bg-transparent border-b border-black/20 focus:border-black rounded-none min-h-[100px] placeholder:text-black/60 transition-colors duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit"
                className="w-full bg-[#e2d210] hover:bg-[#e2d210]/90 text-black font-medium p-4 rounded-full text-base transition-all duration-300"
              >
                Submit
              </Button>
            </motion.div>
            
            <p className="text-center text-sm text-black/60">
              Prefer email? Reach us at{' '}
              <a href="mailto:info@molus.app" className="text-black hover:text-[#e2d210] transition-colors duration-300">
                info@molus.app
              </a>
            </p>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  )
}

