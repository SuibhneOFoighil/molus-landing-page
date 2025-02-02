'use client'

import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { handleSmoothScroll } from '@/lib/utils'

// Constants
const NAVIGATION_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Startups We\'ve Helped', href: '#startups' },
  { label: 'Pilot Program', href: '#contact' }
] as const

const ANIMATION_CONFIG = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
    delay: 0.2
  }
}

const LOGO_CONFIG = {
  src: "/images/Molus_Logo_Horizontal_White.png",
  alt: "Molus",
  width: 200,
  height: 46,
  className: "h-11 w-auto"
} as const

// Hook to handle scroll behavior
function useNavVisibility() {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return { hidden }
}

// Sub-components
const Logo = ({ onClick }: { onClick?: () => void }) => (
  <Link href="/" className="text-white" onClick={onClick}>
    <Image {...LOGO_CONFIG} alt="Molus logo" />
  </Link>
)

const DesktopNavigation = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="hidden md:flex items-center gap-8 flex-1 justify-center"
  >
    {NAVIGATION_ITEMS.map(({ label, href }) => (
      <motion.div
        key={label}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link 
          href={href}
          onClick={(e) => handleSmoothScroll(e, href)}
          className="text-white/90 hover:text-white text-base font-medium transition-colors"
        >
          {label}
        </Link>
      </motion.div>
    ))}
  </motion.div>
)

const ContactButton = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button 
      asChild
      variant="outline"
      className={`bg-transparent hover:bg-white text-white hover:text-black text-base border border-white/20 rounded-full px-6 py-2 h-auto transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      <Link 
        href="#contact"
        onClick={(e) => {
          handleSmoothScroll(e, '#contact')
          onClick?.()
        }}
      >
        Contact
      </Link>
    </Button>
  </motion.div>
)

const MobileMenu = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) => (
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
          <Logo onClick={() => setIsOpen(false)} />
          <Button variant="ghost" onClick={() => setIsOpen(false)} className="p-0 h-auto hover:bg-transparent">
            <X className="h-8 w-8 text-white" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col space-y-6 mb-auto">
          {NAVIGATION_ITEMS.map(({ label, href }) => (
            <Link 
              key={label}
              href={href}
              onClick={(e) => {
                handleSmoothScroll(e, href)
                setIsOpen(false)
              }}
              className="text-lg hover:text-white/80 transition-colors py-3 px-2 -mx-2"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="space-y-6 mt-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild
              className="w-full bg-[#e2d210] hover:bg-[#e2d210]/90 text-black font-medium px-6 py-4 text-base rounded-full transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <Link 
                href="#contact"
                onClick={(e) => {
                  handleSmoothScroll(e, '#contact')
                  setIsOpen(false)
                }}
                className="flex items-center justify-center"
              >
                <span>Join our Pilot Program</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          <ContactButton 
            className="w-full py-4 text-base" 
            onClick={() => setIsOpen(false)} 
          />
        </div>
      </motion.div>
    </SheetContent>
  </Sheet>
)

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { hidden } = useNavVisibility()

  return (
    <motion.nav 
      {...ANIMATION_CONFIG}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}
      className="fixed top-4 z-50 w-full px-6"
    >
      <div className="mx-auto max-w-7xl bg-black/90 backdrop-blur-sm rounded-full px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <DesktopNavigation />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="hidden md:block"
        >
          <ContactButton />
        </motion.div>

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </motion.nav>
  )
}

