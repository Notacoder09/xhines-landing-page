export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.18) 0%, rgba(255,107,0,0.05) 35%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="relative container-tight px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-bgElev/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            XhinesSystems
          </div>

          <h1 className="h1">
            We Build Contractor Websites That{" "}
            <span className="text-accent">Actually Book Jobs</span>
          </h1>

          <p className="lead mx-auto mt-6 max-w-xl">
            Done in 7 days. No contracts. No tech headaches.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <a href="#lead-form" className="btn-primary">
              See What Yours Could Look Like
              <span aria-hidden>→</span>
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            Built for roofers, HVAC, electricians, plumbers, landscapers & general contractors.
          </p>
        </div>
      </div>
    </section>
  );
}
