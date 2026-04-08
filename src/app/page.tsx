import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const featuredWork = [
  {
    id: 1,
    title: 'Urban Perspectives',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    year: '2024',
  },
  {
    id: 2,
    title: 'Natural Wonders',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    year: '2024',
  },
  {
    id: 3,
    title: 'Portrait Stories',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    year: '2024',
  },
  {
    id: 4,
    title: 'Street Life',
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    year: '2023',
  },
]

export default function Home() {
  return (
    <>
      {/* Immersive Hero Section */}
      <Hero />

      {/* Featured Work */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Work</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            A curated selection of my latest projects and personal creative explorations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredWork.map((work) => (
            <Link key={work.id} href={`/portfolio/${work.id}`}>
              <Card hover className="overflow-hidden group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2">{work.category}</Badge>
                  <h3 className="font-serif text-xl font-semibold">{work.title}</h3>
                  <p className="text-sm text-neutral-500">{work.year}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Photographer portrait"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Me</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              With over a decade of experience behind the lens, I specialize in capturing authentic moments 
              and transforming them into timeless visual stories. My work spans editorial, portrait, 
              landscape, and architectural photography.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              Based in New York, available for travel worldwide. Every project is a new opportunity 
              to create something extraordinary.
            </p>
            <Button variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Services</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Professional photography services tailored to your vision
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Portrait Sessions', desc: 'Individual, couples, and family portraits in studio or on location', price: 'From $500' },
            { title: 'Events & Weddings', desc: 'Full-day coverage capturing every precious moment', price: 'From $2,500' },
            { title: 'Commercial Work', desc: 'Product, editorial, and brand photography', price: 'Contact for quote' },
          ].map((service, i) => (
            <Card key={i} className="p-8 text-center">
              <h3 className="font-serif text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">{service.desc}</p>
              <p className="text-sm font-medium text-neutral-500">{service.price}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
