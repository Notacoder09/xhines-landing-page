export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(255,107,0,0.22) 0%, rgba(255,107,0,0.06) 40%, transparent 75%)",
        }}
      />
      <div className="relative container-tight px-5 py-20 text-center sm:px-8 sm:py-28">
        <h2 className="mx-auto max-w-3xl font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Your Competitors Already Have Websites.{" "}
          <span className="text-accent">
            How Long Are You Going To Wait?
          </span>
        </h2>

        <div className="mt-10 flex items-center justify-center">
          <a href="#lead-form" className="btn-primary">
            Get My Free Mockup
            <span aria-hidden>→</span>
          </a>
        </div>

        <p className="mt-10 text-sm uppercase tracking-[0.25em] text-muted">
          XhinesSystems
        </p>
      </div>
    </section>
  );
}
