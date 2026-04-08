import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://twitter.com', label: 'Twitter' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight">
              Lens<span className="text-neutral-500">.</span>
            </Link>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm">
              Capturing moments that matter. Available for portraits, events, and commercial work worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Lens. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500">
            Photography Portfolio. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  )
}
