import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're In — Book Your Free Call | XhinesSystems",
  description:
    "Pick a time for your free 15-minute call and we'll show you exactly what your contractor website could look like.",
  robots: { index: false, follow: false },
};

const calendarURL = "PASTE_YOUR_GHL_CALENDAR_WIDGET_URL_HERE";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-bg">
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.18) 0%, rgba(255,107,0,0.05) 35%, transparent 70%)",
          }}
        />
        <div className="relative container-tight px-5 pb-10 pt-16 text-center sm:px-8 sm:pb-14 sm:pt-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Step 2 of 2
          </div>
          <h1 className="h1">
            You&rsquo;re In — <span className="text-accent">Book Your Free Call Below</span>
          </h1>
          <p className="lead mx-auto mt-6 max-w-2xl">
            Pick a time that works for you. On the call we&rsquo;ll show you
            exactly what your new website could look like — no pressure, no
            pitch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <div className="overflow-hidden rounded-2xl border border-line bg-bgElev">
            <iframe
              src={calendarURL}
              title="Book your free 15-minute call"
              loading="lazy"
              className="block h-[700px] w-full border-0 sm:h-[780px]"
              allow="payment; camera; microphone; fullscreen"
            />
          </div>

          <p className="mt-6 text-center text-sm text-muted">
            Trouble loading the calendar? Refresh the page or try a different browser.
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-tight px-5 py-10 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            XhinesSystems
          </p>
        </div>
      </section>
    </main>
  );
}
