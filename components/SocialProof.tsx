function Stars() {
  return (
    <div className="flex items-center gap-1 text-accent" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function PhoneMockup({ label }: { label: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="relative rounded-[2.5rem] border-[10px] border-neutral-900 bg-neutral-950 shadow-2xl ring-1 ring-white/5">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="aspect-[9/19] overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-neutral-900 to-neutral-950">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/5 px-3 pb-2 pt-6 text-[10px] text-neutral-500">
              <span>9:41</span>
              <span>●●●</span>
            </div>
            <div className="flex-1 p-3">
              <div
                className="relative h-32 overflow-hidden rounded-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,107,0,0.55), rgba(255,107,0,0.15))",
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_60%)]" />
                <div className="absolute bottom-2 left-3 right-3">
                  <div className="h-2 w-24 rounded bg-white/80" />
                  <div className="mt-1.5 h-1.5 w-36 rounded bg-white/40" />
                </div>
              </div>
              <div className="mt-3 rounded-md bg-accent py-2 text-center text-[10px] font-bold uppercase tracking-wide text-black">
                Call Now
              </div>
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded bg-white/10" />
                <div className="h-1.5 w-5/6 rounded bg-white/10" />
                <div className="h-1.5 w-4/6 rounded bg-white/10" />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="h-14 rounded bg-white/5" />
                <div className="h-14 rounded bg-white/5" />
              </div>
              <div className="mt-3 flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    className="h-2.5 w-2.5 text-accent"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
                <div className="ml-1 h-1.5 w-10 rounded bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </p>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="section border-b border-line bg-bg">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Real Websites</span>
          <h2 className="h2">What A Real Contractor Website Looks Like</h2>
          <p className="lead mt-5">
            Clean. Fast. Built to book the job from the first tap.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
          <PhoneMockup label="Roofing — Atlanta, GA" />
          <PhoneMockup label="HVAC — Dallas, TX" />
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-2xl border border-line bg-bgElev p-7 sm:p-10">
            <Stars />
            <blockquote className="mt-5 font-heading text-2xl uppercase leading-snug tracking-tight text-ink sm:text-3xl">
              &ldquo;Had my site live in a week. Booked two roofing jobs off it
              in the first month. Paid for itself before I even got used to
              checking the dashboard.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/20 ring-1 ring-accent/30" />
              <div>
                <div className="font-heading text-base font-semibold uppercase tracking-wide text-ink">
                  James R.
                </div>
                <div className="text-sm text-muted">
                  Roofing Contractor, Atlanta
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
