import { ArrowRight, MessageCircle } from 'lucide-react'
import { business } from '../data/business'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1920&q=80'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Fresh grocery aisles representing affordable smart shopping"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-950/92 via-brand-900/78 to-brand-800/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.22),transparent_42%)]"
        aria-hidden="true"
      />

      <div className="container-page relative flex min-h-[100svh] flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:justify-center lg:px-8 lg:pb-24 lg:pt-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-lime-400">
            {business.name}
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {business.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Discover amazing value on near-expiry products at Near Expiry Shop Dubai. Smart shopping
            starts here!
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#products" className="btn-primary">
              Explore Our Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
