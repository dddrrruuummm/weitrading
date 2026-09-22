import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/site";

type Product = (typeof products)[number];

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="catalog-row grid min-w-0 gap-5 py-8 md:grid-cols-[70px_280px_minmax(0,1fr)_38px] md:items-center">
      <span className="font-mono text-xs text-cobalt">{String(index + 1).padStart(2, "0")}</span>
      <div className="relative aspect-[16/10] overflow-hidden bg-fog"><Image src={product.image} alt={`${product.name} supplied by WEI Trading`} fill sizes="(max-width: 768px) 100vw, 280px" className="object-cover" /></div>
      <div className="min-w-0"><p className="font-mono text-[10px] uppercase text-steel">{product.code} / {product.category}</p><h2 className="display-type mt-2 break-words text-2xl uppercase leading-tight sm:text-3xl">{product.name}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-ink/65">{product.description}</p><div className="mt-4 flex flex-wrap gap-2">{product.tags.map((tag) => <span key={tag} className="border border-ink/25 px-2 py-1 font-mono text-[9px] uppercase">{tag}</span>)}</div></div>
      <ArrowUpRight size={22} className="hidden text-cobalt md:block" />
    </article>
  );
}
