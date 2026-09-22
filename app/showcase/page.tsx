import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site";

export const metadata: Metadata = { title: "Product Systems", description: "Explore PPR, PE, PVC, valves, pumps, fittings, irrigation, drainage, installation, and wholesale programs from WEI Trading." };

export default function ShowcasePage() {
  return (
    <main className="technical-paper pb-24">
      <section className="bg-ink py-16 text-white sm:py-20"><div className="container-page grid min-w-0 gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end"><div className="min-w-0"><p className="eyebrow text-signal">System register / 01-10</p><h1 className="display-type mt-5 break-words text-5xl uppercase leading-[0.88] sm:text-7xl">The complete flow index.</h1></div><p className="min-w-0 border-l-4 border-cyan pl-6 leading-7 text-white/65">Ten distinct supply categories, organized for specification-led inquiries rather than shopping-cart transactions.</p></div></section>
      <section className="container-page pt-12"><div className="flex flex-wrap justify-between gap-3 border-b-2 border-ink pb-4 font-mono text-[9px] uppercase"><span>WEI Trading / Pipe + Flow Supply</span><span>Ontario, California / United States</span></div><div className="border-t-0">{products.map((product, index) => <ProductCard key={product.code} product={product} index={index} />)}</div></section>
    </main>
  );
}
