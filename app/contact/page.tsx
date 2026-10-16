import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = {alternates:{canonical:"/contact"}, title: "Contact", description: "Request product availability, project pricing, wholesale supply, or local installation support from WEI Trading." };

export default function ContactPage() { return <ContactSection page />; }
