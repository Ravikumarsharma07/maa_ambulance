import { Bihar } from "./States/Bihar";
import { DelhiNCR } from "./States/DelhiNCR";
import { UttarPradesh } from "./States/UttarPradesh";

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
}

export interface City {
  name: string;
  slug: string;
  places: PlaceDetails[];
}

const cities: City[] = [
  // ##########################    Delhi NCR      ############################
  DelhiNCR,
  
  // ################### Uttar Pradesh ###################
  UttarPradesh,

  // ####################     Bihar      ####################
  Bihar,

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
