import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ExternalLink, Sparkles } from "lucide-react";

import Header from "../../components/Header";
const DATA: Record<string, [string,string,string,string,string,string]> = {"bella-restaurant": ["Bella Restaurant", "Restaurant Website", "A warm digital experience that makes it easy for hungry customers to discover the menu, location and reservation options.", "Menu discovery, reservation CTA, location section, mobile-first layout, local SEO structure.", "Next.js • Responsive UI • SEO", "Increased clarity around the customer journey and created a stronger mobile experience."], "urban-habitat": ["Urban Habitat", "Real Estate Website", "A premium property experience that helps visitors browse homes, understand key details and send enquiries.", "Property cards, featured listings, property detail structure, enquiry CTA, responsive gallery.", "Next.js • UI/UX • Lead Forms", "Created a polished property-first experience with clear paths from browsing to enquiry."], "smilecare-clinic": ["SmileCare Clinic", "Healthcare Website", "A calm, accessible clinic website focused on trust, services and making appointment information easy to find.", "Doctor profiles, services, appointment CTA, FAQs, accessibility-friendly content structure.", "Next.js • Accessibility • SEO", "Reduced information friction and created a more trustworthy first digital impression."], "trendify-store": ["Trendify Store", "E-Commerce Website", "A modern storefront designed around product discovery and a clean, focused shopping journey.", "Product cards, categories, product detail layout, cart flow, checkout-ready structure.", "Next.js • E-Commerce • Payments", "Designed a scalable storefront foundation with a clear conversion path."], "saaspro-dashboard": ["SaaSPro Dashboard", "SaaS WebApp", "A data-rich dashboard concept that turns complex business metrics into a clean product experience.", "KPI cards, charts area, filters, navigation, responsive dashboard layout.", "React • Dashboard UI • APIs", "Improved scanability by grouping the most important metrics and actions."], "ocean-view-resort": ["Ocean View Resort", "Hotel Website", "A visual-first hospitality experience designed to communicate the property, amenities and booking journey.", "Hero imagery, rooms, amenities, experiences, location and booking CTA.", "Next.js • Responsive UI • Performance", "Built a premium presentation that keeps booking intent visible throughout the journey."]};
export function generateStaticParams() {
  return Object.keys(DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = DATA[slug] ?? DATA["bella-restaurant"];
  return {
    title: `${data[0]} — ${data[1]}`,
    description: data[2],
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = DATA[slug] ?? DATA["bella-restaurant"];
  const [title, category, intro, features, tech, result] = data;

  return (
    <main className="inner-page">
      <Header />

      <section className="project-detail-hero">
        <Link className="back-link" href="/portfolio"><ArrowLeft size={15}/> Back to Portfolio</Link>
        <div className="label">{category}</div>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="detail-actions"><Link className="btn btn-primary" href="/contact">Build Something Similar <ArrowRight size={16}/></Link><a className="btn btn-outline" href="#overview">View Case Study <ArrowRight size={16}/></a></div>
        <div className="case-visual"><div className="case-browser"><div className="browser-bar"><i/><i/><i/></div><div className="case-screen"><div className="case-orb"/><span>WEBORA</span><h3>{title}</h3><p>{category}</p><div className="case-btn">Explore Project</div></div></div></div>
      </section>

      <section className="section light" id="overview">
        <div className="case-layout">
          <div><div className="label">THE APPROACH</div><h2>Designed around the <span>real user journey.</span></h2><p className="detail-copy">{intro} We focus on clarity, visual hierarchy, responsive behavior and business goals rather than adding design for its own sake.</p></div>
          <div className="case-stats"><div><b>01</b><span>Clear structure</span></div><div><b>02</b><span>Responsive UX</span></div><div><b>03</b><span>Conversion focus</span></div></div>
        </div>
      </section>

      <section className="deliver-section">
        <div className="label">FEATURES & DELIVERABLES</div><h2>What was <span>included</span></h2>
        <div className="case-feature-grid">{features.split(", ").map((item) => <div key={item}><Check size={17}/><span>{item}</span></div>)}</div>
        <div className="tech-row"><b>Technology</b><span>{tech}</span></div>
        <div className="result-box"><Sparkles size={22}/><div><b>Project Outcome</b><p>{result}</p></div></div>
      </section>

      <section className="inner-cta"><div><div className="label">LIKE THIS DIRECTION?</div><h2>We can build something similar for you.</h2></div><Link className="btn white-btn" href="/contact">Start Your Project <ArrowRight size={16}/></Link></section>
    </main>
  );
}
