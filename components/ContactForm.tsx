'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface FormData {
  name: string;
  email: string;
  company: string;
  description: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.message || 'Failed to send email')

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you soon.'
      })
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        description: ''
      })
    } catch (error) {
      console.error('Error:', error)
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const formFields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'company', label: 'Company Name', type: 'text' },
  ]

  const messages = [
    { 
      color: '#ed3e4b', 
      position: 'left',
      image: '/images/chat1.png',
      alt: 'Business professional in a suit'
    },
    { 
      color: '#12c7e0', 
      position: 'right',
      image: '/images/chat2.png',
      alt: 'Tech professional with laptop'
    },
    { 
      color: '#0ee574', 
      position: 'left',
      image: '/images/chat3.png',
      alt: 'Business professional in office'
    },
  ]

  return (
    <motion.section 
      id="contact"
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
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Let's Build Together
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-black/80 max-w-lg mx-auto"
          >
            Your idea deserves to make an impact. Contact us to start building today.
          </motion.p>
        </div>

        <div className="bg-black rounded-3xl p-6 md:p-8 mb-12">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ x: message.position === 'left' ? -50 : 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: message.position === 'left' ? -50 : 50, opacity: 0 }}
              transition={{ delay: 0.6 + (index * 0.2), duration: 0.5 }}
              className={`flex items-center gap-4 mb-8 last:mb-0 ${message.position === 'right' ? 'justify-end' : ''}`}
            >
              {message.position === 'left' && (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 bg-white/10">
                  <Image
                    src={message.image}
                    alt={message.alt}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div 
                className={`rounded-2xl p-4 flex-1`}
                style={{ backgroundColor: message.color }}
              >
                <div className="w-full h-3 bg-white/20 rounded-full"></div>
                <div className="w-4/5 h-2 bg-white/20 rounded-full mt-3"></div>
              </div>
              {message.position === 'right' && (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 bg-white/10">
                  <Image
                    src={message.image}
                    alt={message.alt}
                    width={48}
                    height={48}
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
          {formStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg text-center ${
                formStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800' 
                  : 'bg-red-50 text-red-800'
              }`}
            >
              {formStatus.message}
            </motion.div>
          )}

          {formFields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
            >
              <Input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                value={formData[field.name as keyof FormData]}
                onChange={handleInputChange}
                required
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
              name="description"
              placeholder="Brief Description of Your Idea"
              value={formData.description}
              onChange={handleInputChange}
              required
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
                disabled={isSubmitting}
                className="w-full bg-[#e2d210] hover:bg-[#e2d210]/90 text-black font-medium p-4 rounded-full text-base transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </Button>
            </motion.div>
            
            <p className="text-center text-sm text-black/60">
              Prefer email? Reach us at{' '}
              <a href="mailto:apply@molus.app" className="text-black hover:text-[#e2d210] transition-colors duration-300">
                apply@molus.app
              </a>
            </p>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  )
}

