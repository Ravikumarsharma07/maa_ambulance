"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SubHeading from "../smallComponents/SubHeading";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs = ({ faqs, city}: { faqs: FAQ[] | undefined, city:string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SubHeading title="Frequently Asked Questions" />
          <p className="md:text-lg text-gray-600">
            Common questions about our ambulance services, transport, and
            emergency procedures in {city}. Can't find your answer? Call us anytime.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 py-4 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="md:text-lg font-semibold text-gray-900 pr-2 md:pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t pt-4">
                    <p
                      className="text-gray-700 leading-relaxed max-sm:text-sm"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-red-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our customer support team is available 24/7 to help you with any
              questions about our ambulance services or emergency procedures.
            </p>
            <a
              href="tel:+91-9990228876"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 md:px-8 md:py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Call Now: +91-9990228876
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
