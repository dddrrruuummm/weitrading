import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="flex h-2" aria-hidden="true"><span className="flex-1 bg-signal" /><span className="flex-1 bg-cyan" /><span className="flex-1 bg-valve" /></div>
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.35fr_0.65fr_1fr]">
        <div>
          <div className="flex items-center gap-4"><Image src="/wei-mark.svg" alt="WEI Trading logo" width={64} height={64} className="size-16" /><div><p className="display-type text-3xl uppercase leading-none">WEI TRADING</p><p className="mt-2 font-mono text-[10px] uppercase text-cyan">Pipe + Flow Supply</p></div></div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/55">Imported pipe, valve, pump, and water-system components for wholesale, retail, and qualified local installation needs.</p>
        </div>
        <div>
          <p className="eyebrow text-signal">Index</p>
          <div className="mt-5 grid gap-3 text-sm text-white/65">{navItems.map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}<Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms</Link></div>
        </div>
        <div>
          <p className="eyebrow text-signal">Ontario Supply Desk</p>
          <a href={`mailto:${site.email}`} className="mt-5 flex min-w-0 items-center justify-between gap-3 border-b border-white/20 pb-4 font-bold hover:text-cyan"><span className="break-all">{site.email}</span><ArrowUpRight size={17} className="shrink-0" /></a>
          <a href={`tel:${site.phoneHref}`} className="mt-4 block text-sm text-white/60">{site.phone}</a>
          <a href={site.mapUrl} target="_blank" rel="noreferrer" className="mt-4 flex items-start gap-3 text-sm leading-6 text-white/60 hover:text-white"><MapPin size={17} className="mt-0.5 shrink-0 text-cyan" /><span>{site.address.street}<br />{site.address.city}, {site.address.state} {site.address.postalCode}</span></a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5"><div className="container-page flex flex-wrap justify-between gap-2 font-mono text-[9px] uppercase text-white/35"><span>© 2026 {site.legalName}</span><span>Imported supply / Wholesale / Retail / Local support</span></div></div>
    </footer>
  );
}
