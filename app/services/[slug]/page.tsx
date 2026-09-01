import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";

import Header from "../../components/Header";
const DATA = {
  "website-design": {
    title: "Website Design", kicker: "STRATEGY • UI/UX • BRAND",
    intro: "Beautiful interfaces designed to make your business look credible, memorable and easy to choose.",
    bullets: ["Custom visual direction", "Responsive UI/UX", "Conversion-focused layouts", "Design system and reusable components"],
    deliverables: ["Discovery and sitemap", "Wireframes", "High-fidelity page designs", "Mobile and desktop layouts", "Design handoff"],
  },
  "website-development": {
    title: "Website Development", kicker: "BUILD • PERFORMANCE • SCALE",
    intro: "Fast, secure and maintainable websites engineered around your business goals.",
    bullets: ["Responsive frontend development", "Modern performance practices", "CMS/API integrations", "Production-ready deployment"],
    deliverables: ["Component architecture", "Page implementation", "Forms and integrations", "Performance optimization", "Testing and launch support"],
  },
  "e-commerce-solutions": {
    title: "E-Commerce Solutions", kicker: "SELL • CONVERT • GROW",
    intro: "Online stores designed to make product discovery, checkout and repeat purchases easier.",
    bullets: ["Product-focused UX", "Cart and checkout flows", "Payment integration", "Order and catalog management"],
    deliverables: ["Storefront design", "Product/category pages", "Checkout experience", "Payment and order integrations", "Launch optimization"],
  },
  "landing-pages": {
    title: "Landing Pages", kicker: "CAMPAIGNS • LEADS • SALES",
    intro: "Focused landing experiences built around one clear action, whether that is a lead, booking or sale.",
    bullets: ["Campaign-specific messaging", "Strong CTA hierarchy", "Mobile-first layouts", "Analytics-ready structure"],
    deliverables: ["Page strategy", "Copy structure", "High-converting design", "Responsive implementation", "Launch and iteration support"],
  },
  "website-redesign": {
    title: "Website Redesign", kicker: "REFRESH • IMPROVE • MODERNIZE",
    intro: "Turn an outdated website into a polished digital experience without losing what already works.",
    bullets: ["UX audit", "Visual refresh", "Content hierarchy improvements", "Performance and mobile improvements"],
    deliverables: ["Current-site review", "Redesign direction", "New page layouts", "Responsive rebuild", "Post-launch refinement"],
  },
  "maintenance-and-support": {
    title: "Maintenance & Support", kicker: "MAINTAIN • SECURE • IMPROVE",
    intro: "Ongoing help that keeps your website current, reliable and ready for your next business requirement.",
    bullets: ["Content and design updates", "Bug fixes", "Performance checks", "Feature improvements"],
    deliverables: ["Routine updates", "Issue resolution", "Technical checks", "Backup/monitoring guidance", "Continuous improvements"],
  },
} as const;

type Slug = keyof typeof DATA;

export function generateStaticParams() {
  return Object.keys(DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = DATA[slug as Slug] ?? DATA["website-design"];
  return {
    title: data.title,
    description: data.intro,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = DATA[slug as Slug] ?? DATA["website-design"];

  return (
    <main className="inner-page">
      <Header />

      <section className="service-hero-detail">
        <Link className="back-link" href="/services"><ArrowLeft size={15}/> All Services</Link>
        <div className="service-detail-kicker">{data.kicker}</div>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
        <div className="detail-actions"><Link className="btn btn-primary" href="/contact">Start Your Project <ArrowRight size={16}/></Link><Link className="btn btn-outline" href="/portfolio">View Our Work <ArrowRight size={16}/></Link></div>
      </section>

      <section className="section light">
        <div className="detail-layout">
          <div><div className="label">WHAT YOU GET</div><h2>A solution built around your <span>business.</span></h2><p className="detail-copy">We combine clear communication, thoughtful design and practical technology so the final website is useful for both your customers and your team.</p></div>
          <div className="detail-bullets">{data.bullets.map((item) => <div key={item}><Check size={17}/><span>{item}</span></div>)}</div>
        </div>
      </section>

      <section className="deliver-section">
        <div className="label">DELIVERABLES</div><h2>What we'll <span>deliver</span></h2>
        <div className="deliver-grid">{data.deliverables.map((item, i) => <div className="deliver-card" key={item}><span>0{i+1}</span><Sparkles size={18}/><h3>{item}</h3></div>)}</div>
      </section>

      <section className="inner-cta"><div><div className="label">READY WHEN YOU ARE</div><h2>Let's turn your idea into a website.</h2></div><Link className="btn white-btn" href="/contact">Get a Free Quote <ArrowRight size={16}/></Link></section>
    </main>
  );
}
