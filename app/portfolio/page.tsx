import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, ExternalLink, ShoppingCart, Stethoscope, Building2, Hotel, BarChart3 } from "lucide-react";

import Header from "../components/Header";
const projects = [
  { slug: "bella-restaurant", title: "Bella Restaurant", category: "Restaurant Website", desc: "A warm, conversion-focused restaurant website built around menu discovery and table enquiries.", Icon: ShoppingCart, tech: "Next.js • Responsive UI • SEO" },
  { slug: "urban-habitat", title: "Urban Habitat", category: "Real Estate Website", desc: "A premium property showcase with clear listings, strong imagery and enquiry-focused navigation.", Icon: Building2, tech: "Next.js • UI/UX • Lead Forms" },
  { slug: "smilecare-clinic", title: "SmileCare Clinic", category: "Healthcare Website", desc: "A trust-first clinic experience designed to make services, doctors and appointments easy to discover.", Icon: Stethoscope, tech: "Next.js • Accessibility • SEO" },
  { slug: "trendify-store", title: "Trendify Store", category: "E-Commerce Website", desc: "A modern shopping experience focused on product discovery, categories and a clean checkout journey.", Icon: ShoppingCart, tech: "Next.js • E-Commerce • Payments" },
  { slug: "saaspro-dashboard", title: "SaaSPro Dashboard", category: "SaaS WebApp", desc: "A focused SaaS dashboard that turns complex business data into an easy-to-scan product experience.", Icon: BarChart3, tech: "React • Dashboard UI • APIs" },
  { slug: "ocean-view-resort", title: "Ocean View Resort", category: "Hotel Website", desc: "A visual-first resort website designed to communicate premium experiences and drive booking enquiries.", Icon: Hotel, tech: "Next.js • Responsive UI • Performance" },
];


export const metadata: Metadata = {
  title: "Web Design Portfolio",
  description:
    "Explore Webora website design and development concepts across restaurants, real estate, healthcare, e-commerce, SaaS and hospitality.",
};

export default function PortfolioPage() {
  return (
    <main className="inner-page">
      <Header />

      <section className="inner-hero">
        <div className="label">OUR PORTFOLIO</div>
        <h1>Work Designed to <span>Make an Impact.</span></h1>
        <p>Explore selected Webora concepts across restaurants, real estate, healthcare, e-commerce, SaaS and hospitality.</p>
      </section>

      <section className="section light">
        <div className="portfolio-filter"><span className="active">All Projects</span><span>Business</span><span>E-Commerce</span><span>SaaS</span></div>
        <div className="portfolio-page-grid">
          {projects.map(({slug,title,category,desc,Icon,tech}) => (
            <Link className="portfolio-page-card" href={`/portfolio/${slug}`} key={slug}>
              <div className="portfolio-page-visual"><div className="visual-browser"><div className="browser-bar"><i/><i/><i/></div><div className="visual-content"><Icon size={34}/><strong>{title}</strong><small>{category}</small><div className="visual-line"/><div className="visual-line short"/></div></div></div>
              <div className="portfolio-page-copy"><div><div className="label">{category}</div><h2>{title}</h2></div><span className="project-arrow"><ArrowRight size={16}/></span><p>{desc}</p><small>{tech}</small></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="inner-cta"><div><div className="label">YOUR BUSINESS COULD BE NEXT</div><h2>Let's create your next standout website.</h2></div><Link className="btn white-btn" href="/contact">Start a Project <ArrowRight size={16}/></Link></section>
    </main>
  );
}
