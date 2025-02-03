'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Construction } from 'lucide-react'

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
          </div>

          {/* Under Construction Message */}
          <div className="flex flex-col items-center justify-center text-center py-24 space-y-6">
            <Construction className="w-16 h-16 text-[#ffda00] animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Case Studies Coming Soon
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              We're currently documenting our success stories. Check back soon to see how we've helped startups transform their ideas into successful products.
            </p>
            <Button
              variant="outline"
              className="mt-8 text-white border-white/20 hover:bg-white hover:text-black"
              onClick={handleBackClick}
            >
              Return to Homepage
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
} 