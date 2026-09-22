import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white text-ink">
      <div className="hidden h-8 bg-ink text-white md:block">
        <div className="container-page flex h-full items-center justify-between font-mono text-[10px] uppercase">
          <span>PPR / PE / PVC / VALVES / PUMPS</span>
          <a href={site.mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/65 hover:text-white"><MapPin size={12} />Ontario, California 91762</a>
        </div>
      </div>
      <div className="border-b border-ink/20">
        <div className="container-page flex min-h-[76px] min-w-0 items-stretch justify-between">
          <Link href="/" aria-label="WEI Trading home" className="flex min-w-0 items-center gap-3 pr-3">
            <Image src="/wei-mark.svg" alt="WEI Trading pipe route logo" width={52} height={52} priority className="size-12 shrink-0" />
            <span className="min-w-0">
              <strong className="display-type block whitespace-nowrap text-lg uppercase leading-none sm:text-xl">WEI TRADING</strong>
              <span className="mt-1 hidden font-mono text-[9px] uppercase text-steel sm:block">Pipe + Flow Supply</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-bold lg:flex">{navItems.slice(0, 3).map((item) => <Link key={item.href} href={item.href} className="border-b-2 border-transparent py-1 transition hover:border-cobalt hover:text-cobalt">{item.label}</Link>)}</nav>
          <Link href="/contact" className="flex shrink-0 items-center justify-center gap-2 border-l border-ink/20 bg-cobalt px-4 text-xs font-bold text-white transition hover:bg-ink sm:px-7 sm:text-sm"><span className="hidden sm:inline">Request a quote</span><span className="sm:hidden">Quote</span><ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </header>
  );
}
