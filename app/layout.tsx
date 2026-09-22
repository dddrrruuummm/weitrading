import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "WEI Trading | Pipe, Valve & Water Systems", template: "%s | WEI Trading" },
  description: "Ontario, California supplier of PPR, PE, PVC pipe, valves, pumps, fittings, irrigation, and drainage systems for wholesale, retail, and qualified local installation needs.",
  keywords: ["plumbing supply Ontario CA", "PPR pipe supplier", "PE irrigation pipe", "PVC pipe wholesale", "valves and pumps California", "building materials supplier", "WEI Trading"],
  openGraph: {
    title: "WEI Trading | Pipe, Valve & Water Systems",
    description: "Imported plumbing and water-system products for wholesale, retail, and qualified local installation.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/wei-hero.png", width: 1536, height: 1024, alt: "WEI Trading pipe and water systems warehouse" }],
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: "WEI Trading | Pipe, Valve & Water Systems", description: "Imported pipe, valve, pump, and water-system supply from Ontario, California.", images: ["/images/wei-hero.png"] },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    image: `${site.url}/images/wei-hero.png`,
    description: "PPR, PE, PVC, valve, pump, and plumbing hardware supplier serving wholesale, retail, and selected local installation needs.",
    areaServed: ["United States", "Southern California"],
    address: { "@type": "PostalAddress", streetAddress: site.address.street, addressLocality: site.address.city, addressRegion: site.address.state, postalCode: site.address.postalCode, addressCountry: "US" },
    hasMap: site.mapUrl,
  };

  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
