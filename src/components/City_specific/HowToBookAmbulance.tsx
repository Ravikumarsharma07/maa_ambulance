import { LocalCityData } from "@/Types/CityData";
import { PhoneIcon, Text, Users } from "lucide-react";
import SubHeading from "../smallComponents/SubHeading";

const HowToBookAmbulance = ({ cityData }: { cityData: LocalCityData }) => {
  // SEO: Dynamically generate the schema based on the state/city name.
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Book an Ambulance in ${cityData.name}`,
    description: `A simple, step-by-step guide to booking a fast and reliable ambulance service from Jyoti Ambulance Services in ${cityData.name}.`,
    step: [
      {
        "@type": "HowToStep",
        name: "Call Our 24/7 Emergency Number",
        text: `The fastest way to book is to call our dedicated emergency dispatch number. Our team is available 24 hours a day, 7 days a week to assist you.`,
      },
      {
        "@type": "HowToStep",
        name: "Provide Key Information",
        text: `Clearly provide the dispatcher with essential details: the exact pickup location with landmarks, the patient's medical condition, the number of patients, and a reliable contact number. This helps us dispatch the right ambulance quickly.`,
      },
      {
        "@type": "HowToStep",
        name: "Prepare for Arrival",
        text: `Follow any instructions given by the dispatcher. Keep your phone line free and, if possible, have someone guide the ambulance upon arrival. Our team will be on their way immediately.`,
      },
    ],
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* SEO: Add the structured data script to the head or body of your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* --- Section Header --- */}
        <div className="text-center">
          <SubHeading title={`How to Book an Ambulance in ${cityData.name}`} />
          <p className="mt-4 md:text-lg text-gray-600">
            In an emergency, every second counts. Our booking process is
            designed to be fast, simple, and stress-free.
          </p>
        </div>

        {/* --- Step-by-Step Guide --- */}
        <div className="mt-16 grid md:grid-cols-3 md:gap-6">
          {/* Step 1 */}
          <div
            id="step1"
            className="flex flex-col items-start gap-x-6  p-4 rounded-2xl bg-white"
          >
            <div className="flex h-16 w-16 flex-shrink-0 mb-4 md:mb-6 items-center self-center justify-center rounded-full bg-red-200 text-red-600">
              <span className="text-3xl font-bold">1</span>
            </div>
            <div className="mt-4 sm:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Call Our 24/7 Emergency Number
              </h3>
              <p className="mt-2 text-base text-gray-600">
                The most critical step is to contact us immediately. Our
                dispatch team is trained to handle emergencies and will guide
                you through the process. Stay as calm as possible.
              </p>
              <a
                href="tel:+91-9540944424" 
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-red-100 px-4 py-2 font-semibold text-red-700 transition hover:bg-red-200"
              >
                <PhoneIcon className="h-5 w-5" />
                Click to Call Now
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div
            id="step2"
            className="flex flex-col items-start gap-x-6  p-4 rounded-2xl bg-white"
          >
            <div className="flex h-16 w-16 flex-shrink-0 mb-4 md:mb-6 items-center self-center justify-center rounded-full bg-blue-200 text-blue-600">
              <span className="text-3xl font-bold">2</span>
            </div>
            <div className="mt-4 sm:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Share Key Details
              </h3>
              <p className="mt-2 text-base text-gray-600">
                To ensure the fastest dispatch of the correct ambulance (e.g.,
                Basic Life Support, ICU), please provide:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex gap-x-3">
                  <Text
                    className="mt-1 h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Patient's Condition:</strong> A brief, clear
                    description of the medical emergency.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Users
                    className="mt-1 h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Exact Location:</strong> Full address, floor, and
                    any nearby landmarks.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
         <div
            id="step3"
            className="flex flex-col items-start gap-x-6  p-4 rounded-2xl bg-white"
          >
            <div className="flex h-16 w-16 flex-shrink-0 mb-4 md:mb-6 items-center self-center justify-center rounded-full bg-green-200 text-green-600">
              <span className="text-3xl font-bold">3</span>
            </div>
            <div className="mt-4 sm:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Prepare for Arrival
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Once the ambulance is dispatched, our team is on its way. Please
                follow any instructions from the dispatcher, keep your phone
                line open, and prepare any necessary patient documents or
                identification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBookAmbulance;
