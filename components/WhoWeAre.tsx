'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Linkedin, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const teamMembers = [
  {
    name: "Suibhne Ó Foighil",
    role: "Tech Lead and Founder of Molus",
    image: "/images/suibhne.jpeg",
    linkedin: "https://www.linkedin.com/in/suibhneofoighil/",
  },
  {
    name: "Tejas & Akhila",
    role: "Design Leads and Co-Founders of WhatifDesign",
    image: "/images/whatifdesign-team.jpeg",
    linkedin: "https://www.linkedin.com/company/whatifdesign",
    website: "https://www.whatifdesign.co/",
  },
  {
    name: "Moses Lee",
    role: "Lead Business Advisor",
    image: "/images/moseslee.jpeg",
    linkedin: "https://www.linkedin.com/in/mosesklee/",
  },
]

export function WhoWeAre() {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [dragStart, setDragStart] = useState(0)

  const handleDragStart = (event: TouchEvent | MouseEvent) => {
    if ('touches' in event) {
      setDragStart(event.touches[0].pageX)
    } else {
      setDragStart(event.pageX)
    }
  }

  const handleDragEnd = (event: TouchEvent | MouseEvent) => {
    const dragEnd = 'changedTouches' in event 
      ? event.changedTouches[0].pageX 
      : event.pageX
    const diff = dragStart - dragEnd
    const threshold = 50 // minimum distance for swipe

    if (Math.abs(diff) > threshold) {
      const currentIndex = teamMembers.findIndex(member => member.name === selectedMember.name)
      if (diff > 0 && currentIndex < teamMembers.length - 1) {
        // Swipe left
        setSelectedMember(teamMembers[currentIndex + 1])
      } else if (diff < 0 && currentIndex > 0) {
        // Swipe right
        setSelectedMember(teamMembers[currentIndex - 1])
      }
    }
  }

  const navigateTeam = (direction: 'prev' | 'next') => {
    const currentIndex = teamMembers.findIndex(member => member.name === selectedMember.name)
    if (direction === 'prev' && currentIndex > 0) {
      setSelectedMember(teamMembers[currentIndex - 1])
    } else if (direction === 'next' && currentIndex < teamMembers.length - 1) {
      setSelectedMember(teamMembers[currentIndex + 1])
    }
  }

  return (
    <motion.section 
      id="about"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-16 md:py-24 bg-[#ffda00]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-12 md:mb-16"
        >
          <div className="hidden md:block h-px bg-black/20 w-24"></div>
          <span className="bg-white px-6 py-2 rounded-full text-sm font-medium">WHO WE ARE</span>
          <div className="hidden md:block h-px bg-black/20 w-24"></div>
        </motion.div>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 max-w-5xl mx-auto"
        >
          Dedicated to helping founders launch & scale AI-driven B2B SaaS
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16 text-base md:text-lg"
        >
          We&apos;re a venture studio dedicated to helping founders launch and scale AI-driven B2B SaaS. 
          By managing the entire development lifecycle—from design to deployment—we let you focus on closing deals, 
          solving real problems, and driving innovation.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="grid grid-cols-1 gap-8"
        >
          <div 
            className="bg-black rounded-3xl overflow-hidden flex flex-col md:flex-row relative"
            style={{ maxHeight: '600px' }}
          >
            <div 
              className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between"
              onTouchStart={(e) => handleDragStart(e.nativeEvent)}
              onTouchEnd={(e) => handleDragEnd(e.nativeEvent)}
              onMouseDown={(e) => handleDragStart(e.nativeEvent)}
              onMouseUp={(e) => handleDragEnd(e.nativeEvent)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMember.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="text-[#ffda00] h-6 w-6" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">{selectedMember.name}</h3>
                  <p className="text-white/80 mb-6">{selectedMember.role}</p>
                  <div className="flex items-center gap-4">
                    <Link href={selectedMember.linkedin} className="text-white/60 hover:text-white">
                      <Linkedin className="h-6 w-6" />
                    </Link>
                    {selectedMember.website && (
                      <Link href={selectedMember.website} className="text-white/60 hover:text-white">
                        <Globe className="h-6 w-6" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Mobile Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6 md:hidden">
                {teamMembers.map((member) => (
                  <button
                    key={member.name}
                    onClick={() => setSelectedMember(member)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      selectedMember.name === member.name ? 'bg-[#ffda00] w-4' : 'bg-white/30'
                    }`}
                    aria-label={`Select ${member.name}`}
                  />
                ))}
              </div>

              {/* Desktop Team Member List */}
              <div className="hidden md:flex flex-col space-y-4 mt-8">
                {teamMembers.map((member) => (
                  <motion.button
                    key={member.name}
                    onClick={() => setSelectedMember(member)}
                    className={`text-left ${
                      selectedMember.name === member.name
                        ? 'text-white font-bold'
                        : 'text-[#8f96a3] hover:text-white/80'
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {member.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
              <button
                onClick={() => navigateTeam('prev')}
                className={`p-2 rounded-full bg-black/50 backdrop-blur-sm pointer-events-auto transition-opacity ${
                  teamMembers[0].name === selectedMember.name ? 'opacity-0' : 'opacity-100'
                }`}
                disabled={teamMembers[0].name === selectedMember.name}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigateTeam('next')}
                className={`p-2 rounded-full bg-black/50 backdrop-blur-sm pointer-events-auto transition-opacity ${
                  teamMembers[teamMembers.length - 1].name === selectedMember.name ? 'opacity-0' : 'opacity-100'
                }`}
                disabled={teamMembers[teamMembers.length - 1].name === selectedMember.name}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:w-1/2 h-[360px] md:h-[600px]"
              >
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

