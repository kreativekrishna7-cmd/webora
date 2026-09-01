import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Code2, Heart, Lightbulb, ShieldCheck, Sparkles, Target, Users, Zap } from "lucide-react";

import Header from "../components/Header";
const values: Array<
  [string, string, React.ComponentType<{ size?: number }>]
> = [
  [
    "Creativity",
    "We create distinctive digital experiences instead of recycling generic templates.",
    Sparkles,
  ],
  [
    "Quality",
    "Every page is designed with attention to detail, responsiveness and performance.",
    ShieldCheck,
  ],
  [
    "Transparency",
    "Clear scope, clear communication and straightforward pricing.",
    Lightbulb,
  ],
  [
    "Commitment",
    "We stay involved from the first idea through launch and beyond.",
    Heart,
  ],
];

const strengths = [
  ["Business-first thinking", "We start with your customers and goals, not just colors and animations."],
  ["Modern technology", "We use current web technologies to build fast and maintainable experiences."],
  ["Personal attention", "You work directly with the people shaping your project."],
  ["Long-term support", "A launch is the beginning. We can continue improving your website as you grow."],
];


export const metadata: Metadata = {
  title: "About Webora",
  description:
    "Learn about Webora's approach to strategy, design, development and long-term website growth.",
};

export default function AboutPage() {
  return (
    <main className="inner-page">
      <Header />

      <section className="inner-hero about-hero">
        <div className="label">ABOUT WEBORA</div>
        <h1>We Build Digital Experiences That <span>Move Businesses Forward.</span></h1>
        <p>Webora is a web design and development studio focused on helping businesses create a credible, modern and high-performing presence online.</p>
      </section>

      <section className="section light">
        <div className="about-story">
          <div>
            <div className="label">OUR STORY</div>
            <h2>More than a website. <span>A business asset.</span></h2>
            <p>We believe a website should do more than sit online. It should explain what you offer, build trust, make the next step obvious and support the way your business grows.</p>
            <p>That's why our process brings together strategy, design, development and performance instead of treating them as separate pieces.</p>
            <Link className="btn btn-primary" href="/services">Explore Our Services <ArrowRight size={16}/></Link>
          </div>
          <div className="about-visual">
            <div className="about-orbit orbit-a"/><div className="about-orbit orbit-b"/>
            <div className="about-center"><span>W</span><b>WEBORA</b><small>DESIGN • BUILD • GROW</small></div>
          </div>
        </div>
      </section>

      <section className="about-dark">
        <div className="section-heading"><div className="label">WHAT WE BELIEVE</div><h2>Our values shape <span>every project.</span></h2></div>
        <div className="value-grid">
          {values.map(([title, desc, Icon]) => <article key={title}><div className="value-icon"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="section light">
        <div className="about-strengths">
          <div><div className="label">WHY WEBORA</div><h2>A practical partner for your <span>digital growth.</span></h2><p>Whether you're starting from zero or replacing an outdated website, we keep the experience focused on what matters: your customers and your business.</p></div>
          <div className="strength-list">{strengths.map(([title, desc], i) => <div key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{desc}</p></div><Check size={17}/></div>)}</div>
        </div>
      </section>

      <section className="about-metrics">
        <div><b>10+</b><span>Projects</span></div><div><b>6</b><span>Happy Clients</span></div><div><b>3+</b><span>Years Experience</span></div><div><b>100%</b><span>Commitment</span></div>
      </section>

      <section className="inner-cta"><div><div className="label">LET'S WORK TOGETHER</div><h2>Have a business that deserves a better website?</h2></div><Link className="btn white-btn" href="/contact">Start a Conversation <ArrowRight size={16}/></Link></section>
    </main>
  );
}
