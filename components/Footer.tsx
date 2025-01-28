'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin } from 'lucide-react'

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.footer 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-black text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[200%] aspect-[809/861]">
              <Image
                src="/images/Molus_Logo_Horizontal_White.png"
                alt="Molus background"
                fill
                className="opacity-[0.03] object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="py-16 space-y-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/Molus_Logo_Horizontal_White.png"
              alt="Molus logo"
              width={200}
              height={46}
              className="h-11 w-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-1 text-white/60"
          >
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Velit morbi dolor risus mauris ut lacus vitae.</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white/60 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="py-6 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              Copyright © 2024 Molus. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8">
              {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#"
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

