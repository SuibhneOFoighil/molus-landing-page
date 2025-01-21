'use client'

import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 z-50 w-full px-6"
    >
      <div className="mx-auto max-w-7xl bg-black/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-white text-xl font-bold flex items-center">
            <Image
              src="/public/images/placeholder.svg"
              alt="Molus logo"
              width={28}
              height={28}
              className="mr-2"
            />
            molus
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden md:flex items-center gap-8 flex-1 justify-center"
        >
          {['About', 'Startups We\'ve Helped', 'Pilot Program'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Desktop CTA Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="hidden md:block"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild
              variant="outline"
              className="bg-transparent hover:bg-white text-white hover:text-black text-sm border border-white/20 rounded-full px-5 py-1.5 h-auto transition-all duration-300"
            >
              <Link href="/contact">
                Contact
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
              <Menu className="h-10 w-10 text-white stroke-[3]" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md p-0">
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col h-full bg-black text-white p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="text-xl font-bold flex items-center" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/public/images/placeholder.svg"
                    alt="Molus logo"
                    width={28}
                    height={28}
                    className="mr-2"
                  />
                  molus
                </Link>
                <Button variant="ghost" onClick={() => setIsOpen(false)} className="p-0 h-auto hover:bg-transparent">
                  <X className="h-8 w-8 text-white" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col space-y-6 mb-auto">
                <Link href="/about" className="text-lg hover:text-white/80 transition-colors" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/startups" className="text-lg hover:text-white/80 transition-colors" onClick={() => setIsOpen(false)}>
                  Startups We've Helped
                </Link>
                <Link href="/pilot" className="text-lg hover:text-white/80 transition-colors" onClick={() => setIsOpen(false)}>
                  Pilot Program
                </Link>
              </nav>
              <div className="space-y-4 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild
                    className="w-full bg-[#e2d210] hover:bg-[#e2d210]/90 text-black font-medium px-6 py-3 text-sm rounded-full transition-all duration-300 hover:shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/apply" className="flex items-center justify-center">
                      <span>Apply Now to Join Our Pilot Program</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full bg-transparent hover:bg-white text-white hover:text-black text-sm border border-white/20 rounded-full px-6 py-3 transition-all duration-300 hover:shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/contact">
                      Contact
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}

