type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const iconClass = "h-7 w-7";

const features: Feature[] = [
  {
    title: "Built For Your Trade",
    description:
      "A professional website designed around the jobs you book — not a generic template.",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12L12 3l9 9" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    title: "Mobile + Click-To-Call",
    description:
      "Loads fast on any phone and puts a call button front and center so leads can reach you in one tap.",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Google Reviews Front & Center",
    description:
      "Your best reviews pulled directly from Google, so new customers see the trust before they call.",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Online Booking & Estimates",
    description:
      "Let homeowners request a quote or book a visit 24/7 — leads land straight in your inbox.",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
];

export default function WhatYouGet() {
  return (
    <section className="section border-b border-line bg-bgElev">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">What You Get</span>
          <h2 className="h2">Everything You Need To Win The Job.</h2>
          <p className="lead mt-5">
            No fluff. No features you&rsquo;ll never use. Just the tools that
            turn a Google search into a booked job.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-line bg-bg p-6 transition-colors duration-200 hover:border-accent/60 sm:p-7"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-ink sm:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
