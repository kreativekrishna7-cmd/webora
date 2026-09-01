import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Webora",
  description:
    "Tell Webora about your website project, redesign, e-commerce store or ongoing support requirements.",
};

export default function ContactPage() {
  return <ContactForm />;
}
