import { MapPin, Navigation } from 'lucide-react'
import { business } from '../data/business'

export default function Location() {
  return (
    <section id="location" className="section-pad bg-white">
      <div className="container-page">
        <div className="reveal overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-8 sm:p-10 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                Store Location
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {business.name}
              </h2>
              <div className="mt-6 flex gap-3 text-white/85">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-lime-400" aria-hidden="true" />
                <p className="text-base leading-relaxed">
                  Dubai Land - Shop #2, The Gate Residence 2
                  <br />
                  Wadi Al Safa 5, Dubai, UAE.
                </p>
              </div>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Open in Google Maps
              </a>
            </div>

            <div className="animate-float rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-lime-300">
                Visit Us
              </p>
              <p className="mt-3 text-lg font-medium leading-relaxed text-white">
                Find us at The Gate Residence 2 in Dubai Land for in-store shopping.
              </p>
              <p className="mt-4 text-sm text-white/65">
                Use Google Maps for directions to Shop #2.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
