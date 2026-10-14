/**
 * Individual service pages (/services/[slug]).
 *
 * One entry per service on the Home "What We Do" grid. Inclusions mirror
 * the Home comparison table so the two never contradict each other — if a
 * service's scope changes, update both.
 */

export type ServiceDetail = {
  slug: string;
  /** Short audience label — same as the Home grid and comparison table. */
  tag: string;
  /** Visually emphasised ("Most Complete") wherever services are listed. */
  highlight?: boolean;
  title: string;
  italicTitle: string;
  /** Short card description — same copy as the Home grid. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroLine: string;
  heroItalic: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  idealFor: { quote: string; body: string };
  included: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  /** Optional note shown under the inclusions (e.g. how two services combine). */
  note?: string;
};

export const services: ServiceDetail[] = [
  {
    slug: "home-watch",
    tag: "For Vacant Homes",
    title: "Home",
    italicTitle: "Watch",
    summary:
      "Scheduled visits and photo-documented checks for homes standing empty between guest stays.",
    metaTitle: "Home Watch Services in Punta Mita",
    metaDescription:
      "Home watch in Punta Mita: scheduled visits, inspections, and photo-documented reports for luxury homes standing empty between stays.",
    eyebrow: "Home Watch · Punta Mita",
    heroLine: "Your Home, Checked On.",
    heroItalic: "Even When No One Is There.",
    intro:
      "Homes in Punta Mita don't stay still while they're empty — humidity, storms, pests, and small leaks keep working. Home Watch puts a trusted local set of eyes on the property on a regular schedule, with photos after every visit so you always know where things stand.",
    heroImage: "/home/portfolio.jpg",
    heroAlt: "Quiet Punta Mita villa looked after between stays by Beyond Traveling",
    idealFor: {
      quote: "For owners whose home sits empty between their own visits — and who want to know, not wonder.",
      body: "No guests, no rental calendar. Just consistent oversight so small issues are caught before they turn into expensive ones.",
    },
    included: [
      {
        title: "Scheduled Visits",
        body: "Regular walk-throughs on a schedule agreed with you, plus extra checks after heavy rain or storms.",
      },
      {
        title: "Property Inspections",
        body: "Doors, windows, plumbing, air conditioning, pool, and grounds checked against a consistent list every visit.",
      },
      {
        title: "Photo-Documented Reports",
        body: "A dated report with photos after each visit, so you can see the home's condition from anywhere.",
      },
      {
        title: "Issue Flagging",
        body: "Anything that needs attention is reported to you right away, with a clear recommendation on next steps.",
      },
    ],
    steps: [
      { title: "Walk-Through", body: "We meet at the property, learn its quirks, and agree on a visit schedule." },
      { title: "Regular Visits", body: "We check the home on schedule and after weather events." },
      { title: "Visit Reports", body: "You receive photos and notes after every visit — no chasing for updates." },
    ],
  },
  {
    slug: "concierge-service",
    tag: "For Every Stay",
    title: "Concierge",
    italicTitle: "Service",
    summary:
      "Arrival prep and anything a stay requires, arranged directly for you in English or Spanish.",
    metaTitle: "Villa Concierge Service in Punta Mita",
    metaDescription:
      "Bilingual villa concierge in Punta Mita: arrival preparation, reservations, private chefs, transportation, and on-call support during every stay.",
    eyebrow: "Concierge Service · Punta Mita",
    heroLine: "Every Stay Arranged.",
    heroItalic: "Before You Even Arrive.",
    intro:
      "Whether it's you, your family, or your guests arriving, Concierge Service handles the details that make a stay feel effortless — the home ready on arrival, the right reservations made, and a local, bilingual team on call throughout.",
    heroImage: "/home/hero.jpg",
    heroAlt: "Luxury Punta Mita terrace prepared for arriving guests",
    idealFor: {
      quote: "For owners and guests who want the stay itself handled — without handing over the whole property.",
      body: "Use it for your own visits, or alongside your own rental setup. Arranged directly, in English or Spanish.",
    },
    included: [
      {
        title: "Arrival Preparation",
        body: "The home opened, cleaned, stocked, and ready — groceries, flowers, and preferences taken care of before arrival.",
      },
      {
        title: "Reservations & Experiences",
        body: "Restaurants, golf, boat trips, spa days, and private chefs booked with local partners we know and trust.",
      },
      {
        title: "Transportation",
        body: "Airport transfers and drivers coordinated so the trip starts the moment you land.",
      },
      {
        title: "On-Call During the Stay",
        body: "Fast, personal responses throughout the stay — whatever comes up, someone local answers.",
      },
    ],
    steps: [
      { title: "Tell Us the Plan", body: "Dates, guests, preferences — share what you know and we fill in the rest." },
      { title: "We Arrange It", body: "Arrival prep, bookings, and transfers confirmed ahead of time." },
      { title: "We Stay Available", body: "On call during the stay, in English or Spanish." },
    ],
  },
  {
    slug: "vacation-rental-management",
    tag: "Guests & Bookings",
    title: "Vacation Rental",
    italicTitle: "Management",
    summary:
      "Listings, pricing, and every guest conversation — the entire rental business, run for you. Bookable on its own.",
    metaTitle: "Vacation Rental Management in Punta Mita",
    metaDescription:
      "Vacation rental management in Punta Mita: listings, pricing, bookings, guest communication, arrival coordination, and monthly owner reporting.",
    eyebrow: "Vacation Rental Management · Punta Mita",
    heroLine: "The Rental Business,",
    heroItalic: "Run for You.",
    intro:
      "Renting a luxury home well takes more than a listing. Vacation Rental Management covers the guest side of the business — how the home is presented and priced, every inquiry and booking, and the experience guests have from first message to check-out.",
    heroImage: "/properties/villa-amore.jpg",
    heroAlt: "Luxury vacation rental villa in Punta Mita managed by Beyond Traveling",
    idealFor: {
      quote: "For owners who want strong rental results without answering guest messages themselves.",
      body: "We run the bookings, guests, and calendar. Upkeep of the house itself can stay with you — or add Property Management for both.",
    },
    included: [
      {
        title: "Listings & Presentation",
        body: "Listings written and maintained so the home is shown the way it deserves to be seen.",
      },
      {
        title: "Pricing & Bookings",
        body: "Rates adjusted to season and demand, with inquiries, bookings, and the calendar managed end to end.",
      },
      {
        title: "Guest Communication",
        body: "Every guest conversation handled — before arrival, during the stay, and after check-out.",
      },
      {
        title: "Arrival & Guest Concierge",
        body: "Check-in coordination, arrival prep, and concierge requests handled for every booking.",
      },
      {
        title: "Monthly Owner Reporting",
        body: "Clear monthly reports on bookings, revenue, and costs — no hidden fees.",
      },
    ],
    steps: [
      { title: "Review the Home", body: "We look at the property, its rental history, and your goals." },
      { title: "Set Up & Launch", body: "Listings, pricing, and the calendar set up — or taken over from your current setup." },
      { title: "Run & Report", body: "We manage bookings and guests, and report to you every month." },
    ],
  },
  {
    slug: "property-management",
    tag: "Property Only",
    title: "Property",
    italicTitle: "Management",
    summary:
      "Maintenance, vendors, and bills for the house itself — you keep the guests and the calendar. Bookable on its own.",
    metaTitle: "Luxury Property Management in Punta Mita",
    metaDescription:
      "Property management in Punta Mita: inspections, preventive maintenance, trusted vendors, bill pay, and monthly reporting for luxury homes.",
    eyebrow: "Property Management · Punta Mita",
    heroLine: "The House Itself,",
    heroItalic: "Looked After Properly.",
    intro:
      "Property Management takes care of the physical home and the administration behind it — inspections, preventive maintenance, trusted local vendors, and the bills that keep everything running. You keep control of guests and the calendar; we keep the house in excellent condition.",
    heroImage: "/home/partnership.jpg",
    heroAlt: "Well-maintained luxury home in Punta Mita",
    idealFor: {
      quote: "For owners who handle their own guests — or don't rent at all — but want the house in expert hands.",
      body: "Booking and guest communication stay with you. Add Vacation Rental Management any time to hand over both.",
    },
    included: [
      {
        title: "Inspections & Visits",
        body: "Scheduled visits with photo-documented reports, so you always know the home's condition.",
      },
      {
        title: "Preventive Maintenance",
        body: "Pool, gardens, air conditioning, and systems kept on a maintenance plan — not fixed only when they fail.",
      },
      {
        title: "Vendor Coordination",
        body: "Trusted local vendors scheduled, supervised, and held to the standard your home requires.",
      },
      {
        title: "Bill Pay & Administration",
        body: "Utilities, HOA, staff, and service invoices handled on your behalf, with every expense accounted for.",
      },
      {
        title: "Monthly Owner Reporting",
        body: "One clear monthly report covering visits, work completed, and spending.",
      },
    ],
    steps: [
      { title: "Property Review", body: "We walk the home, document its systems, and note what needs attention." },
      { title: "Care Plan", body: "A maintenance schedule and vendor setup agreed with you." },
      { title: "Ongoing Oversight", body: "Visits, upkeep, and bills handled, reported monthly." },
    ],
  },
  {
    slug: "full-service-management",
    tag: "Most Complete",
    highlight: true,
    title: "Full-Service",
    italicTitle: "Management",
    summary:
      "Property Management and Vacation Rental Management, combined into one team and one report.",
    metaTitle: "Full-Service Villa Management in Punta Mita",
    metaDescription:
      "Full-service villa management in Punta Mita: property care, maintenance, vendors, bookings, guests, and reporting — handled by one local team.",
    eyebrow: "Full-Service Management · Punta Mita",
    heroLine: "The House and the Rental Business.",
    heroItalic: "One Team, One Report.",
    intro:
      "Full-Service Management combines Property Management and Vacation Rental Management — maintenance, vendors, and bills, plus the bookings, guests, and calendar, handled by the same team. Most owners who want to be fully hands-off land here.",
    heroImage: "/properties/villa-brezza.jpg",
    heroAlt: "Luxury Punta Mita villa under full-service management by Beyond Traveling",
    idealFor: {
      quote: "For owners who want to be fully hands-off — and still know exactly what's happening.",
      body: "One team looks after the home and the rental business, so nothing falls between two providers.",
    },
    included: [
      {
        title: "Everything in Property Management",
        body: "Inspections, photo reports, preventive maintenance, vendor coordination, and bill pay.",
      },
      {
        title: "Everything in Vacation Rental Management",
        body: "Listings, pricing, bookings, and every guest conversation from inquiry to check-out.",
      },
      {
        title: "Arrival Prep & Guest Concierge",
        body: "Each stay prepared and supported by the same team that maintains the home.",
      },
      {
        title: "One Monthly Report",
        body: "Property care, rental performance, and spending — together in a single, clear report.",
      },
    ],
    note:
      "Property Management and Vacation Rental Management can also be booked separately — Full-Service Management is simply the two together.",
    steps: [
      { title: "Property & Rental Review", body: "We assess the home, its rental performance, and your goals." },
      { title: "Onboarding", body: "Maintenance plan, vendors, listings, and calendar set up in one go." },
      { title: "One Team, Ongoing", body: "We run the house and the rental business, reported monthly." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
