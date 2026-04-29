"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import SubHeading from "./smallComponents/SubHeading";
import { Email, Number1, Number2, Number3 } from "@/constants/PhoneNumbers";
import { SITE_URL } from "@/constants/SiteURL";

const PHONE_NUMBERS = [
  { number: Number1, href: `tel:${Number1}` },
  { number: Number2, href: `tel:${Number2}` },
  { number: Number3, href: `tel:${Number3}` },
];

const OFFICES = [
  "Rohini Sec 2, Pkt. 4, Delhi",
  "Gaur City 2, Venue 16, Ghaziabad",
  "Mayur Vihar Ph3, DDA Flats, Delhi",
  "Defence Colony, Onco Plus Hospital, Delhi",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    urgency: "non-emergency",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1800));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", message: "", urgency: "non-emergency" });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24 bg-[#F8F7F4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center mb-12 sm:mb-16">
          <SubHeading title="Contact Us" />
          <p
            id="contact-heading"
            className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            For emergencies, call our 24/7 hotline immediately. For
            non-emergency inquiries, fill out the form or reach us through our
            other channels below.
          </p>
        </div>

        {/* ── EMERGENCY CALL BANNER ── */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden mb-8 sm:mb-10">
          <div className="h-1 bg-red-600" aria-hidden="true" />
          <div className="px-6 py-6 sm:px-10 sm:py-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="text-center sm:text-left flex-1">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-400 mb-1">
                Emergency Line · 24/7
              </p>
              <h3
                className="text-xl sm:text-2xl font-extrabold text-white leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Need an Ambulance Right Now?
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Answered in under 3 rings — no hold music, no queues.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
              {PHONE_NUMBERS.map(({ number, href }) => (
                <a
                  key={number}
                  href={href}
                  className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl transition-all w-full sm:w-auto"
                  aria-label={`Call ${number}`}
                >
                  <Phone className="w-4 h-4 animate-pulse" aria-hidden="true" />
                  {number}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* ── INFO CARDS ── */}
          <div className="flex flex-col gap-5">

            {/* Offices */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0" aria-hidden="true">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                </span>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Our Offices</h4>
              </div>
              <ul className="space-y-2.5" aria-label="Office locations">
                {OFFICES.map((addr) => (
                  <li key={addr} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" aria-hidden="true" />
                    {addr}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0" aria-hidden="true">
                  <Clock className="w-4 h-4 text-amber-600" />
                </span>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Service Hours</h4>
              </div>
              <dl className="space-y-2 text-sm">
                {[
                  { label: "Emergency Services", value: "24 / 7 / 365" },
                  { label: "Customer Support", value: "24 / 7 / 365" },
                  { label: "Office Hours", value: "10:00 AM – 6:00 PM" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between gap-4">
                    <dt className="text-gray-500">{label}</dt>
                    <dd className="font-semibold text-gray-800 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Email */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0" aria-hidden="true">
                  <Mail className="w-4 h-4 text-sky-600" />
                </span>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Email & Web</h4>
              </div>
              <div className="space-y-1.5 text-sm">
                <a
                  href={`mailto:${Email}`}
                  className="block text-sky-600 hover:text-sky-700 font-medium hover:underline"
                >
                  {Email}
                </a>
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-500 hover:text-gray-700 text-xs"
                >
                  www.maambulanceservice.com
                </a>
              </div>
            </div>
          </div>

          {/* ── CONTACT FORM ── */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-8">
            <h3
              className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Send Us a Message
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              For emergencies, call directly — don't wait for a form reply.
            </p>

            {submitted ? (
              <div
                role="alert"
                aria-live="polite"
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <CheckCircle className="w-12 h-12 text-emerald-500" aria-hidden="true" />
                <p className="text-base font-semibold text-gray-800">Message received!</p>
                <p className="text-sm text-gray-500">We'll get back to you within a few hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                {/* Urgency */}
                <div>
                  <label htmlFor="urgency" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Type of Inquiry
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50 text-gray-700"
                  >
                    <option value="booking">Ambulance Booking</option>
                    <option value="non-emergency">General Inquiry</option>
                    <option value="feedback">Feedback / Complaint</option>
                    <option value="partnership">Partnership / B2B</option>
                  </select>
                  {formData.urgency === "emergency" && (
                    <p className="mt-2 text-xs text-red-600 font-semibold" role="alert">
                      ⚠️ Medical emergency? Please call immediately — don't wait for a reply.
                    </p>
                  )}
                </div>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50 placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Phone <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      autoComplete="tel"
                      placeholder="+91-XXXXX-XXXXX"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50 placeholder-gray-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50 placeholder-gray-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Describe your inquiry or requirements..."
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50 placeholder-gray-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 active:scale-95 text-white font-bold text-sm py-4 rounded-2xl transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  We respond within a few hours. For urgent help, call directly.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;