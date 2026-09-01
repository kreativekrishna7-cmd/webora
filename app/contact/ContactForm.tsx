"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Clock3, Mail, MapPin, MessageCircle, Phone, Loader2 } from "lucide-react";
import Header from "../components/Header";



export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send enquiry.");
      formElement.reset();
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="inner-page">
      <Header />

      <section className="inner-hero contact-hero">
        <div className="label">CONTACT WEBORA</div>
        <h1>Let's Build Something <span>Great Together.</span></h1>
        <p>Tell us about your business and what you want to build. We'll take it from there.</p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <div className="label">GET IN TOUCH</div>
          <h2>Start with a <span>conversation.</span></h2>
          <p>Have a new website in mind, need a redesign, or just want to understand what's possible? Send us the basics and we'll get back to you.</p>
          <div className="contact-method"><div><Mail size={19}/></div><span><b>Email</b><small>krishna.kr.1302@gmail.com</small></span></div>
          <div className="contact-method"><div><Phone size={19}/></div><span><b>Phone / WhatsApp</b><small>+91 70531 99909</small></span></div>
          <div className="contact-method"><div><MapPin size={19}/></div><span><b>Location</b><small>India • Serving clients remotely</small></span></div>
          <div className="contact-method"><div><Clock3 size={19}/></div><span><b>Response time</b><small>Usually within one business day</small></span></div>
          <a className="whatsapp-card" href="https://wa.me/917053199909?text=Hi%20Webora%2C%20I%20am%20interested%20in%20your%20web%20design%20services.%20I%20would%20like%20to%20discuss%20my%20website%20project."><MessageCircle size={22}/><span><b>Prefer WhatsApp?</b><small>Start a quick conversation →</small></span></a>
        </div>

        <div className="contact-form-card">
          {submitted ? (
            <div className="quote-success contact-success"><CheckCircle2 size={46}/><h3>Your enquiry is ready.</h3><p>Your project details have been sent to the Webora team. We'll get back to you soon.</p><button className="btn btn-outline" onClick={() => setSubmitted(false)}>Send Another Enquiry</button></div>
          ) : (
            <form className="quote-form" onSubmit={submit}>
              <div className="form-row"><label>Full Name<input required name="name" placeholder="Your name"/></label><label>Business Name<input required name="business" placeholder="Your business"/></label></div>
              <div className="form-row"><label>Email<input required type="email" name="email" placeholder="you@company.com"/></label><label>Phone / WhatsApp<input required name="phone" placeholder="+91 98765 43210"/></label></div>
              <div className="form-row">
                <label>What do you need?<select required name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Website Design</option><option>Website Development</option><option>E-Commerce</option><option>Landing Page</option><option>Website Redesign</option><option>Maintenance & Support</option><option>Not sure yet</option></select></label>
                <label>Estimated Budget<select required name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Below ₹10,000</option><option>₹10,000 – ₹25,000</option><option>₹25,000 – ₹50,000</option><option>₹50,000+</option><option>Not sure yet</option></select></label>
              </div>
              <label>Tell us about your project<textarea required name="message" rows={6} placeholder="Tell us about your business, website requirements, timeline or anything else that will help us understand the project."></textarea></label>
              {error && <div className="form-error">{error}</div>}<button className="btn btn-primary form-submit" type="submit" disabled={loading}>{loading ? <><Loader2 size={16} className="spin"/> Sending...</> : <>Send Enquiry <ArrowRight size={16}/></>}</button>
              <small className="form-disclaimer">No obligation. No spam. Just a conversation about your project.</small>
            </form>
          )}
        </div>
      </section>

      <section className="inner-cta"><div><div className="label">NOT SURE WHERE TO START?</div><h2>Tell us what you're trying to achieve.</h2></div><Link className="btn white-btn" href="/services">Explore Services <ArrowRight size={16}/></Link></section>
    </main>
  );
}
