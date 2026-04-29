"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import SubHeading from "./smallComponents/SubHeading";
import { Number2 } from "@/constants/PhoneNumbers";

const faqs = [
  {
    question: "What types of ambulance services does Maa Ambulance offer?",
    answer:
      "Maa Ambulance Services operates a full-spectrum fleet across India to handle every medical situation:<ul class='mt-3 space-y-2'><li><b>ICU & Ventilator Ambulances:</b> Fully equipped flying ICUs for critically ill patients needing intensive monitoring in transit — ventilators, cardiac monitors, infusion pumps, and defibrillators included.</li><li><b>Advanced Life Support (ALS):</b> For cardiac, neurological, and trauma emergencies requiring paramedic-level intervention en route.</li><li><b>Basic Life Support (BLS):</b> For stable inter-hospital transfers and non-critical transport with trained EMTs on board.</li><li><b>Neonatal & Pediatric Ambulances:</b> Specialized incubators and neonatal equipment for premature and high-risk newborns.</li><li><b>Air Ambulance:</b> Rapid long-distance transfers and international repatriation by DGCA-certified aircraft.</li><li><b>Train Ambulance:</b> Cost-effective critical-care transport across long distances within India.</li><li><b>Dead Body Transport:</b> Respectful, hygienic transportation with full freezer-box facilities nationwide.</li></ul>",
  },
  {
    question: "Is Maa Ambulance Service available 24/7, including holidays?",
    answer:
      "Yes — without exception. Our emergency dispatch center operates <b>24 hours a day, 7 days a week, 365 days a year</b>, including all public holidays, festivals, and weekends. The moment you call, a trained dispatcher answers, assesses the situation, and mobilizes the nearest available ambulance immediately. There is no hold music, no queues, no delays — just immediate action.",
  },
  {
    question: "How quickly can an ambulance reach me?",
    answer:
      "Our average response time in Delhi NCR and major metro cities is <b>10–20 minutes</b>. This is possible because our ambulances are strategically pre-positioned across key zones — not waiting at a central depot. For air ambulance missions, we are typically airborne within 30–60 minutes of dispatch. Response times in semi-urban and rural areas may vary, but we always dispatch the closest available unit instantly.",
  },
  {
    question: "Is there a certified medical crew inside every ambulance?",
    answer:
      "Absolutely. Every Maa Ambulance unit is staffed with <b>certified paramedics and emergency medical technicians (EMTs)</b> trained in ACLS (Advanced Cardiac Life Support) and PALS (Pediatric Advanced Life Support). ICU ambulances are additionally attended by a qualified emergency physician when required. Our staff undergo regular retraining and DGCA-standard certifications for air ambulance missions. You are in expert hands from the moment we arrive.",
  },
  {
    question: "What does an ambulance from Maa Ambulance Services cost?",
    answer:
      "Our pricing is <b>fully transparent with no hidden charges</b>. Cost depends on the type of ambulance (BLS, ALS, ICU, Air), distance, and required equipment. We provide a clear cost estimate before dispatch and never add surprise fees at the end. For exact pricing, call us at +91-9540944424 — our team will give you an honest quote within minutes. We also assist with insurance documentation and hospital coordination.",
  },
  {
    question: "Can you arrange inter-city or inter-state patient transport?",
    answer:
      "Yes. We specialize in <b>long-distance critical-care transfers</b> across all 28 states and union territories of India. Whether it is a road ICU ambulance, a train ambulance, or an air ambulance, we manage everything — hospital coordination at both ends, oxygen supply, medical crew continuity, and all required permits and documentation. Internationally, we handle repatriation from any country back to India.",
  },
  {
    question: "What areas does Maa Ambulance Service cover?",
    answer:
      "Our ground ambulance network covers <b>Delhi NCR, Gurugram, Noida, Faridabad, Ghaziabad</b>, and all major cities across India including Mumbai, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, and beyond. For remote or tier-2/tier-3 locations, we deploy air or train ambulance solutions. If you are unsure whether we cover your area, call us — we will find a solution.",
  },
  {
    question: "How do I book an ambulance immediately?",
    answer:
      "The fastest way is to call <b>+91-9540944424</b> — our emergency line is answered in under 3 rings, 24/7. Provide your location, the patient's condition, and any special requirements (ventilator, ICU, neonatal). We confirm dispatch and share the ambulance ETA immediately. You do not need to fill any form or register online during an emergency — just call.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? null : idx));

  return (
    <section
      id="faq"
      aria-labelledby="faq-section-heading"
      className="py-16 sm:py-24 bg-[#F8F7F4]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center mb-12 sm:mb-16">
          <SubHeading title="Frequently Asked Questions" />
          <p
            id="faq-section-heading"
            className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            Common questions about our ambulance services, emergency procedures,
            and patient transport. Can't find your answer?{" "}
            <a
              href={`tel:${Number2}`}
              className="text-red-600 font-semibold hover:underline"
            >
              Call us anytime.
            </a>
          </p>
        </div>

        {/* ── ACCORDION ── */}
        <div
          className="space-y-3"
          role="list"
          aria-label="Frequently asked questions"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                role="listitem"
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "border-red-200 bg-white shadow-sm"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                  className="w-full flex items-start sm:items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-inset rounded-2xl"
                >
                  <span className="flex items-start gap-3 min-w-0">
                    <span
                      className={`mt-0.5 sm:mt-0 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        isOpen
                          ? "bg-red-600 text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                      aria-hidden="true"
                    >
                      {idx + 1}
                    </span>
                    <h3
                      className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${
                        isOpen ? "text-red-700" : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </span>
                  <ChevronDown
                    className={`shrink-0 w-5 h-5 mt-0.5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-red-500" : "text-gray-300"
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Answer panel */}
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  hidden={!isOpen}
                  className={`px-5 pb-5 sm:px-6 sm:pb-6 transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="border-t border-gray-100 pt-4">
                    <div
                      className="text-sm sm:text-base text-gray-600 leading-relaxed
                        [&_b]:font-semibold [&_b]:text-gray-800
                        [&_ul]:mt-3 [&_ul]:space-y-2
                        [&_li]:pl-4 [&_li]:relative [&_li]:text-gray-600
                        [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0
                        [&_li]:before:top-[9px] [&_li]:before:w-1.5 [&_li]:before:h-1.5
                        [&_li]:before:rounded-full [&_li]:before:bg-red-400"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-14 sm:mt-20 rounded-3xl bg-gray-900 overflow-hidden">
          <div className="h-1 bg-red-600" aria-hidden="true" />
          <div className="p-7 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="text-center sm:text-left flex-1">
              <h3
                className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Still Have Questions?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our dispatch team answers in under 3 rings, 24/7 — no hold
                music, no queues. Just immediate help.
              </p>
            </div>
            <a
              href={`tel:${Number2}`}
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-2xl transition-all shrink-0 w-full sm:w-auto"
              aria-label="Call Maa Ambulance emergency line at +91-9540944424"
            >
              <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
              {Number2}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;