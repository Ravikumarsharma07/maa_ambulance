
interface ServiceType {
  slug: string;
  name: string;
  imageURL: string;
  description: string;
  content: string;
  link: string;
}

export const Services: ServiceType[] = [
  {
    slug: "road-ambulance-services",
    name: "Road Ambulance Services",
    imageURL: "/ambulance-1.jpg",
    description: "24/7 emergency road ambulance services in Delhi for quick and safe transport to hospitals. Fast, reliable, and equipped for critical care.",
    content: `
      <h2>24/7 Emergency Road Ambulance in Delhi NCR</h2>
      <p>Jyoti Ambulance provides immediate and professional road ambulance services across Delhi. Our fleet is on standby 24/7 to ensure a rapid response for any medical emergency. Each ambulance is equipped with essential medical supplies to provide primary care en route to the hospital.</p>
      <h3>Our Road Ambulance Fleet Includes:</h3>
      <ul>
        <li>Basic Life Support (BLS) Ambulances</li>
        <li>Advanced Cardiac Life Support (ACLS) Ambulances</li>
        <li>Patient Transport Vehicles</li>
      </ul>
    `,
    link: "/services/road-ambulance-services",
  },
  {
    slug: "icu-ambulance-services",
    name: "ICU Ambulance Services",
    imageURL: "/icu-ambulance.jpg",
    description: "Advanced ICU-equipped ambulances for critical patients in Delhi requiring intensive care, complete with ventilators and cardiac monitors.",
    content: `
      <h2>Mobile Intensive Care Unit in Delhi</h2>
      <p>Our ICU Ambulances are essentially mobile intensive care units. They are designed for critically ill patients who require constant monitoring and advanced medical support during transit. Our team of paramedics and doctors are trained to handle complex medical situations.</p>
      <h3>Features of Our ICU Ambulances:</h3>
      <ul>
        <li>Transport Ventilators</li>
        <li>Multi-parameter Cardiac Monitors</li>
        <li>Infusion Pumps and Syringe Pumps</li>
        <li>Emergency Medical Kits and Life-saving Drugs</li>
      </ul>
    `,
    link: "/services/icu-ambulance-services",
  },
  {
    slug: "air-ambulance-service",
    name: "Air Ambulance Service",
    imageURL: "/air-ambulance.jpg",
    description: "Fast nationwide and international air transport from Delhi for critical medical emergencies. We coordinate bed-to-bed transfers seamlessly.",
    content: `
      <h2>Nationwide Air Ambulance from Delhi</h2>
      <p>For long-distance and time-sensitive medical transfers, our Air Ambulance service is the optimal choice. We arrange for patient transport via commercial flights or private charter aircraft, ensuring a complete bed-to-bed transfer with a dedicated medical team.</p>
      <h3>Our Air Transport Services Cover:</h3>
      <ul>
        <li>Domestic and International Patient Transfers</li>
        <li>Coordination with IGI Airport Authorities</li>
        <li>A highly experienced team of flight-certified doctors and paramedics</li>
      </ul>
    `,
    link: "/services/air-ambulance-service",
  },
  {
    slug: "train-ambulance-service",
    name: "Train Ambulance Service",
    imageURL: "/train-ambulance.jpg",
    description: "A cost-effective solution for long-distance medical transport of stable patients from Delhi. We provide a dedicated medical team in AC train compartments.",
    content: `
      <h2>Long-Distance Medical Transport by Train</h2>
      <p>Our train ambulance service is a reliable and affordable option for transferring stable patients over long distances across India. We convert a section of an AC compartment into a medical cabin, equipped with necessary monitoring tools and accompanied by skilled medical personnel to ensure patient comfort and safety throughout the journey.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Bed-to-bed transfer from hospital to train and train to destination hospital.</li>
        <li>Accompanied by a doctor, nurse, or paramedic.</li>
        <li>Equipped with oxygen, monitors, and emergency medical supplies.</li>
      </ul>
    `,
    link: "/services/train-ambulance-service",
  },
  {
    slug: "ventilator-ambulance-services",
    name: "Ventilator Ambulance Services",
    imageURL: "/ventilator-ambulance.jpg",
    description: "Specialized ambulances in Delhi equipped with advanced transport ventilators for patients requiring continuous respiratory support during transit.",
    content: `
      <h2>Advanced Ventilator Support on the Move</h2>
      <p>For patients with respiratory failure or critical breathing difficulties, our Ventilator Ambulance Services are essential. These vehicles are fitted with state-of-the-art portable ventilators, ensuring uninterrupted respiratory support. A respiratory therapist or critical care doctor accompanies the patient to manage their condition effectively.</p>
      <h3>When to Use a Ventilator Ambulance:</h3>
      <ul>
        <li>Patients with COPD, ARDS, or other severe respiratory conditions.</li>
        <li>Inter-hospital transfers from an ICU.</li>
        <li>Post-operative patients requiring breathing assistance.</li>
      </ul>
    `,
    link: "/services/ventilator-ambulance-services",
  },
  {
    slug: "cardiac-care-ambulance-service",
    name: "Cardiac Care Ambulance Service",
    imageURL: "/cardiac-ambulance.jpg",
    description: "Emergency cardiac ambulances in Delhi for heart patients. Equipped with defibrillators, ECG monitors, and managed by cardiac-trained paramedics.",
    content: `
      <h2>Emergency Response for Heart Patients in Delhi</h2>
      <p>Time is critical during a cardiac emergency. Our Cardiac Care Ambulances are specifically designed to provide immediate, life-saving care to patients suffering from heart attacks, severe chest pain, or other cardiac issues. The goal is to stabilize the patient and provide critical interventions long before reaching the hospital.</p>
      <h3>Onboard Cardiac Equipment:</h3>
      <ul>
        <li>12-Lead ECG Machine for rapid diagnosis.</li>
        <li>External Defibrillator for managing cardiac arrest.</li>
        <li>Life-saving cardiac medications and IV supplies.</li>
      </ul>
    `,
    link: "/services/cardiac-care-ambulance-service",
  },
  {
    slug: "mortuary-van-services",
    name: "Mortuary Van Services",
    imageURL: "/mortuary-ambulance.jpg",
    description: "Dignified and respectful transportation of deceased individuals in Delhi NCR. Our mortuary vans are clean, discreet, and available 24/7.",
    content: `
      <h2>Respectful Deceased Transportation Services</h2>
      <p>We provide mortuary van services for the dignified transportation of deceased persons from home or hospital to the crematorium, burial ground, or another destination. Our team handles every aspect with compassion and professionalism, ensuring a respectful final journey.</p>
      <h3>Our Services Include:</h3>
      <ul>
        <li>24/7 availability across Delhi.</li>
        <li>Clean, well-maintained, and discreet vehicles.</li>
        <li>Assistance with documentation and procedures if required.</li>
      </ul>
    `,
    link: "/services/mortuary-van-services",
  },
  {
    slug: "dead-body-freezer-box",
    name: "Dead Body Freezer Box",
    imageURL: "/dead-freezer-ambulance.jpg",
    description: "High-quality, portable dead body freezer boxes on rent in Delhi to preserve the deceased with dignity at home until the final rites can be performed.",
    content: `
      <h2>Preserve Your Loved One with Dignity at Home</h2>
      <p>When final rites need to be delayed for family to arrive, our freezer box service allows you to keep your loved one's body at home in a preserved and dignified state. Our boxes are designed to maintain a low temperature, are hygienic, and can be set up discreetly within your home by our team.</p>
      <h3>Features of Our Freezer Box:</h3>
      <ul>
        <li>Maintains temperature between 0 to -5°C.</li>
        <li>Delivered and installed at your residence.</li>
        <li>Available for short-term and long-term rental.</li>
      </ul>
    `,
    link: "/services/dead-body-freezer-box",
  },
  {
    slug: "dead-body-ambulance-services",
    name: "Dead Body Ambulance Services",
    imageURL: "/ambulance-1.jpg",
    description: "Comprehensive services for transporting deceased persons from Delhi to any location via road, train, or air, handling all logistics with care.",
    content: `
      <h2>Nationwide Deceased Transportation</h2>
      <p>We manage the complex logistics of transporting a deceased person to their hometown or another city. Whether by road for nearby locations, by train for cost-effective long distances, or by air for speed, our team handles all necessary arrangements, including documentation, embalming, and coffin sealing.</p>
      <h3>Transportation Modes:</h3>
      <ul>
        <li><strong>Road:</strong> Dedicated vehicle for inter-city transport.</li>
        <li><strong>Train:</strong> Coordination with railway cargo for safe transit.</li>
        <li><strong>Air:</strong> Complete air cargo clearance and documentation support.</li>
      </ul>
    `,
    link: "/services/dead-body-ambulance-services",
  },
  {
    slug: "outstation-ambulance",
    name: "Ambulance for Outstation",
    imageURL: "/ambulance-1.jpg",
    description: "Reliable outstation ambulance services from Delhi for inter-city patient transfers. We offer BLS, ALS, and ICU ambulances for long-distance travel.",
    content: `
      <h2>Safe Inter-City Patient Transfers from Delhi</h2>
      <p>Transporting a patient to another city requires careful planning and a well-equipped ambulance. We provide dedicated outstation ambulance services for planned medical transfers, ensuring patient safety, comfort, and continuous care throughout the journey.</p>
      <h3>Why Choose Us for Outstation Transfers:</h3>
      <ul>
        <li>Experienced drivers familiar with long routes.</li>
        <li>Medical team (doctor/paramedic) accompaniment.</li>
        <li>Transparent, all-inclusive pricing.</li>
      </ul>
    `,
    link: "/services/outstation-ambulance",
  },
  {
    slug: "event-ambulance",
    name: "Ambulance For Events",
    imageURL: "/ambulance-5.jpg",
    description: "On-site ambulance and medical team deployment for events in Delhi. Ensure the safety of your attendees at sports events, concerts, and public gatherings.",
    content: `
      <h2>On-Site Medical Support for Your Event</h2>
      <p>Ensure the health and safety of attendees at your event with our on-site ambulance services. We provide a fully equipped ambulance with a trained medical team (paramedic, nurse) to handle any medical emergencies that may arise during public gatherings, corporate events, sports meets, or concerts.</p>
      <h3>Events We Cover:</h3>
      <ul>
        <li>Marathons and Sporting Events</li>
        <li>Concerts and Music Festivals</li>
        <li>Corporate Functions and Exhibitions</li>
        <li>Weddings and Large Social Gatherings</li>
      </ul>
    `,
    link: "/services/event-ambulance",
  },
  {
    slug: "shav-vahan",
    name: "Shav Vahan Number",
    imageURL: "/shav-vahan-ambulance.jpg",
    description: "24/7 Shav Vahan (hearse van) services in Delhi. Contact our dedicated helpline number for immediate and respectful transportation for last rites.",
    content: `
      <h2>Compassionate Shav Vahan Services in Delhi</h2>
      <p>During a difficult time, arranging for a "Shav Vahan" should be straightforward. We provide hearse van services for carrying the deceased to their final resting place with utmost dignity. Our vehicles are maintained to ensure a serene and respectful journey.</p>
      <h3>Our Commitment:</h3>
      <ul>
        <li>Immediate response after your call.</li>
        <li>Courteous and supportive staff.</li>
        <li>Available across all parts of Delhi NCR.</li>
      </ul>
    `,
    link: "/services/shav-vahan",
  },
  {
    slug: "funeral-van-services",
    name: "Funeral Van Services",
    imageURL: "/funeral-ambulance.jpg",
    description: "Professional funeral van services in Delhi to assist families with the transportation logistics during the last rites, ensuring a dignified procession.",
    content: `
      <h2>Dignified Transport for Funeral Processions</h2>
      <p>Our funeral van services are designed to support families during the funeral procession. We provide clean and well-maintained vehicles to transport the deceased respectfully, allowing the family to focus on the rituals and grieving process without worrying about logistics.</p>
      <h3>Service Highlights:</h3>
      <ul>
        <li>Punctual and reliable service.</li>
        <li>Can be decorated as per family traditions.</li>
        <li>Experienced drivers who understand the solemnity of the occasion.</li>
      </ul>
    `,
    link: "/services/funeral-van-services",
  },
  {
    slug: "mobile-mortuary-services",
    name: "Mobile Mortuary Services",
    imageURL: "/mobile-mortuary.png",
    description: "Mobile mortuary vans with integrated cooling systems available in Delhi. An alternative to freezer boxes for preserving the deceased with dignity.",
    content: `
      <h2>Advanced Mobile Mortuary Vans</h2>
      <p>A mobile mortuary is a vehicle equipped with a built-in freezer system. It serves as a respectful alternative to a stationary freezer box, especially when the deceased needs to be transported over a distance or kept for a period before the funeral. Our mobile mortuaries maintain a consistent low temperature to ensure perfect preservation.</p>
      <h3>Advantages of a Mobile Mortuary:</h3>
      <ul>
        <li>Integrated cooling system for reliable preservation.</li>
        <li>Combines transportation and preservation in one vehicle.</li>
        <li>Discreet and professional appearance.</li>
      </ul>
    `,
    link: "/services/mobile-mortuary-services",
  },
  {
    slug: "coffin-box",
    name: "Coffin Box",
    imageURL: "/coffin-box.jpg",
    description: "A range of high-quality coffin boxes available in Delhi for dignified funeral ceremonies and safe transportation, especially for air or train transit.",
    content: `
      <h2>High-Quality Coffin Boxes for Final Rites</h2>
      <p>We provide a selection of coffin boxes to meet various needs and traditions. Whether for a local funeral or for long-distance transportation of the deceased, our coffins are built to be secure and respectful. We assist with selection and ensure all requirements for air or train cargo are met.</p>
      <h3>Our Range Includes:</h3>
      <ul>
        <li>Standard wooden coffins for local use.</li>
        <li>Sealed caskets for air and train transportation.</li>
        <li>Customizable options available upon request.</li>
      </ul>
    `,
    link: "/services/coffin-box",
  },
  {
    slug: "mukti-rath",
    name: "Mukti Rath",
    imageURL: "/mukti-rath-ambulance.jpg",
    description: "Dedicated 'Mukti Rath' services in Delhi for performing the last journey rituals with dignity and respect, decorated to honor the deceased.",
    content: `
      <h2>Honoring the Final Journey with Mukti Rath</h2>
      <p>The "Mukti Rath" is a specially prepared vehicle for the final journey of a loved one. It is often decorated with flowers and provides a dignified platform for the deceased. We offer these services to help families honor their loved ones as per their customs and traditions during the funeral procession.</p>
      <h3>Features of our Mukti Rath Service:</h3>
      <ul>
        <li>Vehicle can be decorated with flowers.</li>
        <li>Ample space for family members to accompany.</li>
        <li>Service provided with compassion and respect for rituals.</li>
      </ul>
    `,
    link: "/services/mukti-rath",
  },
  {
    slug: "igi-airport-services",
    name: "IGI Airport Services",
    imageURL: "/igi-airport.png",
    description: "Specialized ambulance and mortuary services for patient and deceased transfers to and from Delhi's IGI Airport, handling all clearances.",
    content: `
      <h2>Seamless Medical Transfers at IGI Airport, Delhi</h2>
      <p>We specialize in patient and deceased transfers to and from Indira Gandhi International (IGI) Airport. Our team is experienced in handling all airport protocols, documentation, and cargo clearances for both domestic and international transfers, ensuring a smooth and hassle-free process.</p>
      <h3>Our Airport Services Include:</h3>
      <ul>
        <li>Air ambulance coordination.</li>
        <li>Tarmac access for patient transfers (subject to approval).</li>
        <li>Customs and cargo clearance for deceased transportation.</li>
        <li>Ambulance transfer from airport to hospital, or vice versa.</li>
      </ul>
    `,
    link: "/services/igi-airport-services",
  },
];

// Helper function to find a service by its slug
export const getServiceBySlug = (slug: string): ServiceType | undefined => {
  return Services.find((service) => service.slug === slug);
};