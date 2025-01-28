'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function CaseStudies() {
  const handleBackClick = () => {
    window.history.back()
  }

  return (
    <main className="bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <Button
              variant="ghost"
              className="text-white hover:text-white/80 -ml-4 mb-4"
              onClick={handleBackClick}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold">
              We&apos;ve helped startups succeed
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
              voluptatum quos quidem quas nesciunt.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study Cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors duration-300"
              >
                <div className="aspect-video relative">
                  <Image
                    src={`/images/case-study-${item}.jpg`}
                    alt={`Case study ${item}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Case Study {item}</h3>
                  <p className="text-white/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptas, quod, quia, voluptates quae.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 