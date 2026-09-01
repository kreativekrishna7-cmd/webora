 "use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send enquiry.");
      }

      formElement.reset();
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="quote-success">
        <CheckCircle2 size={44}/>
        <h3>Enquiry sent successfully.</h3>
        <p>Thank you. Your project details have been sent to the Webora team. We'll get back to you soon.</p>
        <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Send Another Enquiry</button>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-row">
        <label>Full Name<input required name="name" placeholder="Your name"/></label>
        <label>Business Name<input required name="business" placeholder="Your business"/></label>
      </div>
      <div className="form-row">
        <label>Email Address<input required type="email" name="email" placeholder="you@company.com"/></label>
        <label>Phone / WhatsApp<input required name="phone" placeholder="+91 98765 43210"/></label>
      </div>
      <div className="form-row">
        <label>What do you need?
          <select required name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Website Design</option><option>Website Development</option><option>E-Commerce</option><option>Landing Page</option><option>Website Redesign</option><option>Maintenance & Support</option>
          </select>
        </label>
        <label>Estimated Budget
          <select required name="budget" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>Below ₹10,000</option><option>₹10,000 – ₹25,000</option><option>₹25,000 – ₹50,000</option><option>₹50,000+</option><option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label>Tell us about your project<textarea required name="message" rows={5} placeholder="What does your business do? What kind of website do you need?"></textarea></label>
      {error && <div className="form-error">{error}</div>}
      <button className="btn btn-primary form-submit" type="submit" disabled={loading}>
        {loading ? <><Loader2 size={16} className="spin"/> Sending...</> : <>Send Project Enquiry <ArrowRight size={16}/></>}
      </button>
      <small className="form-disclaimer">Your details are used only to respond to your project enquiry.</small>
    </form>
  );
}