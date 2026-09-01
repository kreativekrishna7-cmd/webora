import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import QuoteForm from "./QuoteForm";

import Header from "../components/Header";
const plans: Array<[string, string, string, string[]]> = [
  [
    "Starter Website",
    "₹9,999",
    "For small businesses and startups",
    ["Up to 5 pages", "Responsive design", "Contact form", "Basic SEO"],
  ],
  [
    "Business Website",
    "₹19,999",
    "For growing businesses",
    ["Up to 10 pages", "Responsive design", "CMS integration", "Basic SEO"],
  ],
  [
    "Premium Website",
    "₹34,999",
    "For brands that want more",
    ["Up to 20 pages", "Advanced animations", "CMS integration", "On-page SEO"],
  ],
  [
    "E-Commerce Website",
    "₹49,999+",
    "For businesses ready to sell online",
    [
      "Product management",
      "Payment gateway",
      "Order management",
      "SEO optimization",
    ],
  ],
];


export const metadata: Metadata = {
  title: "Website Design Pricing",
  description:
    "Explore Webora's transparent website design and development packages for startups, businesses and e-commerce brands.",
};

export default function PricingPage() {
  return (
    <main className="inner-page">
      <Header />

      <section className="inner-hero pricing-hero">
        <div className="label">OUR PRICING</div>
        <h1>Simple Pricing. <span>Serious Results.</span></h1>
        <p>Choose a starting package or tell us what you need. Every Webora project can be tailored to your business, goals and budget.</p>
      </section>

      <section className="section light">
        <div className="pricing-grid pricing-page-grid">
          {plans.map(([title, price, desc, features], index) => (
            <article className={`price-card ${index === 2 ? "popular" : ""}`} key={title}>
              {index === 2 && <div className="popular-tag">MOST POPULAR</div>}
              <div className="plan-icon"><Sparkles size={17}/></div>
              <h3>{title}</h3><p>{desc}</p><strong>{price}</strong><small>Starting From</small>
              <ul>{features.map((f) => <li key={f}><Check size={15}/>{f}</li>)}</ul>
              <Link className={`btn ${index === 2 ? "btn-primary" : "btn-outline"}`} href={`#quote?plan=${encodeURIComponent(title)}`}>Choose This Plan</Link>
            </article>
          ))}
        </div>
        <div className="pricing-note"><b>Need something custom?</b> Tell us your requirements and we'll create a tailored proposal.</div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-intro">
          <div className="label">START A PROJECT</div>
          <h2>Tell us about your <span>website.</span></h2>
          <p>Share a few details and we'll use them to understand your project before we speak.</p>
          <div className="quote-points"><span><Check size={15}/> No obligation</span><span><Check size={15}/> Free initial discussion</span><span><Check size={15}/> Transparent proposal</span></div>
        </div>
        <QuoteForm />
      </section>

      <section className="inner-cta"><div><div className="label">READY TO START?</div><h2>Your next website starts here.</h2></div><Link className="btn white-btn" href="/contact">Get a Free Quote <ArrowRight size={16}/></Link></section>
    </main>
  );
}
