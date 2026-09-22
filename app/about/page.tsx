import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { capabilities, site } from "@/lib/site";

export const metadata: Metadata = { title: "Company", description: "Learn about WEI Trading, an Ontario, California importer and supplier of pipe, valve, pump, and plumbing systems." };

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[580px] overflow-hidden bg-ink text-white"><Image src="/images/wholesale-logistics.png" alt="WEI Trading wholesale order consolidation" fill priority sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-ink/65" /><div className="hero-grid absolute inset-0" /><div className="container-page relative flex min-h-[580px] items-end py-16"><div className="max-w-5xl"><p className="eyebrow text-signal">Company / Ontario, California</p><h1 className="display-type mt-5 text-5xl uppercase leading-[0.88] sm:text-7xl">A supply company built around the whole connection.</h1></div></div></section>
      <section className="technical-paper py-20 sm:py-28"><div className="container-page grid gap-12 lg:grid-cols-[0.42fr_0.58fr]"><div><p className="eyebrow text-cobalt">Company record</p><dl className="mt-6 border-t border-ink/30 text-sm"><div className="grid grid-cols-[110px_1fr] border-b border-ink/20 py-4"><dt className="font-mono text-xs text-steel">Legal name</dt><dd className="font-bold">{site.legalName}</dd></div><div className="grid grid-cols-[110px_1fr] border-b border-ink/20 py-4"><dt className="font-mono text-xs text-steel">Location</dt><dd className="font-bold">Ontario, California</dd></div><div className="grid grid-cols-[110px_1fr] border-b border-ink/20 py-4"><dt className="font-mono text-xs text-steel">Model</dt><dd className="font-bold">Import / wholesale / retail / support</dd></div></dl></div><div><h2 className="display-type text-4xl uppercase leading-[0.95] sm:text-5xl">Product depth with a practical route to delivery.</h2><p className="mt-6 leading-8 text-ink/65">WEI Trading connects U.S. project requirements with building-material and water-system products sourced from Asian and European markets. Our principal focus is PPR, PE, and PVC pipe systems, supported by valves, pumps, fittings, hardware, and related components.</p><p className="mt-4 leading-8 text-ink/65">We serve wholesale and retail demand across the United States, with installation and after-sales coordination available for qualified projects in selected Southern California service areas.</p><Button href="/contact" variant="ghost" className="mt-8">Start a product inquiry <ArrowRight size={17} /></Button></div></div></section>
      <section className="bg-signal py-16"><div className="container-page"><p className="eyebrow">Supply capabilities</p><div className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((item) => <div key={item} className="flex items-start gap-3 border-t border-ink/30 py-5 font-bold"><Check size={18} className="mt-0.5 shrink-0" />{item}</div>)}</div></div></section>
    </>
  );
}
