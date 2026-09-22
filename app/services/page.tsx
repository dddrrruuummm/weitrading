import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { capabilities, services } from "@/lib/site";

export const metadata: Metadata = { title: "Capabilities", description: "Wholesale, retail, import sourcing, installation coordination, and after-sales support from WEI Trading." };

export default function ServicesPage() {
  return (
    <main className="bg-paper">
      <section className="bg-cobalt py-16 text-white sm:py-20"><div className="container-page grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end"><div><p className="eyebrow text-signal">Capabilities / Supply route</p><h1 className="display-type mt-5 max-w-5xl text-5xl uppercase leading-[0.88] sm:text-7xl">Global reach. Local accountability.</h1></div><p className="border-l-4 border-signal pl-6 leading-7 text-white/70">A structured operating model for imported product supply, project orders, and responsive after-sales coordination.</p></div></section>
      <section className="technical-paper py-20 sm:py-28"><div className="container-page grid gap-12 lg:grid-cols-[0.35fr_0.65fr]"><aside><p className="eyebrow text-cobalt">Four control points</p><p className="mt-4 text-xl font-bold leading-8">Each project moves through a visible route from requirements to support.</p><Button href="/contact" variant="ghost" className="mt-7">Send an RFQ <ArrowRight size={17} /></Button></aside><div className="border-t-2 border-ink">{services.map((service) => <article key={service.number} className="grid gap-4 border-b border-ink/25 py-8 sm:grid-cols-[76px_150px_minmax(0,1fr)]"><span className="font-mono text-sm text-cobalt">NODE {service.number}</span><h2 className="display-type text-2xl uppercase">{service.title}</h2><p className="leading-7 text-ink/62">{service.text}</p></article>)}</div></div></section>
      <section className="bg-ink py-20 text-white"><div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center"><div className="relative aspect-[16/10] overflow-hidden"><Image src="/images/installation-service.png" alt="Professional pipe installation support" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /><span className="absolute bottom-0 left-0 bg-valve px-4 py-3 font-mono text-[10px] uppercase text-white">Selected local service areas</span></div><div><p className="eyebrow text-cyan">Beyond the shipment</p><h2 className="display-type mt-4 text-5xl uppercase leading-[0.92]">A supply model sized to the job.</h2><div className="mt-8 grid gap-x-8 sm:grid-cols-2">{capabilities.map((item) => <div key={item} className="flex gap-3 border-t border-white/20 py-4 text-sm font-bold"><Check size={17} className="shrink-0 text-signal" />{item}</div>)}</div></div></div></section>
    </main>
  );
}
