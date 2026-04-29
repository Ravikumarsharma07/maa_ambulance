export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceType {
  slug: string;
  name: string;
  imageURL: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  faqs: ServiceFAQ[];
  relatedServices: string[]; // slugs
  link: string;
}

export const Services: ServiceType[] = [
  // --- MEDICAL AMBULANCE SERVICES ---
  {
    slug: "ambulance-service",
    name: "24/7 Ambulance Service",
    imageURL: "/ambulance-1.jpg",
    description: "Fastest 24/7 emergency road ambulance services across India. BLS equipped vehicles with rapid response times for safe hospital transport.",
    metaTitle: "24/7 Emergency Ambulance Service in India | Fast Response",
    metaDescription: "Book the fastest 24/7 emergency road ambulance service in India. BLS equipped vehicles, trained paramedics, and immediate dispatch. Call Maa Ambulance now.",
    content: `
      <h2>Pan-India 24/7 Emergency Ambulance Service</h2>
      <p>In a medical emergency, every single second dictates the outcome. <strong>Maa Ambulance Services</strong> provides lightning-fast, reliable, and affordable emergency road ambulance services across all major cities, towns, and highways in India. Our fleet of Basic Life Support (BLS) and Advanced Life Support (ALS) vehicles are stationed strategically to ensure the shortest possible response times.</p>
      <p>We bridge the gap between the patient's home and the hospital emergency room. From minor injuries to severe trauma, our paramedical staff is rigorously trained to stabilize the patient during the "Golden Hour" of the emergency.</p>
      <h3>Why Choose Our Road Ambulance?</h3>
      <ul>
        <li><strong>Rapid GPS Dispatch:</strong> We route the closest ambulance to your location instantly.</li>
        <li><strong>Trained Paramedics:</strong> Certified emergency medical technicians (EMTs) onboard.</li>
        <li><strong>Essential Medical Setup:</strong> Equipped with oxygen cylinders, folding stretchers, first-aid trauma kits, and vital signs monitors.</li>
        <li><strong>Bed-to-Bed Transfer:</strong> Complete physical assistance from your home directly to the hospital bed.</li>
      </ul>
    `,
    faqs: [
      { question: "How fast will the ambulance arrive?", answer: "Because we have a wide network of GPS-tracked vehicles, our average response time is between 15 to 30 minutes, depending on the city traffic and exact location." },
      { question: "Are paramedics available inside the ambulance?", answer: "Yes, every emergency ambulance is accompanied by trained paramedics and nursing staff to stabilize the patient during transit." },
      { question: "Do you provide inter-hospital transfers?", answer: "Absolutely. We routinely transfer patients from clinics to multi-specialty hospitals for advanced treatments." }
    ],
    relatedServices: ["icu-ambulance-service", "cardiac-ambulance-service", "outstation-ambulance-service"],
    link: "/services/ambulance-service",
  },
  {
    slug: "icu-ambulance-service",
    name: "ICU Ambulance Service",
    imageURL: "/icu-ambulance.png",
    description: "Advanced mobile ICU ambulances equipped with transport ventilators, cardiac monitors, and expert medical teams for critical patient transfers.",
    metaTitle: "ICU Ambulance Service | Mobile Intensive Care Unit Pan-India",
    metaDescription: "Need an ICU on wheels? Maa Ambulance provides advanced ICU Ambulance services with transport ventilators, monitors, and MD doctors for critical intercity transfers.",
    content: `
      <h2>Advanced Mobile ICU Ambulance in India</h2>
      <p>For critically ill patients suffering from severe respiratory distress, neurological emergencies, or post-surgical complications, standard transport is not enough. Our <strong>ICU Ambulance Service</strong> functions as a highly sophisticated Mobile Intensive Care Unit. We facilitate both local city transfers and long-distance outstation travel across India.</p>
      <p>Our goal is to ensure absolutely zero drop in the level of medical care while the patient is outside the hospital walls. The ambulance features a heavy-duty inverter and power backup system to ensure life-saving machines run continuously without interruption.</p>
      <h3>Our ICU Fleet is Equipped With:</h3>
      <ul>
        <li><strong>Advanced Transport Ventilators:</strong> Both Invasive and Non-Invasive (BiPAP/CPAP) support.</li>
        <li><strong>Cardiac Monitors & Defibrillators:</strong> Multi-parameter monitors tracking ECG, SpO2, NIBP, and ETCO2.</li>
        <li><strong>Infusion & Syringe Pumps:</strong> For precise, continuous administration of life-saving critical drugs.</li>
        <li><strong>Specialist Medical Team:</strong> Accompanied by experienced MD Doctors and ACLS-certified paramedics.</li>
      </ul>
    `,
    faqs: [
      { question: "What is the difference between a normal ambulance and an ICU ambulance?", answer: "A normal (BLS) ambulance has basic oxygen and first aid. An ICU ambulance is essentially a moving hospital bed, featuring ventilators, defibrillators, syringe pumps, and a specialized doctor." },
      { question: "Can an ICU ambulance travel to another state?", answer: "Yes, we provide outstation and interstate ICU ambulance transfers with dual drivers and sufficient oxygen cylinders for long road journeys." }
    ],
    relatedServices: ["cardiac-ambulance-service", "air-ambulance-service", "ventilator-ambulance-service"],
    link: "/services/icu-ambulance-service",
  },
  {
    slug: "cardiac-ambulance-service",
    name: "Cardiac Ambulance Service",
    imageURL: "/cardiac-ambulance.png",
    description: "Specialized cardiac ambulances across India for heart attack and stroke patients. Equipped with ACLS tools, defibrillators, and cardiovascular experts.",
    metaTitle: "Emergency Cardiac Ambulance Service | Heart Attack Transport",
    metaDescription: "Immediate response Cardiac Ambulance service equipped with defibrillators, ECG, and ACLS paramedics for heart attack and stroke emergencies across India.",
    content: `
      <h2>Emergency Cardiac Ambulance Services</h2>
      <p>During a cardiac arrest or heart stroke, every second counts. Lack of oxygen to the heart or brain can cause irreversible damage within minutes. Maa Ambulance's <strong>Cardiac Ambulance Service</strong> is specifically engineered to transport patients experiencing acute cardiovascular emergencies.</p>
      <p>We provide nationwide coverage, ensuring rapid transport to specialized heart institutes and cath labs. Our vehicles are spacious enough to allow doctors to perform CPR or emergency pacing while the vehicle is in motion.</p>
      <h3>Key Cardiac Life Support Features:</h3>
      <ul>
        <li><strong>ACLS Setup:</strong> Advanced Cardiac Life Support protocols ready to be deployed instantly.</li>
        <li><strong>Defibrillators & AEDs:</strong> To restore normal heart rhythm in case of sudden cardiac arrest.</li>
        <li><strong>12-Lead ECG Machines:</strong> Allowing our doctors to transmit live ECG readings to the receiving hospital.</li>
        <li><strong>Emergency Drugs:</strong> Stocked with life-saving cardiovascular medications and temporary pacemakers.</li>
      </ul>
    `,
    faqs: [
      { question: "Do you have a doctor on board for cardiac emergencies?", answer: "Yes, our cardiac ambulances are staffed with doctors and paramedics specially trained in cardiovascular emergency management." },
      { question: "Can the ambulance transmit my ECG to the hospital?", answer: "Yes, our advanced setups allow the medical team to relay vital statistics to the receiving emergency room, ensuring the cath lab is prepped before arrival." }
    ],
    relatedServices: ["icu-ambulance-service", "ambulance-service"],
    link: "/services/cardiac-ambulance-service",
  },
  {
    slug: "air-ambulance-service",
    name: "Air Ambulance Service",
    imageURL: "/air-ambulnce.jpg",
    description: "Fastest domestic and international Air Ambulance service from anywhere in India. Chartered medical flights and commercial stretcher transfers.",
    metaTitle: "Air Ambulance Service in India | 24/7 Medical Flights & Evacuation",
    metaDescription: "Book the most reliable Air Ambulance service in India. We provide chartered medical flights and commercial stretcher transfers with complete bed-to-bed logistics.",
    content: `
      <h2>Nationwide & International Air Ambulance Service</h2>
      <p>When distance is vast, terrain is difficult, or time is absolutely critical, <strong>Maa Ambulance Services</strong> offers the most reliable Air Ambulance and Medical Evacuation solutions. We coordinate rapid airlifts from tier-1, tier-2, and tier-3 cities across India to top metropolitan hospitals, or even facilitate international medical transfers.</p>
      <p>We handle everything from obtaining flight clearances from aviation authorities to arranging ground ambulances at both the departure and arrival airports, giving families complete peace of mind.</p>
      <h3>Our Air Evacuation Solutions Include:</h3>
      <ul>
        <li><strong>Chartered Medical Flights:</strong> Dedicated private aircraft acting as high-altitude ICUs for highly critical patients.</li>
        <li><strong>Commercial Stretcher Service:</strong> Cost-effective medical transfer on commercial airlines (like Air India or Vistara) for stable, non-emergency patients.</li>
        <li><strong>Complete Logistics:</strong> End-to-end bed-to-bed transfer so you don't have to deal with multiple vendors.</li>
        <li><strong>Aero-Medical Team:</strong> Flight-certified doctors and respiratory therapists trained to manage pressure-related medical changes.</li>
      </ul>
    `,
    faqs: [
      { question: "How long does it take to arrange an air ambulance?", answer: "For domestic transfers in India, we can usually arrange a chartered medical flight within 2 to 6 hours depending on airport clearances and weather." },
      { question: "What is the difference between Commercial Stretcher and Chartered Flight?", answer: "A chartered flight is a private aircraft hired entirely for the patient and is available instantly. A commercial stretcher involves removing seats on a regular passenger flight and is much cheaper, but takes 24-48 hours to arrange." }
    ],
    relatedServices: ["train-ambulance-service", "icu-ambulance-service"],
    link: "/services/air-ambulance-service",
  },
  {
    slug: "train-ambulance-service",
    name: "Train Ambulance Service",
    imageURL: "/trai-ambulance.jpg",
    description: "Cost-effective, highly supervised Train Ambulance services across the Indian Railway network. Safe long-distance medical transport with ICU setup.",
    metaTitle: "Train Ambulance Service in India | Affordable Medical Transport",
    metaDescription: "Book affordable Train Ambulance services across India. We convert AC railway coaches into ICU setups for safe, jerk-free long-distance patient transport.",
    content: `
      <h2>Long-Distance Train Ambulance Across India</h2>
      <p>Our <strong>Train Ambulance Service</strong> is the most affordable, comfortable, and reliable solution for long-distance patient transport across Indian states. Utilizing the vast Indian Railway network, we convert AC 1st Class or 2nd Class tier compartments into fully functional medical units.</p>
      <p>Train ambulances are highly recommended for patients with spinal injuries, severe orthopedic trauma, or those who cannot tolerate the jerks of Indian highways or the cabin pressure of an aircraft. It is a highly safe, smooth journey.</p>
      <h3>Why Choose Train Medical Transport?</h3>
      <ul>
        <li><strong>Highly Cost-Effective:</strong> A fraction of the cost of Air Ambulances while offering the same level of medical supervision.</li>
        <li><strong>Jerk-Free Journey:</strong> The smooth railway tracks prevent jarring movements, ensuring utmost comfort for the patient.</li>
        <li><strong>Dedicated Medical Team:</strong> Accompanied by a doctor and nursing staff throughout the 10-30 hour journey.</li>
        <li><strong>Full Setup:</strong> We carry portable oxygen cylinders, suction machines, and vital monitors directly into the train coach.</li>
      </ul>
    `,
    faqs: [
      { question: "Can family members travel with the patient on the train?", answer: "Yes, usually 1 or 2 family members can travel alongside the patient and the medical team in the reserved AC compartment." },
      { question: "Do you handle the train ticket booking?", answer: "Yes, we handle the entire process. We arrange the emergency train tickets, railway permissions, and the ground ambulance pickup/drop at both railway stations." }
    ],
    relatedServices: ["air-ambulance-service", "outstation-ambulance-service"],
    link: "/services/train-ambulance-service",
  },
  {
    slug: "outstation-ambulance-service",
    name: "Outstation Ambulance Service",
    imageURL: "/outstationambulance.jpg",
    description: "Reliable outstation ambulance service for intercity and interstate patient transfers. Comfortable, long-haul medical transport anywhere in India.",
    metaTitle: "Outstation Ambulance Service | Intercity & Interstate Transfers",
    metaDescription: "Safe interstate and intercity outstation ambulance services across India. Long-haul BLS and ICU vehicles with experienced drivers for smooth travel.",
    content: `
      <h2>Intercity & Interstate Outstation Ambulance</h2>
      <p>Need to move a patient from one city or state to another for better medical treatment or to bring them closer to family? <strong>Maa Ambulance Services</strong> provides seamless Outstation Ambulance services pan-India.</p>
      <p>Our long-haul vehicles are specifically designed for comfort over long distances. We utilize premium vehicles with advanced suspension systems to minimize road bumps. These outstation vehicles are available in BLS, ACLS, and fully-equipped ICU configurations depending on the patient's condition.</p>
      <h3>Outstation Transfer Benefits:</h3>
      <ul>
        <li><strong>Experienced Highway Drivers:</strong> Dual drivers assigned for long journeys to ensure non-stop, safe, and smooth driving.</li>
        <li><strong>Spacious Interiors:</strong> Extra room for patient comfort, medical equipment, and seating for 1-2 attendants.</li>
        <li><strong>Continuous Monitoring:</strong> Uninterrupted medical observation and oxygen supply during cross-country journeys lasting 12-24 hours.</li>
      </ul>
    `,
    faqs: [
      { question: "Do you provide outstation services to remote villages?", answer: "Yes, our network spans across India. We can transport patients to and from tier-1 metro hospitals to tier-3 towns and remote rural villages." },
      { question: "Are food and breaks managed during a long road trip?", answer: "Our drivers and medical team manage necessary, short bio-breaks safely, ensuring the patient's vitals remain stable throughout the stop." }
    ],
    relatedServices: ["train-ambulance-service", "ambulance-service"],
    link: "/services/outstation-ambulance-service",
  },
  {
    slug: "event-ambulance-service",
    name: "Event Ambulance Service",
    imageURL: "/event-ambulance.jpg",
    description: "Standby event ambulance services for corporate events, sports tournaments, and concerts. On-site medical support and rapid evacuation protocols.",
    metaTitle: "Event Ambulance Service | Medical Standby for Events & Sports",
    metaDescription: "Hire standby event ambulance services for sports, corporate events, and concerts. Professional on-site medical support and emergency evacuation.",
    content: `
      <h2>Standby Medical Support for Events</h2>
      <p>Ensure the health and safety of your guests, employees, or athletes with our <strong>Event Ambulance Service</strong>. Organizing large gatherings comes with inherent medical risks. We provide on-site medical standby for marathons, sports tournaments, corporate gatherings, VIP visits, concerts, and public rallies across India.</p>
      <p>Having Maa Ambulance Services on-site ensures compliance with local safety regulations and guarantees immediate, life-saving medical intervention if an injury or health emergency occurs.</p>
      <h3>Event Coverage Includes:</h3>
      <ul>
        <li><strong>Dedicated Vehicles:</strong> BLS or ALS ambulance stationed visibly at the venue for the entire duration of the event.</li>
        <li><strong>Medical Tent Setup:</strong> We can deploy first-aid specialists and a temporary medical camp for minor injuries.</li>
        <li><strong>Evacuation Protocols:</strong> Pre-planned, traffic-optimized evacuation routes to the nearest tier-1 hospitals mapped out before the event begins.</li>
      </ul>
    `,
    faqs: [
      { question: "Can we hire an event ambulance for a single day?", answer: "Yes, we offer highly flexible packages. You can hire our team for a few hours, a single day, or for multi-day tournaments and festivals." },
      { question: "Do you provide ALS or BLS for events?", answer: "We provide both. High-risk events like marathons or motor sports usually require ALS (Advanced Life Support), while standard corporate gatherings use BLS." }
    ],
    relatedServices: ["monthly-rental-ambulance-service", "ambulance-service"],
    link: "/services/event-ambulance-service",
  },
  {
    slug: "monthly-rental-ambulance-service",
    name: "Monthly Rental Ambulance Service",
    imageURL: "/rental-ambulance.jpg",
    description: "Affordable monthly rental ambulances for hospitals, construction sites, and industrial areas. Flexible leasing with or without medical staff.",
    metaTitle: "Monthly Rental Ambulance Service | Industrial & Hospital Lease",
    metaDescription: "Lease or rent an ambulance on a monthly basis for construction sites, factories, mines, and hospitals. Flexible contracts with optional medical staff.",
    content: `
      <h2>Ambulance on Monthly Lease & Rental</h2>
      <p><strong>Maa Ambulance Services</strong> offers highly flexible <strong>Monthly Rental Ambulance Services</strong> tailored specifically for corporate entities, construction sites, factories, industrial zones, mining areas, and even smaller hospitals lacking their own transport fleet.</p>
      <p>To comply with governmental Occupational Health and Safety (OHS) regulations, high-risk industrial sites must have an emergency vehicle on standby. We make compliance easy, affordable, and stress-free.</p>
      <h3>Rental Packages Include:</h3>
      <ul>
        <li><strong>Vehicle Varieties:</strong> Choose from standard Patient Transport Vehicles (PTV), BLS, or fully equipped ALS variants.</li>
        <li><strong>Staffing Options:</strong> Rent the vehicle purely as a standalone asset, or include our professional drivers and certified paramedics.</li>
        <li><strong>Zero Maintenance Hassle:</strong> Routine sanitization, mechanical maintenance, and equipment checks are entirely managed by us.</li>
      </ul>
    `,
    faqs: [
      { question: "If the rental ambulance breaks down, do you provide a replacement?", answer: "Yes. In the rare event of a mechanical failure, we immediately dispatch a replacement ambulance so your site is never left without medical cover." },
      { question: "Can we customize the equipment inside the rental ambulance?", answer: "Absolutely. We customize the medical inventory based on the specific hazard risks of your industrial site or factory." }
    ],
    relatedServices: ["event-ambulance-service", "ambulance-service"],
    link: "/services/monthly-rental-ambulance-service",
  },

  // --- DEAD BODY & FUNERAL SERVICES ---

  {
    slug: "dead-body-transport-ambulance-service",
    name: "Dead Body Transport Ambulance Service",
    imageURL: "/dead-body-transport.jpg",
    description: "Respectful dead body transport ambulance service for local, intercity, and interstate transfer of mortal remains across India.",
    metaTitle: "Dead Body Transport Ambulance Service | Interstate Transfer",
    metaDescription: "Respectful and prompt dead body transport by road or air across India. We assist with NOCs, police clearance, and safe transfer of mortal remains.",
    content: `
      <h2>Dead Body Transport Ambulance Across India</h2>
      <p>Losing a loved one is an emotionally devastating time. <strong>Maa Ambulance Services</strong> steps in to take the logistical burden off your shoulders by providing prompt, legal, and deeply dignified <strong>Dead Body Transport Ambulance Services</strong>. We facilitate the safe transfer of mortal remains from hospitals to homes, or across states to native villages.</p>
      <p>Transporting a deceased person requires specialized vehicles and specific paperwork. We handle our duties with the utmost respect and empathy, ensuring a hassle-free process for the grieving family.</p>
      <h3>Transport Features:</h3>
      <ul>
        <li><strong>Specialized Vehicles:</strong> Air-conditioned, thoroughly sanitized, and scent-controlled transport vehicles.</li>
        <li><strong>Widespread Network:</strong> Available 24/7 for local city drops, intercity road trips, and interstate transfers.</li>
        <li><strong>Paperwork Assistance:</strong> We guide you through hospital death certificates, police NOCs, and embalming certificates required for long-distance transit.</li>
        <li><strong>Air Cargo Options:</strong> For massive distances, we arrange dead body transport via commercial airlines' cargo holds securely.</li>
      </ul>
    `,
    faqs: [
      { question: "Do you help with the legal paperwork for interstate transport?", answer: "Yes, our team guides you on exactly which documents (Death Certificate, Police NOC, Embalming certificate) are required to legally cross state borders." },
      { question: "Can family members travel in the same vehicle?", answer: "Yes, our dead body transport vehicles have seating arrangements for 1 to 3 family members to accompany the deceased." }
    ],
    relatedServices: ["mobile-mortuary-service", "shav-vahan-ambulance-service", "air-ambulance-service"],
    link: "/services/dead-body-transport-ambulance-service",
  },
  {
    slug: "mobile-mortuary-service",
    name: "Mobile Mortuary Service",
    imageURL: "/mobile-mortuary.jpg",
    description: "Temperature-controlled mobile mortuary ambulances for the long-distance transportation of deceased individuals without body degradation.",
    metaTitle: "Mobile Mortuary Service | Deep Freeze Dead Body Transport",
    metaDescription: "Temperature-controlled mobile mortuary ambulances for safe, multi-day long-distance transportation of deceased individuals across India. Call 24/7.",
    content: `
      <h2>Temperature-Controlled Mobile Mortuary Service</h2>
      <p>When mortal remains need to be transported over vast distances that take 24, 48, or even 72 hours by road, standard air-conditioning is not enough. Our <strong>Mobile Mortuary Service</strong> utilizes highly specialized ambulances featuring heavy-duty, built-in deep refrigeration units.</p>
      <p>These units halt the natural decomposition process, ensuring the body remains preserved, hygienic, and intact until it reaches its final destination anywhere in India. This is critical for dignity and for allowing relatives at the destination to perform final darshan (viewing).</p>
      <h3>Why Choose Mobile Mortuary?</h3>
      <ul>
        <li><strong>Built-In Refrigeration:</strong> Deep-freeze cabinets engineered directly into the chassis of the ambulance.</li>
        <li><strong>Extreme Durability:</strong> Ideal for cross-country transport spanning multiple days across varying Indian climates.</li>
        <li><strong>Redundant Power Supply:</strong> Continuous power supplied via dual vehicle alternators and backup generator/inverter systems, so cooling never stops.</li>
      </ul>
    `,
    faqs: [
      { question: "What temperature is maintained inside the mobile mortuary?", answer: "The cabinets are continuously maintained at temperatures between 0°C to -5°C, which is the optimal range for preventing tissue degradation." },
      { question: "What happens if the vehicle breaks down?", answer: "The cooling units have separate battery backups and generators. We also maintain a rapid-response network to replace the vehicle instantly in case of mechanical failure." }
    ],
    relatedServices: ["dead-body-freezer-box-service", "dead-body-transport-ambulance-service"],
    link: "/services/mobile-mortuary-service",
  },
  {
    slug: "dead-body-freezer-box-service",
    name: "Dead Body Freezer Box Service",
    imageURL: "/freezer-box.jpg",
    description: "Rent a portable dead body freezer box to preserve mortal remains at home while awaiting the arrival of relatives. 24/7 home delivery across India.",
    metaTitle: "Dead Body Freezer Box on Rent | 24/7 Home Delivery",
    metaDescription: "Hire a dead body freezer box to preserve mortal remains at home. Portable, temperature-controlled, glass-top coffin boxes delivered 24/7.",
    content: `
      <h2>Dead Body Freezer Box on Hire</h2>
      <p>Often, families must wait hours or days for close relatives to fly in from abroad before conducting the final rites. <strong>Maa Ambulance Services</strong> provides 24/7 <strong>Dead Body Freezer Box Services</strong> to safely preserve your loved one right in your own living room or community hall.</p>
      <p>Our portable mortuary boxes are delivered directly to your residence within hours of booking. Designed with modern compressors, they work silently and efficiently to maintain sub-zero temperatures, ensuring the remains are preserved with complete dignity.</p>
      <h3>Freezer Box Features:</h3>
      <ul>
        <li><strong>Sub-Zero Preservation:</strong> Maintains internal temperatures between 0°C to -5°C to halt decomposition and odors.</li>
        <li><strong>Transparent Glass Top:</strong> Allows family members and visitors to view the face and pay respects without opening the box.</li>
        <li><strong>Compact & Portable:</strong> Designed specifically to fit through standard home doorways and inside residential elevators.</li>
        <li><strong>Quick Setup:</strong> Home delivery, professional setup, and power-connection handled entirely by our team.</li>
      </ul>
    `,
    faqs: [
      { question: "How quickly can the freezer box be delivered to my home?", answer: "Depending on city traffic, we usually deliver and install the freezer box within 1 to 2 hours of your phone call." },
      { question: "Does the freezer box consume a lot of electricity?", answer: "No, they operate on standard home power sockets (15 Amps). We highly recommend having a home inverter or generator backup in case of local power cuts." }
    ],
    relatedServices: ["mobile-mortuary-service", "mukti-rath-ambulance-service"],
    link: "/services/dead-body-freezer-box-service",
  },
  {
    slug: "shav-vahan-ambulance-service",
    name: "Shav Vahan Ambulance Service",
    imageURL: "/shav-vahan.jpg",
    description: "Traditional Shav Vahan services for transferring the deceased from the hospital to the home or to the cremation ground respectfully.",
    metaTitle: "Shav Vahan Service | Respectful Hospital to Cremation Transport",
    metaDescription: "Book a traditional Shav Vahan for transferring deceased individuals from the hospital to home, or directly to the Shamshan Ghat respectfully.",
    content: `
      <h2>Respectful Shav Vahan Services</h2>
      <p>A <strong>Shav Vahan</strong> translates to 'Vehicle of the Deceased'. It is essential for the solemn, respectful, and traditional movement of a deceased individual. <strong>Maa Ambulance Services</strong> provides dedicated Shav Vahan vehicles strictly reserved for carrying mortal remains.</p>
      <p>Whether you need to transport your loved one from the hospital mortuary back to your home for final rites, or directly from the home to the Shamshan Ghat (cremation ground) or cemetery, our service ensures a peaceful final transit.</p>
      <h3>Our Shav Vahan Service Offers:</h3>
      <ul>
        <li><strong>Dedicated Fleet:</strong> Clean, thoroughly sanitized vehicles kept separate from medical emergency use.</li>
        <li><strong>Attendant Space:</strong> Seating arrangements for a few close family members to sit alongside the departed soul.</li>
        <li><strong>Empathetic Staff:</strong> Drivers specifically experienced in handling final journeys, driving carefully and respectfully.</li>
      </ul>
    `,
    faqs: [
      { question: "Is the Shav Vahan air-conditioned?", answer: "Yes, our modern Shav Vahan fleet is fully air-conditioned to maintain a cool and respectful environment during transit." },
      { question: "Can we use the Shav Vahan for the final procession?", answer: "Yes, the driver will drive at a slow, walking pace if the family wishes to conduct a short walking procession behind the vehicle." }
    ],
    relatedServices: ["funeral-ambulance-service", "cremation-ambulance-service", "mukti-rath-ambulance-service"],
    link: "/services/shav-vahan-ambulance-service",
  },
  {
    slug: "funeral-ambulance-service",
    name: "Funeral Ambulance Service",
    imageURL: "/funeral-ambulance.png",
    description: "Comprehensive funeral ambulance services featuring spacious seating for grieving family members alongside the deceased during the final journey.",
    metaTitle: "Funeral Ambulance Service | Final Procession Transport",
    metaDescription: "Spacious funeral ambulances accommodating immediate family members alongside the deceased. Dignified transport to burial or cremation sites.",
    content: `
      <h2>Dedicated Funeral Ambulance Service</h2>
      <p>Our <strong>Funeral Ambulance Service</strong> is designed to support the emotional and logistical needs of a family during a funeral. Unlike standard transport, these vehicles are modified to offer significant seating capacity and space for floral tributes.</p>
      <p>This allows immediate family members to travel together with the departed loved one to the burial ground or crematorium, providing comfort and unity during the hardest moments. We cater to all religious customs and traditions.</p>
      <h3>Funeral Transport Features:</h3>
      <ul>
        <li><strong>Spacious Cabins:</strong> Accommodating up to 5-6 family members comfortably in the rear cabin.</li>
        <li><strong>Procession Support:</strong> Smooth, slow driving protocols suitable for matching the pace of walking mourners.</li>
        <li><strong>Customization:</strong> Floral decoration arrangements available upon request to honor the deceased.</li>
        <li><strong>Reliability:</strong> Punctual service to ensure you reach the cemetery or crematorium exactly at the scheduled time.</li>
      </ul>
    `,
    faqs: [
      { question: "How many people can sit in the funeral ambulance?", answer: "Depending on the exact vehicle model provided (like Tempo Traveller or large vans), 4 to 6 family members can comfortably sit in the back with the deceased." },
      { question: "Do you provide floral decorations?", answer: "Yes, with prior notice, we can arrange beautiful, fresh floral garlands and vehicle decoration according to your religious customs." }
    ],
    relatedServices: ["antim-yatra-ambulance-service", "shav-vahan-ambulance-service"],
    link: "/services/funeral-ambulance-service",
  },
  {
    slug: "cremation-ambulance-service",
    name: "Cremation Ambulance Service",
    imageURL: "/cremation-ambulance.jpg",
    description: "Direct cremation ambulance services for seamless and timely transport to crematoriums and Shamshan Ghats anywhere in the city.",
    metaTitle: "Cremation Ambulance Service | Shamshan Ghat Transport",
    metaDescription: "Direct, timely, and respectful transport to crematoriums and Shamshan Ghats. Book Maa Ambulance's cremation ambulance service 24/7.",
    content: `
      <h2>Cremation Ground Transport Service</h2>
      <p>Coordinating transport during times of deep grief is overwhelming. Relatives are focused on rituals, not logistics. <strong>Maa Ambulance Services</strong> offers a highly specialized <strong>Cremation Ambulance Service</strong> focused purely on transporting the deceased securely and punctually to the crematorium.</p>
      <p>We understand the importance of timing (Mahurat) in Hindu and other religious traditions. Our drivers know the routes to all major city crematoriums, electric crematoriums, and Shamshan Ghats, ensuring you arrive exactly when needed without navigating traffic-heavy routes.</p>
      <h3>Service Highlights:</h3>
      <ul>
        <li><strong>Point-to-Point Transit:</strong> Direct, seamless transport from the home or hospital to any city crematorium.</li>
        <li><strong>Physical Assistance:</strong> Our staff respectfully assists the family in loading and unloading the stretcher at the Ghat.</li>
        <li><strong>On-Demand Availability:</strong> Available on extremely short notice for immediate and unplanned cremation requirements.</li>
      </ul>
    `,
    faqs: [
      { question: "Will the ambulance wait at the crematorium?", answer: "Our standard service is a drop-off, but if you require the vehicle to wait or return the stretcher after rituals, we can arrange an extended waiting-time package." },
      { question: "Can you help find the nearest open crematorium?", answer: "Yes, our dispatch team is familiar with local crematorium schedules and can guide you to the nearest operational Ghat." }
    ],
    relatedServices: ["funeral-ambulance-service", "mukti-rath-ambulance-service"],
    link: "/services/cremation-ambulance-service",
  },
  {
    slug: "mukti-rath-ambulance-service",
    name: "Mukti Rath Ambulance Service",
    imageURL: "/mukti-rath.jpg",
    description: "Book a Mukti Rath for a dignified and cultural final journey. Chariot-style decorated vehicles for traditional Hindu funeral processions.",
    metaTitle: "Mukti Rath Service | Traditional Chariot Antim Yatra",
    metaDescription: "Book a traditional Mukti Rath for a grand and respectful final journey. Chariot-style decorated vehicles with floral arrangements for Antim Yatra.",
    content: `
      <h2>Traditional Mukti Rath Services</h2>
      <p>For a highly traditional, deeply respectful, and grand farewell, we provide the prestigious <strong>Mukti Rath Ambulance Service</strong>. A Mukti Rath is a specially designed, chariot-like vehicle used primarily for the Hindu Antim Sanskar (final rites). It honors cultural traditions and provides a royal final journey for your loved one.</p>
      <p>The vehicle is designed to be the centerpiece of a walking procession, allowing the neighborhood and community to gather and walk alongside the departed soul with supreme reverence.</p>
      <h3>Features of the Mukti Rath:</h3>
      <ul>
        <li><strong>Chariot Design:</strong> Custom-built exterior mimicking a traditional temple chariot with religious motifs.</li>
        <li><strong>Elevated Platform:</strong> The stretcher area is elevated, allowing clear visibility for hundreds of mourners during the procession.</li>
        <li><strong>Pre-Decorated:</strong> Adorned with traditional fresh marigold garlands, white flowers, and spiritual flags.</li>
        <li><strong>Audio Systems:</strong> Built-in PA systems available for playing Ram Dhun, Bhajans, or religious chants during the journey.</li>
      </ul>
    `,
    faqs: [
      { question: "Is the Mukti Rath an open or closed vehicle?", answer: "A Mukti Rath usually features an open or semi-open deck with a beautifully crafted canopy roof, ensuring excellent visibility of the deceased while providing shade." },
      { question: "Are floral decorations included in the price?", answer: "Standard floral arrangements are included. We can also provide premium, customized exotic flower decorations upon request." }
    ],
    relatedServices: ["antim-yatra-ambulance-service", "shav-vahan-ambulance-service"],
    link: "/services/mukti-rath-ambulance-service",
  },
  {
    slug: "antim-yatra-ambulance-service",
    name: "Antim Yatra Ambulance Service",
    imageURL: "/antim-yatra.jpg",
    description: "Specialized Antim Yatra ambulances for funeral processions. Glass-fitted vehicles allowing mourners to pay their last respects easily.",
    metaTitle: "Antim Yatra Ambulance Service | Glass Display Vehicles",
    metaDescription: "Specialized Antim Yatra vehicles with large glass displays for funeral processions. Allow the community to easily view and pay last respects.",
    content: `
      <h2>Antim Yatra Funeral Procession Vehicles</h2>
      <p>The "Antim Yatra" (the final journey) is a deeply emotional, community-driven procession. <strong>Maa Ambulance Services</strong> provides specialized <strong>Antim Yatra Ambulance Services</strong> featuring vehicles with large, clear glass windows or transparent side-panels.</p>
      <p>This modern yet respectful design allows neighbors, extended family members, and the community to easily view and pay their last respects (Darshan) as the vehicle slowly moves through the deceased's neighborhood or native streets.</p>
      <h3>Antim Yatra Service Benefits:</h3>
      <ul>
        <li><strong>Glass-Paneled Display:</strong> High visibility of the departed soul from all sides of the vehicle.</li>
        <li><strong>Tribute Space:</strong> Ample flat space around the body for placing floral tributes, wreaths, and garlands.</li>
        <li><strong>Procession Management:</strong> Extremely slow-moving driving skills, managed by experienced drivers who understand crowd dynamics.</li>
        <li><strong>End-to-End Assistance:</strong> Complete support from lifting the body at home to the final placement at the resting place.</li>
      </ul>
    `,
    faqs: [
      { question: "Can we dictate the route the Antim Yatra takes?", answer: "Absolutely. The route is completely customized by the family. We can drive past significant locations, old homes, or religious places as per your wishes." },
      { question: "Is it suitable for long-distance travel?", answer: "Antim Yatra vehicles are best suited for slow, intra-city processions. For long-distance intercity travel, we recommend our standard Dead Body Transport Ambulances." }
    ],
    relatedServices: ["mukti-rath-ambulance-service", "funeral-ambulance-service"],
    link: "/services/antim-yatra-ambulance-service",
  }
];

// Helper function to find a service by its slug
export const getServiceBySlug = (slug: string): ServiceType | undefined => {
  return Services.find((service) => service.slug === slug);
};