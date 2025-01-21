'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'

interface Logo {
  name: string
  id: number
  src: string
}

const logos: Logo[] = [
  { name: "RxPlora", id: 1, src: "images/rxplora_logo.png" },
  { name: "M12 Planner", id: 2, src: "images/m12_logo.png" },
  { name: "Ludus Cloud", id: 3, src: "images/ludus_logo.png" },
  { name: "Spark", id: 4, src: "images/spark_logo.png" },
  { name: "DATA at NSF", id: 5, src: "images/nsf_logo.png" },
  { name: "DATA at University of Michigan", id: 6, src: "images/umich_logo.png" }
]

const ANIMATION_CONFIG = {
  fadeUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  },
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 1,
    bounce: 0.2,
    duration: 0.5,
  }
} as const

const SectionHeader = ({ isInView }: { isInView: boolean }) => (
  <>
    <motion.div 
      initial={ANIMATION_CONFIG.fadeUp.initial}
      animate={isInView ? ANIMATION_CONFIG.fadeUp.animate : ANIMATION_CONFIG.fadeUp.initial}
      transition={{ delay: 0.2, ...ANIMATION_CONFIG.fadeUp.transition }}
      className="flex items-center justify-center gap-4 mb-8"
    >
      <div className="h-px bg-black/20 w-24" />
      <span className="bg-[#e2d210] px-4 py-1 rounded-full text-sm font-medium">PAST CLIENTS</span>
      <div className="h-px bg-black/20 w-24" />
    </motion.div>
    
    <motion.div 
      initial={{ scale: 0, rotate: -45 }}
      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
      transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 200 }}
      className="flex justify-center mb-8"
    >
      <img 
        src="/images/victory.svg" 
        alt="Victory laurel"
        className="w-24 h-24 md:w-32 md:h-32 text-black/80"
      />
    </motion.div>

    <motion.h2 
      initial={ANIMATION_CONFIG.fadeUp.initial}
      animate={isInView ? ANIMATION_CONFIG.fadeUp.animate : ANIMATION_CONFIG.fadeUp.initial}
      transition={{ delay: 0.6, ...ANIMATION_CONFIG.fadeUp.transition }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
    >
      Startups we&apos;ve partnered with
    </motion.h2>
    
    <motion.p 
      initial={ANIMATION_CONFIG.fadeUp.initial}
      animate={isInView ? ANIMATION_CONFIG.fadeUp.animate : ANIMATION_CONFIG.fadeUp.initial}
      transition={{ delay: 0.8, ...ANIMATION_CONFIG.fadeUp.transition }}
      className="text-[#50555e] text-lg md:text-xl text-center max-w-3xl mx-auto mb-16"
    >
      We&apos;ve built core applications and AI modules that empower startups to innovate and grow.
    </motion.p>
  </>
)

const LogoColumn = ({ 
  logos, 
  index, 
  currentTime, 
  onHover 
}: { 
  logos: Logo[]
  index: number
  currentTime: number
  onHover: (paused: boolean) => void
}) => {
  const cycleInterval = 2000
  const columnDelay = index * 200
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
  const currentIndex = Math.floor(adjustedTime / cycleInterval) % logos.length
  const currentLogo = logos[currentIndex] || logos[0]

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, ...ANIMATION_CONFIG.fadeUp.transition }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="group bg-[#fffdf0] rounded-full px-12 py-6 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-out cursor-pointer"
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
          initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
          animate={{
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: ANIMATION_CONFIG.spring,
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            filter: "blur(6px)",
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.3,
            },
          }}
        >
          <div className="flex items-center justify-center">
            <img 
              src={currentLogo.src || "/public/images/placeholder.svg"} 
              alt={currentLogo.name}
              className="h-16 w-40 object-contain md:h-20 md:w-56 grayscale brightness-50 contrast-125 transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = [...allLogos].sort(() => Math.random() - 0.5)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])
  
  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...columns.map(col => col.length))
  columns.forEach(col => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

export function PastClients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const updateTime = useCallback(() => {
    if (!isPaused) {
      setCurrentTime(prev => prev + 100)
    }
  }, [isPaused])

  useEffect(() => {
    setLogoSets(distributeLogos(logos, 3))
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={ANIMATION_CONFIG.fadeUp.transition}
      className="px-6 py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader isInView={isInView} />

        <motion.div 
          initial={ANIMATION_CONFIG.fadeUp.initial}
          animate={isInView ? ANIMATION_CONFIG.fadeUp.animate : ANIMATION_CONFIG.fadeUp.initial}
          transition={{ delay: 1, ...ANIMATION_CONFIG.fadeUp.transition }}
          className="flex justify-center items-center gap-8"
        >
          {logoSets.map((logos, index) => (
            <LogoColumn
              key={index}
              logos={logos}
              index={index}
              currentTime={currentTime}
              onHover={setIsPaused}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

