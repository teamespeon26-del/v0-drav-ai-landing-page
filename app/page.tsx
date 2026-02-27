import { HeroSection } from "@/components/hero-section"
import { QuoteSection } from "@/components/quote-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <QuoteSection />
    </main>
  )
}
