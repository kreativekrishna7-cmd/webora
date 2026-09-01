"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Pricing", "/pricing"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <a href="/" className="brand" aria-label="Webora home" onClick={() => setOpen(false)}>
        <span className="brand-mark">W</span>
        <span><strong>WEBORA</strong><small>WEB DESIGN SOLUTIONS</small></span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>

      <a className="btn btn-primary nav-cta" href="/contact">Get a Free Quote <ArrowRight size={16}/></a>

      <button
        className="mobile-menu-btn"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={23}/> : <Menu size={23}/>} 
      </button>

      {open && (
        <div className="mobile-menu">
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </nav>
          <a className="btn btn-primary mobile-menu-cta" href="/contact" onClick={() => setOpen(false)}>
            Get a Free Quote <ArrowRight size={16}/>
          </a>
        </div>
      )}
    </header>
  );
}
