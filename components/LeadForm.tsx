"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type FormState = {
  name: string;
  phone: string;
  city: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  city: "",
};

export default function LeadForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const trade = searchParams.get("trade") ?? "contractor";
  const utmSource = searchParams.get("utm_source");
  const utmMedium = searchParams.get("utm_medium");
  const utmCampaign = searchParams.get("utm_campaign");
  const utmContent = searchParams.get("utm_content");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const payload: Record<string, string> = {
      name: formData.name,
      phone: formData.phone,
      trade,
      city: formData.city,
    };
    if (utmSource) payload.utm_source = utmSource;
    if (utmMedium) payload.utm_medium = utmMedium;
    if (utmCampaign) payload.utm_campaign = utmCampaign;
    if (utmContent) payload.utm_content = utmContent;

    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
