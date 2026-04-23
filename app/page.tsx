import { Suspense } from "react";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatYouGet from "@/components/WhatYouGet";
import SocialProof from "@/components/SocialProof";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Problem />
      <WhatYouGet />
      <SocialProof />
      <Suspense>
        <LeadForm />
      </Suspense>
      <FinalCTA />
    </main>
  );
}
