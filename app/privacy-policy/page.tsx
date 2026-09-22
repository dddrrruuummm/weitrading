import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: `Privacy policy for ${site.name}.` };

export default function PrivacyPolicyPage() {
  return <section className="technical-paper py-20"><div className="container-page max-w-3xl border-t-8 border-cobalt bg-white p-7 sm:p-12"><p className="eyebrow text-cobalt">Website policy</p><h1 className="display-type mt-4 text-5xl uppercase">Privacy Policy</h1><div className="mt-8 space-y-5 leading-8 text-ink/68"><p>{site.legalName} uses information submitted through this website to respond to product, pricing, delivery, installation, and account inquiries.</p><p>We do not sell personal information. Information may be shared with service providers only as reasonably needed to respond to a request or perform an agreed service.</p><p>For privacy requests, contact <a href={`mailto:${site.email}`} className="font-bold text-cobalt underline">{site.email}</a>.</p></div></div></section>;
}
