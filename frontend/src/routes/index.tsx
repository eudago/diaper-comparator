import CategorySection from '@/components/CategorySection'
import Hero from '@/components/Hero'
import { Trending } from '@/components/Trending'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({ component: App })

function App() {

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <Hero />
      <CategorySection />
      <Trending />
    </div>
  )
}
