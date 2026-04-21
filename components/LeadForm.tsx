"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const TRADES = [
  "Roofing",
  "HVAC",
  "Electrical",
  "Plumbing",
  "Landscaping",
  "Painting",
  "General Contractor",
  "Other",
];

type FormState = {
  name: string;
  phone: string;
  trade: string;
  city: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  trade: "",
  city: "",
};

export default function LeadForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const payload = JSON.stringify({
      name: formData.name,
      phone: formData.phone,
      trade: formData.trade,
      city: formData.city,
    });

    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    }

    router.push("/thank-you");
  };

  return (
    <section
      id="lead-form"
      className="section border-b border-line bg-bgElev scroll-mt-8"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <span className="eyebrow">Free Mockup</span>
            <h2 className="h2">Get Your Free Website Mockup</h2>
            <p className="lead mt-5">
              Fill this out and we&rsquo;ll show you exactly what your site
              could look like on a quick 15-minute call.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 rounded-2xl border border-line bg-bg p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5">
              <Field
                id="name"
                label="Your Name"
                type="text"
                autoComplete="name"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Field
                id="phone"
                label="Phone Number"
                type="tel"
                autoComplete="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <SelectField
                id="trade"
                label="What Trade Are You In?"
                value={formData.trade}
                onChange={handleChange}
                required
                options={TRADES}
              />
              <Field
                id="city"
                label="What City Do You Serve?"
                type="text"
                autoComplete="address-level2"
                placeholder="Atlanta, GA"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Show Me My Website <span aria-hidden>→</span>
                </>
              )}
            </button>

            <p className="mt-4 text-center text-sm text-muted">
              No contracts. No pressure. Just a free mockup.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  ...inputProps
}: {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-heading text-sm font-semibold uppercase tracking-[0.15em] text-ink"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="w-full rounded-md border border-line bg-bgElev px-4 py-3.5 text-base text-ink placeholder:text-neutral-600 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
        {...inputProps}
      />
    </div>
  );
}

function SelectField({
  id,
  label,
  options,
  ...selectProps
}: {
  id: string;
  label: string;
  options: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-heading text-sm font-semibold uppercase tracking-[0.15em] text-ink"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          className="w-full appearance-none rounded-md border border-line bg-bgElev px-4 py-3.5 pr-10 text-base text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
          {...selectProps}
        >
          <option value="" disabled>
            Select your trade
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <svg
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}
