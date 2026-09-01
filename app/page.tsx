import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Code2,
  Headphones,
  LayoutTemplate,
  MonitorSmartphone,
  Palette,
  Rocket,
  Search,
  ShoppingCart,
  Sparkles,
  Gauge,
  RefreshCw,
  ShieldCheck,
  Star,
  Zap,
  TrendingUp,
} from "lucide-react";
import Header from "./components/Header";

const services = [
  ["Website Design", "Beautiful, modern and user-friendly designs that represent your brand.", Palette],
  ["Website Development", "Fast, secure and scalable websites built with modern technologies.", Code2],
  ["E-Commerce Solutions", "Powerful online stores that help you sell more and grow your business.", ShoppingCart],
  ["Landing Pages", "High-converting landing pages for campaigns, products and services.", Rocket],
  ["Website Redesign", "Transform outdated websites into modern, high-performing experiences.", RefreshCw],
  ["Maintenance & Support", "Ongoing maintenance, updates and support so your site stays perfect.", Headphones],
] as const;

const projects = [
  ["Bella Restaurant", "Restaurant Website", "🍕", "Warm dining experience"],
  ["Urban Habitat", "Real Estate Website", "🏡", "Premium property showcase"],
  ["SmileCare Clinic", "Healthcare Website", "🩺", "Trust-first patient journey"],
  ["Trendify Store", "E-Commerce Website", "🛍️", "Modern shopping experience"],
  ["SaaSPro Dashboard", "SaaS WebApp", "📊", "Data-driven product UI"],
  ["Ocean View Resort", "Hotel Website", "🌴", "Luxury travel experience"],
];

const benefits = [
  ["Mobile First", "Every website we build looks perfect on any device.", MonitorSmartphone],
  ["Lightning Fast", "Optimized for speed and better performance.", Gauge],
  ["SEO Friendly", "Built with SEO best practices to help you rank higher.", Search],
  ["Custom Design", "Unique and creative designs made just for your brand.", Sparkles],
  ["Affordable Pricing", "High-quality websites at fair and transparent prices.", Zap],
  ["Ongoing Support", "We're always here to help when you need us.", Headphones],
] as const;

const process = [
  ["01", "Discover", "We understand your business, audience and goals.", Search],
  ["02", "Design", "We create the visual direction and experience for your brand.", Palette],
  ["03", "Develop", "We build, secure and integrate your website.", Code2],
  ["04", "Launch", "We test everything and launch your website.", Rocket],
  ["05", "Grow", "We help you improve and grow with ongoing support.", TrendingUp],
] as const;

const pricing: Array<[string, string, string, string[]]> = [
  [
    "Starter Website",
    "₹9,999",
    "Perfect for small businesses and startups",
    ["Up to 5 Pages", "Responsive Design", "Contact Form", "Basic SEO"],
  ],
  [
    "Business Website",
    "₹19,999",
    "Professional website for growing businesses",
    ["Up to 10 Pages", "Responsive Design", "CMS Integration", "Basic SEO"],
  ],
  [
    "Premium Website",
    "₹34,999",
    "Advanced website with custom features",
    ["Up to 20 Pages", "Advanced Animations", "CMS Integration", "On-Page SEO"],
  ],
  [
    "E-Commerce Website",
    "₹49,999+",
    "Powerful online store to sell your products",
    ["Product Management", "Payment Gateway", "Order Management", "SEO Optimization"],
  ],
];


export const metadata: Metadata = {
  title: "Web Design & Development for Growing Businesses",
  description:
    "Modern, fast and conversion-focused websites designed and developed by Webora for businesses in India and worldwide.",
};

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow">WE DESIGN <i>•</i> WE BUILD <i>•</i> WE GROW</div>
          <h1>Websites That <span>Work</span> for Your Business.</h1>
          <p>We create modern, fast and conversion-focused websites that help businesses attract customers and grow online.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/contact">Start Your Project <ArrowRight size={17}/></a>
            <a className="btn btn-outline" href="#portfolio">View Our Work <ArrowRight size={17}/></a>
          </div>
          <div className="hero-points">
            {["Modern Design", "Fast Performance", "SEO Friendly", "Mobile Responsive"].map(x => <span key={x}><Check size={14}/>{x}</span>)}
          </div>
        </div>
        <div className="hero-device" aria-hidden="true">
          <div className="laptop">
            <div className="screen">
              <div className="screen-top">WEBORA <span>Digital experiences</span></div>
              <div className="screen-title">DIGITAL<br/><b>EXPERIENCES</b></div>
              <div className="screen-wave" />
              <div className="mini-button">Discover</div>
            </div>
          </div>
          <div className="phone">
            <div className="phone-screen">
              <div className="mini-logo">W</div>
              <h4>DIGITAL<br/>EXPERIENCES</h4>
              <div className="mini-button">Discover</div>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stat-intro"><b>Trusted by businesses</b><span>of all sizes</span></div>
          <div><b>10+</b><span>Projects Completed</span></div>
          <div><b>6</b><span>Happy Clients</span></div>
          <div><b>3+</b><span>Years Experience</span></div>
          <div><b>100%</b><span>Client Satisfaction</span></div>
        </div>
      </section>

      <section className="section light" id="services">
        <div className="section-heading center">
          <div className="label">OUR SERVICES</div>
          <h2>What We Can Do for <span>You</span></h2>
          <p>Everything you need to build a strong and effective online presence.</p>
        </div>
        <div className="service-grid">
          {services.map(([title, desc, Icon]) => (
            <a className="service-card" key={title} href={`/services/${title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}>
              <div className="icon-box"><Icon size={23}/></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="service-link">Learn More <ArrowRight size={14}/></span>
            </a>
          ))}
        </div>
      </section>

      <section className="section portfolio-section" id="portfolio">
        <div className="section-heading row-heading">
          <div><div className="label">OUR PORTFOLIO</div><h2>Some of Our Recent Work</h2></div>
          <a className="btn btn-outline" href="/portfolio">View All Projects <ArrowRight size={16}/></a>
        </div>
        <div className="project-grid">
          {projects.map(([title, category, emoji, sub]) => (
            <a className="project-card" key={title} href={`/portfolio/${title.toLowerCase().replaceAll(" ", "-")}`}>
              <div className="project-image"><div className="project-pattern">{emoji}</div><span>WEBORA</span></div>
              <div className="project-meta"><div><h3>{title}</h3><p>{category}</p></div><span className="project-arrow" aria-hidden="true"><ArrowRight size={15}/></span></div>
              <div className="project-sub">{sub}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="section light" id="about">
        <div className="why-layout">
          <div className="why-copy">
            <div className="label">WHY CHOOSE WEBORA</div>
            <h2>We Build More Than Just Websites.</h2>
            <p>We build digital experiences that drive results and help your business grow.</p>
            <a className="btn btn-primary" href="/about">Know More About Us <ArrowRight size={16}/></a>
          </div>
          <div className="benefit-grid">
            {benefits.map(([title, desc, Icon]) => <div className="benefit" key={title}><Icon size={22}/><div><h3>{title}</h3><p>{desc}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-wrap">
          <div className="label">OUR PROCESS</div>
          <h2>From Idea to Launch<br/><span>We've Got You Covered</span></h2>
          <div className="process-grid">
            {process.map(([num, title, desc, Icon]) => (
              <div className="process-item" key={num}>
                <div className="process-top"><span className="process-number">{num}</span><span className="process-icon"><Icon size={19}/></span></div>
                <div className="process-copy"><h3>{title}</h3><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light" id="pricing">
        <div className="section-heading center">
          <div className="label">OUR PRICING</div>
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose a starting point. Every project can be customized to your needs.</p>
        </div>
        <div className="pricing-grid">
          {pricing.map(([title, price, desc, features], index) => <article className={`price-card ${index === 2 ? "popular" : ""}`} key={title}>
            {index === 2 && <div className="popular-tag">MOST POPULAR</div>}
            <h3>{title}</h3><p>{desc}</p><strong>{price}</strong><small>Starting From</small>
            <ul>{features.map(f => <li key={f}><Check size={15}/>{f}</li>)}</ul>
            <a className={`btn ${index === 2 ? "btn-primary" : "btn-outline"}`} href={`/pricing?plan=${encodeURIComponent(title)}`}>Get Started</a>
          </article>)}
        </div>
      </section>

      <section className="section testimonials">
        <div className="testimonial-intro"><div className="label">TESTIMONIALS</div><h2>What Our Clients Say</h2><div className="rating"><Star fill="currentColor" size={17}/><b>4.9/5</b></div><small>Based on 30+ Reviews</small></div>
        <div className="quotes">
          {[
            ["Arjun Mehta", "Bella Restaurant", "Webora created an amazing website for our restaurant. The design is beautiful and we've seen more customers since the launch!"],
            ["Priya Sharma", "Urban Habitat", "Very professional team and great communication. They delivered our website on time and exactly how we wanted."],
            ["Rohit Verma", "Trendify Store", "Our e-commerce store looks fantastic and works perfectly. Highly recommend Webora for any web project."],
          ].map(([name, company, quote]) => <blockquote key={name}><div className="avatar">{name[0]}</div><div><b>{name}</b><small>{company}</small><p>“{quote}”</p></div></blockquote>)}
        </div>
      </section>

      <section className="cta" id="contact">
        <div><h2>Ready to Build Your Dream Website?</h2><p>Let's work together to create a website that helps your business grow.</p></div>
        <div className="cta-actions"><a className="btn white-btn" href="/contact">Get a Free Quote <ArrowRight size={16}/></a><a className="btn cta-outline" href="https://wa.me/917053199909?text=Hi%20Webora%2C%20I%20am%20interested%20in%20your%20web%20design%20services.%20I%20would%20like%20to%20discuss%20my%20website%20project.">Chat on WhatsApp</a></div>
      </section>

      <footer>
        <div className="footer-brand"><a href="#" className="brand"><span className="brand-mark">W</span><span><strong>WEBORA</strong><small>WEB DESIGN SOLUTIONS</small></span></a><p>We design and develop modern, fast and high-performing websites that help businesses grow online.</p></div>
        <div><h4>Quick Links</h4><a href="#">Home</a><a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="/pricing">Pricing</a><a href="/about">About Us</a><a href="/contact">Contact</a></div>
        <div><h4>Services</h4><a href="/services/website-design">Website Design</a><a href="/services/website-development">Website Development</a><a href="/services/e-commerce-solutions">E-Commerce</a><a href="/services/landing-pages">Landing Pages</a><a href="/services/website-redesign">Redesign</a><a href="/services/maintenance-and-support">Maintenance</a></div>
        <div><h4>Company</h4><a href="/about">About Us</a><a href="#process">Our Process</a><a href="#contact">Testimonials</a><a href="#">Blog</a><a href="#">FAQs</a></div>
        <div><h4>Get In Touch</h4><p>📞 +91 70531 99909</p><p>✉ krishna.kr.1302@gmail.com</p><p>📍 India</p><p className="muted">Follow us for updates and insights.</p></div>
      </footer>
      <div className="copyright">© 2026 Webora. All rights reserved. <span>Privacy Policy · Terms</span></div>
    </main>
  );
}
