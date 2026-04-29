import { LocalCityData } from "@/Types/CityData";
import { Phone, MapPin, FileText, CheckCircle } from "lucide-react";
import SubHeading from "../smallComponents/SubHeading";
import { Number1 } from "@/constants/PhoneNumbers";

const STEPS = [
  {
    number: "1",
    color: { ring: "bg-red-600", light: "bg-red-50", border: "border-red-100", text: "text-red-600" },
    title: "Call Our 24/7 Emergency Line",
    description:
      "The fastest way to book is to call our dedicated dispatch number immediately. Our team answers in under 3 rings — no hold music, no queues. They will assess the situation and mobilize the nearest ambulance right away.",
    extra: "call",
    icon: Phone,
  },
  {
    number: "2",
    color: { ring: "bg-amber-500", light: "bg-amber-50", border: "border-amber-100", text: "text-amber-600" },
    title: "Share Key Details",
    description:
      "Clearly provide the dispatcher with the information needed to send the right ambulance — ICU, ALS, BLS, or neonatal — as quickly as possible.",
    extra: "details",
    icon: FileText,
  },
  {
    number: "3",
    color: { ring: "bg-emerald-600", light: "bg-emerald-50", border: "border-emerald-100", text: "text-emerald-600" },
    title: "Prepare for Arrival",
    description:
      "Follow the dispatcher's instructions, keep your phone line free, and if possible have someone at the entrance to guide the crew. Our medical team will be on their way immediately after dispatch.",
    extra: "prepare",
    icon: CheckCircle,
  },
];

const DETAILS_LIST = [
  {
    icon: MapPin,
    label: "Exact Location",
    desc: "Full address, floor number, and the nearest landmark.",
  },
  {
    icon: FileText,
    label: "Patient's Condition",
    desc: "A brief, clear description of the medical emergency.",
  },
  {
    icon: Phone,
    label: "Callback Number",
    desc: "A reliable contact number we can reach during dispatch.",
  },
];

const HowToBookAmbulance = ({ cityData }: { cityData: LocalCityData }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Book an Ambulance in ${cityData.name}`,
    description: `A simple, step-by-step guide to booking a fast and reliable ambulance service from Maa Ambulance Services in ${cityData.name}.`,
    step: [
      {
        "@type": "HowToStep",
        name: "Call Our 24/7 Emergency Number",
        text: `Call ${Number1}. Our dispatch team is available 24/7 and answers in under 3 rings. They will guide you and mobilize the nearest ambulance immediately.`,
      },
      {
        "@type": "HowToStep",
        name: "Provide Key Information",
        text: "Share the exact pickup location with landmarks, the patient's medical condition, number of patients, and a reliable callback number so we can dispatch the right ambulance quickly.",
      },
      {
        "@type": "HowToStep",
        name: "Prepare for Arrival",
        text: "Follow the dispatcher's instructions, keep your phone line open, and have someone at the entrance to guide the crew. Our medical team will be on their way immediately.",
      },
    ],
  };

  return (
    <section
      className="py-16 sm:py-24 bg-[#F8F7F4]"
      aria-labelledby="how-to-book-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center mb-12 sm:mb-16">
          <SubHeading title={`How to Book an Ambulance in ${cityData.name}`} />
          <p
            id="how-to-book-heading"
            className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            In an emergency, every second counts. Our booking process is
            designed to be fast, simple, and completely stress-free — one call
            is all it takes.
          </p>
        </div>

        {/* ── STEPS GRID ── */}
        <ol
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
          role="list"
          aria-label={`Steps to book an ambulance in ${cityData.name}`}
        >
          {STEPS.map((step) => (
            <li
              key={step.number}
              id={`step${step.number}`}
              role="listitem"
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 flex flex-col gap-5"
            >
              {/* Step number badge */}
              <div className="flex items-center gap-4">
                <span
                  className={`w-12 h-12 rounded-2xl ${step.color.ring} flex items-center justify-center shrink-0`}
                  aria-hidden="true"
                >
                  <span className="text-xl font-extrabold text-white">
                    {step.number}
                  </span>
                </span>
                <div
                  className={`h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent`}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2 leading-snug"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step-specific extras */}
              {step.extra === "call" && (
                <a
                  href={`tel:${Number1}`}
                  className="mt-auto inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm px-5 py-3.5 rounded-2xl transition-all"
                  aria-label={`Call Maa Ambulance in ${cityData.name} at ${Number1}`}
                >
                  <Phone className="w-4 h-4 animate-pulse" aria-hidden="true" />
                  {Number1}
                </a>
              )}

              {step.extra === "details" && (
                <ul className="mt-auto flex flex-col gap-3" role="list" aria-label="Information to share with dispatcher">
                  {DETAILS_LIST.map(({ icon: Icon, label, desc }) => (
                    <li key={label} className="flex items-start gap-3" role="listitem">
                      <span
                        className={`w-7 h-7 rounded-xl ${step.color.light} border ${step.color.border} flex items-center justify-center shrink-0 mt-0.5`}
                        aria-hidden="true"
                      >
                        <Icon className={`w-3.5 h-3.5 ${step.color.text}`} />
                      </span>
                      <div>
                        <p className="text-xs font-bold text-gray-700">{label}</p>
                        <p className="text-xs text-gray-500 leading-snug">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {step.extra === "prepare" && (
                <ul className="mt-auto flex flex-col gap-2" role="list" aria-label="Preparation tips">
                  {[
                    "Keep your phone line free after calling",
                    "Have ID or hospital records ready if available",
                    "Send someone to the building entrance to guide the crew",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2.5 text-xs text-gray-500" role="listitem">
                      <CheckCircle
                        className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {tip}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-10 sm:mt-12 bg-gray-900 rounded-3xl overflow-hidden">
          <div className="h-1 bg-red-600" aria-hidden="true" />
          <div className="px-6 py-6 sm:px-10 sm:py-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="flex-1">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-400 mb-1">
                Emergency Dispatch · {cityData.name}
              </p>
              <p
                className="text-lg sm:text-xl font-extrabold text-white leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Ready to dispatch in under 3 minutes
              </p>
              <p className="text-xs text-gray-400 mt-1">
                One call connects you to our nearest crew, 24×7 — no paperwork,
                no waiting.
              </p>
            </div>
            <a
              href={`tel:${Number1}`}
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-2xl transition-all shrink-0 w-full sm:w-auto"
              aria-label={`Book an ambulance in ${cityData.name} — call ${Number1}`}
            >
              <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
              Book Ambulance Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowToBookAmbulance;