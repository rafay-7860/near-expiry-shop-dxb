import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business, navLinks } from '../data/business'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white">
      <div className="footer-wave-track text-brand-900" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-14 w-[200%]">
          <path
            fill="currentColor"
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1620,40 L1620,80 L0,80 Z"
          />
          <path
            fill="currentColor"
            transform="translate(1440,0)"
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1620,40 L1620,80 L0,80 Z"
          />
        </svg>
      </div>

      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-lime-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 top-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-lime-500 text-brand-950">
                <span className="font-display text-lg font-extrabold">NE</span>
              </span>
              <span>
                <span className="block font-display text-lg font-bold">Near Expiry Shop</span>
                <span className="block text-xs uppercase tracking-[0.18em] text-lime-400/90">
                  DXB
                </span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Affordable near-expiry shopping in Dubai — helping customers save more and waste less.
            </p>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe57]"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-lime-400">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-lime-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-lime-400" aria-hidden="true" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={business.emailHref}
                  className="inline-flex items-start gap-2 break-all transition hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" aria-hidden="true" />
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-lime-400">
              Location
            </h3>
            <p className="mt-4 flex gap-2 text-sm leading-relaxed text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" aria-hidden="true" />
              <span>{business.address.short}</span>
            </p>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-lime-400 transition hover:text-lime-300"
            >
              Open Google Maps →
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            © {YEAR} {business.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Shop Smart. Save More. Waste Less.</p>
        </div>
      </div>
    </footer>
  )
}
