import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-ink text-white">
      <Image src="/images/wei-hero.png" alt="WEI Trading pipe and water systems warehouse" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="hero-grid absolute inset-0" />
      <div className="absolute inset-y-0 left-0 w-2 bg-signal" />
      <div className="container-page relative flex min-h-[680px] flex-col justify-between py-12 sm:py-16">
        <div className="flex items-start justify-between gap-8">
          <div><p className="eyebrow text-signal">WEI Trading / Ontario, California</p><p className="mt-2 font-mono text-xs uppercase text-white/55">Imported building + water systems</p></div>
          <div className="hidden w-64 border-t border-white/50 pt-3 font-mono text-[10px] uppercase leading-6 text-white/65 lg:block"><span className="block text-white">System key</span><span>PPR / Residential water</span><span className="block">PE / Irrigation + utility</span><span className="block">PVC / Pressure + drainage</span></div>
        </div>
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_330px] lg:items-end">
          <div className="min-w-0"><h1 className="display-type max-w-5xl break-words text-5xl uppercase leading-[0.88] sm:text-7xl lg:text-[92px]">Every line.<br /><span className="text-signal">One supply partner.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">Pipe, valves, pumps, and project hardware sourced for U.S. wholesale, retail, and qualified local installation.</p><div className="mt-8 flex flex-wrap gap-3"><Button href="/showcase">Browse the system index <ArrowRight size={17} /></Button><Button href="/contact" variant="secondary">Send project specs</Button></div></div>
          <div className="hidden border-l-4 border-cyan pl-6 lg:block"><p className="eyebrow text-cyan">Current supply desk</p><p className="mt-3 text-2xl font-bold">Ontario, CA</p><p className="mt-2 text-sm leading-6 text-white/60">Import coordination<br />Mixed order consolidation<br />Selected-area field support</p></div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden bg-white px-5 py-3 font-mono text-[10px] uppercase text-ink md:block">1053 Hollowell St / CA 91762</div>
    </section>
  );
}

export function MaterialIndex() {
  const materials = products.slice(0, 4);
  return (
    <section className="technical-paper py-20 sm:py-28">
      <div className="container-page grid min-w-0 gap-12 lg:grid-cols-[0.38fr_0.62fr]">
        <div className="min-w-0 lg:sticky lg:top-32 lg:self-start"><p className="eyebrow text-cobalt">01 / Material index</p><h2 className="display-type mt-5 text-5xl uppercase leading-[0.9] sm:text-6xl">Start with the medium.</h2><p className="mt-6 max-w-md leading-7 text-ink/65">We organize supply around application and material, not a generic shopping catalog. Send the operating conditions and we will help narrow the compatible system.</p><Button href="/showcase" variant="ghost" className="mt-8">Open all ten categories <ArrowUpRight size={17} /></Button></div>
        <div className="min-w-0 border-t-2 border-ink">
          {materials.map((item, index) => (
            <article key={item.code} className="catalog-row grid min-w-0 gap-5 py-7 sm:grid-cols-[54px_190px_minmax(0,1fr)] sm:items-center">
              <span className="font-mono text-xs text-cobalt">0{index + 1}</span>
              <div className="relative aspect-[16/10] overflow-hidden bg-fog"><Image src={item.image} alt={`${item.name} product system`} fill sizes="(max-width: 640px) 100vw, 190px" className="object-cover" /></div>
              <div className="min-w-0"><div className="flex min-w-0 items-start justify-between gap-4"><h3 className="display-type min-w-0 text-2xl uppercase leading-tight">{item.name}</h3><ArrowUpRight size={18} className="shrink-0 text-cobalt" /></div><p className="mt-2 text-sm leading-6 text-ink/62">{item.description}</p><div className="mt-4 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="border border-ink/30 px-2 py-1 font-mono text-[9px] uppercase">{tag}</span>)}</div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SupplyRoute() {
  const nodes = [
    { label: "Origin", title: "Asia + Europe", text: "Source-qualified product options across core material categories." },
    { label: "Control point", title: "Ontario, CA", text: "Order planning, consolidation, coordination, and local supply desk." },
    { label: "Destination", title: "U.S. projects", text: "Wholesale, retail, delivery, installation support, and after-sales response." },
  ];
  return (
    <section className="bg-signal py-20 sm:py-24"><div className="container-page"><div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="eyebrow">02 / Supply route</p><h2 className="display-type mt-4 text-5xl uppercase leading-[0.9] sm:text-6xl">From source<br />to site.</h2></div><p className="max-w-2xl text-lg leading-8 text-ink/70">A visible route for imported products, mixed-category project orders, and repeat commercial supply.</p></div><div className="route-line mt-14 grid gap-10 md:grid-cols-3 md:gap-16">{nodes.map((node) => <div key={node.title} className="route-node"><p className="eyebrow text-ink/55">{node.label}</p><h3 className="display-type mt-2 text-2xl uppercase">{node.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-ink/65">{node.text}</p></div>)}</div></div></section>
  );
}

function MosaicItem({ index, className, imageClassName }: { index: number; className: string; imageClassName?: string }) {
  const item = products[index];
  return (
    <article className={`group relative min-h-[260px] overflow-hidden bg-navy ${className}`}>
      <Image src={item.image} alt={`${item.name} from WEI Trading`} fill sizes="(max-width: 768px) 100vw, 60vw" className={`object-cover transition duration-500 group-hover:scale-[1.02] ${imageClassName ?? ""}`} />
      <div className="absolute inset-0 bg-ink/35" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 border-t border-white/40 bg-ink/75 p-5 text-white"><div><p className="font-mono text-[9px] uppercase text-cyan">{item.code} / {item.category}</p><h3 className="display-type mt-2 text-xl uppercase">{item.name}</h3></div><ArrowUpRight size={20} className="shrink-0 text-signal" /></div>
    </article>
  );
}

export function ProductWall() {
  return (
    <section className="bg-ink py-20 text-white sm:py-28"><div className="container-page"><div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end"><div><p className="eyebrow text-cyan">03 / The supply bench</p><h2 className="display-type mt-5 text-5xl uppercase leading-[0.9] sm:text-6xl">Six more ways<br />to complete the line.</h2></div><p className="max-w-xl leading-7 text-white/60">Flow-control components, connection hardware, field systems, drainage, service, and consolidated wholesale programs.</p></div><div className="mt-12 grid gap-3 md:grid-cols-12"><MosaicItem index={4} className="md:col-span-7 md:min-h-[410px]" /><MosaicItem index={5} className="md:col-span-5 md:min-h-[410px]" /><MosaicItem index={6} className="md:col-span-5 md:min-h-[340px]" /><MosaicItem index={7} className="md:col-span-7 md:min-h-[340px]" /><MosaicItem index={8} className="md:col-span-6 md:min-h-[360px]" /><MosaicItem index={9} className="md:col-span-6 md:min-h-[360px]" /></div></div></section>
  );
}

export function ContactSection({ page = false }: { page?: boolean }) {
  const Heading = page ? "h1" : "h2";
  return (
    <section className="bg-cobalt py-20 text-white sm:py-28"><div className="container-page grid min-w-0 gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div className="min-w-0"><p className="eyebrow text-signal">04 / Project intake</p><Heading className="display-type mt-5 break-words text-5xl uppercase leading-[0.9] sm:text-6xl">Your specs are the starting point.</Heading><p className="mt-6 max-w-md leading-7 text-white/70">Include material, nominal size, application, quantity, delivery location, and desired timing.</p><a href={`mailto:${site.email}`} className="mt-10 flex min-w-0 items-center justify-between gap-4 border-y border-white/35 py-5 text-lg font-bold hover:text-signal sm:text-2xl"><span className="min-w-0 break-all">{site.email}</span><ArrowUpRight size={24} className="shrink-0" /></a><div className="mt-6 grid min-w-0 gap-4 text-sm"><a href={`tel:${site.phoneHref}`} className="flex items-center gap-3"><Phone size={18} className="shrink-0 text-signal" />{site.phone}</a><a href={site.mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-signal" /><span>{site.address.street}<br />{site.address.city}, {site.address.state} {site.address.postalCode}</span></a></div></div><form className="measure-rule min-w-0 border border-white/35 bg-white p-6 pt-10 text-ink sm:p-9 sm:pt-12"><div className="mb-7 flex items-center justify-between gap-4 border-b border-ink/15 pb-5"><p className="eyebrow">RFQ / New inquiry</p><Mail size={20} className="text-cobalt" /></div><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-xs font-bold">Name<input className="focus-ring min-h-12 min-w-0 border-0 border-b border-ink/40 bg-paper px-3 text-base font-normal" placeholder="Your name" /></label><label className="grid gap-2 text-xs font-bold">Business email<input className="focus-ring min-h-12 min-w-0 border-0 border-b border-ink/40 bg-paper px-3 text-base font-normal" placeholder="you@company.com" /></label></div><label className="mt-5 grid gap-2 text-xs font-bold">Product or system<input className="focus-ring min-h-12 min-w-0 border-0 border-b border-ink/40 bg-paper px-3 text-base font-normal" placeholder="PPR, PE, PVC, valves, pumps..." /></label><label className="mt-5 grid gap-2 text-xs font-bold">Specifications and delivery<textarea className="focus-ring min-h-32 min-w-0 border-0 border-b border-ink/40 bg-paper p-3 text-base font-normal" placeholder="Material, size, pressure, quantity, destination, and timing" /></label><Button href={`mailto:${site.email}?subject=WEI%20Trading%20RFQ`} className="mt-7 w-full border-cobalt bg-cobalt text-white hover:border-ink hover:bg-ink">Send project specs <ArrowRight size={17} /></Button></form></div></section>
  );
}
