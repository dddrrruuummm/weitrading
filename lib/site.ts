import { productImages } from "./product-images";

export const site = {
  name: "WEI TRADING",
  legalName: "Wei trading LLC",
  url: "https://weitradingllc.com",
  email: "info@weitradingllc.com",
  whatsapp: "+19095550186",
  address: {
    street: "1053 Hollowell St",
    city: "Ontario",
    state: "CA",
    postalCode: "91762",
    country: "United States",
  },
  mapUrl: "https://maps.google.com/?q=1053+Hollowell+St+Ontario+CA+91762",
};

export const navItems = [
  { label: "Company", href: "/about" },
  { label: "Capabilities", href: "/services" },
  { label: "Product Systems", href: "/showcase" },
  { label: "Contact", href: "/contact" },
];

export const products = [
  {
    code: "SYS-01",
    name: "PPR Pipe Systems",
    category: "Residential Water",
    image: "/images/ppr-systems.png",
    description: "PPR pipe, fusion fittings, transitions, and accessories for dependable hot and cold water distribution.",
    tags: ["Hot + Cold", "Fusion Joint", "Residential"],
  },
  {
    code: "SYS-02",
    name: "PE Water & Irrigation",
    category: "Utility Flow",
    image: "/images/pe-systems.png",
    description: "Flexible PE pipe and compatible connection systems for irrigation, site water, and utility applications.",
    tags: ["Flexible", "Irrigation", "Utility"],
  },
  {
    code: "SYS-03",
    name: "PVC Pressure & Drainage",
    category: "Building Systems",
    image: "/images/pvc-systems.png",
    description: "Pressure, drain, waste, and vent pipe with elbows, tees, reducers, and project-ready accessories.",
    tags: ["Pressure", "DWV", "Commercial"],
  },
  {
    code: "SYS-04",
    name: "Valves & Flow Control",
    category: "Control Components",
    image: "/images/valves.png",
    description: "Ball, gate, check, and butterfly valve options for isolation, balancing, and system control.",
    tags: ["Isolation", "Control", "Multiple Materials"],
  },
  {
    code: "SYS-05",
    name: "Pumps & Service Parts",
    category: "Water Movement",
    image: "/images/pumps.png",
    description: "Pumps, housings, impellers, seals, and related parts for circulation and water-transfer needs.",
    tags: ["Transfer", "Circulation", "Service Parts"],
  },
  {
    code: "SYS-06",
    name: "Hardware & Connections",
    category: "Installation Hardware",
    image: "/images/hardware-fittings.png",
    description: "Adapters, unions, flanges, clamps, supports, and threaded components for complete installations.",
    tags: ["Connect", "Support", "Finish"],
  },
  {
    code: "SYS-07",
    name: "Irrigation Assemblies",
    category: "Landscape + Agriculture",
    image: "/images/irrigation.png",
    description: "Pipe, filtration, pressure regulation, drip, and sprinkler components configured for efficient delivery.",
    tags: ["Drip", "Regulation", "Field Systems"],
  },
  {
    code: "SYS-08",
    name: "Drainage Solutions",
    category: "Site Infrastructure",
    image: "/images/drainage.png",
    description: "Large-format pipe, catch basins, cleanouts, grates, and channel drains for managed site runoff.",
    tags: ["Runoff", "Collection", "Site Work"],
  },
  {
    code: "SRV-09",
    name: "Local Installation",
    category: "Selected Service Areas",
    image: "/images/installation-service.png",
    description: "Coordinated installation support for qualified projects in selected Southern California service areas.",
    tags: ["Site Review", "Install", "After-Sales"],
  },
  {
    code: "PRG-10",
    name: "Wholesale Supply Programs",
    category: "Trade Accounts",
    image: "/images/wholesale-logistics.png",
    description: "Consolidated sourcing, mixed-category orders, and scheduled fulfillment for repeat commercial demand.",
    tags: ["Import", "Consolidate", "Fulfill"],
  },
  ...productImages,
] as const;

export const services = [
  { number: "01", title: "Define", text: "Confirm the application, material, dimensions, pressure requirements, quantity, and delivery plan." },
  { number: "02", title: "Source", text: "Match requirements to qualified supply options from established Asian and European sources." },
  { number: "03", title: "Supply", text: "Coordinate import, order consolidation, wholesale or retail fulfillment, and local delivery needs." },
  { number: "04", title: "Support", text: "Provide product guidance, selected-area installation coordination, and responsive after-sales service." },
] as const;

export const capabilities = [
  "Wholesale and retail supply",
  "Asia and Europe sourcing",
  "PPR, PE, and PVC systems",
  "Valves, pumps, and hardware",
  "Mixed project order consolidation",
  "Selected-area installation support",
] as const;
