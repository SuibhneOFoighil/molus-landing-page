import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { PastClients } from '@/components/PastClients'
import { WhoWeAre } from '@/components/WhoWeAre'
import { TheChallenge } from '@/components/TheChallenge'
import { Solution } from '@/components/Solution'
import { PilotProgram } from '@/components/PilotProgram'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 via-teal-800 to-teal-900 font-sans">
      <Navigation />
      <Hero />
      <PastClients />
      <WhoWeAre />
      <TheChallenge />
      <Solution />
      <PilotProgram />
      <ContactForm />
      <Footer />
    </div>
  )
}

