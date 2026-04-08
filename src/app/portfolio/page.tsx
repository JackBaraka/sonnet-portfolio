import { Gallery, GalleryImage } from '@/components/Gallery'
import { Metadata } from 'next'

const portfolioImages: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', alt: 'Urban Architecture', width: 800, height: 1200, category: 'Architecture' },
  { id: 2, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Mountain Landscape', width: 800, height: 600, category: 'Landscape' },
  { id: 3, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', alt: 'Portrait', width: 800, height: 1000, category: 'Portrait' },
  { id: 4, src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80', alt: 'City Skyline', width: 800, height: 500, category: 'Urban' },
  { id: 5, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Portrait Study', width: 800, height: 1100, category: 'Portrait' },
  { id: 6, src: 'https://images.unsplash.com/photo-1518034976023-2c4202a03fd6?w=800&q=80', alt: 'Ocean Waves', width: 800, height: 600, category: 'Nature' },
  { id: 7, src: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&q=80', alt: 'Night Mountains', width: 800, height: 1200, category: 'Landscape' },
  { id: 8, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80', alt: 'Starry Night', width: 800, height: 600, category: 'Astrophotography' },
  { id: 9, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80', alt: 'Golden Hour', width: 800, height: 800, category: 'Landscape' },
  { id: 10, src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf2b3e3a?w=800&q=80', alt: 'Desert Vista', width: 800, height: 1000, category: 'Landscape' },
  { id: 11, src: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80', alt: 'Aurora Borealis', width: 800, height: 600, category: 'Astrophotography' },
  { id: 12, src: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?w=800&q=80', alt: 'Street Portrait', width: 800, height: 1100, category: 'Street' },
]

export const metadata: Metadata = {
  title: 'Portfolio | Sonnet Visuals',
  description: 'Photography portfolio showcasing architecture, landscape, portrait, and street photography',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Portfolio</h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          A curated collection of work spanning architecture, landscapes, portraits, and street photography
        </p>
      </div>
      <Gallery images={portfolioImages} />
    </div>
  )
}
