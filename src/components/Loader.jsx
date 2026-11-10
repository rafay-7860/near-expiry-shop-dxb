import { Leaf } from 'lucide-react'

export default function Loader({ done }) {
  return (
    <div
      className={`loader-overlay ${done ? 'is-done' : ''}`}
      role="status"
      aria-live="polite"
      aria-busy={!done}
      aria-label="Loading Near Expiry Shop website"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative grid place-items-center">
          <div className="loader-ring absolute inset-0" aria-hidden="true" />
          <div className="loader-mark grid h-16 w-16 place-items-center rounded-2xl bg-brand-800/80 text-lime-400">
            <Leaf className="h-7 w-7" strokeWidth={2.2} />
          </div>
        </div>
        <div className="text-center">
          <p className="font-display text-lg font-semibold tracking-wide text-white">
            Near Expiry Shop
          </p>
          <p className="mt-1 text-sm text-white/65">Preparing your smart shopping experience…</p>
        </div>
      </div>
    </div>
  )
}
