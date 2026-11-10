import { CalendarClock, MessageCircle } from 'lucide-react'
import { business, sampleProducts } from '../data/business'

export default function ProductGrid() {
  return (
    <section id="products" className="section-pad bg-white">
      <div className="container-page">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
              Featured Products
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
              Sample Product Placeholders
            </h2>
            <p className="mt-4 text-base text-brand-950/70">
              These cards are clearly marked sample data for layout only. They are not real inventory,
              prices, or expiry dates.
            </p>
          </div>
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline shrink-0"
          >
            Ask about availability
          </a>
        </div>

        <div className="mt-10 rounded-2xl border border-accent/30 bg-orange-50 px-4 py-3 text-sm text-brand-950/80">
          <strong className="font-semibold text-accent-dark">Sample only:</strong> Replace these
          placeholders with real products when inventory is ready.
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleProducts.map((product, index) => (
            <article
              key={product.id}
              className={`reveal group overflow-hidden rounded-3xl bg-surface ring-1 ring-brand-900/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl ${
                index % 3 === 1 ? 'reveal-delay-1' : index % 3 === 2 ? 'reveal-delay-2' : ''
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={`${product.name} placeholder image`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-lg bg-accent px-2.5 py-1 font-display text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                  Sample
                </span>
                <span className="absolute right-3 top-3 rounded-lg bg-brand-900/85 px-2.5 py-1 text-xs font-semibold text-lime-400 backdrop-blur-sm">
                  Placeholder
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-brand-950">{product.name}</h3>

                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-display text-xl font-bold text-brand-800">
                    {product.discountedPrice}
                  </span>
                  <span className="text-sm text-brand-950/45 line-through">
                    {product.originalPrice}
                  </span>
                </div>

                <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm text-brand-950/70 ring-1 ring-brand-900/5">
                  <CalendarClock className="h-4 w-4 text-brand-700" aria-hidden="true" />
                  <span>
                    Expiry: <span className="font-medium text-brand-900">{product.expiryDate}</span>
                  </span>
                </div>

                <a
                  href={`${business.whatsappUrl}?text=${encodeURIComponent(
                    `Hi Near Expiry Shop, I'd like to enquire about ${product.name} (sample placeholder).`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-5 w-full"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
