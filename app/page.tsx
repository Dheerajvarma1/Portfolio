import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 overflow-x-hidden w-full pt-16 md:pt-0">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
} 