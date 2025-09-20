interface Service {
  name: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface CoveredCity {
  name: string;
  slug: string;
}

export interface PlaceDetails {
  name: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  pageHeadline?: string;
  subHeadline?: string;
  introParagraph?: string;
  servicesOffered?: Service[];
  whyChooseUs?: string[];
  hospitalsServed?: string[];
  faqs?: FAQ[];
  coveredCities?: CoveredCity[];
  majorRegionalHospitals?: string[];
}

export interface City {
  name: string;
  slug: string;
  places: PlaceDetails[];
}

const cities: City[] = [
  // ##########################    Delhi NCR      ############################
  {
    name: "Delhi NCR",
    slug: "ambulance-service-in-delhi-ncr",
    places: [
      {
        name: "Delhi NCR",
        slug: "ambulance-service-in-delhi-ncr",
        metaTitle:
          "Best ICU Ambulance Service in Delhi NCR | 24/7 Private Number",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Delhi NCR. We cover Delhi, Noida, Gurgaon, Ghaziabad & Faridabad 24/7. Call for immediate dispatch.",
        pageHeadline: "The Leading Private ICU Ambulance Service for Delhi NCR",
        subHeadline:
          "One Emergency Number for the Entire Region: +91-9990228876",
        introParagraph:
          "Jyoti Ambulance is the most trusted private ambulance network serving the entire National Capital Region (NCR). Our coordinated fleet provides the best ICU, ventilator, and emergency transport across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad, ensuring a seamless and rapid response wherever you are.",
        coveredCities: [
          { name: "Delhi", slug: "/ambulance-service-in-delhi" },
          { name: "Noida", slug: "/ambulance-service-in-noida" },
          { name: "Gurgaon", slug: "/ambulance-service-in-gurgaon" },
          { name: "Ghaziabad", slug: "/ambulance-service-in-ghaziabad" },
          { name: "Faridabad", slug: "/ambulance-service-in-faridabad" },
          {
            name: "Greater Noida",
            slug: "/ambulance-service-in-greater-noida",
          },
        ],
        servicesOffered: [
          {
            name: "Regional ICU Transport",
            description:
              "Specialized in seamless, long-distance ICU transfers between cities, like from Gurgaon to a specialty hospital in Delhi.",
          },
          {
            name: "Coordinated Private Fleet",
            description:
              "Our central dispatch ensures the closest available ambulance, regardless of city borders, providing the fastest response in NCR.",
          },
          {
            name: "24/7 NCR Ambulance Number",
            description:
              "One number to connect you with our entire network, making it easy to get help during a stressful emergency.",
          },
        ],
        whyChooseUs: [
          "The Best & Largest Network in Delhi NCR",
          "Seamless Inter-City Patient Transfers",
          "Coordinated Dispatch Across All Cities",
          "Uniform Standard of High-Quality Care",
          "One Reliable Number for the Whole Region",
        ],
        hospitalsServed: [
          "AIIMS, Delhi",
          "Medanta - The Medicity, Gurgaon",
          "Fortis Hospital, Noida",
          "Max Super Speciality Hospital, Vaishali",
          "Asian Institute of Medical Sciences, Faridabad",
        ],
        faqs: [
          {
            question:
              "Which is the best private ambulance service for the entire Delhi NCR?",
            answer:
              "Jyoti Ambulance is considered the best for NCR-wide coverage because of our large, coordinated network, ensuring fast, reliable ICU and private transport across Delhi, Noida, Gurgaon, and beyond.",
          },
          {
            question:
              "What is the single ambulance number for the whole Delhi NCR region?",
            answer:
              "You can call our central emergency number +91-9990228876, which is available from anywhere in Delhi NCR. We will dispatch the closest unit to your location, regardless of the city.",
          },
          {
            question:
              "Do you provide ambulance transfers from Noida to a hospital in Delhi?",
            answer:
              "Yes, we specialize in inter-city transfers. Our ICU ambulances are fully equipped for safe, long-distance patient transport between any two points in the Delhi NCR.",
          },
        ],
      },
      {
        name: "Delhi",
        slug: "ambulance-service-in-delhi",
        metaTitle:
          "ICU Ambulance Service Number Delhi | 24/7 Private | Jyoti Ambulance",
        metaDescription:
          "Get the number for the best private & ICU ambulance service in Delhi. 24/7 availability for emergency transport to AIIMS, Apollo, Max & more. Call now.",
        pageHeadline: "Private ICU Ambulance Service in Delhi",
        subHeadline: "Emergency Ambulance Number: +91-9990228876",
        introParagraph:
          "Jyoti Ambulance provides Delhi's leading private ambulance service, specializing in ICU and Advanced Life Support (ALS) transport. Our fleet is ready 24/7 to respond to emergencies across the capital, ensuring patients receive the highest level of care en route to any major hospital.",
        servicesOffered: [
          {
            name: "ICU Ventilator Ambulance",
            description:
              "Fully equipped with critical care technology for patients requiring intensive monitoring and life support.",
          },
          {
            name: "Private Ambulance Service",
            description:
              "Clean, reliable, and professional transport for planned hospital visits, discharges, and emergencies.",
          },
          {
            name: "24/7 Emergency Response",
            description:
              "Our dispatch is active around the clock. Call our ambulance number for immediate assistance anywhere in Delhi.",
          },
        ],
        whyChooseUs: [
          "Delhi's Best & Most Trusted Fleet",
          "Certified & Experienced Paramedics",
          "Advanced ICU & Ventilator Equipment",
          "Fastest Response Time in City Traffic",
          "Transparent and Competitive Pricing",
        ],
        hospitalsServed: [
          "AIIMS",
          "Safdarjung Hospital",
          "Max Healthcare Saket",
          "Indraprastha Apollo Hospital",
          "Sir Ganga Ram Hospital",
          "BLK-Max Super Speciality Hospital",
        ],
        faqs: [
          {
            question: "Do you provide private ICU ambulance services in Delhi?",
            answer:
              "Yes, we specialize in private ICU ambulance transport across Delhi, complete with ventilators, cardiac monitors, and trained medical staff.",
          },
          {
            question:
              "What is the fastest way to get an ambulance number in Delhi?",
            answer:
              "The fastest way is to call our 24/7 helpline at +91-9990228876. Save it in your contacts for emergencies.",
          },
        ],
      },
      {
        name: "Noida",
        slug: "ambulance-service-in-noida",
        metaTitle:
          "Noida Ambulance Service Number | Best ICU Private | Jyoti Ambulance",
        metaDescription:
          "Find the number for the best private ICU ambulance service in Noida. 24/7 emergency transport to Fortis, Jaypee, Kailash & more. Call now for rapid dispatch.",
        pageHeadline: "Best Private Ambulance Service in Noida",
        subHeadline: "Noida Emergency Ambulance Number: +91-9990228876",
        introParagraph:
          "For residents and professionals in Noida, Jyoti Ambulance offers the best private medical transport solutions. From emergency ICU requirements to scheduled patient transfers, our modern fleet provides reliable service across all sectors of Noida.",
        servicesOffered: [
          {
            name: "ICU Ambulance in Noida",
            description:
              "State-of-the-art ICU ambulances for critical patients, serving all major hospitals like Fortis and Jaypee.",
          },
          {
            name: "24-Hour Private Ambulance",
            description:
              "Available day and night for any medical transport need, ensuring privacy, comfort, and safety.",
          },
          {
            name: "Fastest Ambulance Number",
            description:
              "Our dedicated Noida helpline ensures no time is wasted in dispatching the nearest vehicle to your location.",
          },
        ],
        whyChooseUs: [
          "Best Rated Service in Noida",
          "Advanced Life Support (ALS) Fleet",
          "Experienced Medical Team",
          "Covering All Sectors & Noida Extension",
          "Quick & Hassle-Free Booking",
        ],
        hospitalsServed: [
          "Fortis Hospital Noida",
          "Jaypee Hospital",
          "Kailash Hospital",
          "Max Multi Speciality Centre",
          "Metro Hospitals & Heart Institute",
        ],
        faqs: [
          {
            question:
              "How quickly can your ICU ambulance reach any sector in Noida?",
            answer:
              "Our ambulances are strategically located to reach most sectors in Noida within 15-20 minutes. Call our number for an accurate ETA.",
          },
          {
            question: "Are you the best private ambulance service in Noida?",
            answer:
              "We strive to be the best by offering advanced ICU facilities, professional staff, and the fastest response times, making us a trusted choice for families in Noida.",
          },
        ],
      },
      {
        name: "Ghaziabad",
        slug: "ambulance-service-in-ghaziabad",
        metaTitle:
          "Ghaziabad Ambulance Number | Private ICU Service | Jyoti Ambulance",
        metaDescription:
          "Get the number for the best private ambulance service in Ghaziabad. We offer 24/7 ICU and ventilator-equipped ambulances. Call for immediate help.",
        pageHeadline: "ICU & Private Ambulance Service in Ghaziabad",
        subHeadline: "24/7 Ghaziabad Ambulance Number: +91-9990228876",
        introParagraph:
          "Jyoti Ambulance is the trusted provider of private and ICU ambulance services in Ghaziabad. We cover all major areas from Indirapuram to Raj Nagar Extension, ensuring timely and safe transport to leading hospitals like Yashoda and Max.",
        servicesOffered: [
          {
            name: "ICU Ambulance Service",
            description:
              "Advanced life support ambulances equipped for critical patients, available 24/7 in Ghaziabad.",
          },
          {
            name: "Private Patient Transport",
            description:
              "Reliable and hygienic private ambulances for non-emergency needs.",
          },
        ],
        whyChooseUs: [
          "Ghaziabad's Best Emergency Fleet",
          "Trained Paramedic Staff",
          "Covering Indirapuram, Vaishali & Beyond",
          "Direct Admission to Top Hospitals",
        ],
        hospitalsServed: [
          "Yashoda Super Speciality Hospitals",
          "Max Super Speciality Hospital, Vaishali",
          "Columbia Asia Hospital",
          "Narayana Superspeciality Hospital",
        ],
        faqs: [
          {
            question:
              "I need a private ambulance number in Ghaziabad urgently. Who do I call?",
            answer:
              "Call our 24/7 dedicated Ghaziabad ambulance number +91-9990228876 for immediate dispatch.",
          },
          {
            question:
              "Do you have ICU ambulances for critical patients in Ghaziabad?",
            answer:
              "Yes, our ICU ambulances in Ghaziabad are fully equipped with ventilators and other life-support systems.",
          },
        ],
      },
      {
        name: "Gurgaon",
        slug: "ambulance-service-in-gurgaon",
        metaTitle:
          "Gurgaon ICU Ambulance Service Number | Best Private | Jyoti Ambulance",
        metaDescription:
          "Call the number for Gurgaon's best private ICU ambulance service. 24/7 rapid response to Medanta, Artemis, Fortis. Advanced life support fleet available now.",
        pageHeadline: "Best ICU Ambulance Service in Gurgaon (Gurugram)",
        subHeadline: "Urgent Ambulance Number for Gurgaon: +91-9990228876",
        introParagraph:
          "In the fast-paced environment of Gurgaon, Jyoti Ambulance provides the best, most reliable private ICU ambulance service. We are equipped to handle critical emergencies, with direct coordination for admission to leading hospitals like Medanta and Artemis.",
        servicesOffered: [
          {
            name: "Corporate Ambulance Services",
            description:
              "Contractual and on-call private ambulance services for corporate offices in Gurgaon.",
          },
          {
            name: "Advanced ICU Transport",
            description:
              "Our top-tier ICU ambulances are the best choice for transferring critical patients safely.",
          },
        ],
        whyChooseUs: [
          "Gurgaon's Best Corporate & Private Service",
          "Direct Connectivity to Top Hospitals",
          "Fastest Response on Golf Course Road & Sohna Road",
          "24/7 Availability Guaranteed",
        ],
        hospitalsServed: [
          "Medanta - The Medicity",
          "Artemis Hospital",
          "Fortis Memorial Research Institute",
          "Max Hospital, Gurgaon",
          "Paras Hospitals",
        ],
        faqs: [
          {
            question: "Which is the best private ambulance service in Gurgaon?",
            answer:
              "Jyoti Ambulance is rated among the best for our professionalism, advanced ICU fleet, and rapid response times across Gurgaon.",
          },
          {
            question:
              "What is your ambulance number for an emergency in DLF Cyber City?",
            answer:
              "For any location in Gurgaon, including Cyber City, please call our central number +91-9990228876 for the closest available unit.",
          },
        ],
      },
      {
        name: "Faridabad",
        slug: "ambulance-service-in-faridabad",
        metaTitle:
          "Faridabad Ambulance Number | Private & ICU Service | Jyoti Ambulance",
        metaDescription:
          "Searching for a private or ICU ambulance number in Faridabad? Call us for 24/7 service. We are the best choice for transport to Asian Hospital, Sarvodaya & more.",
        pageHeadline: "Private & ICU Ambulance Number in Faridabad",
        subHeadline: "Call 24/7 for an Ambulance in Faridabad: +91-9990228876",
        introParagraph:
          "Jyoti Ambulance provides Faridabad with a reliable and professional private ambulance service. Our ICU-equipped vehicles are available 24/7 for emergencies in areas like NIT, Ballabgarh, and across the city.",
        servicesOffered: [
          {
            name: "24/7 ICU Ambulance",
            description:
              "Critical care ambulances ready for dispatch anytime in Faridabad.",
          },
          {
            name: "Affordable Private Ambulance",
            description:
              "The best combination of quality care and affordability for non-emergency transport.",
          },
        ],
        whyChooseUs: [
          "Faridabad's Best Medical Transport",
          "24-Hour Service",
          "Experienced Medical Staff",
          "Covering All of Faridabad",
        ],
        hospitalsServed: [
          "Asian Institute of Medical Sciences",
          "Sarvodaya Hospital",
          "Fortis Escorts Hospital, Faridabad",
          "Metro Heart Institute",
        ],
        faqs: [
          {
            question:
              "I need an ambulance number for NIT Faridabad, can you help?",
            answer:
              "Yes, our service covers all of Faridabad including NIT. Please call our central number +91-9990228876.",
          },
          {
            question: "Are your private ambulances the best in Faridabad?",
            answer:
              "Our clients consider us the best due to our punctuality, professional staff, and well-maintained ICU vehicles.",
          },
        ],
      },
      {
        name: "Greater Noida",
        slug: "ambulance-service-in-greater-noida",
        metaTitle: "Greater Noida Ambulance Service Number | ICU & Private",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Greater Noida. 24/7 emergency transport to Sharda, Yatharth & other hospitals. Call now.",
        pageHeadline: "ICU & Private Ambulance Service in Greater Noida",
        subHeadline: "Emergency Number for Greater Noida: +91-9990228876",
        introParagraph:
          "Jyoti Ambulance offers the best private and ICU ambulance service for the residents of Greater Noida. Our teams are familiar with all areas, from Pari Chowk to the Yamuna Expressway, ensuring a swift response.",
        servicesOffered: [
          {
            name: "ICU Ambulance Service",
            description:
              "Advanced life support ambulances for critical patients near Pari Chowk and beyond.",
          },
          {
            name: "Private Patient Transport",
            description:
              "Reliable private ambulances for scheduled hospital visits.",
          },
        ],
        whyChooseUs: [
          "Best Ambulance Service for Greater Noida",
          "Fast Response via Expressway",
          "24/7 Availability",
          "Trained Medical Professionals",
        ],
        hospitalsServed: [
          "Sharda Hospital",
          "Yatharth Super Speciality Hospital",
          "Kailash Hospital, Greater Noida",
          "Fortis Hospital, Greater Noida",
        ],
        faqs: [
          {
            question: "What is the ambulance number for Greater Noida?",
            answer:
              "For any emergency in Greater Noida, call our 24/7 hotline at +91-9990228876.",
          },
          {
            question:
              "Do you provide ICU ambulance services near the Yamuna Expressway?",
            answer:
              "Yes, we provide rapid-response ICU ambulance services for incidents on and near the Yamuna Expressway.",
          },
        ],
      },
      {
        name: "Rohini",
        slug: "ambulance-service-in-rohini",
        metaTitle: "Ambulance Service Number in Rohini | Best Private ICU",
        metaDescription:
          "Call the number for the best private ICU ambulance service in Rohini, Delhi. 24/7 availability for all sectors, serving Jaipur Golden, Saroj Hospital & more.",
        pageHeadline: "Best Ambulance Number for Rohini, Delhi",
        subHeadline: "Call Now for All Sectors in Rohini: +91-9990228876",
        introParagraph:
          "Jyoti Ambulance is the best private ambulance service provider for all sectors of Rohini. We specialize in fast, ICU-equipped transport to major local hospitals.",
        hospitalsServed: [
          "Jaipur Golden Hospital",
          "Saroj Super Speciality Hospital",
          "Dr. Baba Saheb Ambedkar Hospital",
          "Max Hospital, Shalimar Bagh",
        ],
        whyChooseUs: [
          "Best Ambulance Service for Rohini",
          "24/7 Availability",
          "Trained Medical Professionals",
          "Covering All Sectors",
        ],
        faqs: [
          {
            question:
              "I need an ICU ambulance in Rohini Sector 24, can you help?",
            answer:
              "Yes, we serve all sectors of Rohini. Please call our number for immediate dispatch.",
          },
        ],
      },
      {
        name: "Dwarka",
        slug: "ambulance-service-in-dwarka",
        metaTitle: "ICU Ambulance Service in Dwarka | Best Private Number",
        metaDescription:
          "Get the number for the best private & ICU ambulance service in Dwarka, Delhi. We serve all sectors and provide rapid transport to Manipal, Aakash Healthcare.",
        pageHeadline: "Private ICU Ambulance Service in Dwarka",
        subHeadline: "Emergency Ambulance Number for Dwarka: +91-9990228876",
        introParagraph:
          "Jyoti Ambulance is the best choice for private and ICU ambulance services in the Dwarka sub-city. Our local knowledge of all sectors ensures the fastest possible response time.",
        whyChooseUs:[
          "Best Ambulance Service for Dwarka",
          "24/7 Availability",
          "Trained Medical Professionals",
          "Covering All Sectors",
        ],
          hospitalsServed: [
          "Manipal Hospital Dwarka",
          "Aakash Healthcare Super Speciality Hospital",
          "Venkateshwar Hospital",
        ],
        faqs: [
          {
            question: "What is the best ambulance number for Dwarka?",
            answer:
              "For the fastest and most reliable service in Dwarka, save our number: +91-9990228876.",
          },
        ],
      },
      {
        name: "Saket",
        slug: "ambulance-service-in-saket",
        metaTitle: "Ambulance Number Saket | Best Private ICU Service",
        metaDescription:
          "Call the best private ambulance service number for Saket, South Delhi. 24/7 ICU support for transfers to Max Saket and other major hospitals. Quick response.",
        pageHeadline: "Best Ambulance Service Number in Saket",
        subHeadline: "For Max Saket & Area, Call: +91-9990228876",
        introParagraph:
          "Located in the heart of South Delhi, our ambulance service in Saket provides the best critical care transport, specializing in rapid transfers to Max Healthcare Saket.",
        hospitalsServed: [
          "Max Super Speciality Hospital, Saket",
          "Pushpawati Singhania Hospital (PSRI)",
          "Madhukar Rainbow Children's Hospital",
        ],
        faqs: [
          {
            question: "How fast can you provide an ICU ambulance to Saket?",
            answer:
              "We have units stationed in South Delhi, making us the best choice for a quick response in Saket. Call our number now.",
          },
        ],
      },
      {
        name: "Lajpat Nagar",
        slug: "ambulance-service-in-lajpat-nagar",
        metaTitle: "Private Ambulance Service Lajpat Nagar | Best Number",
        metaDescription:
          "Get the number for the best private ambulance service in Lajpat Nagar. We provide 24/7 ICU and emergency transport to Moolchand, Vimhans and nearby hospitals.",
        pageHeadline: "Best Private Ambulance in Lajpat Nagar",
        subHeadline: "Emergency Number for Lajpat Nagar: +91-9990228876",
        introParagraph:
          "Jyoti Ambulance offers the best private ambulance transport in the busy commercial and residential area of Lajpat Nagar, ensuring timely service 24/7.",
        hospitalsServed: [
          "Moolchand Medcity",
          "VIMHANS Nayati Super Speciality Hospital",
          "National Heart Institute",
        ],
        faqs: [
          {
            question:
              "I need a reliable private ambulance number for Lajpat Nagar. Is this you?",
            answer:
              "Yes, we are considered the best private ambulance service in the Lajpat Nagar area for our reliability and professionalism. Call us at +91-9990228876.",
          },
        ],
      },
      {
        name: "Karol Bagh",
        slug: "ambulance-service-in-karol-bagh",
        metaTitle: "ICU Ambulance Service Karol Bagh | Best Number",
        metaDescription:
          "Find the best ICU ambulance service number in Karol Bagh, Delhi. 24/7 private transport to Sir Ganga Ram, BLK-Max, and other hospitals in Central Delhi.",
        pageHeadline: "ICU Ambulance Number in Karol Bagh",
        subHeadline: "Call for Central Delhi Emergencies: +91-9990228876",
        introParagraph:
          "Serving the bustling area of Karol Bagh, Jyoti Ambulance is the best private service for ICU and emergency medical transport in Central Delhi, with expert navigation of congested roads.",
        hospitalsServed: [
          "Sir Ganga Ram Hospital",
          "BLK-Max Super Speciality Hospital",
          "Dr. Ram Manohar Lohia Hospital (RML)",
        ],
        faqs: [
          {
            question:
              "What is the best ambulance number for an emergency in Karol Bagh market?",
            answer:
              "For any emergency in and around Karol Bagh, our central number +91-9990228876 will connect you to the nearest available ICU ambulance.",
          },
        ],
      },
    ],
  },

  // ################### Uttar Pradesh ###################
  {
    name: "Uttar Pradesh",
    slug: "ambulance-service-in-uttar-pradesh",
    places: [
      {
        name: "Uttar Pradesh",
        slug: "ambulance-service-in-uttar-pradesh",
        metaTitle:
          "Best ICU Ambulance Service in Uttar Pradesh (UP) | Private Number",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Uttar Pradesh. We cover Lucknow, Kanpur, Agra, Varanasi & more 24/7. Call for immediate dispatch anywhere in UP.",
        pageHeadline:
          "The Leading Private ICU Ambulance Service for Uttar Pradesh",
        subHeadline: "One Emergency Number for All of UP: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance provides the most reliable private ambulance network across Uttar Pradesh. Our state-wide coordinated fleet offers the best ICU, ventilator, and emergency transport in major cities like Lucknow, Kanpur, Agra, and Varanasi, ensuring a professional and rapid response.",
        coveredCities: [
          { name: "Lucknow", slug: "/ambulance-service-in-lucknow" },
          { name: "Kanpur", slug: "/ambulance-service-in-kanpur" },
          { name: "Agra", slug: "/ambulance-service-in-agra" },
          { name: "Varanasi", slug: "/ambulance-service-in-varanasi" },
          { name: "Prayagraj", slug: "/ambulance-service-in-prayagraj" },
          { name: "Gorakhpur", slug: "/ambulance-service-in-gorakhpur" },
        ],
        servicesOffered: [
          {
            name: "State-Wide ICU Transport",
            description:
              "Specializing in seamless, long-distance ICU transfers between cities, such as from Kanpur to a specialty hospital in Lucknow.",
          },
          {
            name: "Coordinated UP Fleet",
            description:
              "Our central dispatch ensures the closest available ambulance, regardless of district, providing the fastest response across Uttar Pradesh.",
          },
          {
            name: "24/7 UP Ambulance Number",
            description:
              "One number connects you to our entire UP network, making it easy to get help during a stressful emergency.",
          },
        ],
        whyChooseUs: [
          "The Best & Largest Network in Uttar Pradesh",
          "Seamless Inter-City Patient Transfers",
          "Covering All Major Cities & Highways",
          "Uniform Standard of High-Quality Care",
          "One Reliable Number for the Whole State",
        ],
        hospitalsServed: [
          "KGMU, Lucknow",
          "SGPGI, Lucknow",
          "LPS Institute of Cardiology, Kanpur",
          "S.N. Medical College, Agra",
          "Sir Sunderlal Hospital (IMS-BHU), Varanasi",
          "BRD Medical College, Gorakhpur",
        ],
        faqs: [
          {
            question:
              "Which is the best private ambulance service for Uttar Pradesh?",
            answer:
              "Jyoti Ambulance is considered the best for UP-wide coverage due to our large, coordinated network, ensuring fast, reliable ICU and private transport across Lucknow, Kanpur, and beyond.",
          },
          {
            question:
              "What is the single ambulance number for the whole of Uttar Pradesh?",
            answer:
              "You can call our central emergency number +91-9540944424 from anywhere in Uttar Pradesh. We will dispatch the closest unit to your location.",
          },
        ],
      },
      {
        name: "Lucknow",
        slug: "ambulance-service-in-lucknow",
        metaTitle:
          "ICU Ambulance Service Number Lucknow | Best Private | Jyoti Ambulance",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Lucknow. 24/7 emergency transport to KGMU, SGPGI, Lohia & more. Call now for a fast response.",
        pageHeadline: "Best Private ICU Ambulance Service in Lucknow",
        subHeadline: "Emergency Lucknow Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance is Lucknow's best private ambulance service, specializing in critical care ICU transport. We provide rapid, 24/7 response across the city, from Gomti Nagar to Hazratganj, ensuring patients reach top hospitals like KGMU and SGPGI safely.",
        servicesOffered: [
          {
            name: "ICU Ventilator Ambulance",
            description:
              "Fully equipped for critical patients requiring intensive monitoring and transport to Lucknow's premier hospitals.",
          },
          {
            name: "Private Ambulance Service",
            description:
              "Reliable and professional transport for planned hospital visits and discharges across Lucknow.",
          },
        ],
        whyChooseUs: [
          "Lucknow's Best & Most Trusted Fleet",
          "Direct Coordination with KGMU & SGPGI",
          "Advanced ICU & Ventilator Equipment",
          "Fastest Response in City Traffic",
        ],
        hospitalsServed: [
          "King George's Medical University (KGMU)",
          "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGI)",
          "Dr. Ram Manohar Lohia Institute of Medical Sciences",
          "Medanta Hospital, Lucknow",
          "Apollomedics Super Speciality Hospital",
        ],
        faqs: [
          {
            question: "What is the best private ambulance number in Lucknow?",
            answer:
              "For the fastest response and best ICU care, call the Jyoti Ambulance number for Lucknow at +91-9540944424. We are available 24/7.",
          },
          {
            question:
              "Do you have ICU ambulances for transfers to SGPGI Lucknow?",
            answer:
              "Yes, we specialize in private ICU ambulance transfers to SGPGI and KGMU. Our vehicles are equipped with all necessary life support systems.",
          },
        ],
      },
      {
        name: "Kanpur",
        slug: "ambulance-service-in-kanpur",
        metaTitle:
          "Kanpur Ambulance Service Number | Best Private ICU | Jyoti Ambulance",
        metaDescription:
          "Find the number for the best private ICU ambulance service in Kanpur. 24/7 emergency transport to Regency, GSVM, Cardiology & more. Call for immediate help.",
        pageHeadline: "Best Private Ambulance Service in Kanpur",
        subHeadline: "Kanpur Emergency Ambulance Number: +91-9540944424",
        introParagraph:
          "For the industrial hub of Kanpur, Jyoti Ambulance offers the best and most reliable private medical transport. Whether it's an emergency ICU requirement or a patient transfer, our fleet provides professional service across Kanpur.",
        servicesOffered: [
          {
            name: "Cardiac & ICU Ambulance",
            description:
              "Specialized ambulances for critical cardiac patients for transport to LPS Institute of Cardiology and other centers.",
          },
          {
            name: "24-Hour Private Ambulance",
            description:
              "Available day and night for any medical transport need in Kanpur, ensuring comfort and safety.",
          },
        ],
        whyChooseUs: [
          "Best Rated Service in Kanpur",
          "Advanced Life Support (ALS) Fleet",
          "Experienced Medical Team",
          "Covering All of Kanpur City",
        ],
        hospitalsServed: [
          "Regency Hospital",
          "GSVM Medical College",
          "LPS Institute of Cardiology",
          "Mariampur Hospital",
          "Tulsi Hospitals",
        ],
        faqs: [
          {
            question:
              "I need a private ambulance number in Kanpur urgently. Who do I call?",
            answer:
              "Call our 24/7 dedicated Kanpur ambulance number +91-9540944424 for immediate dispatch of the nearest vehicle.",
          },
          {
            question:
              "Are you the best ambulance service for cardiac emergencies in Kanpur?",
            answer:
              "We are considered the best choice for cardiac emergencies due to our specialized ICU ambulances and experience in transporting patients to premier heart institutes like LPS Cardiology.",
          },
        ],
      },
      {
        name: "Agra",
        slug: "ambulance-service-in-agra",
        metaTitle:
          "Agra Ambulance Number | Best Private ICU Service | Jyoti Ambulance",
        metaDescription:
          "Get the number for the best private ambulance service in Agra. We offer 24/7 ICU and ventilator-equipped ambulances for tourists and residents. Call now.",
        pageHeadline: "ICU & Private Ambulance Service in Agra",
        subHeadline: "24/7 Agra Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance is the trusted provider of private and ICU ambulance services in Agra. We provide rapid medical assistance to both residents and tourists, ensuring safe transport to S.N. Medical College and other leading hospitals.",
        servicesOffered: [
          {
            name: "Tourist Medical Assistance",
            description:
              "Specialized emergency response for tourists in need of medical attention near major landmarks.",
          },
          {
            name: "24/7 ICU Ambulance",
            description:
              "Advanced life support ambulances equipped for critical patients, available 24/7 in Agra.",
          },
        ],
        whyChooseUs: [
          "Agra's Best Emergency Fleet",
          "Trained Paramedic Staff",
          "Fast Response for Tourists & Residents",
          "Direct Admission to Top Hospitals",
        ],
        hospitalsServed: [
          "S.N. Medical College",
          "Rainbow Hospital",
          "Pushpanjali Hospital and Research Centre",
          "Synergy Plus Hospital",
        ],
        faqs: [
          {
            question:
              "What is the best ambulance number for a tourist in Agra?",
            answer:
              "For any medical emergency in Agra, tourist or resident, the best number to call for a private, reliable ambulance is +91-9540944424.",
          },
          {
            question: "Do you provide ICU ambulance services in Agra?",
            answer:
              "Yes, our ICU ambulances in Agra are fully equipped with ventilators and other critical life-support systems for all types of emergencies.",
          },
        ],
      },
      {
        name: "Varanasi",
        slug: "ambulance-service-in-varanasi",
        metaTitle:
          "Varanasi Ambulance Number | Best Private ICU | Jyoti Ambulance",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Varanasi (Kashi). 24/7 transport to IMS-BHU, Apex, Heritage & more. Call for immediate help.",
        pageHeadline: "Best Private ICU Ambulance Service in Varanasi",
        subHeadline:
          "Emergency Ambulance Number for Varanasi (Kashi): +91-9540944424",
        introParagraph:
          "Jyoti Ambulance offers the best and most dependable private ambulance service in the holy city of Varanasi. We specialize in navigating the city's unique landscape to provide timely ICU and emergency transport to major hospitals like IMS-BHU.",
        servicesOffered: [
          {
            name: "ICU Ambulance for BHU",
            description:
              "Specialized private ambulance services for efficient patient transfers to and from Sir Sunderlal Hospital, IMS-BHU.",
          },
          {
            name: "24/7 Emergency Service",
            description:
              "Our ambulance number is active 24/7 for any medical emergency in Varanasi.",
          },
        ],
        whyChooseUs: [
          "Best Rated Service in Varanasi",
          "Expert Navigation in City Lanes",
          "Advanced ICU Equipment",
          "Covering All Ghats and City Areas",
        ],
        hospitalsServed: [
          "Sir Sunderlal Hospital (IMS-BHU)",
          "Apex Hospital",
          "Heritage Hospitals",
          "Shubham Hospital",
        ],
        faqs: [
          {
            question:
              "I need the number for the best private ambulance in Varanasi. Is this it?",
            answer:
              "Yes, for the most reliable and best-equipped private ICU ambulance service in Varanasi, call our 24/7 number: +91-9540944424.",
          },
          {
            question: "Can your ambulance reach areas near the ghats quickly?",
            answer:
              "Our local drivers are highly experienced with Varanasi's roads and can navigate to areas near the ghats faster than any other service.",
          },
        ],
      },
      {
        name: "Prayagraj",
        slug: "ambulance-service-in-prayagraj",
        metaTitle: "Prayagraj Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Prayagraj (Allahabad). We offer 24/7 emergency transport. Call for immediate help.",
        pageHeadline: "Best Private Ambulance Number in Prayagraj",
        subHeadline:
          "24/7 Prayagraj (Allahabad) Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance is the best private ambulance service in Prayagraj (Allahabad), providing 24/7 ICU and emergency transport across the city.",
        hospitalsServed: [
          "Swaroop Rani Nehru Hospital",
          "Kamla Nehru Memorial Hospital",
          "Yashlok Hospital",
          "Phoenix Hospital",
        ],
        faqs: [
          {
            question: "What is the best ICU ambulance number in Prayagraj?",
            answer:
              "For the best and fastest ICU ambulance service in Prayagraj, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
      {
        name: "Gorakhpur",
        slug: "ambulance-service-in-gorakhpur",
        metaTitle: "Gorakhpur Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Find the number for the best private ICU ambulance service in Gorakhpur. 24/7 emergency transport to BRD Medical College & more. Call now.",
        pageHeadline: "Best ICU Ambulance Service in Gorakhpur",
        subHeadline: "Gorakhpur Emergency Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance offers the best private and ICU ambulance service in Gorakhpur, ensuring rapid response for medical emergencies and transfers to BRD Medical College.",
        hospitalsServed: [
          "BRD Medical College",
          "Savitri Hospital",
          "Fatima Hospital",
          "Purvanchal Metro City Hospital",
        ],
        faqs: [
          {
            question:
              "I need a reliable private ambulance number in Gorakhpur. Can you help?",
            answer:
              "Yes, we provide the best and most reliable private ambulance service in Gorakhpur. Call our 24/7 number +91-9540944424 for immediate assistance.",
          },
        ],
      },
      {
        name: "Meerut",
        slug: "ambulance-service-in-meerut",
        metaTitle: "Meerut Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Meerut. 24/7 emergency transport to LLRM, Subharti & more. Call for immediate help.",
        pageHeadline: "Best Private Ambulance Number in Meerut",
        subHeadline: "24/7 Meerut Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance is the best private ambulance service in Meerut, providing 24/7 ICU and emergency transport to major medical centers like LLRM and Subharti Hospital.",
        hospitalsServed: [
          "LLRM Medical College",
          "Subharti Hospital",
          "Anand Hospital",
          "Jaswant Rai Speciality Hospital",
        ],
        faqs: [
          {
            question: "What is the best ICU ambulance number in Meerut?",
            answer:
              "For the best and fastest ICU ambulance service in Meerut, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
      {
        name: "Bareilly",
        slug: "ambulance-service-in-bareilly",
        metaTitle: "Bareilly Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Find the number for the best private ICU ambulance service in Bareilly. 24/7 emergency transport to SRMS & more. Call for immediate assistance.",
        pageHeadline: "Best ICU Ambulance Service in Bareilly",
        subHeadline: "Bareilly Emergency Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance offers the best private and ICU ambulance service in Bareilly, ensuring rapid response for emergencies and patient transfers to SRMS and other hospitals.",
        hospitalsServed: [
          "SRMS Institute of Medical Sciences",
          "Clara Swain Mission Hospital",
          "Rohilkhand Medical College & Hospital",
          "Kuber Hospital",
        ],
        faqs: [
          {
            question:
              "I need a reliable private ambulance number in Bareilly. Can you help?",
            answer:
              "Yes, we provide the best and most reliable private ambulance service in Bareilly. Call our 24/7 number +91-9540944424 for immediate now.",
          },
        ],
      },
      {
        name: "Aligarh",
        slug: "ambulance-service-in-aligarh",
        metaTitle: "Aligarh Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Aligarh. 24/7 emergency transport to JN Medical College (AMU) & more. Call now.",
        pageHeadline: "Best Private Ambulance Number in Aligarh",
        subHeadline: "24/7 Aligarh Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance is the best private ambulance service in Aligarh, providing 24/7 ICU and emergency transport, specializing in transfers to Jawaharlal Nehru Medical College.",
        hospitalsServed: [
          "Jawaharlal Nehru Medical College (AMU)",
          "Varun Hospital",
          "Mittal Hospital",
        ],
        faqs: [
          {
            question: "What is the best ICU ambulance number for AMU, Aligarh?",
            answer:
              "For the best and fastest ICU ambulance service for transfers to JN Medical College, AMU, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
    ],
  },

  // ####################     Bihar      ####################
  {
    name: "Bihar",
    slug: "ambulance-service-in-bihar",
    places: [
      {
        name: "Bihar",
        slug: "ambulance-service-in-bihar",
        metaTitle: "Best ICU Ambulance Service in Bihar | 24/7 Private Number",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Bihar. We cover Patna, Gaya, Muzaffarpur, Bhagalpur & more 24/7. Call for immediate dispatch anywhere in Bihar.",
        pageHeadline: "The Leading Private ICU Ambulance Service for Bihar",
        subHeadline: "One Emergency Number for All of Bihar: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance provides the most reliable private ambulance network across Bihar. Our state-wide coordinated fleet offers the best ICU, ventilator, and emergency transport in major cities like Patna, Gaya, and Muzaffarpur, ensuring a professional and rapid response for transfers to major medical centers.",
        coveredCities: [
          { name: "Patna", slug: "/ambulance-service-in-patna" },
          { name: "Gaya", slug: "/ambulance-service-in-gaya" },
          { name: "Muzaffarpur", slug: "/ambulance-service-in-muzaffarpur" },
          { name: "Bhagalpur", slug: "/ambulance-service-in-bhagalpur" },
          { name: "Darbhanga", slug: "/ambulance-service-in-darbhanga" },
          { name: "Purnea", slug: "/ambulance-service-in-purnea" },
        ],
        servicesOffered: [
          {
            name: "State-Wide ICU Transport",
            description:
              "Specializing in seamless, long-distance ICU transfers between districts, such as from Darbhanga to a specialty hospital in Patna.",
          },
          {
            name: "Coordinated Bihar Fleet",
            description:
              "Our central dispatch ensures the closest available ambulance, regardless of district, providing the fastest response across Bihar.",
          },
          {
            name: "24/7 Bihar Ambulance Number",
            description:
              "One number connects you to our entire Bihar network, making it easy to get help during a stressful emergency.",
          },
        ],
        whyChooseUs: [
          "The Best & Largest Network in Bihar",
          "Seamless Inter-City Patient Transfers",
          "Covering All Major Cities & National Highways",
          "Uniform Standard of High-Quality Care",
          "One Reliable Number for the Whole State",
        ],
        hospitalsServed: [
          "AIIMS, Patna",
          "IGIMS, Patna",
          "Patna Medical College and Hospital (PMCH)",
          "Anugrah Narayan Magadh Medical College (ANMCH), Gaya",
          "Sri Krishna Medical College & Hospital (SKMCH), Muzaffarpur",
          "Jawaharlal Nehru Medical College & Hospital (JLNMCH), Bhagalpur",
        ],
        faqs: [
          {
            question: "Which is the best private ambulance service for Bihar?",
            answer:
              "Jyoti Ambulance is considered the best for Bihar-wide coverage due to our large, coordinated network, ensuring fast, reliable ICU and private transport across Patna, Gaya, and beyond.",
          },
          {
            question:
              "What is the single ambulance number for the whole of Bihar?",
            answer:
              "You can call our central emergency number +91-9540944424 from anywhere in Bihar. We will dispatch the closest unit to your location.",
          },
        ],
      },
      {
        name: "Patna",
        slug: "ambulance-service-in-patna",
        metaTitle:
          "ICU Ambulance Service Number Patna | Best Private | Jyoti Ambulance",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Patna. 24/7 emergency transport to AIIMS, IGIMS, Paras & more. Call now for a fast response.",
        pageHeadline: "Best Private ICU Ambulance Service in Patna",
        subHeadline: "Emergency Patna Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance is Patna's best private ambulance service, specializing in critical care ICU transport. We provide rapid, 24/7 response across the capital, from Kankarbagh to Bailey Road, ensuring patients reach top hospitals like AIIMS and IGIMS safely.",
        servicesOffered: [
          {
            name: "ICU Ventilator Ambulance",
            description:
              "Fully equipped for critical patients requiring intensive monitoring and transport to Patna's premier hospitals.",
          },
          {
            name: "Private Ambulance Service",
            description:
              "Reliable and professional transport for planned hospital visits and discharges across Patna.",
          },
        ],
        whyChooseUs: [
          "Patna's Best & Most Trusted Fleet",
          "Direct Coordination with AIIMS & IGIMS",
          "Advanced ICU & Ventilator Equipment",
          "Fastest Response in City Traffic",
        ],
        hospitalsServed: [
          "All India Institute of Medical Sciences (AIIMS), Patna",
          "Indira Gandhi Institute of Medical Sciences (IGIMS)",
          "Patna Medical College and Hospital (PMCH)",
          "Paras HMRI Hospital",
          "Medanta Super Speciality Hospital",
        ],
        faqs: [
          {
            question: "What is the best private ambulance number in Patna?",
            answer:
              "For the fastest response and best ICU care, call the Jyoti Ambulance number for Patna at +91-9540944424. We are available 24/7.",
          },
          {
            question:
              "Do you have ICU ambulances for transfers to AIIMS Patna?",
            answer:
              "Yes, we specialize in private ICU ambulance transfers to AIIMS Patna and IGIMS. Our vehicles are equipped with all necessary life support systems.",
          },
        ],
      },
      {
        name: "Gaya",
        slug: "ambulance-service-in-gaya",
        metaTitle:
          "Gaya Ambulance Number | Best Private ICU Service | Jyoti Ambulance",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Gaya. We offer 24/7 ICU ambulances for tourists and residents. Call for immediate help.",
        pageHeadline: "ICU & Private Ambulance Service in Gaya",
        subHeadline: "24/7 Gaya Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance is the trusted provider of private and ICU ambulance services in the holy city of Gaya. We provide rapid medical assistance to both residents and pilgrims, ensuring safe transport to ANMCH and other leading hospitals.",
        hospitalsServed: [
          "Anugrah Narayan Magadh Medical College & Hospital (ANMCH)",
          "Apollo Hospitals",
          "Gautam Buddha Mahila College Hospital",
        ],
        faqs: [
          {
            question:
              "What is the best ambulance number for a medical emergency in Gaya?",
            answer:
              "For any medical emergency in Gaya, the best number to call for a private, reliable ICU ambulance is +91-9540944424.",
          },
        ],
      },
      {
        name: "Muzaffarpur",
        slug: "ambulance-service-in-muzaffarpur",
        metaTitle: "Muzaffarpur Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Find the number for the best private ICU ambulance service in Muzaffarpur. 24/7 emergency transport to SKMCH & more. Call for immediate help.",
        pageHeadline: "Best Private Ambulance Number in Muzaffarpur",
        subHeadline: "Muzaffarpur Emergency Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance is the leading private ambulance service in Muzaffarpur, providing 24/7 ICU and emergency transport to major medical centers like SKMCH.",
        hospitalsServed: [
          "Sri Krishna Medical College & Hospital (SKMCH)",
          "Prasad Hospital",
          "Ashirwad Hospital",
        ],
        faqs: [
          {
            question: "What is the best ICU ambulance number in Muzaffarpur?",
            answer:
              "For the best and fastest ICU ambulance service in Muzaffarpur, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
      {
        name: "Bhagalpur",
        slug: "ambulance-service-in-bhagalpur",
        metaTitle: "Bhagalpur Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Bhagalpur. 24/7 emergency transport to JLNMCH & more. Call now.",
        pageHeadline: "Best ICU Ambulance Service in Bhagalpur",
        subHeadline: "Bhagalpur Emergency Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance offers the best private and ICU ambulance service in Bhagalpur, ensuring rapid response for medical emergencies and patient transfers to JLNMCH.",
        hospitalsServed: [
          "Jawaharlal Nehru Medical College & Hospital (JLNMCH)",
          "Glocal Hospital",
          "Ayushman Hospital",
        ],
        faqs: [
          {
            question:
              "I need a reliable private ambulance number in Bhagalpur. Can you help?",
            answer:
              "Yes, we provide the best and most reliable private ambulance service in Bhagalpur. Call our 24/7 number +91-9540944424 now.",
          },
        ],
      },
      {
        name: "Darbhanga",
        slug: "ambulance-service-in-darbhanga",
        metaTitle: "Darbhanga Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Find the number for the best private ICU ambulance service in Darbhanga. 24/7 emergency transport to DMCH & more. Call for immediate assistance.",
        pageHeadline: "Best ICU Ambulance Service in Darbhanga",
        subHeadline: "Darbhanga Emergency Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance offers the best private and ICU ambulance service in Darbhanga, ensuring rapid response for emergencies and patient transfers to Darbhanga Medical College and Hospital.",
        hospitalsServed: [
          "Darbhanga Medical College & Hospital (DMCH)",
          "Paras Global Hospital",
          "Heritage Hospital",
        ],
        faqs: [
          {
            question:
              "I need a reliable private ambulance number in Darbhanga. Can you help?",
            answer:
              "Yes, we provide the best and most reliable private ambulance service in Darbhanga. Call our 24/7 number +91-9540944424 now.",
          },
        ],
      },
      {
        name: "Purnea",
        slug: "ambulance-service-in-purnea",
        metaTitle: "Purnea Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Purnea. 24/7 emergency transport to Sadar Hospital & more. Call now.",
        pageHeadline: "Best Private Ambulance Number in Purnea",
        subHeadline: "24/7 Purnea Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance is the best private ambulance service in Purnea, providing 24/7 ICU and emergency transport to major medical centers like Sadar Hospital.",
        hospitalsServed: [
          "Sadar Hospital, Purnea",
          "Maxima Hospital",
          "Millia Hospital",
        ],
        faqs: [
          {
            question: "What is the best ICU ambulance number in Purnea?",
            answer:
              "For the best and fastest ICU ambulance service in Purnea, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
      {
        name: "Samastipur",
        slug: "ambulance-service-in-samastipur",
        metaTitle: "Samastipur Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Samastipur. Call +91-9540944424 for 24/7 emergency transport.",
        pageHeadline: "Best Private Ambulance Number in Samastipur",
        subHeadline: "24/7 Samastipur Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance provides the best and most responsive private ambulance service in Samastipur, with 24/7 ICU and emergency transport to Sadar Hospital and other medical facilities.",
        hospitalsServed: [
          "Sadar Hospital, Samastipur",
          "Railway Divisional Hospital",
          "Prabhuji Hospital",
        ],
        faqs: [
          {
            question: "What is the best ICU ambulance number in Samastipur?",
            answer:
              "For the fastest ICU ambulance service in Samastipur, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
      {
        name: "Katihar",
        slug: "ambulance-service-in-katihar",
        metaTitle: "Katihar Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Katihar. Call +91-9540944424 for 24/7 emergency transport to Katihar Medical College.",
        pageHeadline: "Best Private Ambulance Number in Katihar",
        subHeadline: "24/7 Katihar Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance provides the best private ambulance service in Katihar, specializing in rapid patient transfers to Katihar Medical College and Hospital.",
        hospitalsServed: [
          "Katihar Medical College and Hospital",
          "Sadar Hospital, Katihar",
          "Lions Eye Hospital",
        ],
        faqs: [
          {
            question: "What is the best ICU ambulance number in Katihar?",
            answer:
              "For the fastest ICU ambulance service in Katihar, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
      {
        name: "Hajipur",
        slug: "ambulance-service-in-hajipur",
        metaTitle: "Hajipur Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Need an ambulance in Hajipur? Call +91-9540944424 for the best private ICU ambulance service. We also provide fast transfers to hospitals in Patna.",
        pageHeadline: "Best Private Ambulance Number in Hajipur",
        subHeadline: "24/7 Hajipur Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance provides the best private ambulance service in Hajipur, offering 24/7 ICU transport and specializing in fast, safe patient transfers to major hospitals in nearby Patna.",
        hospitalsServed: [
          "Sadar Hospital, Hajipur",
          "Vaishali Institute of Medical Sciences",
          "Sanjivani Nursing Home",
        ],
        faqs: [
          {
            question: "Can you transfer a patient from Hajipur to Patna?",
            answer:
              "Yes, we specialize in safe inter-city ICU transfers from Hajipur to any hospital in Patna. Call us at +91-9540944424.",
          },
        ],
      },
      {
        name: "Kishanganj",
        slug: "ambulance-service-in-kishanganj",
        metaTitle: "Kishanganj Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Kishanganj. Call +91-9540944424 for 24/7 emergency transport to MGM Medical College.",
        pageHeadline: "Best Private Ambulance Number in Kishanganj",
        subHeadline: "24/7 Kishanganj Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance is the leading private ambulance service in Kishanganj, providing 24/7 ICU and emergency transport to MGM Medical College and other facilities.",
        hospitalsServed: [
          "MGM Medical College & Hospital, Kishanganj",
          "Sadar Hospital, Kishanganj",
          "Insan Hospital",
        ],
        faqs: [
          {
            question: "What is the best ICU ambulance number in Kishanganj?",
            answer:
              "For the fastest and best ICU ambulance service in Kishanganj, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
      {
        name: "Vaishali",
        slug: "ambulance-service-in-vaishali",
        metaTitle: "Vaishali Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Call +91-9540944424 for the best private ICU ambulance service in Vaishali. We provide 24/7 emergency transport and transfers to Patna.",
        pageHeadline: "Best Private Ambulance Number in Vaishali",
        subHeadline: "24/7 Vaishali Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance provides the best private ambulance service in Vaishali, offering 24/7 ICU transport for local needs and for critical patient transfers to specialized hospitals in Patna.",
        hospitalsServed: [
          "Sadar Hospital, Vaishali",
          "Lord Buddha Koshi Medical College and Hospital",
          "Mahavir Vaatsalya Aspatal, Patna (for transfers)",
        ],
        faqs: [
          {
            question:
              "I need to transfer a patient from Vaishali to IGIMS Patna. Can you help?",
            answer:
              "Absolutely. We provide safe and fully-equipped ICU ambulance transfers from Vaishali to any hospital in Patna. Call us at +91-9540944424.",
          },
        ],
      },
      {
        name: "Motihari",
        slug: "ambulance-service-in-motihari",
        metaTitle: "Motihari Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Motihari (East Champaran). Call +91-9540944424 for 24/7 emergency transport.",
        pageHeadline: "Best Private Ambulance Number in Motihari",
        subHeadline: "24/7 Motihari Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance provides the best private ambulance service in Motihari, with 24/7 ICU and emergency transport to Sadar Hospital and other medical centers in East Champaran.",
        hospitalsServed: [
          "Sadar Hospital, Motihari",
          "Rahmaniya Medical Centre",
          "Mangalam Hospital",
        ],
        faqs: [
          {
            question: "What is the best ICU ambulance number in Motihari?",
            answer:
              "For the fastest ICU ambulance service in Motihari, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
      {
        name: "Madhubani",
        slug: "ambulance-service-in-madhubani",
        metaTitle: "Madhubani Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Madhubani. Call +91-9540944424 for 24/7 transport to Madhubani Medical College.",
        pageHeadline: "Best Private Ambulance Number in Madhubani",
        subHeadline: "24/7 Madhubani Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance is the top private ambulance service in Madhubani, providing 24/7 ICU and emergency transport to Madhubani Medical College and Hospital.",
        hospitalsServed: [
          "Madhubani Medical College and Hospital",
          "Sadar Hospital, Madhubani",
          "Prathama Blood Bank & Hospital",
        ],
        faqs: [
          {
            question: "What is the best ICU ambulance number in Madhubani?",
            answer:
              "For the best and fastest ICU ambulance service in Madhubani, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
      {
        name: "Sitamarhi",
        slug: "ambulance-service-in-sitamarhi",
        metaTitle: "Sitamarhi Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Call +91-9540944424 for the best private ICU ambulance service in Sitamarhi. We provide 24/7 emergency transport.",
        pageHeadline: "Best Private Ambulance Number in Sitamarhi",
        subHeadline: "24/7 Sitamarhi Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance provides the best private ambulance service in Sitamarhi, offering 24/7 ICU and emergency transport to Sadar Hospital and local clinics.",
        hospitalsServed: [
          "Sadar Hospital, Sitamarhi",
          "N. S. Memorial Hospital",
          "Gupta Nursing Home",
        ],
        faqs: [
          {
            question: "What is the best ambulance number in Sitamarhi?",
            answer:
              "For the fastest and most reliable ambulance service in Sitamarhi, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
      {
        name: "Chhapra",
        slug: "ambulance-service-in-chhapra",
        metaTitle: "Chhapra Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Chhapra (Saran). Call +91-9540944424 for 24/7 emergency transport.",
        pageHeadline: "Best Private Ambulance Number in Chhapra",
        subHeadline: "24/7 Chhapra (Saran) Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance is the premier private ambulance service in Chhapra, providing 24/7 ICU and emergency transport to Sadar Hospital, Saran.",
        hospitalsServed: [
          "Sadar Hospital, Chhapra",
          "Prabhu Nath Hospital",
          "Saran Medical",
        ],
        faqs: [
          {
            question: "What is the best ICU ambulance number in Chhapra?",
            answer:
              "For the best and fastest ICU ambulance service in Chhapra, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
      {
        name: "Siwan",
        slug: "ambulance-service-in-siwan",
        metaTitle: "Siwan Ambulance Number | Best Private ICU Service",
        metaDescription:
          "Get the number for the best private ICU ambulance service in Siwan. Call +91-9540944424 for 24/7 emergency transport.",
        pageHeadline: "Best Private Ambulance Number in Siwan",
        subHeadline: "24/7 Siwan Ambulance Number: +91-9540944424",
        introParagraph:
          "Jyoti Ambulance provides the best private ambulance service in Siwan, with 24/7 ICU and emergency transport to Siwan Medical College and Sadar Hospital.",
        hospitalsServed: [
          "Siwan Medical College & Hospital",
          "Sadar Hospital, Siwan",
          "BPL Hospital",
        ],
        faqs: [
          {
            question: "What is the best ICU ambulance number in Siwan?",
            answer:
              "For the fastest ICU ambulance service in Siwan, call our 24/7 number at +91-9540944424.",
          },
        ],
      },
    ],
  },

  // #####################      Jharkhand      #####################
  {
    name: "Jharkhand",
    slug: "ambulance-service-in-jharkhand",
    places: [
      {
        name: "Jharkhand",
        slug: "ambulance-service-in-jharkhand",
      },
      {
        name: "Ranchi",
        slug: "ambulance-service-in-ranchi",
      },
      {
        name: "Jamshedpur",
        slug: "ambulance-service-in-jamshedpur",
      },
      {
        name: "Dhanbad",
        slug: "ambulance-service-in-dhanbad",
      },
      {
        name: "Hazaribagh",
        slug: "ambulance-service-in-hazaribagh",
      },
    ],
  },
  {
    name: "Punjab",
    slug: "ambulance-service-in-punjab",
    places: [
      {
        name: "Punjab",
        slug: "ambulance-service-in-punjab",
      },
      {
        name: "Chandigarh",
        slug: "ambulance-service-in-chandigarh",
      },
      {
        name: "Mohali",
        slug: "ambulance-service-in-mohali",
      },
      {
        name: "Zirakpur",
        slug: "ambulance-service-in-zirakpur",
      },
      {
        name: "Panchkula",
        slug: "ambulance-service-in-panchkula",
      },
      {
        name: "Ludhiana",
        slug: "ambulance-service-in-ludhiana",
      },
      {
        name: "Jalandhar",
        slug: "ambulance-service-in-jalandhar",
      },
      {
        name: "Gurdaspur",
        slug: "ambulance-service-in-gurdaspur",
      },
      {
        name: "Pathankot",
        slug: "ambulance-service-in-pathankot",
      },
      {
        name: "Patiala",
        slug: "ambulance-service-in-patiala",
      },
      {
        name: "Bathinda",
        slug: "ambulance-service-in-bathinda",
      },
      {
        name: "Amritsar",
        slug: "ambulance-service-in-amritsar",
      },
      {
        name: "Hoshiarpur",
        slug: "ambulance-service-in-hoshiarpur",
      },
    ],
  },
  {
    name: "Uttarakhand",
    slug: "ambulance-service-in-uttarakhand",
    places: [
      {
        name: "Uttarakhand",
        slug: "ambulance-service-in-uttarakhand",
      },
      {
        name: "Dehradun",
        slug: "ambulance-service-in-dehradun",
      },
      {
        name: "Haridwar",
        slug: "ambulance-service-in-haridwar",
      },
      {
        name: "Rishikesh",
        slug: "ambulance-service-in-rishikesh",
      },
      {
        name: "Roorkee",
        slug: "ambulance-service-in-roorkee",
      },
      {
        name: "Haldwani",
        slug: "ambulance-service-in-haldwani",
      },
      {
        name: "Nainital",
        slug: "ambulance-service-in-nainital",
      },
    ],
  },
  {
    name: "Himachal Pradesh",
    slug: "ambulance-service-in-himachal-pradesh",
    places: [
      {
        name: "Himachal Pradesh",
        slug: "ambulance-service-in-himachal-pradesh",
      },
      {
        name: "Shimla",
        slug: "ambulance-service-in-shimla",
      },
      {
        name: "Manali",
        slug: "ambulance-service-in-manali",
      },
      {
        name: "Dharamshala",
        slug: "ambulance-service-in-dharamshala",
      },
      {
        name: "Solan",
        slug: "ambulance-service-in-solan",
      },
      {
        name: "Mandi",
        slug: "ambulance-service-in-mandi",
      },
    ],
  },
  {
    name: "Jammu Kashmir",
    slug: "ambulance-service-in-jammu-kashmir",
    places: [
      {
        name: "Jammu Kashmir",
        slug: "ambulance-service-in-jammu-kashmir",
      },
      {
        name: "Jammu",
        slug: "ambulance-service-in-jammu",
      },
      {
        name: "Srinagar",
        slug: "ambulance-service-in-srinagar",
      },
      {
        name: "Anantnag",
        slug: "ambulance-service-in-anantnag",
      },
    ],
  },
];

export default cities;
