import { Mail, MapPinned, MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/business'

const actions = [
  {
    label: 'Call Now',
    href: business.phoneHref,
    icon: Phone,
    className: 'btn-primary',
    external: false,
  },
  {
    label: 'WhatsApp',
    href: business.whatsappUrl,
    icon: MessageCircle,
    className: 'btn-whatsapp',
    external: true,
  },
  {
    label: 'Email Us',
    href: business.emailHref,
    icon: Mail,
    className: 'btn-outline',
    external: false,
  },
  {
    label: 'Google Maps',
    href: business.mapsUrl,
    icon: MapPinned,
    className: 'btn-outline',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-surface">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Get in touch with us
          </h2>
          <p className="mt-4 text-base text-brand-950/70">
            Reach out by phone, WhatsApp, or email — or visit our Dubai Land store.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="reveal space-y-4">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-brand-900/5">
              <p className="text-sm font-medium uppercase tracking-wide text-brand-700">Phone</p>
              <a
                href={business.phoneHref}
                className="mt-2 inline-flex items-center gap-2 font-display text-xl font-semibold text-brand-950 transition hover:text-brand-700"
              >
                <Phone className="h-5 w-5 text-lime-600" aria-hidden="true" />
                {business.phone}
              </a>
            </div>

            <div className="rounded-3xl bg-white p-6 ring-1 ring-brand-900/5">
              <p className="text-sm font-medium uppercase tracking-wide text-brand-700">Email</p>
              <a
                href={business.emailHref}
                className="mt-2 inline-flex items-center gap-2 break-all font-display text-lg font-semibold text-brand-950 transition hover:text-brand-700"
              >
                <Mail className="h-5 w-5 shrink-0 text-lime-600" aria-hidden="true" />
                {business.email}
              </a>
            </div>

            <div className="rounded-3xl bg-white p-6 ring-1 ring-brand-900/5">
              <p className="text-sm font-medium uppercase tracking-wide text-brand-700">Address</p>
              <p className="mt-2 flex gap-2 text-base leading-relaxed text-brand-950/80">
                <MapPinned className="mt-0.5 h-5 w-5 shrink-0 text-lime-600" aria-hidden="true" />
                <span>
                  Dubai Land - Shop #2, The Gate Residence 2 - Wadi Al Safa 5 - Dubai - UAE.
                </span>
              </p>
            </div>
          </div>

          <div className="reveal reveal-delay-1 rounded-3xl bg-brand-900 p-7 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-white">Quick actions</h3>
            <p className="mt-2 text-sm text-white/70">
              Choose the fastest way to connect with {business.shortName}.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {actions.map((action) => {
                const Icon = action.icon
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    className={`${action.className} w-full`}
                    {...(action.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {action.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
