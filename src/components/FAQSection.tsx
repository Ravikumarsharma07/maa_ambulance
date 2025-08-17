'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can an ambulance reach me?',
      answer: 'Our average response time is 8-15 minutes in major cities. We have strategically located ambulances across all service areas to ensure the fastest possible response during emergencies.'
    },
    {
      question: 'What types of ambulances do you provide?',
      answer: 'We offer Basic Life Support (BLS) ambulances, Advanced Life Support (ALS) ambulances with ICU facilities, Air ambulances for long-distance transport, and specialized patient transport vehicles.'
    },
    {
      question: 'Are your ambulances available 24/7?',
      answer: 'Yes, our ambulance services are available 24 hours a day, 7 days a week, 365 days a year. Our dispatch center operates round the clock to handle emergency calls.'
    },
    {
      question: 'What medical equipment is available in your ambulances?',
      answer: 'Our ambulances are equipped with oxygen cylinders, cardiac monitors, defibrillators, ventilators, stretchers, emergency medications, IV fluids, and other life-support equipment as per standards.'
    },
    {
      question: 'How much does ambulance service cost?',
      answer: 'Ambulance service costs vary based on distance, type of ambulance, and medical requirements. We provide transparent pricing with no hidden charges. Call us for a detailed quote.'
    },
    {
      question: 'Do you accept insurance for ambulance services?',
      answer: 'Yes, we accept most health insurance policies and provide all necessary documentation for insurance claims. We also offer cashless services with tie-up insurance providers.'
    },
    {
      question: 'Can family members travel in the ambulance?',
      answer: 'Yes, one or two family members can accompany the patient in the ambulance, depending on the patient\'s condition and space availability. Our staff will guide you accordingly.'
    },
    {
      question: 'Do you provide inter-city ambulance services?',
      answer: 'Yes, we provide inter-city and inter-state ambulance services with trained medical staff for long-distance patient transport. Air ambulance options are also available for critical cases.'
    },
    {
      question: 'How do I book an ambulance?',
      answer: 'You can book an ambulance by calling our emergency number +91-98765-43210. Our dispatch team will collect necessary details and assign the nearest available ambulance to your location.'
    },
    {
      question: 'Are your paramedics trained and certified?',
      answer: 'All our paramedics and medical staff are certified and regularly trained in emergency medical procedures, CPR, and advanced life support techniques. We maintain high standards for all personnel.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about our ambulance services, pricing, and emergency procedures. 
            Can't find your answer? Call us anytime.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
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
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
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
              Our customer support team is available 24/7 to help you with any questions 
              about our ambulance services or emergency procedures.
            </p>
            <a
              href="tel:+919876543210"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Call Now: +91-98765-43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;