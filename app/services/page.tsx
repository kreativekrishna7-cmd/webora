import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Headphones, LayoutTemplate, Palette, RefreshCw, Rocket, ShoppingCart } from "lucide-react";

import Header from "../components/Header";
const services = [
  { slug: "website-design", title: "Website Design", desc: "Strategic, modern UI/UX designed around your brand and customers.", Icon: Palette },
  { slug: "website-development", title: "Website Development", desc: "Fast, responsive and maintainable websites built with modern technology.", Icon: Code2 },
  { slug: "e-commerce-solutions", title: "E-Commerce Solutions", desc: "Conversion-focused stores with product, payment and order experiences.", Icon: ShoppingCart },
  { slug: "landing-pages", title: "Landing Pages", desc: "Focused pages built to turn campaign traffic into leads and sales.", Icon: Rocket },
  { slug: "website-redesign", title: "Website Redesign", desc: "A complete visual and UX refresh for outdated websites.", Icon: RefreshCw },
  { slug: "maintenance-and-support", title: "Maintenance & Support", desc: "Reliable updates, fixes, performance checks and ongoing improvements.", Icon: Headphones },
];


export const metadata: Metadata = {
  title: "Website Design & Development Services",
  description:
    "Website design, development, e-commerce, landing pages, redesign and maintenance services from Webora.",
};

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <Header />

      <section className="inner-hero">
        <div className="label">OUR SERVICES</div>
        <h1>Everything Your Business Needs to <span>Grow Online.</span></h1>
        <p>From first design concept to launch and ongoing support, Webora helps businesses build a stronger digital presence.</p>
      </section>

      <section className="section light">
        <div className="service-detail-grid">
          {services.map(({slug, title, desc, Icon}) => (
            <Link className="service-detail-card" href={`/services/${slug}`} key={slug}>
              <div className="icon-box"><Icon size={25}/></div>
              <h2>{title}</h2>
              <p>{desc}</p>
              <span>Explore Service <ArrowRight size={15}/></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="inner-cta">
        <div><div className="label">LET'S BUILD</div><h2>Have a project in mind?</h2><p>Tell us what you need and we'll recommend the right solution.</p></div>
        <Link className="btn white-btn" href="/contact">Start Your Project <ArrowRight size={16}/></Link>
      </section>
    </main>
  );
}
