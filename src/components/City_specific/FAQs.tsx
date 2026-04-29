"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import SubHeading from "../smallComponents/SubHeading";
import { Number1 } from "@/constants/PhoneNumbers";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs = ({ faqs, city }: { faqs: FAQ[] | undefined; city: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? null : idx));

  return (
    <section
      className="py-16 sm:py-24 bg-[#F8F7F4]"
      aria-labelledby="city-faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center mb-12 sm:mb-16">
          <SubHeading title={`FAQs — Ambulance Service in ${city}`} />
          <p
            id="city-faq-heading"
            className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            Common questions about our ambulance services, emergency procedures,
            and patient transport in {city}. Can't find your answer?{" "}
            <a
              href={`tel:${Number1}`}
              className="text-red-600 font-semibold hover:underline"
              aria-label={`Call Maa Ambulance in ${city} at ${Number1}`}
            >
              Call us anytime.
            </a>
          </p>
        </div>

        {/* ── ACCORDION ── */}
        <div
          className="space-y-3"
          role="list"
          aria-label={`Frequently asked questions about ambulance service in ${city}`}
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
                  aria-controls={`city-faq-answer-${idx}`}
                  id={`city-faq-question-${idx}`}
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

                <div
                  id={`city-faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`city-faq-question-${idx}`}
                  hidden={!isOpen}
                  className={isOpen ? "block" : "hidden"}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 border-t border-gray-100 pt-4">
                    <p
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
        <div className="mt-12 sm:mt-16 bg-gray-900 rounded-3xl overflow-hidden">
          <div className="h-1 bg-red-600" aria-hidden="true" />
          <div className="px-6 py-6 sm:px-10 sm:py-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="flex-1">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-400 mb-1">
                Still have questions · {city}
              </p>
              <p
                className="text-lg sm:text-xl font-extrabold text-white leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Our team is available 24/7 to help
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Call us for any questions about ambulance services, pricing, or
                emergency procedures in {city}.
              </p>
            </div>
            <a
              href={`tel:${Number1}`}
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-2xl transition-all shrink-0 w-full sm:w-auto"
              aria-label={`Call Maa Ambulance in ${city} at ${Number1}`}
            >
              <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
              {Number1}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQs;