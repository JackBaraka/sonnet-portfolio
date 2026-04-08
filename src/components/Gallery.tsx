'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

export interface GalleryImage {
  id: number
  src: string
  alt: string
  width: number
  height: number
  category: string
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', alt: 'Urban Architecture', width: 800, height: 1200, category: 'Architecture' },
  { id: 2, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Mountain Landscape', width: 800, height: 600, category: 'Landscape' },
  { id: 3, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', alt: 'Portrait', width: 800, height: 1000, category: 'Portrait' },
  { id: 4, src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80', alt: 'City Skyline', width: 800, height: 500, category: 'Urban' },
  { id: 5, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Portrait Study', width: 800, height: 1100, category: 'Portrait' },
  { id: 6, src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', alt: 'Ocean Waves', width: 800, height: 600, category: 'Nature' },
  { id: 7, src: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&q=80', alt: 'Night Mountains', width: 800, height: 1200, category: 'Landscape' },
  { id: 8, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80', alt: 'Starry Night', width: 800, height: 600, category: 'Astrophotography' },
  { id: 9, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80', alt: 'Golden Hour', width: 800, height: 800, category: 'Landscape' },
  { id: 10, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', alt: 'Forest Vista', width: 800, height: 1000, category: 'Landscape' },
  { id: 11, src: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80', alt: 'Aurora Borealis', width: 800, height: 600, category: 'Astrophotography' },
  { id: 12, src: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?w=800&q=80', alt: 'Street Portrait', width: 800, height: 1100, category: 'Street' },
]

interface GalleryProps {
  images?: GalleryImage[]
}

export function Gallery({ images = galleryImages }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev! + 1) % images.length)
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, images.length])

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)
  const goNext = () => setSelectedIndex((prev) => (prev! + 1) % images.length)
  const goPrev = () => setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length)

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="relative w-full transition-transform duration-500 group-hover:scale-105">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 text-white">
                  <ZoomIn className="w-8 h-8" />
                  <span className="text-sm font-medium">{image.alt}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                width={1200}
                height={800}
                className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                sizes="90vw"
                priority
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/80">
                <p className="text-lg font-medium">{images[selectedIndex].alt}</p>
                <p className="text-sm text-white/60">{images[selectedIndex].category}</p>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 text-white/60 text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
