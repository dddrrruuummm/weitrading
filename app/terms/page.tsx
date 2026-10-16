import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {alternates:{canonical:"/terms"}, title: "Terms", description: `Website terms for ${site.name}.` };

export default function TermsPage() {
  return <section className="technical-paper py-20"><div className="container-page max-w-3xl border-t-8 border-signal bg-white p-7 sm:p-12"><h1 className="display-type mt-4 text-5xl ">Terms of Service</h1><div className="mt-8 space-y-5 leading-8 text-ink/68"><p>Product availability, technical suitability, pricing, delivery, installation scope, warranties, and commercial terms are confirmed in a separate quotation or agreement.</p><p>Website content is general information and does not replace project-specific engineering, code, or installation review. Product appearance and specifications may vary by supply source.</p><p>For questions, contact <a href={`mailto:${site.email}`} className="font-bold text-cobalt underline">{site.email}</a>.</p></div></div></section>;
}
