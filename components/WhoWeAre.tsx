'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Linkedin } from 'lucide-react'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const teamMembers = [
  {
    name: "Jason Statham",
    role: "Lorem ipsum dolor sit amet consectetur. Diam odio in elit laoreet. Diam sit elit consectetur odio erat. Sit vestibulum ut.",
    image: "/public/images/placeholder.svg",
    linkedin: "#",
  },
  {
    name: "Kerry Miles",
    role: "Experienced product manager with a passion for AI-driven solutions. Specializes in bridging the gap between technical capabilities and market needs.",
    image: "/public/images/placeholder.svg",
    linkedin: "#",
  },
  {
    name: "Malik Berry",
    role: "Senior software engineer with expertise in scalable cloud architectures. Passionate about creating robust and efficient backend systems.",
    image: "/public/images/placeholder.svg",
    linkedin: "#",
  },
  {
    name: "Seyi Adeleke",
    role: "AI researcher and machine learning expert. Focuses on developing cutting-edge algorithms to solve complex business problems.",
    image: "/public/images/placeholder.svg",
    linkedin: "#",
  },
]

export function WhoWeAre() {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0])
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
          <span className="bg-white px-4 py-1 rounded-full text-sm font-medium">WHO WE ARE</span>
          <div className="h-px bg-black/20 w-24"></div>
        </motion.div>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 max-w-5xl mx-auto"
        >
          Dedicated to helping founders launch & scale AI-first B2B SaaS startups
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 text-lg"
        >
          Molus is a venture studio dedicated to helping founders launch and scale AI-first B2B SaaS startups. 
          We manage the entire product development lifecycle—from design to deployment—so you can focus on closing deals, 
          solving real problems, and driving innovation in your industry.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="bg-black rounded-3xl overflow-hidden lg:col-span-2 flex flex-col md:flex-row">
            <div className="p-8 md:w-1/2 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMember.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="text-[#ffda00] h-6 w-6" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">{selectedMember.name}</h3>
                  <p className="text-white/80 mb-6">{selectedMember.role}</p>
                  <Link href={selectedMember.linkedin} className="text-white/60 hover:text-white">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </motion.div>
              </AnimatePresence>
              <div className="space-y-4 mt-8">
                {teamMembers.map((member) => (
                  <motion.button
                    key={member.name}
                    onClick={() => setSelectedMember(member)}
                    className={`text-left w-full ${
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
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember.name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:w-1/2"
              >
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

