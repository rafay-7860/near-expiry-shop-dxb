import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { business, navLinks } from '../data/business'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'nav-scrolled border-b border-white/10 bg-brand-900/95 py-2 shadow-lg backdrop-blur-xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="header-shimmer pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-page relative flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={closeMenu}
          aria-label={`${business.name} home`}
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-lime-500 text-brand-950 shadow-md transition duration-300 group-hover:scale-105 group-hover:bg-lime-400">
            <span className="font-display text-lg font-extrabold leading-none">NE</span>
          </span>
          <span className="min-w-0">
            <span className="block font-display text-base font-bold leading-tight text-white sm:text-lg">
              Near Expiry Shop
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-lime-400/90">
              DXB · Dubai
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition duration-300 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-[#25D366] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe57] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'} absolute inset-x-0 top-full border-b border-white/10 bg-brand-900/98 backdrop-blur-xl transition-all duration-300`}
      >
        <nav className="container-page flex flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-base font-medium text-white/90 transition hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="btn-whatsapp mt-2"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
